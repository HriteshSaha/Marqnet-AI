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
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import { TokenService } from '../auth/token.service.js';
import { SessionsService } from '../sessions/sessions.service.js';
import { OrganizationMembershipGuard, } from '../common/guards/organization-membership.guard.js';
import { CurrentMembership } from '../common/decorators/current-membership.decorator.js';
import { OrganizationsService } from './organizations.service.js';
import { CreateOrganizationDto } from './dto/create-organization.dto.js';
let OrganizationsController = class OrganizationsController {
    organizationsService;
    tokens;
    sessions;
    constructor(organizationsService, tokens, sessions) {
        this.organizationsService = organizationsService;
        this.tokens = tokens;
        this.sessions = sessions;
    }
    create(dto, user) {
        return this.organizationsService.create(dto, user.id);
    }
    list(user) {
        return this.organizationsService.listForUser(user.id);
    }
    get(id, user) {
        return this.organizationsService.getForUser(id, user.id);
    }
    async select(organizationId, user, membership) {
        const organization = await this.organizationsService.getForUser(organizationId, user.id);
        await this.organizationsService.recordSelectedWorkspace(organizationId, user.id);
        const ttlMinutes = organization.sessionTtlMinutes ?? this.sessions.defaultTtlMinutes();
        await this.sessions.applyTtlPolicy(user.sessionId, ttlMinutes);
        const accessToken = this.tokens.sign({
            sub: user.id,
            email: user.email,
            sid: user.sessionId,
            organizationId,
            role: membership.role.name,
        }, ttlMinutes * 60);
        return { organization, role: membership.role, accessToken };
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrganizationDto, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "list", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "get", null);
__decorate([
    Post(':organizationId/select'),
    UseGuards(OrganizationMembershipGuard),
    __param(0, Param('organizationId')),
    __param(1, CurrentUser()),
    __param(2, CurrentMembership()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "select", null);
OrganizationsController = __decorate([
    UseGuards(JwtAuthGuard),
    Controller('organizations'),
    __metadata("design:paramtypes", [OrganizationsService,
        TokenService,
        SessionsService])
], OrganizationsController);
export { OrganizationsController };
//# sourceMappingURL=organizations.controller.js.map