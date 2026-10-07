import {
  Body,
  Controller,
  Get,
  Param,
  ParseEnumPipe,
  Put,
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
  GuardrailMetric,
  PermissionAction,
} from '../generated/prisma/enums.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { KpiGuardrailsService } from './kpi-guardrails.service.js';
import { SetKpiGuardrailDto } from './dto/set-kpi-guardrail.dto.js';

/**
 * Nested under a Client, mirroring OnboardingController: every handler first
 * re-validates the client is real, belongs to this org, and is within the
 * caller's EP-03-US-02 access scope before touching guardrail data.
 */
@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller('organizations/:organizationId/clients/:clientId/kpi-guardrails')
export class KpiGuardrailsController {
  constructor(
    private readonly guardrailsService: KpiGuardrailsService,
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
    return this.guardrailsService.listCurrentForClient(clientId);
  }

  @Get(':metric/history')
  @RequirePermission('clients', PermissionAction.READ)
  async history(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Param('metric', new ParseEnumPipe(GuardrailMetric))
    metric: GuardrailMetric,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.guardrailsService.getHistory(clientId, metric);
  }

  @Put(':metric')
  @RequirePermission('clients', PermissionAction.EDIT)
  async set(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @Param('metric', new ParseEnumPipe(GuardrailMetric))
    metric: GuardrailMetric,
    @Body() dto: SetKpiGuardrailDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    await this.assertClientAccessible(organizationId, clientId, membership);
    return this.guardrailsService.setGuardrail(
      organizationId,
      clientId,
      metric,
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
