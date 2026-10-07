import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { AuthenticatedUser } from '../../auth/auth.service.js';
import type { Membership, Role } from '../../generated/prisma/client.js';

export type MembershipWithRole = Membership & { role: Role };

export interface RequestWithMembership {
  user: AuthenticatedUser;
  params: Record<string, string>;
  membership?: MembershipWithRole;
}

/**
 * Resolves `:organizationId` from the route, confirms the authenticated user
 * belongs to that tenant, and attaches the Membership (with its Role) to the
 * request.
 *
 * Returns 404 (not 403) for non-members so cross-tenant requests cannot be
 * used to probe whether an organization id exists.
 */
@Injectable()
export class OrganizationMembershipGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithMembership>();
    const organizationId = request.params['organizationId'];
    if (!organizationId) {
      throw new NotFoundException('Organization not found');
    }

    const membership = await this.prisma.membership.findUnique({
      where: {
        userId_organizationId: { userId: request.user.id, organizationId },
      },
      include: { role: true },
    });
    if (!membership) {
      throw new NotFoundException('Organization not found');
    }

    request.membership = membership;
    return true;
  }
}
