import {
  Body,
  Controller,
  Get,
  Param,
  ParseEnumPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
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
import {
  ComplianceCategory,
  PermissionAction,
} from '../generated/prisma/enums.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { ComplianceConstraintsService } from './compliance-constraints.service.js';
import { CreateComplianceConstraintDto } from './dto/create-compliance-constraint.dto.js';
import { RequestRetirementDto } from './dto/request-retirement.dto.js';
import { ApplyRetirementDto } from './dto/apply-retirement.dto.js';

/**
 * Nested under a Client, mirroring Onboarding/KpiGuardrails: every handler
 * first re-validates the client is real, belongs to this org, and is within
 * the caller's EP-03-US-02 access scope before touching compliance data.
 */
@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller(
  'organizations/:organizationId/clients/:clientId/compliance-constraints',
)
export class ComplianceConstraintsController {
  constructor(
    private readonly constraintsService: ComplianceConstraintsService,
    private readonly clientsService: ClientsService,
    private readonly clientAccessService: ClientAccessService,
  ) {}

  @Get()
  @RequirePermission('clients', PermissionAction.READ)
  async list(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.constraintsService.listActiveForClient(clientId);
  }

  @Get(':category/history')
  @RequirePermission('clients', PermissionAction.READ)
  async history(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Param('category', new ParseEnumPipe(ComplianceCategory))
    category: ComplianceCategory,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.constraintsService.getHistory(clientId, category);
  }

  @Post()
  @RequirePermission('clients', PermissionAction.EDIT)
  async create(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Body() dto: CreateComplianceConstraintDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.constraintsService.create(
      organizationId,
      clientId,
      dto,
      user.id,
    );
  }

  /** EP-04-US-03: "overrides require authorized approval" — opens the request. */
  @Post(':constraintId/request-retirement')
  @RequirePermission('clients', PermissionAction.EDIT)
  async requestRetirement(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Param('constraintId') constraintId: string,
    @Body() dto: RequestRetirementDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.constraintsService.requestRetirement(
      organizationId,
      clientId,
      constraintId,
      dto,
      user.id,
    );
  }

  /** Applies the retirement once the referenced request has been decided APPROVED via the Approvals API. */
  @Post(':constraintId/apply-retirement')
  @RequirePermission('clients', PermissionAction.EDIT)
  async applyRetirement(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Param('constraintId') constraintId: string,
    @Body() dto: ApplyRetirementDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.constraintsService.applyRetirement(
      organizationId,
      clientId,
      constraintId,
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
