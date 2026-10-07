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
import { Body, Controller, Get, Param, ParseEnumPipe, Put, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { OrganizationMembershipGuard, } from '../common/guards/organization-membership.guard.js';
import { CurrentMembership } from '../common/decorators/current-membership.decorator.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { GuardrailMetric, PermissionAction, } from '../generated/prisma/enums.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { KpiGuardrailsService } from './kpi-guardrails.service.js';
import { SetKpiGuardrailDto } from './dto/set-kpi-guardrail.dto.js';
let KpiGuardrailsController = class KpiGuardrailsController {
    guardrailsService;
    clientsService;
    clientAccessService;
    constructor(guardrailsService, clientsService, clientAccessService) {
        this.guardrailsService = guardrailsService;
        this.clientsService = clientsService;
        this.clientAccessService = clientAccessService;
    }
    async list(organizationId, clientId, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.guardrailsService.listCurrentForClient(clientId);
    }
    async history(organizationId, clientId, metric, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.guardrailsService.getHistory(clientId, metric);
    }
    async set(organizationId, clientId, metric, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.guardrailsService.setGuardrail(organizationId, clientId, metric, dto, user.id);
    }
    async assertClientAccessible(organizationId, clientId, membership) {
        const accessibleClientIds = await this.clientAccessService.getAccessibleClientIds(membership.id);
        await this.clientsService.getForOrganization(organizationId, clientId, accessibleClientIds);
    }
};
__decorate([
    Get(),
    RequirePermission('clients', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], KpiGuardrailsController.prototype, "list", null);
__decorate([
    Get(':metric/history'),
    RequirePermission('clients', PermissionAction.READ),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Param('metric', new ParseEnumPipe(GuardrailMetric))),
    __param(3, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], KpiGuardrailsController.prototype, "history", null);
__decorate([
    Put(':metric'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Param('metric', new ParseEnumPipe(GuardrailMetric))),
    __param(3, Body()),
    __param(4, CurrentUser()),
    __param(5, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, SetKpiGuardrailDto, Object, Object]),
    __metadata("design:returntype", Promise)
], KpiGuardrailsController.prototype, "set", null);
KpiGuardrailsController = __decorate([
    UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard),
    Controller('organizations/:organizationId/clients/:clientId/kpi-guardrails'),
    __metadata("design:paramtypes", [KpiGuardrailsService,
        ClientsService,
        ClientAccessService])
], KpiGuardrailsController);
export { KpiGuardrailsController };
//# sourceMappingURL=kpi-guardrails.controller.js.map