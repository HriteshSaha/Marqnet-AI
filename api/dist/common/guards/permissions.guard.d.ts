import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from '../../roles/roles.service.js';
export declare class PermissionsGuard implements CanActivate {
    private readonly reflector;
    private readonly roles;
    constructor(reflector: Reflector, roles: RolesService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
