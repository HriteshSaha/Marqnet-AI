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
import { WILDCARD_MODULE } from '../common/permission-modules.js';
import { PermissionAction, SystemRoleKey } from '../generated/prisma/enums.js';
const ROLE_INCLUDE = { permissions: true };
let RolesService = class RolesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async seedSystemRoles(tx, organizationId) {
        const owner = await tx.role.create({
            data: {
                organizationId,
                name: 'Owner',
                isSystem: true,
                systemKey: SystemRoleKey.OWNER,
                permissions: {
                    create: [
                        { module: WILDCARD_MODULE, action: PermissionAction.MANAGE },
                    ],
                },
            },
        });
        const admin = await tx.role.create({
            data: {
                organizationId,
                name: 'Admin',
                isSystem: true,
                systemKey: SystemRoleKey.ADMIN,
                permissions: {
                    create: [
                        { module: 'organizations', action: PermissionAction.READ },
                        { module: 'clients', action: PermissionAction.MANAGE },
                        { module: 'roles', action: PermissionAction.MANAGE },
                        { module: 'members', action: PermissionAction.MANAGE },
                        { module: 'approvals', action: PermissionAction.MANAGE },
                    ],
                },
            },
        });
        const member = await tx.role.create({
            data: {
                organizationId,
                name: 'Member',
                isSystem: true,
                systemKey: SystemRoleKey.MEMBER,
                permissions: {
                    create: [
                        { module: 'organizations', action: PermissionAction.READ },
                        { module: 'clients', action: PermissionAction.READ },
                        { module: 'roles', action: PermissionAction.READ },
                        { module: 'members', action: PermissionAction.READ },
                        { module: 'approvals', action: PermissionAction.CREATE },
                        { module: 'approvals', action: PermissionAction.READ },
                    ],
                },
            },
        });
        return {
            [SystemRoleKey.OWNER]: owner,
            [SystemRoleKey.ADMIN]: admin,
            [SystemRoleKey.MEMBER]: member,
        };
    }
    async hasPermission(roleId, module, action) {
        const grant = await this.prisma.rolePermission.findFirst({
            where: {
                roleId,
                module: { in: [module, WILDCARD_MODULE] },
                action: { in: [action, PermissionAction.MANAGE] },
            },
            select: { id: true },
        });
        return grant !== null;
    }
    async listForOrganization(organizationId) {
        return this.prisma.role.findMany({
            where: { organizationId },
            include: ROLE_INCLUDE,
            orderBy: [{ isSystem: 'desc' }, { createdAt: 'asc' }],
        });
    }
    async getForOrganization(organizationId, roleId) {
        const role = await this.prisma.role.findFirst({
            where: { id: roleId, organizationId },
            include: ROLE_INCLUDE,
        });
        if (!role) {
            throw new NotFoundException('Role not found');
        }
        return role;
    }
    async create(organizationId, dto, actorUserId) {
        const existing = await this.prisma.role.findUnique({
            where: { organizationId_name: { organizationId, name: dto.name } },
        });
        if (existing) {
            throw new ConflictException('A role with this name already exists in this organization');
        }
        const role = await this.prisma.$transaction(async (tx) => {
            const created = await tx.role.create({
                data: {
                    organizationId,
                    name: dto.name,
                    permissions: {
                        create: dto.permissions.map((p) => ({
                            module: p.module,
                            action: p.action,
                        })),
                    },
                },
                include: ROLE_INCLUDE,
            });
            await tx.auditLog.create({
                data: {
                    organizationId,
                    actorUserId,
                    action: AuditAction.ROLE_CREATED,
                    targetType: 'Role',
                    targetId: created.id,
                    metadata: {
                        name: created.name,
                        permissions: toPlainGrants(dto.permissions),
                    },
                },
            });
            return created;
        });
        return role;
    }
    async update(organizationId, roleId, dto, actorUserId) {
        const role = await this.getForOrganization(organizationId, roleId);
        if (role.isSystem) {
            throw new BadRequestException('System roles cannot be edited');
        }
        if (dto.name && dto.name !== role.name) {
            const nameTaken = await this.prisma.role.findUnique({
                where: { organizationId_name: { organizationId, name: dto.name } },
            });
            if (nameTaken) {
                throw new ConflictException('A role with this name already exists in this organization');
            }
        }
        const updated = await this.prisma.$transaction(async (tx) => {
            if (dto.permissions) {
                await tx.rolePermission.deleteMany({ where: { roleId } });
            }
            const result = await tx.role.update({
                where: { id: roleId },
                data: {
                    ...(dto.name ? { name: dto.name } : {}),
                    ...(dto.permissions
                        ? {
                            permissions: {
                                create: dto.permissions.map((p) => ({
                                    module: p.module,
                                    action: p.action,
                                })),
                            },
                        }
                        : {}),
                },
                include: ROLE_INCLUDE,
            });
            await tx.auditLog.create({
                data: {
                    organizationId,
                    actorUserId,
                    action: AuditAction.ROLE_UPDATED,
                    targetType: 'Role',
                    targetId: roleId,
                    metadata: {
                        name: dto.name,
                        permissions: dto.permissions
                            ? toPlainGrants(dto.permissions)
                            : undefined,
                    },
                },
            });
            return result;
        });
        return updated;
    }
    async delete(organizationId, roleId, actorUserId) {
        const role = await this.getForOrganization(organizationId, roleId);
        if (role.isSystem) {
            throw new BadRequestException('System roles cannot be deleted');
        }
        const assignedCount = await this.prisma.membership.count({
            where: { roleId },
        });
        if (assignedCount > 0) {
            throw new ConflictException('Role is still assigned to one or more members; reassign them first');
        }
        await this.prisma.$transaction([
            this.prisma.role.delete({ where: { id: roleId } }),
            this.prisma.auditLog.create({
                data: {
                    organizationId,
                    actorUserId,
                    action: AuditAction.ROLE_DELETED,
                    targetType: 'Role',
                    targetId: roleId,
                    metadata: { name: role.name },
                },
            }),
        ]);
    }
};
RolesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], RolesService);
export { RolesService };
function toPlainGrants(grants) {
    return grants.map((g) => ({ module: g.module, action: g.action }));
}
//# sourceMappingURL=roles.service.js.map