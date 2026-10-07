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
import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { OrganizationMembershipGuard, } from '../common/guards/organization-membership.guard.js';
import { CurrentMembership } from '../common/decorators/current-membership.decorator.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction, ApprovalRequestStatus, } from '../generated/prisma/enums.js';
import { ApprovalsService } from './approvals.service.js';
import { SetApprovalPolicyDto } from './dto/set-approval-policy.dto.js';
import { CreateApprovalRequestDto } from './dto/create-approval-request.dto.js';
import { DecideApprovalDto } from './dto/decide-approval.dto.js';
let ApprovalsController = class ApprovalsController {
    approvalsService;
    constructor(approvalsService) {
        this.approvalsService = approvalsService;
    }
    getPolicy(organizationId) {
        return this.approvalsService.getPolicy(organizationId);
    }
    setPolicy(organizationId, dto, user) {
        return this.approvalsService.setPolicy(organizationId, dto, user.id);
    }
    list(organizationId, status) {
        return this.approvalsService.listForOrganization(organizationId, status);
    }
    get(organizationId, requestId) {
        return this.approvalsService.getForOrganization(organizationId, requestId);
    }
    create(organizationId, dto, user) {
        return this.approvalsService.createRequest(organizationId, dto, user.id);
    }
    decide(organizationId, requestId, dto, user, membership) {
        return this.approvalsService.decide(organizationId, requestId, dto, user.id, membership.roleId);
    }
};
__decorate([
    Get('policy'),
    RequirePermission('approvals', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "getPolicy", null);
__decorate([
    Put('policy'),
    RequirePermission('approvals', PermissionAction.MANAGE),
    __param(0, Param('organizationId')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, SetApprovalPolicyDto, Object]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "setPolicy", null);
__decorate([
    Get(),
    RequirePermission('approvals', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "list", null);
__decorate([
    Get(':requestId'),
    RequirePermission('approvals', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Param('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "get", null);
__decorate([
    Post(),
    RequirePermission('approvals', PermissionAction.CREATE),
    __param(0, Param('organizationId')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateApprovalRequestDto, Object]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "create", null);
__decorate([
    Post(':requestId/decisions'),
    RequirePermission('approvals', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('requestId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, DecideApprovalDto, Object, Object]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "decide", null);
ApprovalsController = __decorate([
    UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard),
    Controller('organizations/:organizationId/approvals'),
    __metadata("design:paramtypes", [ApprovalsService])
], ApprovalsController);
export { ApprovalsController };
//# sourceMappingURL=approvals.controller.js.map