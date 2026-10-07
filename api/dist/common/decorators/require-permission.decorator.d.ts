import type { PermissionAction } from '../../generated/prisma/enums.js';
import type { PermissionModule } from '../permission-modules.js';
export declare const REQUIRED_PERMISSION_KEY = "requiredPermission";
export interface RequiredPermission {
    module: PermissionModule;
    action: PermissionAction;
}
export declare const RequirePermission: (module: PermissionModule, action: PermissionAction) => import("@nestjs/common").CustomDecorator<string>;
