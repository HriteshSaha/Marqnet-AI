var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { SystemRoleKey } from '../generated/prisma/enums.js';
import { RolesService } from '../roles/roles.service.js';
import { slugify } from '../common/slug.util.js';
let OrganizationsService = class OrganizationsService {
    prisma;
    roles;
    constructor(prisma, roles) {
        this.prisma = prisma;
        this.roles = roles;
    }
    async create(dto, ownerUserId) {
        const baseSlug = slugify(dto.slug ?? dto.name);
        if (!baseSlug) {
            throw new ConflictException('Could not derive a valid slug from the provided name');
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
    async listForUser(userId) {
        return this.prisma.organization.findMany({
            where: { memberships: { some: { userId } }, archivedAt: null },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getForUser(organizationId, userId) {
        const membership = await this.prisma.membership.findUnique({
            where: { userId_organizationId: { userId, organizationId } },
        });
        if (!membership) {
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
    async recordSelectedWorkspace(organizationId, userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { lastSelectedOrganizationId: organizationId },
        });
    }
    async ensureUniqueSlug(baseSlug) {
        let candidate = baseSlug;
        let suffix = 1;
        while (await this.prisma.organization.findUnique({ where: { slug: candidate } })) {
            suffix += 1;
            candidate = `${baseSlug}-${suffix}`;
            if (suffix > 50) {
                throw new ForbiddenException('Unable to allocate a unique slug, please provide one explicitly');
            }
        }
        return candidate;
    }
};
OrganizationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        RolesService])
], OrganizationsService);
export { OrganizationsService };
//# sourceMappingURL=organizations.service.js.map