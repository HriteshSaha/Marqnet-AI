import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { TokenService } from './token.service.js';
import {
  SessionsService,
  type SessionMeta,
} from '../sessions/sessions.service.js';
import { MfaService } from './mfa.service.js';
import type { RegisterDto } from './dto/register.dto.js';
import type { LoginDto } from './dto/login.dto.js';
import type { VerifyMfaDto } from './dto/verify-mfa.dto.js';
import type { ChangePasswordDto } from './dto/change-password.dto.js';

export interface AuthenticatedUser {
  id: string;
  email: string;
  fullName: string | null;
  /** Session the presented token is bound to; revoking it invalidates the token immediately. */
  sessionId: string;
  /**
   * Workspace embedded in the presented access token, if any (EP-01-US-03).
   * Purely a UX convenience for the client — every tenant-scoped route still
   * re-validates membership against the `:organizationId` in the URL via
   * OrganizationMembershipGuard, so a stale or mismatched claim here can
   * never grant access it wouldn't otherwise have.
   */
  activeOrganizationId?: string;
}

export interface WorkspaceSummary {
  id: string;
  name: string;
  slug: string;
  type: string;
  role: string;
}

export interface SessionSummary {
  id: string;
  createdAt: Date;
  expiresAt: Date;
  ipAddress: string | null;
  userAgent: string | null;
  isCurrent: boolean;
}

