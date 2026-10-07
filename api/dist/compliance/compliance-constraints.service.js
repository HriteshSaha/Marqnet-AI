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
import { ApprovalsService } from '../approvals/approvals.service.js';
import { ApprovalRequestStatus, RiskLevel, } from '../generated/prisma/enums.js';
const RISK_RANK = {
    [RiskLevel.LOW]: 0,
    [RiskLevel.MEDIUM]: 1,
    [RiskLevel.HIGH]: 2,
    [RiskLevel.CRITICAL]: 3,
};
const RETIREMENT_ACTION_TYPE = 'compliance_constraint.retire';
let ComplianceConstraintsService = class ComplianceConstraintsService {
    prisma;
    approvals;
    constructor(prisma, approvals) {
        this.prisma = prisma;
        this.approvals = approvals;
    }
    async listActiveForClient(clientId) {
        return this.prisma.complianceConstraint.findMany({
            where: { clientId, isCurrent: true, isActive: true },
            orderBy: { category: 'asc' },
        });
    }
    async getHistory(clientId, category) {
        return this.prisma.complianceConstraint.findMany({
            where: { clientId, category },
            orderBy: { version: 'desc' },
        });
    }
    async create(organizationId, clientId, dto, actorUserId) {
        const disableAutoExecution = dto.riskLevel === RiskLevel.HIGH || dto.riskLevel === RiskLevel.CRITICAL
            ? true
            : (dto.disableAutoExecution ?? false);
        const existing = await this.prisma.complianceConstraint.findFirst({
            where: { clientId, category: dto.category, isCurrent: true },
        });
        if (existing && RISK_RANK[dto.riskLevel] < RISK_RANK[existing.riskLevel]) {
            throw new ForbiddenException('Loosening an existing compliance constraint requires retiring it via the approval workflow first');
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
    async requestRetirement(organizationId, clientId, constraintId, dto, actorUserId) {
        const constraint = await this.getActiveOwned(clientId, constraintId);
        if (constraint.pendingRetirementRequestId) {
            const pending = await this.prisma.approvalRequest.findUnique({
                where: { id: constraint.pendingRetirementRequestId },
            });
            if (pending && pending.status === ApprovalRequestStatus.PENDING) {
                throw new ConflictException('A retirement request is already pending for this constraint');
            }
        }
        const request = await this.approvals.createRequest(organizationId, {
            riskLevel: constraint.riskLevel,
            actionType: RETIREMENT_ACTION_TYPE,
            summary: `Retire ${constraint.category} compliance constraint: ${constraint.description}`,
            payload: { constraintId, clientId, comment: dto.comment ?? null },
        }, actorUserId);
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
    async applyRetirement(organizationId, clientId, constraintId, dto, actorUserId) {
        await this.getActiveOwned(clientId, constraintId);
        const request = await this.approvals.getForOrganization(organizationId, dto.approvalRequestId);
        const payload = request.payload;
        if (request.actionType !== RETIREMENT_ACTION_TYPE ||
            payload?.constraintId !== constraintId) {
            throw new BadRequestException('This approval request was not opened for this constraint');
        }
        if (request.status !== ApprovalRequestStatus.APPROVED) {
            throw new ConflictException('This approval request has not been approved');
        }
        if (request.consumedAt) {
            throw new ConflictException('This approval has already been used to apply its effect');
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
    async getActiveOwned(clientId, constraintId) {
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
};
ComplianceConstraintsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ApprovalsService])
], ComplianceConstraintsService);
export { ComplianceConstraintsService };
//# sourceMappingURL=compliance-constraints.service.js.map