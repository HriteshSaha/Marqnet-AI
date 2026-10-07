var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { SystemRoleKey } from '../generated/prisma/enums.js';
const MEMBER_INCLUDE = {
    user: { select: { id: true, email: true, fullName: true } },
    role: { select: { id: true, name: true, isSystem: true, systemKey: true } },
};
let MembersService = class MembersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listForOrganization(organizationId) {
        return this.prisma.membership.findMany({
            where: { organizationId },
            include: MEMBER_INCLUDE,
            orderBy: { createdAt: 'asc' },
        });
    }
    async updateRole(organizationId, targetUserId, roleId, actorUserId) {
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_organizationId: { userId: targetUserId, organizationId },
            },
            include: MEMBER_INCLUDE,
        });
        if (!membership) {
            throw new NotFoundException('Member not found');
        }
        const newRole = await this.prisma.role.findFirst({
            where: { id: roleId, organizationId },
        });
        if (!newRole) {
            throw new BadRequestException('Role does not belong to this organization');
        }
        if (membership.role.systemKey === SystemRoleKey.OWNER &&
            newRole.systemKey !== SystemRoleKey.OWNER) {
            const otherOwners = await this.prisma.membership.count({
                where: {
                    organizationId,
                    role: { systemKey: SystemRoleKey.OWNER },
                    userId: { not: targetUserId },
                },
            });
            if (otherOwners === 0) {
                throw new ConflictException('Cannot change the role of the last remaining Owner');
            }
        }
        const updated = await this.prisma.$transaction(async (tx) => {
            const result = await tx.membership.update({
                where: {
                    userId_organizationId: { userId: targetUserId, organizationId },
                },
                data: { roleId },
                include: MEMBER_INCLUDE,
            });
            await tx.auditLog.create({
                data: {
                    organizationId,
                    actorUserId,
                    action: AuditAction.MEMBER_ROLE_CHANGED,
                    targetType: 'Membership',
                    targetId: membership.id,
                    metadata: {
                        targetUserId,
                        fromRole: membership.role.name,
                        toRole: newRole.name,
                    },
                },
            });
            return result;
        });
        return updated;
    }
};
MembersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], MembersService);
export { MembersService };
//# sourceMappingURL=members.service.js.map