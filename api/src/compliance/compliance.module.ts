import { Module } from '@nestjs/common';
import { ComplianceConstraintsController } from './compliance-constraints.controller.js';
import { ComplianceConstraintsService } from './compliance-constraints.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RolesModule } from '../roles/roles.module.js';
import { ClientsModule } from '../clients/clients.module.js';
import { MembersModule } from '../members/members.module.js';
import { ApprovalsModule } from '../approvals/approvals.module.js';

@Module({
  imports: [RolesModule, ClientsModule, MembersModule, ApprovalsModule],
  controllers: [ComplianceConstraintsController],
  providers: [
    ComplianceConstraintsService,
    OrganizationMembershipGuard,
    PermissionsGuard,
  ],
})
export class ComplianceModule {}
