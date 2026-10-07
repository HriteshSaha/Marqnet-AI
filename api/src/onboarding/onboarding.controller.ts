import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import type { AuthenticatedUser } from '../auth/auth.service.js';
import {
  OrganizationMembershipGuard,
  type MembershipWithRole,
} from '../common/guards/organization-membership.guard.js';
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

/**
 * Nested under a Client, so every handler first re-validates the client is
 * real, belongs to this org, and is within the caller's EP-03-US-02 access
 * scope (via ClientsService.getForOrganization) before touching onboarding
 * data — the same deep-link protection every other client-scoped feature gets.
 */
@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller('organizations/:organizationId/clients/:clientId/onboarding')
export class OnboardingController {
  constructor(
    private readonly onboardingService: OnboardingService,
    private readonly clientsService: ClientsService,
    private readonly clientAccessService: ClientAccessService,
  ) {}

  @Get()
  @RequirePermission('clients', PermissionAction.READ)
  async get(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.getForClient(clientId);
  }

  @Patch('business-profile')
  @RequirePermission('clients', PermissionAction.EDIT)
  async saveBusinessProfile(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: BusinessProfileDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.saveBusinessProfile(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  @Patch('goals-and-kpis')
  @RequirePermission('clients', PermissionAction.EDIT)
  async saveGoalsAndKpis(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: GoalsAndKpisDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.saveGoalsAndKpis(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  @Patch('channels')
  @RequirePermission('clients', PermissionAction.EDIT)
  async saveChannels(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: ChannelsDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.saveChannels(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  @Patch('audience-geography')
  @RequirePermission('clients', PermissionAction.EDIT)
  async saveAudienceGeography(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: AudienceGeographyDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.saveAudienceGeography(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  @Patch('budget')
  @RequirePermission('clients', PermissionAction.EDIT)
  async saveBudget(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: BudgetDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.saveBudget(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  @Patch('competitors')
  @RequirePermission('clients', PermissionAction.EDIT)
  async saveCompetitors(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: CompetitorsDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.onboardingService.saveCompetitors(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  private async assertClientAccessible(
    organizationId: string,
    clientId: string,
    membership: MembershipWithRole,
  ): Promise<void> {
    const accessibleClientIds =
      await this.clientAccessService.getAccessibleClientIds(membership.id);
    await this.clientsService.getForOrganization(
      organizationId,
      clientId,
      accessibleClientIds,
    );
  }
}
