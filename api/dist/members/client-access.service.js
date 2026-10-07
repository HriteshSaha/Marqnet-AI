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
import { ClientAccessScope } from '../generated/prisma/enums.js';
let ClientAccessService = class ClientAccessService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAccessibleClientIds(membershipId) {
        const membership = await this.prisma.membership.findUnique({
            where: { id: membershipId },
            select: { clientAccessScope: true },
        });
        if (!membership || membership.clientAccessScope === ClientAccessScope.ALL) {
            return null;
        }
        const rows = await this.prisma.membershipClientAccess.findMany({
            where: { membershipId },
            select: { clientId: true },
        });
        return rows.map((r) => r.clientId);
    }
    async getAccess(organizationId, targetUserId) {
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_organizationId: { userId: targetUserId, organizationId },
            },
            include: { clientAccess: { select: { clientId: true } } },
        });
        if (!membership) {
            throw new NotFoundException('Member not found');
        }
        return {
            scope: membership.clientAccessScope,
            clientIds: membership.clientAccess.map((a) => a.clientId),
        };
    }
    async setAccess(organizationId, targetUserId, dto, actorUserId) {
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_organizationId: { userId: targetUserId, organizationId },
            },
        });
        if (!membership) {
            throw new NotFoundException('Member not found');
        }
        const clientIds = dto.scope === ClientAccessScope.RESTRICTED ? (dto.clientIds ?? []) : [];
        if (clientIds.length > 0) {
            const validCount = await this.prisma.client.count({
                where: { organizationId, id: { in: clientIds } },
            });
            if (validCount !== new Set(clientIds).size) {
                throw new BadRequestException('One or more clients do not belong to this organization');
            }
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.membership.update({
                where: { id: membership.id },
                data: { clientAccessScope: dto.scope },
            });
            await tx.membershipClientAccess.deleteMany({
                where: { membershipId: membership.id },
            });
            if (clientIds.length > 0) {
                await tx.membershipClientAccess.createMany({
                    data: clientIds.map((clientId) => ({
                        membershipId: membership.id,
                        clientId,
                    })),
                });
            }
            await tx.auditLog.create({
                data: {
                    organizationId,
                    actorUserId,
                    action: AuditAction.CLIENT_ACCESS_UPDATED,
                    targetType: 'Membership',
                    targetId: membership.id,
                    metadata: { targetUserId, scope: dto.scope, clientIds },
                },
            });
        });
        return this.getAccess(organizationId, targetUserId);
    }
};
ClientAccessService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ClientAccessService);
export { ClientAccessService };
//# sourceMappingURL=client-access.service.js.map