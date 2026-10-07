import { SetMetadata } from '@nestjs/common';
import type { PermissionAction } from '../../generated/prisma/enums.js';
import type { PermissionModule } from '../permission-modules.js';

export const REQUIRED_PERMISSION_KEY = 'requiredPermission';

export interface RequiredPermission {
  module: PermissionModule;
  action: PermissionAction;
}

/** Restricts a handler to members whose role grants `action` on `module` (EP-03-US-01). */
export const RequirePermission = (
  module: PermissionModule,
  action: PermissionAction,
) =>
  SetMetadata(REQUIRED_PERMISSION_KEY, {
    module,
    action,
  } satisfies RequiredPermission);
