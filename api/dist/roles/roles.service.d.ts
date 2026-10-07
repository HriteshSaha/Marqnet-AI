import { PrismaService } from '../prisma/prisma.service.js';
import { PermissionAction, SystemRoleKey } from '../generated/prisma/enums.js';
import type { Prisma } from '../generated/prisma/client.js';
import type { CreateRoleDto } from './dto/create-role.dto.js';
import type { UpdateRoleDto } from './dto/update-role.dto.js';
export declare class RolesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    seedSystemRoles(tx: Prisma.TransactionClient, organizationId: string): Promise<Record<SystemRoleKey, {
        id: string;
    }>>;
    hasPermission(roleId: string, module: string, action: PermissionAction): Promise<boolean>;
    listForOrganization(organizationId: string): Promise<({
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
        systemKey: SystemRoleKey | null;
    })[]>;
    getForOrganization(organizationId: string, roleId: string): Promise<{
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
        systemKey: SystemRoleKey | null;
    }>;
    create(organizationId: string, dto: CreateRoleDto, actorUserId: string): Promise<{
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
        systemKey: SystemRoleKey | null;
    }>;
    update(organizationId: string, roleId: string, dto: UpdateRoleDto, actorUserId: string): Promise<{
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
        systemKey: SystemRoleKey | null;
    }>;
    delete(organizationId: string, roleId: string, actorUserId: string): Promise<void>;
}
