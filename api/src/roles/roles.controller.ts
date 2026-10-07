import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import type { AuthenticatedUser } from '../auth/auth.service.js';
import { OrganizationMembershipGuard } from '../common/guards/organization-membership.guard.js';
import { PermissionsGuard } from '../common/guards/permissions.guard.js';
import { RequirePermission } from '../common/decorators/require-permission.decorator.js';
import { PermissionAction } from '../generated/prisma/enums.js';
import { RolesService } from './roles.service.js';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';

@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller('organizations/:organizationId/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @RequirePermission('roles', PermissionAction.READ)
  list(@Param('organizationId') organizationId: string) {
    return this.rolesService.listForOrganization(organizationId);
  }

  @Get(':roleId')
  @RequirePermission('roles', PermissionAction.READ)
  get(
    @Param('organizationId') organizationId: string,
    @Param('roleId') roleId: string,
  ) {
    return this.rolesService.getForOrganization(organizationId, roleId);
  }

  @Post()
  @RequirePermission('roles', PermissionAction.CREATE)
  create(
    @Param('organizationId') organizationId: string,
    @Body() dto: CreateRoleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rolesService.create(organizationId, dto, user.id);
  }

  @Patch(':roleId')
  @RequirePermission('roles', PermissionAction.EDIT)
  update(
    @Param('organizationId') organizationId: string,
    @Param('roleId') roleId: string,
    @Body() dto: UpdateRoleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rolesService.update(organizationId, roleId, dto, user.id);
  }

  @Delete(':roleId')
  @RequirePermission('roles', PermissionAction.DELETE)
  remove(
    @Param('organizationId') organizationId: string,
    @Param('roleId') roleId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rolesService.delete(organizationId, roleId, user.id);
  }
}
