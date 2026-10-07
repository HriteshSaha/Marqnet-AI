import { SetMetadata } from '@nestjs/common';
export const REQUIRED_PERMISSION_KEY = 'requiredPermission';
export const RequirePermission = (module, action) => SetMetadata(REQUIRED_PERMISSION_KEY, {
    module,
    action,
});
//# sourceMappingURL=require-permission.decorator.js.map