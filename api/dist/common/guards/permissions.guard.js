var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from '../../roles/roles.service.js';
import { REQUIRED_PERMISSION_KEY, } from '../decorators/require-permission.decorator.js';
let PermissionsGuard = class PermissionsGuard {
    reflector;
    roles;
    constructor(reflector, roles) {
        this.reflector = reflector;
        this.roles = roles;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(REQUIRED_PERMISSION_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const roleId = request.membership?.roleId;
        if (!roleId) {
            throw new ForbiddenException('You do not have the required permission for this action');
        }
        const granted = await this.roles.hasPermission(roleId, required.module, required.action);
        if (!granted) {
            throw new ForbiddenException('You do not have the required permission for this action');
        }
        return true;
    }
};
PermissionsGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Reflector,
        RolesService])
], PermissionsGuard);
export { PermissionsGuard };
//# sourceMappingURL=permissions.guard.js.map