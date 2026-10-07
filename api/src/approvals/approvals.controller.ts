import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
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
import {
  PermissionAction,
  ApprovalRequestStatus,
} from '../generated/prisma/enums.js';
import { ApprovalsService } from './approvals.service.js';
import { SetApprovalPolicyDto } from './dto/set-approval-policy.dto.js';
import { CreateApprovalRequestDto } from './dto/create-approval-request.dto.js';
import { DecideApprovalDto } from './dto/decide-approval.dto.js';

@UseGuards(JwtAuthGuard, OrganizationMembershipGuard, PermissionsGuard)
@Controller('organizations/:organizationId/approvals')
export class ApprovalsController {
  constructor(private readonly approvalsService: ApprovalsService) {}

  /** EP-03-US-03: current thresholds — which roles may decide at each risk level, dual-approval, self-approval. */
  @Get('policy')
  @RequirePermission('approvals', PermissionAction.READ)
  getPolicy(@Param('organizationId') organizationId: string) {
    return this.approvalsService.getPolicy(organizationId);
  }

  /** EP-03-US-03: set approval authority. Must specify all 4 risk levels each time (full replace). */
  @Put('policy')
  @RequirePermission('approvals', PermissionAction.MANAGE)
  setPolicy(
    @Param('organizationId') organizationId: string,
    @Body() dto: SetApprovalPolicyDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.approvalsService.setPolicy(organizationId, dto, user.id);
  }

  @Get()
  @RequirePermission('approvals', PermissionAction.READ)
  list(
    @Param('organizationId') organizationId: string,
    @Query('status') status?: ApprovalRequestStatus,
  ) {
    return this.approvalsService.listForOrganization(organizationId, status);
  }

  @Get(':requestId')
  @RequirePermission('approvals', PermissionAction.READ)
  get(
    @Param('organizationId') organizationId: string,
    @Param('requestId') requestId: string,
  ) {
    return this.approvalsService.getForOrganization(organizationId, requestId);
  }

  @Post()
  @RequirePermission('approvals', PermissionAction.CREATE)
  create(
    @Param('organizationId') organizationId: string,
    @Body() dto: CreateApprovalRequestDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.approvalsService.createRequest(organizationId, dto, user.id);
  }

  /**
   * EP-03-US-03: record a decision. The coarse `approvals:EDIT` permission
   * gate here just lets the request reach the service; the authoritative
   * "is this role allowed at this risk level" check happens inside it,
   * against the organization's configured thresholds.
   */
  @Post(':requestId/decisions')
  @RequirePermission('approvals', PermissionAction.EDIT)
  decide(
    @Param('organizationId') organizationId: string,
    @Param('requestId') requestId: string,
    @Body() dto: DecideApprovalDto,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    return this.approvalsService.decide(
      organizationId,
      requestId,
      dto,
      user.id,
      membership.roleId,
    );
  }
}
