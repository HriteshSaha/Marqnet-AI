var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { RolesService } from './roles.service.js';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';
let RolesController = class RolesController {
    rolesService;
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    list(organizationId) {
        return this.rolesService.listForOrganization(organizationId);
    }
    get(organizationId, roleId) {
        return this.rolesService.getForOrganization(organizationId, roleId);
    }
    create(organizationId, dto, user) {
        return this.rolesService.create(organizationId, dto, user.id);
    }
    update(organizationId, roleId, dto, user) {
        return this.rolesService.update(organizationId, roleId, dto, user.id);
    }
    remove(organizationId, roleId, user) {
        return this.rolesService.delete(organizationId, roleId, user.id);
    }
};
__decorate([
    Get(),
    RequirePermission('roles', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "list", null);
__decorate([
    Get(':roleId'),
    RequirePermission('roles', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Param('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "get", null);
__decorate([
    Post(),
    RequirePermission('roles', PermissionAction.CREATE),
    __param(0, Param('organizationId')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateRoleDto, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    Patch(':roleId'),
    RequirePermission('roles', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('roleId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateRoleDto, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "update", null);
__decorate([
    Delete(':roleId'),
    RequirePermission('roles', PermissionAction.DELETE),
    __param(0, Param('organizationId')),
    __param(1, Param('roleId')),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "remove", null);
RolesController = __decorate([
    UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard),
    Controller('organizations/:organizationId/roles'),
    __metadata("design:paramtypes", [RolesService])
], RolesController);
export { RolesController };
//# sourceMappingURL=roles.controller.js.map