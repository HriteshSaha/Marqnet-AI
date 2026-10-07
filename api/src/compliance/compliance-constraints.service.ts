import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { ApprovalsService } from '../approvals/approvals.service.js';
import {
  ApprovalRequestStatus,
  ComplianceCategory,
  RiskLevel,
} from '../generated/prisma/enums.js';
import type { ComplianceConstraint } from '../generated/prisma/client.js';
import type { CreateComplianceConstraintDto } from './dto/create-compliance-constraint.dto.js';
import type { RequestRetirementDto } from './dto/request-retirement.dto.js';
import type { ApplyRetirementDto } from './dto/apply-retirement.dto.js';

const RISK_RANK: Record<RiskLevel, number> = {
  [RiskLevel.LOW]: 0,
  [RiskLevel.MEDIUM]: 1,
  [RiskLevel.HIGH]: 2,
  [RiskLevel.CRITICAL]: 3,
};

const RETIREMENT_ACTION_TYPE = 'compliance_constraint.retire';

@Injectable()
export class ComplianceConstraintsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly approvals: ApprovalsService,
  ) {}

  /**
   * Hook point for the (future) AI policy layer: every currently-active
   * restriction for this client, across all categories.
   */
  async listActiveForClient(clientId: string): Promise<ComplianceConstraint[]> {
    return this.prisma.complianceConstraint.findMany({
      where: { clientId, isCurrent: true, isActive: true },
      orderBy: { category: 'asc' },
    });
  }

  async getHistory(
    clientId: string,
    category: ComplianceCategory,
  ): Promise<ComplianceConstraint[]> {
    return this.prisma.complianceConstraint.findMany({
      where: { clientId, category },
      orderBy: { version: 'desc' },
    });
  }

  /**
   * Creates a constraint, or tightens an existing one for the same category.
   * Loosening (lower risk level than the current version) is refused — that
   * must go through requestRetirement/applyRetirement instead, so a
   * restriction can never be quietly weakened without an approval trail.
   */
  async create(
    organizationId: string,
    clientId: string,
    dto: CreateComplianceConstraintDto,
    actorUserId: string,
  ): Promise<ComplianceConstraint> {
    const disableAutoExecution =
      dto.riskLevel === RiskLevel.HIGH || dto.riskLevel === RiskLevel.CRITICAL
        ? true
        : (dto.disableAutoExecution ?? false);

    const existing = await this.prisma.complianceConstraint.findFirst({
      where: { clientId, category: dto.category, isCurrent: true },
    });

    if (existing && RISK_RANK[dto.riskLevel] < RISK_RANK[existing.riskLevel]) {
      throw new ForbiddenException(
        'Loosening an existing compliance constraint requires retiring it via the approval workflow first',
      );
    }

    const created = await this.prisma.$transaction(async (tx) => {
      if (existing) {
        await tx.complianceConstraint.update({
          where: { id: existing.id },
          data: { isCurrent: false, supersededAt: new Date() },
        });
      }

      const row = await tx.complianceConstraint.create({
        data: {
          clientId,
          category: dto.category,
          description: dto.description,
          riskLevel: dto.riskLevel,
          disableAutoExecution,
          version: (existing?.version ?? 0) + 1,
          createdByUserId: actorUserId,
        },
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.COMPLIANCE_CONSTRAINT_CREATED,
          targetType: 'ComplianceConstraint',
          targetId: row.id,
          metadata: {
            clientId,
            category: dto.category,
            riskLevel: dto.riskLevel,
            disableAutoExecution,
            version: row.version,
          },
        },
      });

      return row;
    });

    return created;
  }

  /** Opens an approval request to retire (deactivate) an active constraint. */
  async requestRetirement(
    organizationId: string,
    clientId: string,
    constraintId: string,
    dto: RequestRetirementDto,
    actorUserId: string,
  ) {
    const constraint = await this.getActiveOwned(clientId, constraintId);

    if (constraint.pendingRetirementRequestId) {
      const pending = await this.prisma.approvalRequest.findUnique({
        where: { id: constraint.pendingRetirementRequestId },
      });
      if (pending && pending.status === ApprovalRequestStatus.PENDING) {
        throw new ConflictException(
          'A retirement request is already pending for this constraint',
        );
      }
    }

    const request = await this.approvals.createRequest(
      organizationId,
      {
        riskLevel: constraint.riskLevel,
        actionType: RETIREMENT_ACTION_TYPE,
        summary: `Retire ${constraint.category} compliance constraint: ${constraint.description}`,
        payload: { constraintId, clientId, comment: dto.comment ?? null },
      },
      actorUserId,
    );

    await this.prisma.complianceConstraint.update({
      where: { id: constraintId },
      data: { pendingRetirementRequestId: request.id },
    });

    await this.prisma.auditLog.create({
      data: {
        organizationId,
        actorUserId,
        action: AuditAction.COMPLIANCE_RETIREMENT_REQUESTED,
        targetType: 'ComplianceConstraint',
        targetId: constraintId,
        metadata: { approvalRequestId: request.id },
      },
    });

    return request;
  }

  /**
   * Applies the retirement once (and only once) the referenced approval
   * request has been APPROVED. Verifies the request was actually opened for
   * this exact constraint and hasn't already been used.
   */
  async applyRetirement(
    organizationId: string,
    clientId: string,
    constraintId: string,
    dto: ApplyRetirementDto,
    actorUserId: string,
  ): Promise<ComplianceConstraint> {
    await this.getActiveOwned(clientId, constraintId);

    const request = await this.approvals.getForOrganization(
      organizationId,
      dto.approvalRequestId,
    );
    const payload = request.payload as { constraintId?: string } | null;
    if (
      request.actionType !== RETIREMENT_ACTION_TYPE ||
      payload?.constraintId !== constraintId
    ) {
      throw new BadRequestException(
        'This approval request was not opened for this constraint',
      );
    }
    if (request.status !== ApprovalRequestStatus.APPROVED) {
      throw new ConflictException(
        'This approval request has not been approved',
      );
    }
    if (request.consumedAt) {
      throw new ConflictException(
        'This approval has already been used to apply its effect',
      );
    }

    const updated = await this.prisma.$transaction(async (tx) => {
      const row = await tx.complianceConstraint.update({
        where: { id: constraintId },
        data: {
          isActive: false,
          isCurrent: false,
          supersededAt: new Date(),
          pendingRetirementRequestId: null,
        },
      });

      await tx.approvalRequest.update({
        where: { id: dto.approvalRequestId },
        data: { consumedAt: new Date() },
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.COMPLIANCE_CONSTRAINT_RETIRED,
          targetType: 'ComplianceConstraint',
          targetId: constraintId,
          metadata: { approvalRequestId: dto.approvalRequestId },
        },
      });

      return row;
    });

    return updated;
  }

  private async getActiveOwned(
    clientId: string,
    constraintId: string,
  ): Promise<ComplianceConstraint> {
    const constraint = await this.prisma.complianceConstraint.findFirst({
      where: { id: constraintId, clientId },
    });
    if (!constraint) {
      throw new NotFoundException('Compliance constraint not found');
    }
    if (!constraint.isCurrent || !constraint.isActive) {
      throw new ConflictException('This constraint is not currently active');
    }
    return constraint;
  }
}
