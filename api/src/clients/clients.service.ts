import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { slugify } from '../common/slug.util.js';
import { ClientStatus } from '../generated/prisma/enums.js';
import type { AccessibleClientIds } from '../members/client-access.service.js';
import type { CreateClientDto } from './dto/create-client.dto.js';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    organizationId: string,
    dto: CreateClientDto,
    actorUserId: string,
  ) {
    const baseSlug = slugify(dto.slug ?? dto.name);
    if (!baseSlug) {
      throw new ConflictException(
        'Could not derive a valid slug from the provided name',
      );
    }

    const slug = await this.ensureUniqueSlug(organizationId, baseSlug);

    return this.prisma.$transaction(async (tx) => {
      const client = await tx.client.create({
        data: { organizationId, name: dto.name, slug },
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.CLIENT_CREATED,
          targetType: 'Client',
          targetId: client.id,
          metadata: { name: client.name, slug: client.slug },
        },
      });

      return client;
    });
  }

  /**
   * `accessibleClientIds` is the caller's EP-03-US-02 scope: null = every
   * client in the org, otherwise only these ids. Every read/write below
   * takes it so a RESTRICTED member can never see or touch a client outside
   * their grant — including via a direct deep link to its id.
   */
  async listForOrganization(
    organizationId: string,
    includeArchived: boolean,
    accessibleClientIds: AccessibleClientIds,
  ) {
    if (accessibleClientIds !== null && accessibleClientIds.length === 0) {
      return [];
    }
    return this.prisma.client.findMany({
      where: {
        organizationId,
        ...(includeArchived ? {} : { status: ClientStatus.ACTIVE }),
        ...(accessibleClientIds !== null
          ? { id: { in: accessibleClientIds } }
          : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getForOrganization(
    organizationId: string,
    clientId: string,
    accessibleClientIds: AccessibleClientIds,
  ) {
    const client = await this.prisma.client.findFirst({
      where: { id: clientId, organizationId },
    });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    // Same 404 as "doesn't exist" — a restricted deep link must not confirm the client is real.
    if (
      accessibleClientIds !== null &&
      !accessibleClientIds.includes(clientId)
    ) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  async archive(
    organizationId: string,
    clientId: string,
    actorUserId: string,
    accessibleClientIds: AccessibleClientIds,
  ) {
    const client = await this.getForOrganization(
      organizationId,
      clientId,
      accessibleClientIds,
    );
    if (client.status === ClientStatus.ARCHIVED) {
      throw new ConflictException('Client is already archived');
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.client.update({
        where: { id: clientId },
        data: { status: ClientStatus.ARCHIVED, archivedAt: new Date() },
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.CLIENT_ARCHIVED,
          targetType: 'Client',
          targetId: clientId,
        },
      });

      return updated;
    });
  }

  async restore(
    organizationId: string,
    clientId: string,
    actorUserId: string,
    accessibleClientIds: AccessibleClientIds,
  ) {
    const client = await this.getForOrganization(
      organizationId,
      clientId,
      accessibleClientIds,
    );
    if (client.status === ClientStatus.ACTIVE) {
      throw new ConflictException('Client is already active');
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.client.update({
        where: { id: clientId },
        data: { status: ClientStatus.ACTIVE, archivedAt: null },
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.CLIENT_RESTORED,
          targetType: 'Client',
          targetId: clientId,
        },
      });

      return updated;
    });
  }

  private async ensureUniqueSlug(
    organizationId: string,
    baseSlug: string,
  ): Promise<string> {
    let candidate = baseSlug;
    let suffix = 1;
    while (
      await this.prisma.client.findUnique({
        where: { organizationId_slug: { organizationId, slug: candidate } },
      })
    ) {
      suffix += 1;
      candidate = `${baseSlug}-${suffix}`;
      if (suffix > 50) {
        throw new ConflictException(
          'Unable to allocate a unique slug, please provide one explicitly',
        );
      }
    }
    return candidate;
  }
}
