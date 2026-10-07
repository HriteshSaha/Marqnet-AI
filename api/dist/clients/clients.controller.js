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
import { Body, Controller, Get, Param, Post, Query, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { OrganizationMembershipGuard, } from '../common/guards/organization-membership.guard.js';
import { CurrentMembership } from '../common/decorators/current-membership.decorator.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { ListClientsQueryDto } from './dto/list-clients-query.dto.js';
let ClientsController = class ClientsController {
    clientsService;
    clientAccessService;
    constructor(clientsService, clientAccessService) {
        this.clientsService = clientsService;
        this.clientAccessService = clientAccessService;
    }
    create(organizationId, dto, user) {
        return this.clientsService.create(organizationId, dto, user.id);
    }
    async list(organizationId, query, membership) {
        const accessibleClientIds = await this.clientAccessService.getAccessibleClientIds(membership.id);
        return this.clientsService.listForOrganization(organizationId, query.includeArchived ?? false, accessibleClientIds);
    }
    async get(organizationId, clientId, membership) {
        const accessibleClientIds = await this.clientAccessService.getAccessibleClientIds(membership.id);
        return this.clientsService.getForOrganization(organizationId, clientId, accessibleClientIds);
    }
    async archive(organizationId, clientId, user, membership) {
        const accessibleClientIds = await this.clientAccessService.getAccessibleClientIds(membership.id);
        return this.clientsService.archive(organizationId, clientId, user.id, accessibleClientIds);
    }
    async restore(organizationId, clientId, user, membership) {
        const accessibleClientIds = await this.clientAccessService.getAccessibleClientIds(membership.id);
        return this.clientsService.restore(organizationId, clientId, user.id, accessibleClientIds);
    }
};
__decorate([
    Post(),
    RequirePermission('clients', PermissionAction.CREATE),
    __param(0, Param('organizationId')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateClientDto, Object]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    Get(),
    RequirePermission('clients', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Query()),
    __param(2, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ListClientsQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "list", null);
__decorate([
    Get(':clientId'),
    RequirePermission('clients', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "get", null);
__decorate([
    Post(':clientId/archive'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, CurrentUser()),
    __param(3, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "archive", null);
__decorate([
    Post(':clientId/restore'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, CurrentUser()),
    __param(3, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "restore", null);
ClientsController = __decorate([
    UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard),
    Controller('organizations/:organizationId/clients'),
    __metadata("design:paramtypes", [ClientsService,
        ClientAccessService])
], ClientsController);
export { ClientsController };
//# sourceMappingURL=clients.controller.js.map