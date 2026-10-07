import { Test } from '@nestjs/testing';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
import { AuthService } from './auth.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { TokenService } from './token.service.js';
import { SessionsService } from '../sessions/sessions.service.js';
import { MfaService } from './mfa.service.js';
import { OrganizationType } from '../generated/prisma/enums.js';

type MockPrisma = {
  user: {
    findUnique: ReturnType<typeof vi.fn>;
    findUniqueOrThrow: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  membership: { findMany: ReturnType<typeof vi.fn> };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

describe('AuthService', () => {
  let service: AuthService;
  let prisma: MockPrisma;
  let tokens: { sign: ReturnType<typeof vi.fn> };
  let sessions: {
    create: ReturnType<typeof vi.fn>;
    defaultTtlMinutes: ReturnType<typeof vi.fn>;
    listActiveForUser: ReturnType<typeof vi.fn>;
    revokeOwnedByUser: ReturnType<typeof vi.fn>;
    revokeAllForUser: ReturnType<typeof vi.fn>;
  };
  let mfa: {
    generateSecret: ReturnType<typeof vi.fn>;
    keyUri: ReturnType<typeof vi.fn>;
    verify: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    prisma = {
      user: {
        findUnique: vi.fn(),
        findUniqueOrThrow: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
      },
      membership: { findMany: vi.fn() },
      auditLog: { create: vi.fn() },
      $transaction: vi.fn(async (ops: unknown[]) => Promise.all(ops)),
    };
    tokens = { sign: vi.fn(() => 'signed.jwt.token') };
    sessions = {
      create: vi.fn(),
      defaultTtlMinutes: vi.fn(() => 1440),
      listActiveForUser: vi.fn(),
      revokeOwnedByUser: vi.fn(),
      revokeAllForUser: vi.fn(),
    };
    mfa = { generateSecret: vi.fn(), keyUri: vi.fn(), verify: vi.fn() };

    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prisma },
        { provide: TokenService, useValue: tokens },
        { provide: SessionsService, useValue: sessions },
        { provide: MfaService, useValue: mfa },
      ],
    }).compile();
    service = moduleRef.get(AuthService);
  });

  describe('login', () => {
    it('rejects an unknown email with a generic message and logs the attempt without revealing non-existence', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({ email: 'ghost@example.com', password: 'x' }),
      ).rejects.toThrow(UnauthorizedException);
      await expect(
        service.login({ email: 'ghost@example.com', password: 'x' }),
      ).rejects.toThrow('Invalid email or password');
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'auth.login_failed',
            actorUserId: null,
          }),
        }),
      );
    });

    it('rejects a wrong password with the same generic message', async () => {
      const passwordHash = await argon2.hash('correct-password');
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        passwordHash,
        fullName: null,
        mfaEnabled: false,
        mfaSecret: null,
      });

      await expect(
        service.login({ email: 'a@example.com', password: 'wrong' }),
      ).rejects.toThrow('Invalid email or password');
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'auth.login_failed' }),
        }),
      );
    });

    it('creates a session and signs a token bound to it on success', async () => {
      const passwordHash = await argon2.hash('correct-password');
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        passwordHash,
        fullName: null,
        mfaEnabled: false,
        mfaSecret: null,
      });
      sessions.create.mockResolvedValue({ id: 'session-1' });

      const result = await service.login({
        email: 'a@example.com',
        password: 'correct-password',
      });

      expect(sessions.create).toHaveBeenCalledWith('user-1', {}, 1440);
      expect(tokens.sign).toHaveBeenCalledWith(
        { sub: 'user-1', email: 'a@example.com', sid: 'session-1' },
        1440 * 60,
      );
      expect(result.user.sessionId).toBe('session-1');
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'auth.login_succeeded' }),
        }),
      );
    });

    it('requires an MFA code when MFA is enabled, without yet revealing whether the code would be valid', async () => {
      const passwordHash = await argon2.hash('correct-password');
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        passwordHash,
        fullName: null,
        mfaEnabled: true,
        mfaSecret: 'SECRET',
      });

      await expect(
        service.login({ email: 'a@example.com', password: 'correct-password' }),
      ).rejects.toMatchObject({
        response: expect.objectContaining({ error: 'mfa_required' }),
      });
      expect(sessions.create).not.toHaveBeenCalled();
    });

    it('rejects an invalid MFA code and logs the attempt', async () => {
      const passwordHash = await argon2.hash('correct-password');
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        passwordHash,
        fullName: null,
        mfaEnabled: true,
        mfaSecret: 'SECRET',
      });
      mfa.verify.mockResolvedValue(false);

      await expect(
        service.login({
          email: 'a@example.com',
          password: 'correct-password',
          mfaCode: '000000',
        }),
      ).rejects.toThrow('Invalid authentication code');
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            metadata: expect.objectContaining({ reason: 'invalid_mfa_code' }),
          }),
        }),
      );
    });

    it('logs in successfully with a valid MFA code', async () => {
      const passwordHash = await argon2.hash('correct-password');
      prisma.user.findUnique.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        passwordHash,
        fullName: null,
        mfaEnabled: true,
        mfaSecret: 'SECRET',
      });
      mfa.verify.mockResolvedValue(true);
      sessions.create.mockResolvedValue({ id: 'session-1' });

      const result = await service.login({
        email: 'a@example.com',
        password: 'correct-password',
        mfaCode: '123456',
      });

      expect(result.accessToken).toBe('signed.jwt.token');
    });
  });

  describe('MFA enrollment', () => {
    it('starts setup by generating and persisting a pending secret', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        mfaEnabled: false,
      });
      mfa.generateSecret.mockReturnValue('BASE32SECRET');
      mfa.keyUri.mockReturnValue('otpauth://totp/...');

      const result = await service.startMfaSetup('user-1');

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 'user-1' },
        data: { mfaSecret: 'BASE32SECRET' },
      });
      expect(result).toEqual({
        secret: 'BASE32SECRET',
        otpauthUrl: 'otpauth://totp/...',
      });
    });

    it('refuses to start setup again once MFA is already enabled', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        mfaEnabled: true,
      });

      await expect(service.startMfaSetup('user-1')).rejects.toBeInstanceOf(
        ConflictException,
      );
    });

    it('confirms setup and flips mfaEnabled only after a valid code', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        mfaEnabled: false,
        mfaSecret: 'BASE32SECRET',
      });
      mfa.verify.mockResolvedValue(true);

      await service.confirmMfaSetup('user-1', { code: '123456' });

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 'user-1' },
        data: { mfaEnabled: true },
      });
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'auth.mfa_enabled' }),
        }),
      );
    });

    it('rejects confirmation with an invalid code', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        mfaEnabled: false,
        mfaSecret: 'BASE32SECRET',
      });
      mfa.verify.mockResolvedValue(false);

      await expect(
        service.confirmMfaSetup('user-1', { code: '000000' }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it('disables MFA only with a valid proof-of-possession code, and clears the secret', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        mfaEnabled: true,
        mfaSecret: 'BASE32SECRET',
      });
      mfa.verify.mockResolvedValue(true);

      await service.disableMfa('user-1', { code: '123456' });

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 'user-1' },
        data: { mfaEnabled: false, mfaSecret: null },
      });
    });
  });

  describe('listSessions (EP-02-US-03)', () => {
    it('flags the session the request itself is using as current', async () => {
      sessions.listActiveForUser.mockResolvedValue([
        {
          id: 's-current',
          createdAt: new Date(),
          expiresAt: new Date(),
          ipAddress: '1.1.1.1',
          userAgent: 'A',
        },
        {
          id: 's-other',
          createdAt: new Date(),
          expiresAt: new Date(),
          ipAddress: '2.2.2.2',
          userAgent: 'B',
        },
      ]);

      const result = await service.listSessions('user-1', 's-current');

      expect(result).toEqual([
        expect.objectContaining({ id: 's-current', isCurrent: true }),
        expect.objectContaining({ id: 's-other', isCurrent: false }),
      ]);
    });
  });

  describe('revokeSession (EP-02-US-03)', () => {
    it('revokes an owned session and logs it', async () => {
      sessions.revokeOwnedByUser.mockResolvedValue(true);

      await service.revokeSession('s-1', 'user-1');

      expect(sessions.revokeOwnedByUser).toHaveBeenCalledWith('s-1', 'user-1');
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'auth.session_revoked',
            targetId: 's-1',
            actorUserId: 'user-1',
          }),
        }),
      );
    });

    it('reports not-found rather than revoking a session owned by someone else', async () => {
      sessions.revokeOwnedByUser.mockResolvedValue(false);

      await expect(service.revokeSession('s-1', 'user-1')).rejects.toThrow(
        'Session not found',
      );
      expect(prisma.auditLog.create).not.toHaveBeenCalled();
    });
  });

  describe('revokeAllSessions (EP-02-US-03)', () => {
    it('defaults to keeping the current session alive', async () => {
      await service.revokeAllSessions('user-1', 's-current');

      expect(sessions.revokeAllForUser).toHaveBeenCalledWith(
        'user-1',
        's-current',
      );
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'auth.session_revoked_all',
            metadata: { keptCurrentSession: true },
          }),
        }),
      );
    });

    it('can revoke truly every session, including the current one, when asked', async () => {
      await service.revokeAllSessions('user-1', 's-current', false);

      expect(sessions.revokeAllForUser).toHaveBeenCalledWith(
        'user-1',
        undefined,
      );
    });
  });

  describe('changePassword (EP-02-US-03)', () => {
    it('rejects an incorrect current password without touching sessions', async () => {
      const passwordHash = await argon2.hash('correct-current');
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        passwordHash,
      });

      await expect(
        service.changePassword('user-1', {
          currentPassword: 'wrong',
          newPassword: 'new-password-123',
        }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
      expect(sessions.revokeAllForUser).not.toHaveBeenCalled();
    });

    it('updates the password hash and revokes every session for the account', async () => {
      const passwordHash = await argon2.hash('correct-current');
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        passwordHash,
      });

      await service.changePassword('user-1', {
        currentPassword: 'correct-current',
        newPassword: 'new-password-123',
      });

      expect(prisma.user.update).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'user-1' } }),
      );
      // Revokes ALL sessions, with no "except current" — a password change forces re-login everywhere.
      expect(sessions.revokeAllForUser).toHaveBeenCalledWith('user-1');
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'auth.password_changed' }),
        }),
      );
    });
  });

  describe('getProfile (EP-01-US-03 workspace selector)', () => {
    it('lists only authorized, non-archived workspaces with the caller role', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        fullName: null,
        lastSelectedOrganizationId: null,
      });
      prisma.membership.findMany.mockResolvedValue([
        {
          role: { name: 'Admin' },
          organization: {
            id: 'org-1',
            name: 'Org One',
            slug: 'org-one',
            type: OrganizationType.AGENCY,
          },
        },
      ]);

      const profile = await service.getProfile('user-1');

      expect(prisma.membership.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { userId: 'user-1', organization: { archivedAt: null } },
        }),
      );
      expect(profile.organizations).toEqual([
        {
          id: 'org-1',
          name: 'Org One',
          slug: 'org-one',
          type: OrganizationType.AGENCY,
          role: 'Admin',
        },
      ]);
    });

    it('identifies the current workspace when it is among the authorized ones', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        fullName: null,
        lastSelectedOrganizationId: 'org-1',
      });
      prisma.membership.findMany.mockResolvedValue([
        {
          role: { name: 'Owner' },
          organization: {
            id: 'org-1',
            name: 'Org One',
            slug: 'org-one',
            type: OrganizationType.AGENCY,
          },
        },
      ]);

      const profile = await service.getProfile('user-1');

      expect(profile.currentOrganizationId).toBe('org-1');
    });

    it('does not surface a stale selection that is no longer authorized (e.g. membership revoked)', async () => {
      prisma.user.findUniqueOrThrow.mockResolvedValue({
        id: 'user-1',
        email: 'a@example.com',
        fullName: null,
        lastSelectedOrganizationId: 'org-removed',
      });
      prisma.membership.findMany.mockResolvedValue([]);

      const profile = await service.getProfile('user-1');

      expect(profile.currentOrganizationId).toBeNull();
      expect(profile.organizations).toEqual([]);
    });
  });
});
