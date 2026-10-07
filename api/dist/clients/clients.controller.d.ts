import type { AuthenticatedUser } from '../auth/auth.service.js';
import { type MembershipWithRole } from '../common/guards/organization-membership.guard.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { ListClientsQueryDto } from './dto/list-clients-query.dto.js';
export declare class ClientsController {
    private readonly clientsService;
    private readonly clientAccessService;
    constructor(clientsService: ClientsService, clientAccessService: ClientAccessService);
    create(organizationId: string, dto: CreateClientDto, user: AuthenticatedUser): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ClientStatus;
    }>;
    list(organizationId: string, query: ListClientsQueryDto, membership: MembershipWithRole): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ClientStatus;
    }[]>;
    get(organizationId: string, clientId: string, membership: MembershipWithRole): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ClientStatus;
    }>;
    archive(organizationId: string, clientId: string, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ClientStatus;
    }>;
    restore(organizationId: string, clientId: string, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
        id: string;
        name: string;
        slug: string;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ClientStatus;
    }>;
}
