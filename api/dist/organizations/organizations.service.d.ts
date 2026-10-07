import { PrismaService } from '../prisma/prisma.service.js';
import { RolesService } from '../roles/roles.service.js';
import type { CreateOrganizationDto } from './dto/create-organization.dto.js';
export declare class OrganizationsService {
    private readonly prisma;
    private readonly roles;
    constructor(prisma: PrismaService, roles: RolesService);
    create(dto: CreateOrganizationDto, ownerUserId: string): Promise<{
        id: string;
        name: string;
        slug: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        locale: string;
        currency: string;
        timezone: string;
        archivedAt: Date | null;
        sessionTtlMinutes: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listForUser(userId: string): Promise<{
        id: string;
        name: string;
        slug: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        locale: string;
        currency: string;
        timezone: string;
        archivedAt: Date | null;
        sessionTtlMinutes: number | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getForUser(organizationId: string, userId: string): Promise<{
        id: string;
        name: string;
        slug: string;
        type: import("../generated/prisma/enums.js").OrganizationType;
        locale: string;
        currency: string;
        timezone: string;
        archivedAt: Date | null;
        sessionTtlMinutes: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    recordSelectedWorkspace(organizationId: string, userId: string): Promise<void>;
    private ensureUniqueSlug;
}
