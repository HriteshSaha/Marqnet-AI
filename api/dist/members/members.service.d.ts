import { PrismaService } from '../prisma/prisma.service.js';
import { SystemRoleKey } from '../generated/prisma/enums.js';
export declare class MembersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listForOrganization(organizationId: string): Promise<({
        role: {
            id: string;
            name: string;
            isSystem: boolean;
            systemKey: SystemRoleKey | null;
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
    updateRole(organizationId: string, targetUserId: string, roleId: string, actorUserId: string): Promise<{
        role: {
            id: string;
            name: string;
            isSystem: boolean;
            systemKey: SystemRoleKey | null;
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
}
