import { PrismaService } from '../prisma/prisma.service.js';
import { ClientStatus } from '../generated/prisma/enums.js';
import type { AccessibleClientIds } from '../members/client-access.service.js';
import type { CreateClientDto } from './dto/create-client.dto.js';
export declare class ClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(organizationId: string, dto: CreateClientDto, actorUserId: string): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: ClientStatus;
    }>;
    listForOrganization(organizationId: string, includeArchived: boolean, accessibleClientIds: AccessibleClientIds): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: ClientStatus;
    }[]>;
    getForOrganization(organizationId: string, clientId: string, accessibleClientIds: AccessibleClientIds): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: ClientStatus;
    }>;
    archive(organizationId: string, clientId: string, actorUserId: string, accessibleClientIds: AccessibleClientIds): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: ClientStatus;
    }>;
    restore(organizationId: string, clientId: string, actorUserId: string, accessibleClientIds: AccessibleClientIds): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: ClientStatus;
    }>;
    private ensureUniqueSlug;
}
