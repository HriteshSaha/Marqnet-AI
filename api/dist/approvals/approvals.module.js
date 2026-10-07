var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ApprovalsController } from './approvals.controller.js';
import { ApprovalsService } from './approvals.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RolesModule } from '../roles/roles.module.js';
let ApprovalsModule = class ApprovalsModule {
};
ApprovalsModule = __decorate([
    Module({
        imports: [RolesModule],
        controllers: [ApprovalsController],
        providers: [ApprovalsService, OrganizationMembershipGuard, PermissionsGuard],
        exports: [ApprovalsService],
    })
], ApprovalsModule);
export { ApprovalsModule };
//# sourceMappingURL=approvals.module.js.map