var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { slugify } from '../common/slug.util.js';
import { ClientStatus } from '../generated/prisma/enums.js';
let ClientsService = class ClientsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(organizationId, dto, actorUserId) {
        const baseSlug = slugify(dto.slug ?? dto.name);
        if (!baseSlug) {
            throw new ConflictException('Could not derive a valid slug from the provided name');
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
    async listForOrganization(organizationId, includeArchived, accessibleClientIds) {
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
    async getForOrganization(organizationId, clientId, accessibleClientIds) {
        const client = await this.prisma.client.findFirst({
            where: { id: clientId, organizationId },
        });
        if (!client) {
            throw new NotFoundException('Client not found');
        }
        if (accessibleClientIds !== null &&
            !accessibleClientIds.includes(clientId)) {
            throw new NotFoundException('Client not found');
        }
        return client;
    }
    async archive(organizationId, clientId, actorUserId, accessibleClientIds) {
        const client = await this.getForOrganization(organizationId, clientId, accessibleClientIds);
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
    async restore(organizationId, clientId, actorUserId, accessibleClientIds) {
        const client = await this.getForOrganization(organizationId, clientId, accessibleClientIds);
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
    async ensureUniqueSlug(organizationId, baseSlug) {
        let candidate = baseSlug;
        let suffix = 1;
        while (await this.prisma.client.findUnique({
            where: { organizationId_slug: { organizationId, slug: candidate } },
        })) {
            suffix += 1;
            candidate = `${baseSlug}-${suffix}`;
            if (suffix > 50) {
                throw new ConflictException('Unable to allocate a unique slug, please provide one explicitly');
            }
        }
        return candidate;
    }
};
ClientsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ClientsService);
export { ClientsService };
//# sourceMappingURL=clients.service.js.map