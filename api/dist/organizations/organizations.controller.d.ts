import type { AuthenticatedUser } from '../auth/auth.service.js';
import { TokenService } from '../auth/token.service.js';
import { SessionsService } from '../sessions/sessions.service.js';
import { type MembershipWithRole } from '../common/guards/organization-membership.guard.js';
import { OrganizationsService } from './organizations.service.js';
import { CreateOrganizationDto } from './dto/create-organization.dto.js';
export declare class OrganizationsController {
    private readonly organizationsService;
    private readonly tokens;
    private readonly sessions;
    constructor(organizationsService: OrganizationsService, tokens: TokenService, sessions: SessionsService);
    create(dto: CreateOrganizationDto, user: AuthenticatedUser): Promise<{
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
    list(user: AuthenticatedUser): Promise<{
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
    get(id: string, user: AuthenticatedUser): Promise<{
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
    select(organizationId: string, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
        organization: {
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
        };
        role: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            isSystem: boolean;
            systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
        };
        accessToken: string;
    }>;
}
