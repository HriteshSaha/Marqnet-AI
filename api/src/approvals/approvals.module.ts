import { Module } from '@nestjs/common';
import { ApprovalsController } from './approvals.controller.js';
import { ApprovalsService } from './approvals.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RolesModule } from '../roles/roles.module.js';

@Module({
  imports: [RolesModule],
  controllers: [ApprovalsController],
  providers: [ApprovalsService, OrganizationMembershipGuard, PermissionsGuard],
  exports: [ApprovalsService],
})
export class ApprovalsModule {}
