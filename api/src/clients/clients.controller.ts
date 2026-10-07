import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
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
import { PermissionAction } from '../generated/prisma/enums.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { ListClientsQueryDto } from './dto/list-clients-query.dto.js';

@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller('organizations/:organizationId/clients')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly clientAccessService: ClientAccessService,
  ) {}

  @Post()
  @RequirePermission('clients', PermissionAction.CREATE)
  create(
    @Param('organizationId') organizationId: string,
    @Body() dto: CreateClientDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.clientsService.create(organizationId, dto, user.id);
  }

  @Get()
  @RequirePermission('clients', PermissionAction.READ)
  async list(
    @Param('organizationId') organizationId: string,
    @Query() query: ListClientsQueryDto,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    const accessibleClientIds =
      await this.clientAccessService.getAccessibleClientIds(membership.id);
    return this.clientsService.listForOrganization(
      organizationId,
      query.includeArchived ?? false,
      accessibleClientIds,
    );
  }

  @Get(':clientId')
  @RequirePermission('clients', PermissionAction.READ)
  async get(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    const accessibleClientIds =
      await this.clientAccessService.getAccessibleClientIds(membership.id);
    return this.clientsService.getForOrganization(
      organizationId,
      clientId,
      accessibleClientIds,
    );
  }

  @Post(':clientId/archive')
  @RequirePermission('clients', PermissionAction.EDIT)
  async archive(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    const accessibleClientIds =
      await this.clientAccessService.getAccessibleClientIds(membership.id);
    return this.clientsService.archive(
      organizationId,
      clientId,
      user.id,
      accessibleClientIds,
    );
  }

  @Post(':clientId/restore')
  @RequirePermission('clients', PermissionAction.EDIT)
  async restore(
    @Param('organizationId') organizationId: string,
    @Param('clientId') clientId: string,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    const accessibleClientIds =
      await this.clientAccessService.getAccessibleClientIds(membership.id);
    return this.clientsService.restore(
      organizationId,
      clientId,
      user.id,
      accessibleClientIds,
    );
  }
}
