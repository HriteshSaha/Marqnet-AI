import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { ClientAccessScope } from '../generated/prisma/enums.js';
import type { SetClientAccessDto } from './dto/set-client-access.dto.js';

/** `null` means unrestricted (every client in the org); otherwise the exact allowed client ids. */
export type AccessibleClientIds = string[] | null;

@Injectable()
export class ClientAccessService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * What a given Membership is allowed to see. Call this once per request
   * (e.g. from a controller holding the caller's own Membership) and pass
   * the result into any Client-reading/writing service — this is the single
   * choke point every such feature (listing, exports, background jobs) must
   * go through to honor EP-03-US-02.
   */
  async getAccessibleClientIds(
    membershipId: string,
  ): Promise<AccessibleClientIds> {
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

  async getAccess(organizationId: string, targetUserId: string) {
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

  /** Replaces a member's client-access grant wholesale; always audited. */
  async setAccess(
    organizationId: string,
    targetUserId: string,
    dto: SetClientAccessDto,
    actorUserId: string,
  ) {
    const membership = await this.prisma.membership.findUnique({
      where: {
        userId_organizationId: { userId: targetUserId, organizationId },
      },
    });
    if (!membership) {
      throw new NotFoundException('Member not found');
    }

    const clientIds =
      dto.scope === ClientAccessScope.RESTRICTED ? (dto.clientIds ?? []) : [];
    if (clientIds.length > 0) {
      const validCount = await this.prisma.client.count({
        where: { organizationId, id: { in: clientIds } },
      });
      if (validCount !== new Set(clientIds).size) {
        throw new BadRequestException(
          'One or more clients do not belong to this organization',
        );
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
}
