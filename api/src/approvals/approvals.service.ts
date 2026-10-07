import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import {
  ApprovalDecisionValue,
  ApprovalRequestStatus,
  RiskLevel,
  SystemRoleKey,
} from '../generated/prisma/enums.js';
import type { Prisma } from '../generated/prisma/client.js';
import type { SetApprovalPolicyDto } from './dto/set-approval-policy.dto.js';
import type { CreateApprovalRequestDto } from './dto/create-approval-request.dto.js';
import type { DecideApprovalDto } from './dto/decide-approval.dto.js';

const ALL_RISK_LEVELS = Object.values(RiskLevel);

const REQUEST_INCLUDE = {
  decisions: { orderBy: { createdAt: 'asc' as const } },
};

@Injectable()
export class ApprovalsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Returns the org's approval policy, creating a sensible default the first
   * time it's needed: Owner can decide anything; Admin can decide LOW/MEDIUM;
   * only Owner can decide HIGH; CRITICAL requires two distinct Owners.
   */
  async getPolicy(organizationId: string) {
    const existing = await this.prisma.approvalPolicy.findUnique({
      where: { organizationId },
      include: { thresholds: true },
    });
    if (existing) {
      return existing;
    }

    const systemRoles = await this.prisma.role.findMany({
      where: {
        organizationId,
        systemKey: { in: [SystemRoleKey.OWNER, SystemRoleKey.ADMIN] },
      },
      select: { id: true, systemKey: true },
    });
    const ownerId = systemRoles.find(
      (r) => r.systemKey === SystemRoleKey.OWNER,
    )?.id;
    const adminId = systemRoles.find(
      (r) => r.systemKey === SystemRoleKey.ADMIN,
    )?.id;
    const ownerAndAdmin = [ownerId, adminId].filter((id): id is string =>
      Boolean(id),
    );
    const ownerOnly = [ownerId].filter((id): id is string => Boolean(id));

    return this.prisma.approvalPolicy.create({
      data: {
        organizationId,
        allowSelfApproval: true,
        thresholds: {
          create: [
            {
              riskLevel: RiskLevel.LOW,
              dualApprovalRequired: false,
              roleIds: ownerAndAdmin,
            },
            {
              riskLevel: RiskLevel.MEDIUM,
              dualApprovalRequired: false,
              roleIds: ownerAndAdmin,
            },
            {
              riskLevel: RiskLevel.HIGH,
              dualApprovalRequired: false,
              roleIds: ownerOnly,
            },
            {
              riskLevel: RiskLevel.CRITICAL,
              dualApprovalRequired: true,
              roleIds: ownerOnly,
            },
          ],
        },
      },
      include: { thresholds: true },
    });
  }

  /** Replaces the full policy (all 4 risk-level thresholds) in one call. Always audited. */
  async setPolicy(
    organizationId: string,
    dto: SetApprovalPolicyDto,
    actorUserId: string,
  ) {
    const levelsGiven = new Set(dto.thresholds.map((t) => t.riskLevel));
    if (
      levelsGiven.size !== ALL_RISK_LEVELS.length ||
      !ALL_RISK_LEVELS.every((l) => levelsGiven.has(l))
    ) {
      throw new BadRequestException(
        `thresholds must cover each risk level exactly once: ${ALL_RISK_LEVELS.join(', ')}`,
      );
    }

    const allRoleIds = [...new Set(dto.thresholds.flatMap((t) => t.roleIds))];
    if (allRoleIds.length > 0) {
      const validCount = await this.prisma.role.count({
        where: { organizationId, id: { in: allRoleIds } },
      });
      if (validCount !== allRoleIds.length) {
        throw new BadRequestException(
          'One or more roles do not belong to this organization',
        );
      }
    }

    // Ensure a policy row exists to attach thresholds to (lazy-create if first edit).
    await this.getPolicy(organizationId);

    const policy = await this.prisma.$transaction(async (tx) => {
      await tx.approvalPolicy.update({
        where: { organizationId },
        data: { allowSelfApproval: dto.allowSelfApproval },
      });
      await tx.approvalThreshold.deleteMany({
        where: { policy: { organizationId } },
      });
      const current = await tx.approvalPolicy.findUniqueOrThrow({
        where: { organizationId },
      });
      await tx.approvalThreshold.createMany({
        data: dto.thresholds.map((t) => ({
          policyId: current.id,
          riskLevel: t.riskLevel,
          dualApprovalRequired: t.dualApprovalRequired,
          roleIds: t.roleIds,
        })),
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.APPROVAL_POLICY_UPDATED,
          targetType: 'ApprovalPolicy',
          targetId: current.id,
          metadata: {
            allowSelfApproval: dto.allowSelfApproval,
            thresholds: dto.thresholds.map((t) => ({
              riskLevel: t.riskLevel,
              dualApprovalRequired: t.dualApprovalRequired,
              roleIds: t.roleIds,
            })),
          },
        },
      });

      return tx.approvalPolicy.findUniqueOrThrow({
        where: { organizationId },
        include: { thresholds: true },
      });
    });

    return policy;
  }

  async createRequest(
    organizationId: string,
    dto: CreateApprovalRequestDto,
    requestedByUserId: string,
  ) {
    return this.prisma.$transaction(async (tx) => {
      const request = await tx.approvalRequest.create({
        data: {
          organizationId,
          riskLevel: dto.riskLevel,
          actionType: dto.actionType,
          summary: dto.summary,
          payload: dto.payload as Prisma.InputJsonValue | undefined,
          requestedByUserId,
        },
        include: REQUEST_INCLUDE,
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId: requestedByUserId,
          action: AuditAction.APPROVAL_REQUESTED,
          targetType: 'ApprovalRequest',
          targetId: request.id,
          metadata: { riskLevel: dto.riskLevel, actionType: dto.actionType },
        },
      });

      return request;
    });
  }

  async listForOrganization(
    organizationId: string,
    status?: ApprovalRequestStatus,
  ) {
    return this.prisma.approvalRequest.findMany({
      where: { organizationId, ...(status ? { status } : {}) },
      include: REQUEST_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getForOrganization(organizationId: string, requestId: string) {
    const request = await this.prisma.approvalRequest.findFirst({
      where: { id: requestId, organizationId },
      include: REQUEST_INCLUDE,
    });
    if (!request) {
      throw new NotFoundException('Approval request not found');
    }
    return request;
  }

  /**
   * Records one approver's decision. Enforces, in order: the request is
   * still pending; the actor's role is within the risk level's configured
   * authority ("cannot approve beyond configured authority"); self-approval
   * policy; and that this actor hasn't already decided on this request.
   * A single rejection immediately closes the request; approval requires
   * as many distinct qualifying approvals as the threshold's dual-approval
   * setting demands.
   */
  async decide(
    organizationId: string,
    requestId: string,
    dto: DecideApprovalDto,
    actorUserId: string,
    actorRoleId: string,
  ) {
    const request = await this.getForOrganization(organizationId, requestId);
    if (request.status !== ApprovalRequestStatus.PENDING) {
      throw new ConflictException('This request has already been decided');
    }

    const policy = await this.getPolicy(organizationId);
    const threshold = policy.thresholds.find(
      (t) => t.riskLevel === request.riskLevel,
    );
    if (!threshold || !threshold.roleIds.includes(actorRoleId)) {
      throw new ForbiddenException(
        'Your role is not authorized to decide on this risk level',
      );
    }

    if (
      !policy.allowSelfApproval &&
      actorUserId === request.requestedByUserId
    ) {
      throw new ForbiddenException(
        'You cannot approve a request you created yourself',
      );
    }

    const alreadyDecided = request.decisions.some(
      (d) => d.actorUserId === actorUserId,
    );
    if (alreadyDecided) {
      throw new ConflictException(
        'You have already recorded a decision on this request',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.approvalDecision.create({
        data: {
          requestId,
          actorUserId,
          decision: dto.decision,
          comment: dto.comment,
        },
      });

      let newStatus: ApprovalRequestStatus = request.status;
      if (dto.decision === ApprovalDecisionValue.REJECTED) {
        newStatus = ApprovalRequestStatus.REJECTED;
      } else {
        const approvalCount =
          request.decisions.filter(
            (d) => d.decision === ApprovalDecisionValue.APPROVED,
          ).length + 1;
        const required = threshold.dualApprovalRequired ? 2 : 1;
        if (approvalCount >= required) {
          newStatus = ApprovalRequestStatus.APPROVED;
        }
      }

      const updated = await tx.approvalRequest.update({
        where: { id: requestId },
        data: { status: newStatus },
        include: REQUEST_INCLUDE,
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.APPROVAL_DECISION_RECORDED,
          targetType: 'ApprovalRequest',
          targetId: requestId,
          metadata: {
            decision: dto.decision,
            comment: dto.comment ?? null,
            resultingStatus: newStatus,
          },
        },
      });

      return updated;
    });
  }
}
