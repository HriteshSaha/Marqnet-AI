import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import type { AuthenticatedUser } from '../auth/auth.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { MembersService } from './members.service.js';
import { ClientAccessService } from './client-access.service.js';
import { AssignRoleDto } from './dto/assign-role.dto.js';
import { SetClientAccessDto } from './dto/set-client-access.dto.js';

@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller('organizations/:organizationId/members')
export class MembersController {
  constructor(
    private readonly membersService: MembersService,
    private readonly clientAccessService: ClientAccessService,
  ) {}

  @Get()
  @RequirePermission('members', PermissionAction.READ)
  list(@Param('organizationId') organizationId: string) {
    return this.membersService.listForOrganization(organizationId);
  }

  @Patch(':userId/role')
  @RequirePermission('members', PermissionAction.EDIT)
  updateRole(
    @Param('organizationId') organizationId: string,
    @Param('userId') targetUserId: string,
    @Body() dto: AssignRoleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.membersService.updateRole(
      organizationId,
      targetUserId,
      dto.roleId,
      user.id,
    );
  }

  /** EP-03-US-02: which clients this member can see (ALL, or an explicit list). */
  @Get(':userId/client-access')
  @RequirePermission('members', PermissionAction.READ)
  getClientAccess(
    @Param('organizationId') organizationId: string,
    @Param('userId') targetUserId: string,
  ) {
    return this.clientAccessService.getAccess(organizationId, targetUserId);
  }

  /** EP-03-US-02: scope a member to selected clients, or restore unrestricted access. */
  @Put(':userId/client-access')
  @RequirePermission('members', PermissionAction.EDIT)
  setClientAccess(
    @Param('organizationId') organizationId: string,
    @Param('userId') targetUserId: string,
    @Body() dto: SetClientAccessDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.clientAccessService.setAccess(
      organizationId,
      targetUserId,
      dto,
      user.id,
    );
  }
}
