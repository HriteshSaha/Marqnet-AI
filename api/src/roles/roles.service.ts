import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { WILDCARD_MODULE } from '../common/permission-modules.js';
import { PermissionAction, SystemRoleKey } from '../generated/prisma/enums.js';
import type { Prisma } from '../generated/prisma/client.js';
import type { CreateRoleDto } from './dto/create-role.dto.js';
import type { UpdateRoleDto } from './dto/update-role.dto.js';

const ROLE_INCLUDE = { permissions: true } as const;

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Seeds the 3 protected system roles for a brand-new Organization, inside
   * the caller's transaction. Returns them keyed by SystemRoleKey so the
   * caller (OrganizationsService) can assign the creator the Owner role.
   */
  async seedSystemRoles(
    tx: Prisma.TransactionClient,
    organizationId: string,
  ): Promise<Record<SystemRoleKey, { id: string }>> {
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

  /** Checks whether a role grants `action` on `module`, honoring the `*`/MANAGE wildcards. */
  async hasPermission(
    roleId: string,
    module: string,
    action: PermissionAction,
  ): Promise<boolean> {
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

  async listForOrganization(organizationId: string) {
    return this.prisma.role.findMany({
      where: { organizationId },
      include: ROLE_INCLUDE,
      orderBy: [{ isSystem: 'desc' }, { createdAt: 'asc' }],
    });
  }

  async getForOrganization(organizationId: string, roleId: string) {
    const role = await this.prisma.role.findFirst({
      where: { id: roleId, organizationId },
      include: ROLE_INCLUDE,
    });
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }

  async create(
    organizationId: string,
    dto: CreateRoleDto,
    actorUserId: string,
  ) {
    const existing = await this.prisma.role.findUnique({
      where: { organizationId_name: { organizationId, name: dto.name } },
    });
    if (existing) {
      throw new ConflictException(
        'A role with this name already exists in this organization',
      );
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

  /** System roles (Owner/Admin/Member) cannot be renamed or have their permissions edited via the API. */
  async update(
    organizationId: string,
    roleId: string,
    dto: UpdateRoleDto,
    actorUserId: string,
  ) {
    const role = await this.getForOrganization(organizationId, roleId);
    if (role.isSystem) {
      throw new BadRequestException('System roles cannot be edited');
    }

    if (dto.name && dto.name !== role.name) {
      const nameTaken = await this.prisma.role.findUnique({
        where: { organizationId_name: { organizationId, name: dto.name } },
      });
      if (nameTaken) {
        throw new ConflictException(
          'A role with this name already exists in this organization',
        );
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

  /** System roles cannot be deleted; a role still assigned to members cannot be deleted either. */
  async delete(
    organizationId: string,
    roleId: string,
    actorUserId: string,
  ): Promise<void> {
    const role = await this.getForOrganization(organizationId, roleId);
    if (role.isSystem) {
      throw new BadRequestException('System roles cannot be deleted');
    }

    const assignedCount = await this.prisma.membership.count({
      where: { roleId },
    });
    if (assignedCount > 0) {
      throw new ConflictException(
        'Role is still assigned to one or more members; reassign them first',
      );
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
}

/** Strips class-validator DTO instances down to plain objects for JSON audit metadata. */
function toPlainGrants(
  grants: Array<{ module: string; action: PermissionAction }>,
) {
  return grants.map((g) => ({ module: g.module, action: g.action }));
}
