import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../../auth/auth.service.js';
import type { Membership, Role } from '../../generated/prisma/client.js';
export type MembershipWithRole = Membership & {
    role: Role;
};
export interface RequestWithMembership {
    user: AuthenticatedUser;
    params: Record<string, string>;
    membership?: MembershipWithRole;
}
export declare class OrganizationMembershipGuard implements CanActivate {
    private readonly prisma;
    constructor(prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
