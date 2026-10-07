import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import type { RequestWithMembership } from '../guards/organization-membership.guard.js';

/** Must be used on a route guarded by {@link OrganizationMembershipGuard}. */
export const CurrentMembership = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithMembership>();
    return request.membership;
  },
);
