import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller.js';
import { ClientsService } from './clients.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RolesModule } from '../roles/roles.module.js';
import { MembersModule } from '../members/members.module.js';

@Module({
  imports: [RolesModule, MembersModule],
  controllers: [ClientsController],
  providers: [ClientsService, OrganizationMembershipGuard, PermissionsGuard],
  exports: [ClientsService],
})
export class ClientsModule {}
