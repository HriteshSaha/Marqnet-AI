import { Module } from '@nestjs/common';
import { MembersController } from './members.controller.js';
import { MembersService } from './members.service.js';
import { ClientAccessService } from './client-access.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RolesModule } from '../roles/roles.module.js';

@Module({
  imports: [RolesModule],
  controllers: [MembersController],
  providers: [
    MembersService,
    ClientAccessService,
    OrganizationMembershipGuard,
    PermissionsGuard,
  ],
  exports: [ClientAccessService],
})
export class MembersModule {}
