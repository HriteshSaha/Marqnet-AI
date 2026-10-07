import { Module } from '@nestjs/common';
import { RolesService } from './roles.service.js';
import { RolesController } from './roles.controller.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';

@Module({
  controllers: [RolesController],
  providers: [RolesService, OrganizationMembershipGuard, PermissionsGuard],
  exports: [RolesService],
})
export class RolesModule {}
