import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { SystemRoleKey } from '../generated/prisma/enums.js';
import { RolesService } from '../roles/roles.service.js';
import type { CreateOrganizationDto } from './dto/create-organization.dto.js';
import { slugify } from '../common/slug.util.js';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly roles: RolesService,
  ) {}

  async create(dto: CreateOrganizationDto, ownerUserId: string) {
    const baseSlug = slugify(dto.slug ?? dto.name);
    if (!baseSlug) {
      throw new ConflictException(
        'Could not derive a valid slug from the provided name',
      );
    }

    const slug = await this.ensureUniqueSlug(baseSlug);

    const organization = await this.prisma.$transaction(async (tx) => {
      const org = await tx.organization.create({
        data: {
          name: dto.name,
          slug,
          type: dto.type,
          locale: dto.locale ?? 'en-US',
          currency: dto.currency ?? 'USD',
          timezone: dto.timezone ?? 'UTC',
        },
      });

      const systemRoles = await this.roles.seedSystemRoles(tx, org.id);

      await tx.membership.create({
        data: {
          userId: ownerUserId,
          organizationId: org.id,
          roleId: systemRoles[SystemRoleKey.OWNER].id,
        },
      });

      await tx.auditLog.create({
        data: {
          organizationId: org.id,
          actorUserId: ownerUserId,
          action: AuditAction.ORGANIZATION_CREATED,
          targetType: 'Organization',
          targetId: org.id,
          metadata: { name: org.name, slug: org.slug, type: org.type },
        },
      });

      return org;
    });

    return organization;
  }

  /** Organizations the given user is a member of (tenant isolation boundary). */
  async listForUser(userId: string) {
    return this.prisma.organization.findMany({
      where: { memberships: { some: { userId } }, archivedAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getForUser(organizationId: string, userId: string) {
    const membership = await this.prisma.membership.findUnique({
      where: { userId_organizationId: { userId, organizationId } },
    });
    if (!membership) {
      // Same response for "does not exist" and "not authorized" to avoid leaking existence
      // of other tenants' organizations.
      throw new NotFoundException('Organization not found');
    }

    const organization = await this.prisma.organization.findUnique({
      where: { id: organizationId },
    });
    if (!organization) {
      throw new NotFoundException('Organization not found');
    }

    return organization;
  }

  /**
   * Persists the user's active workspace (EP-01-US-03). The caller must have
   * already verified membership (e.g. via OrganizationMembershipGuard) —
   * this method does not re-check authorization, it only records the choice.
   */
  async recordSelectedWorkspace(
    organizationId: string,
    userId: string,
  ): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { lastSelectedOrganizationId: organizationId },
    });
  }

  private async ensureUniqueSlug(baseSlug: string): Promise<string> {
    let candidate = baseSlug;
    let suffix = 1;
    // Small bounded loop; organization creation is low-volume and admin-driven.
    while (
      await this.prisma.organization.findUnique({ where: { slug: candidate } })
    ) {
      suffix += 1;
      candidate = `${baseSlug}-${suffix}`;
      if (suffix > 50) {
        throw new ForbiddenException(
          'Unable to allocate a unique slug, please provide one explicitly',
        );
      }
    }
    return candidate;
  }
}