const MFA_REQUIRED_ERROR = {
  statusCode: 401,
  error: 'mfa_required',
  message: 'Multi-factor authentication code required',
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokens: TokenService,
    private readonly sessions: SessionsService,
    private readonly mfa: MfaService,
  ) {}

  async register(
    dto: RegisterDto,
    meta: SessionMeta = {},
  ): Promise<{ user: AuthenticatedUser; accessToken: string }> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('An account with this email already exists');
    }

    const passwordHash = await argon2.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        fullName: dto.fullName ?? null,
      },
    });

    return this.createSessionAndToken(user, meta);
  }

  async login(
    dto: LoginDto,
    meta: SessionMeta = {},
  ): Promise<{ user: AuthenticatedUser; accessToken: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      await this.recordLoginFailure(null, dto.email, 'unknown_account');
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordValid = await argon2.verify(user.passwordHash, dto.password);
    if (!passwordValid) {
      await this.recordLoginFailure(user.id, dto.email, 'invalid_password');
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.mfaEnabled) {
      if (!dto.mfaCode) {
        throw new UnauthorizedException(MFA_REQUIRED_ERROR);
      }
      // mfaSecret is always set once mfaEnabled is true; guarded defensively.
      if (
        !user.mfaSecret ||
        !(await this.mfa.verify(dto.mfaCode, user.mfaSecret))
      ) {
        await this.recordLoginFailure(user.id, dto.email, 'invalid_mfa_code');
        throw new UnauthorizedException('Invalid authentication code');
      }
    }

    const result = await this.createSessionAndToken(user, meta);
    await this.prisma.auditLog.create({
      data: {
        actorUserId: user.id,
        action: AuditAction.LOGIN_SUCCEEDED,
        targetType: 'User',
        targetId: user.id,
        metadata: {
          ipAddress: meta.ipAddress ?? null,
          userAgent: meta.userAgent ?? null,
        },
      },
    });
    return result;
  }

  /**
   * Workspace selector data for EP-01-US-03: every organization the user is
   * authorized for, plus which one (if any) they last switched into.
   */
  async getProfile(userId: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    const memberships = await this.prisma.membership.findMany({
      where: { userId, organization: { archivedAt: null } },
      include: { organization: true, role: true },
      orderBy: { createdAt: 'asc' },
    });

    const organizations: WorkspaceSummary[] = memberships.map((m) => ({
      id: m.organization.id,
      name: m.organization.name,
      slug: m.organization.slug,
      type: m.organization.type,
      role: m.role.name,
    }));

    const currentOrganizationId = organizations.some(
      (o) => o.id === user.lastSelectedOrganizationId,
    )
      ? user.lastSelectedOrganizationId
      : null;

    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        mfaEnabled: user.mfaEnabled,
      },
      organizations,
      currentOrganizationId,
    };
  }

  /** Begins MFA enrollment: generates (or regenerates, if not yet confirmed) a pending TOTP secret. */
  async startMfaSetup(
    userId: string,
  ): Promise<{ secret: string; otpauthUrl: string }> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (user.mfaEnabled) {
      throw new ConflictException(
        'MFA is already enabled; disable it before setting up again',
      );
    }

    const secret = this.mfa.generateSecret();
    await this.prisma.user.update({
      where: { id: userId },
      data: { mfaSecret: secret },
    });
    return { secret, otpauthUrl: this.mfa.keyUri(user.email, secret) };
  }

  /** Confirms MFA enrollment by validating a code generated from the pending secret. */
  async confirmMfaSetup(userId: string, dto: VerifyMfaDto): Promise<void> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (user.mfaEnabled) {
      throw new ConflictException('MFA is already enabled');
    }
    if (!user.mfaSecret) {
      throw new BadRequestException('Start MFA setup before confirming it');
    }
    if (!(await this.mfa.verify(dto.code, user.mfaSecret))) {
      throw new UnauthorizedException('Invalid authentication code');
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: userId },
        data: { mfaEnabled: true },
      }),
      this.prisma.auditLog.create({
        data: {
          actorUserId: userId,
          action: AuditAction.MFA_ENABLED,
          targetType: 'User',
          targetId: userId,
        },
      }),
    ]);
  }

  /** Disables MFA; requires a currently-valid code as proof of possession. */
  async disableMfa(userId: string, dto: VerifyMfaDto): Promise<void> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (!user.mfaEnabled || !user.mfaSecret) {
      throw new ConflictException('MFA is not enabled');
    }
    if (!(await this.mfa.verify(dto.code, user.mfaSecret))) {
      throw new UnauthorizedException('Invalid authentication code');
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: userId },
        data: { mfaEnabled: false, mfaSecret: null },
      }),
      this.prisma.auditLog.create({
        data: {
          actorUserId: userId,
          action: AuditAction.MFA_DISABLED,
          targetType: 'User',
          targetId: userId,
        },
      }),
    ]);
  }

  /** Active sessions with device/time/IP metadata (EP-02-US-03), newest first. */
  async listSessions(
    userId: string,
    currentSessionId: string,
  ): Promise<SessionSummary[]> {
    const sessions = await this.sessions.listActiveForUser(userId);
    return sessions.map((s) => ({
      id: s.id,
      createdAt: s.createdAt,
      expiresAt: s.expiresAt,
      ipAddress: s.ipAddress,
      userAgent: s.userAgent,
      isCurrent: s.id === currentSessionId,
    }));
  }

  /**
   * Revokes a single session. Ownership is enforced so a user can only ever
   * revoke their own sessions — an id belonging to someone else is reported
   * as not found, matching the tenant-isolation convention used elsewhere.
   */
  async revokeSession(sessionId: string, userId: string): Promise<void> {
    const revoked = await this.sessions.revokeOwnedByUser(sessionId, userId);
    if (!revoked) {
      throw new NotFoundException('Session not found');
    }
    await this.prisma.auditLog.create({
      data: {
        actorUserId: userId,
        action: AuditAction.SESSION_REVOKED,
        targetType: 'Session',
        targetId: sessionId,
      },
    });
  }

  /** Revokes every active session for the user; by default keeps the one making this request alive. */
  async revokeAllSessions(
    userId: string,
    currentSessionId: string,
    keepCurrent = true,
  ): Promise<void> {
    await this.sessions.revokeAllForUser(
      userId,
      keepCurrent ? currentSessionId : undefined,
    );
    await this.prisma.auditLog.create({
      data: {
        actorUserId: userId,
        action: AuditAction.SESSION_REVOKED_ALL,
        targetType: 'User',
        targetId: userId,
        metadata: { keptCurrentSession: keepCurrent },
      },
    });
  }

  /**
   * Changes the user's password and, as a security measure, revokes every
   * session for the account — including the one making this request, so the
   * only way back in afterwards is a fresh login with the new password.
   */
  async changePassword(userId: string, dto: ChangePasswordDto): Promise<void> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    const currentValid = await argon2.verify(
      user.passwordHash,
      dto.currentPassword,
    );
    if (!currentValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const passwordHash = await argon2.hash(dto.newPassword);
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });
    await this.sessions.revokeAllForUser(userId);
    await this.prisma.auditLog.create({
      data: {
        actorUserId: userId,
        action: AuditAction.PASSWORD_CHANGED,
        targetType: 'User',
        targetId: userId,
      },
    });
  }

  private async createSessionAndToken(
    user: { id: string; email: string; fullName: string | null },
    meta: SessionMeta,
  ): Promise<{ user: AuthenticatedUser; accessToken: string }> {
    const ttlMinutes = this.sessions.defaultTtlMinutes();
    const session = await this.sessions.create(user.id, meta, ttlMinutes);
    const accessToken = this.tokens.sign(
      { sub: user.id, email: user.email, sid: session.id },
      ttlMinutes * 60,
    );
    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        sessionId: session.id,
      },
      accessToken,
    };
  }

  private async recordLoginFailure(
    userId: string | null,
    email: string,
    reason: string,
  ): Promise<void> {
    await this.prisma.auditLog.create({
      data: {
        actorUserId: userId,
        action: AuditAction.LOGIN_FAILED,
        targetType: 'User',
        targetId: userId,
        metadata: { email, reason },
      },
    });
  }
}
