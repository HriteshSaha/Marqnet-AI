import { Module } from '@nestjs/common';
import { TokenModule } from '../auth/token.module.js';
import { SessionsModule } from '../sessions/sessions.module.js';
import { RolesModule } from '../roles/roles.module.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { OrganizationsController } from './organizations.controller.js';
import { OrganizationsService } from './organizations.service.js';

@Module({
  imports: [TokenModule, SessionsModule, RolesModule],
  controllers: [OrganizationsController],
  providers: [OrganizationsService, OrganizationMembershipGuard],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
