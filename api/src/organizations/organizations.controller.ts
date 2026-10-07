import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import type { AuthenticatedUser } from '../auth/auth.service.js';
import { TokenService } from '../auth/token.service.js';
import { SessionsService } from '../sessions/sessions.service.js';
import {
  OrganizationMembershipGuard,
  type MembershipWithRole,
} from '../common/guards/organization-membership.guard.js';
import { CurrentMembership } from '../common/decorators/current-membership.decorator.js';
import { OrganizationsService } from './organizations.service.js';
import { CreateOrganizationDto } from './dto/create-organization.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('organizations')
export class OrganizationsController {
  constructor(
    private readonly organizationsService: OrganizationsService,
    private readonly tokens: TokenService,
    private readonly sessions: SessionsService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateOrganizationDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.organizationsService.create(dto, user.id);
  }

  @Get()
  list(@CurrentUser() user: AuthenticatedUser) {
    return this.organizationsService.listForUser(user.id);
  }

  @Get(':id')
  get(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.organizationsService.getForUser(id, user.id);
  }

  /**
   * EP-01-US-03: switch the active workspace. Authorization is enforced by
   * OrganizationMembershipGuard (404 for non-members — "access denied"
   * without confirming the workspace exists). Returns a fresh access token
   * carrying the selected organization/role as a UX convenience only; every
   * subsequent tenant-scoped route still re-validates membership from the
   * URL, so this claim is never trusted on its own.
   *
   * EP-02-US-01: if the workspace defines a session TTL policy, it is applied
   * to the caller's existing session (and the reissued token's own expiry)
   * immediately — "session expiry follows organization policy".
   */
  @Post(':organizationId/select')
  @UseGuards(OrganizationMembershipGuard)
  async select(
    @Param('organizationId') organizationId: string,
    @CurrentUser() user: AuthenticatedUser,
    @CurrentMembership() membership: MembershipWithRole,
  ) {
    const organization = await this.organizationsService.getForUser(
      organizationId,
      user.id,
    );
    await this.organizationsService.recordSelectedWorkspace(
      organizationId,
      user.id,
    );

    const ttlMinutes =
      organization.sessionTtlMinutes ?? this.sessions.defaultTtlMinutes();
    await this.sessions.applyTtlPolicy(user.sessionId, ttlMinutes);

    const accessToken = this.tokens.sign(
      {
        sub: user.id,
        email: user.email,
        sid: user.sessionId,
        organizationId,
        role: membership.role.name,
      },
      ttlMinutes * 60,
    );

    return { organization, role: membership.role, accessToken };
  }
}
