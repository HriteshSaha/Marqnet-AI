var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { ApprovalDecisionValue, ApprovalRequestStatus, RiskLevel, SystemRoleKey, } from '../generated/prisma/enums.js';
const ALL_RISK_LEVELS = Object.values(RiskLevel);
const REQUEST_INCLUDE = {
    decisions: { orderBy: { createdAt: 'asc' } },
};
let ApprovalsService = class ApprovalsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPolicy(organizationId) {
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
        const ownerId = systemRoles.find((r) => r.systemKey === SystemRoleKey.OWNER)?.id;
        const adminId = systemRoles.find((r) => r.systemKey === SystemRoleKey.ADMIN)?.id;
        const ownerAndAdmin = [ownerId, adminId].filter((id) => Boolean(id));
        const ownerOnly = [ownerId].filter((id) => Boolean(id));
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
    async setPolicy(organizationId, dto, actorUserId) {
        const levelsGiven = new Set(dto.thresholds.map((t) => t.riskLevel));
        if (levelsGiven.size !== ALL_RISK_LEVELS.length ||
            !ALL_RISK_LEVELS.every((l) => levelsGiven.has(l))) {
            throw new BadRequestException(`thresholds must cover each risk level exactly once: ${ALL_RISK_LEVELS.join(', ')}`);
        }
        const allRoleIds = [...new Set(dto.thresholds.flatMap((t) => t.roleIds))];
        if (allRoleIds.length > 0) {
            const validCount = await this.prisma.role.count({
                where: { organizationId, id: { in: allRoleIds } },
            });
            if (validCount !== allRoleIds.length) {
                throw new BadRequestException('One or more roles do not belong to this organization');
            }
        }
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
    async createRequest(organizationId, dto, requestedByUserId) {
        return this.prisma.$transaction(async (tx) => {
            const request = await tx.approvalRequest.create({
                data: {
                    organizationId,
                    riskLevel: dto.riskLevel,
                    actionType: dto.actionType,
                    summary: dto.summary,
                    payload: dto.payload,
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
    async listForOrganization(organizationId, status) {
        return this.prisma.approvalRequest.findMany({
            where: { organizationId, ...(status ? { status } : {}) },
            include: REQUEST_INCLUDE,
            orderBy: { createdAt: 'desc' },
        });
    }
    async getForOrganization(organizationId, requestId) {
        const request = await this.prisma.approvalRequest.findFirst({
            where: { id: requestId, organizationId },
            include: REQUEST_INCLUDE,
        });
        if (!request) {
            throw new NotFoundException('Approval request not found');
        }
        return request;
    }
    async decide(organizationId, requestId, dto, actorUserId, actorRoleId) {
        const request = await this.getForOrganization(organizationId, requestId);
        if (request.status !== ApprovalRequestStatus.PENDING) {
            throw new ConflictException('This request has already been decided');
        }
        const policy = await this.getPolicy(organizationId);
        const threshold = policy.thresholds.find((t) => t.riskLevel === request.riskLevel);
        if (!threshold || !threshold.roleIds.includes(actorRoleId)) {
            throw new ForbiddenException('Your role is not authorized to decide on this risk level');
        }
        if (!policy.allowSelfApproval &&
            actorUserId === request.requestedByUserId) {
            throw new ForbiddenException('You cannot approve a request you created yourself');
        }
        const alreadyDecided = request.decisions.some((d) => d.actorUserId === actorUserId);
        if (alreadyDecided) {
            throw new ConflictException('You have already recorded a decision on this request');
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
            let newStatus = request.status;
            if (dto.decision === ApprovalDecisionValue.REJECTED) {
                newStatus = ApprovalRequestStatus.REJECTED;
            }
            else {
                const approvalCount = request.decisions.filter((d) => d.decision === ApprovalDecisionValue.APPROVED).length + 1;
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
};
ApprovalsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ApprovalsService);
export { ApprovalsService };
//# sourceMappingURL=approvals.service.js.map