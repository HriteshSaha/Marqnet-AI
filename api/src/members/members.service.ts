import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { SystemRoleKey } from '../generated/prisma/enums.js';

const MEMBER_INCLUDE = {
  user: { select: { id: true, email: true, fullName: true } },
  role: { select: { id: true, name: true, isSystem: true, systemKey: true } },
} as const;

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  async listForOrganization(organizationId: string) {
    return this.prisma.membership.findMany({
      where: { organizationId },
      include: MEMBER_INCLUDE,
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * Reassigns a member's role within the organization. Refuses to demote the
   * last remaining Owner, since that would permanently lock the organization
   * out of Owner-level authority (e.g. further role/member management).
   */
  async updateRole(
    organizationId: string,
    targetUserId: string,
    roleId: string,
    actorUserId: string,
  ) {
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
      throw new BadRequestException(
        'Role does not belong to this organization',
      );
    }

    if (
      membership.role.systemKey === SystemRoleKey.OWNER &&
      newRole.systemKey !== SystemRoleKey.OWNER
    ) {
      const otherOwners = await this.prisma.membership.count({
        where: {
          organizationId,
          role: { systemKey: SystemRoleKey.OWNER },
          userId: { not: targetUserId },
        },
      });
      if (otherOwners === 0) {
        throw new ConflictException(
          'Cannot change the role of the last remaining Owner',
        );
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
}
