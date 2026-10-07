var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
let KpiGuardrailsService = class KpiGuardrailsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listCurrentForClient(clientId) {
        return this.prisma.kpiGuardrail.findMany({
            where: { clientId, isCurrent: true },
            orderBy: { metric: 'asc' },
        });
    }
    async getActiveGuardrail(clientId, metric) {
        return this.prisma.kpiGuardrail.findFirst({
            where: { clientId, metric, isCurrent: true },
        });
    }
    async getHistory(clientId, metric) {
        return this.prisma.kpiGuardrail.findMany({
            where: { clientId, metric },
            orderBy: { version: 'desc' },
        });
    }
    async setGuardrail(organizationId, clientId, metric, dto, actorUserId) {
        if (dto.acceptableMin > dto.acceptableMax) {
            throw new BadRequestException('acceptableMin must be less than or equal to acceptableMax');
        }
        const organization = await this.prisma.organization.findUnique({
            where: { id: organizationId },
            select: { currency: true },
        });
        if (!organization) {
            throw new NotFoundException('Organization not found');
        }
        const currency = dto.currency ?? organization.currency;
        const warnings = [];
        if (dto.targetValue < dto.acceptableMin ||
            dto.targetValue > dto.acceptableMax) {
            warnings.push(`Target value ${dto.targetValue} is outside the acceptable range [${dto.acceptableMin}, ${dto.acceptableMax}]`);
        }
        const guardrail = await this.prisma.$transaction(async (tx) => {
            const previous = await tx.kpiGuardrail.findFirst({
                where: { clientId, metric, isCurrent: true },
            });
            if (previous) {
                await tx.kpiGuardrail.update({
                    where: { id: previous.id },
                    data: { isCurrent: false, supersededAt: new Date() },
                });
            }
            const created = await tx.kpiGuardrail.create({
                data: {
                    clientId,
                    metric,
                    targetValue: dto.targetValue,
                    acceptableMin: dto.acceptableMin,
                    acceptableMax: dto.acceptableMax,
                    currency,
                    version: (previous?.version ?? 0) + 1,
                    isCurrent: true,
                    createdByUserId: actorUserId,
                },
            });
            await tx.auditLog.create({
                data: {
                    organizationId,
                    actorUserId,
                    action: AuditAction.KPI_GUARDRAIL_SET,
                    targetType: 'KpiGuardrail',
                    targetId: created.id,
                    metadata: {
                        clientId,
                        metric,
                        targetValue: dto.targetValue,
                        acceptableMin: dto.acceptableMin,
                        acceptableMax: dto.acceptableMax,
                        currency,
                        version: created.version,
                        warnings,
                    },
                },
            });
            return created;
        });
        return { guardrail, warnings };
    }
};
KpiGuardrailsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], KpiGuardrailsService);
export { KpiGuardrailsService };
//# sourceMappingURL=kpi-guardrails.service.js.map