import type { AuthenticatedUser } from '../auth/auth.service.js';
import { MembersService } from './members.service.js';
import { ClientAccessService } from './client-access.service.js';
import { AssignRoleDto } from './dto/assign-role.dto.js';
import { SetClientAccessDto } from './dto/set-client-access.dto.js';
export declare class MembersController {
    private readonly membersService;
    private readonly clientAccessService;
    constructor(membersService: MembersService, clientAccessService: ClientAccessService);
    list(organizationId: string): Promise<({
        role: {
            id: string;
            name: string;
            isSystem: boolean;
            systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
        };
        user: {
            id: string;
            email: string;
            fullName: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        roleId: string;
        userId: string;
        clientAccessScope: import("../generated/prisma/enums.js").ClientAccessScope;
    })[]>;
    updateRole(organizationId: string, targetUserId: string, dto: AssignRoleDto, user: AuthenticatedUser): Promise<{
        role: {
            id: string;
            name: string;
            isSystem: boolean;
            systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
        };
        user: {
            id: string;
            email: string;
            fullName: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        roleId: string;
        userId: string;
        clientAccessScope: import("../generated/prisma/enums.js").ClientAccessScope;
    }>;
    getClientAccess(organizationId: string, targetUserId: string): Promise<{
        scope: import("../generated/prisma/enums.js").ClientAccessScope;
        clientIds: string[];
    }>;
    setClientAccess(organizationId: string, targetUserId: string, dto: SetClientAccessDto, user: AuthenticatedUser): Promise<{
        scope: import("../generated/prisma/enums.js").ClientAccessScope;
        clientIds: string[];
    }>;
}
