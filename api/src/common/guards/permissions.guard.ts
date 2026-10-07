import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from '../../roles/roles.service.js';
import {
  REQUIRED_PERMISSION_KEY,
  type RequiredPermission,
} from '../decorators/require-permission.decorator.js';
import type { RequestWithMembership } from './organization-membership.guard.js';

/** Must run after {@link OrganizationMembershipGuard}, which populates `request.membership`. */
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly roles: RolesService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const required = this.reflector.getAllAndOverride<
      RequiredPermission | undefined
    >(REQUIRED_PERMISSION_KEY, [context.getHandler(), context.getClass()]);
    if (!required) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithMembership>();
    const roleId = request.membership?.roleId;
    if (!roleId) {
      throw new ForbiddenException(
        'You do not have the required permission for this action',
      );
    }

    const granted = await this.roles.hasPermission(
      roleId,
      required.module,
      required.action,
    );
    if (!granted) {
      throw new ForbiddenException(
        'You do not have the required permission for this action',
      );
    }
    return true;
  }
}
