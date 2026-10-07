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
import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { OrganizationMembershipGuard, } from '../common/guards/organization-membership.guard.js';
import { CurrentMembership } from '../common/decorators/current-membership.decorator.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { OnboardingService } from './onboarding.service.js';
import { BusinessProfileDto } from './dto/business-profile.dto.js';
import { GoalsAndKpisDto } from './dto/goals-and-kpis.dto.js';
import { ChannelsDto } from './dto/channels.dto.js';
import { AudienceGeographyDto } from './dto/audience-geography.dto.js';
import { BudgetDto } from './dto/budget.dto.js';
import { CompetitorsDto } from './dto/competitors.dto.js';
let OnboardingController = class OnboardingController {
    onboardingService;
    clientsService;
    clientAccessService;
    constructor(onboardingService, clientsService, clientAccessService) {
        this.onboardingService = onboardingService;
        this.clientsService = clientsService;
        this.clientAccessService = clientAccessService;
    }
    async get(organizationId, clientId, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.getForClient(clientId);
    }
    async saveBusinessProfile(organizationId, clientId, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.saveBusinessProfile(organizationId, clientId, dto, user.id);
    }
    async saveGoalsAndKpis(organizationId, clientId, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.saveGoalsAndKpis(organizationId, clientId, dto, user.id);
    }
    async saveChannels(organizationId, clientId, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.saveChannels(organizationId, clientId, dto, user.id);
    }
    async saveAudienceGeography(organizationId, clientId, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.saveAudienceGeography(organizationId, clientId, dto, user.id);
    }
    async saveBudget(organizationId, clientId, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.saveBudget(organizationId, clientId, dto, user.id);
    }
    async saveCompetitors(organizationId, clientId, dto, user, membership) {
        await this.assertClientAccessible(organizationId, clientId, membership);
        return this.onboardingService.saveCompetitors(organizationId, clientId, dto, user.id);
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
], OnboardingController.prototype, "get", null);
__decorate([
    Patch('business-profile'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, BusinessProfileDto, Object, Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "saveBusinessProfile", null);
__decorate([
    Patch('goals-and-kpis'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, GoalsAndKpisDto, Object, Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "saveGoalsAndKpis", null);
__decorate([
    Patch('channels'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ChannelsDto, Object, Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "saveChannels", null);
__decorate([
    Patch('audience-geography'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, AudienceGeographyDto, Object, Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "saveAudienceGeography", null);
__decorate([
    Patch('budget'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, BudgetDto, Object, Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "saveBudget", null);
__decorate([
    Patch('competitors'),
    RequirePermission('clients', PermissionAction.EDIT),
    __param(0, Param('organizationId')),
    __param(1, Param('clientId')),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __param(4, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, CompetitorsDto, Object, Object]),
    __metadata("design:returntype", Promise)
], OnboardingController.prototype, "saveCompetitors", null);
OnboardingController = __decorate([
    UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard),
    Controller('organizations/:organizationId/clients/:clientId/onboarding'),
    __metadata("design:paramtypes", [OnboardingService,
        ClientsService,
        ClientAccessService])
], OnboardingController);
export { OnboardingController };
//# sourceMappingURL=onboarding.controller.js.map