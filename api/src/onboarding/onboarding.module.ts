import { Module } from '@nestjs/common';
import { OnboardingController } from './onboarding.controller.js';
import { OnboardingService } from './onboarding.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RolesModule } from '../roles/roles.module.js';
import { ClientsModule } from '../clients/clients.module.js';
import { MembersModule } from '../members/members.module.js';

@Module({
  imports: [RolesModule, ClientsModule, MembersModule],
  controllers: [OnboardingController],
  providers: [OnboardingService, OrganizationMembershipGuard, PermissionsGuard],
})
export class OnboardingModule {}
