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
import { Body, Controller, Get, Param, Patch, Put, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { MembersService } from './members.service.js';
import { ClientAccessService } from './client-access.service.js';
import { AssignRoleDto } from './dto/assign-role.dto.js';
import { SetClientAccessDto } from './dto/set-client-access.dto.js';
let MembersController = class MembersController {
    membersService;
    clientAccessService;
    constructor(membersService, clientAccessService) {
        this.membersService = membersService;
        this.clientAccessService = clientAccessService;
    }
    list(organizationId) {
        return this.membersService.listForOrganization(organizationId);
    }
    updateRole(organizationId, targetUserId, dto, user) {
        return this.membersService.updateRole(organizationId, targetUserId, dto.roleId, user.id);
    }
    getClientAccess(organizationId, targetUserId) {
        return this.clientAccessService.getAccess(organizationId, targetUserId);
    }
    setClientAccess(organizationId, targetUserId, dto, user) {
        return this.clientAccessService.setAccess(organizationId, targetUserId, dto, user.id);
    }
};
__decorate([
    Get(),
    RequirePermission('members', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MembersController.prototype, "list", null);
__decorate([
    Patch(':userId/role'),
    RequirePermission('members', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('userId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, AssignRoleDto, Object]),
    __metadata("design:returntype", void 0)
], MembersController.prototype, "updateRole", null);
__decorate([
    Get(':userId/client-access'),
    RequirePermission('members', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MembersController.prototype, "getClientAccess", null);
__decorate([
    Put(':userId/client-access'),
    RequirePermission('members', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('userId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, SetClientAccessDto, Object]),
    __metadata("design:returntype", void 0)
], MembersController.prototype, "setClientAccess", null);
MembersController = __decorate([
    UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard),
    Controller('organizations/:organizationId/members'),
    __metadata("design:paramtypes", [MembersService,
        ClientAccessService])
], MembersController);
export { MembersController };
//# sourceMappingURL=members.controller.js.map