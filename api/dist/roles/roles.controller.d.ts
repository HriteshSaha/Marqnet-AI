import type { AuthenticatedUser } from '../auth/auth.service.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { RolesService } from './roles.service.js';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    list(organizationId: string): Promise<({
        permissions: {
            id: string;
            roleId: string;
            module: string;
            action: PermissionAction;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        isSystem: boolean;
        systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
    })[]>;
    get(organizationId: string, roleId: string): Promise<{
        permissions: {
            id: string;
            roleId: string;
            module: string;
            action: PermissionAction;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        isSystem: boolean;
        systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
    }>;
    create(organizationId: string, dto: CreateRoleDto, user: AuthenticatedUser): Promise<{
        permissions: {
            id: string;
            roleId: string;
            module: string;
            action: PermissionAction;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        isSystem: boolean;
        systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
    }>;
    update(organizationId: string, roleId: string, dto: UpdateRoleDto, user: AuthenticatedUser): Promise<{
        permissions: {
            id: string;
            roleId: string;
            module: string;
            action: PermissionAction;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        isSystem: boolean;
        systemKey: import("../generated/prisma/enums.js").SystemRoleKey | null;
    }>;
    remove(organizationId: string, roleId: string, user: AuthenticatedUser): Promise<void>;
}
