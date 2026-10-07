import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { SessionsService } from './sessions.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

type MockPrisma = {
  session: {
    create: ReturnType<typeof vi.fn>;
    findUnique: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
    updateMany: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
  };
};

describe('SessionsService', () => {
  let service: SessionsService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = {
      session: {
        create: vi.fn(),
        findUnique: vi.fn(),
        update: vi.fn(),
        updateMany: vi.fn(),
        findMany: vi.fn(),
      },
    };
    const moduleRef = await Test.createTestingModule({
      providers: [
        SessionsService,
        { provide: PrismaService, useValue: prisma },
        { provide: ConfigService, useValue: { get: vi.fn(() => '1440') } },
      ],
    }).compile();
    service = moduleRef.get(SessionsService);
  });

  describe('validate', () => {
    it('returns null when the session does not exist', async () => {
      prisma.session.findUnique.mockResolvedValue(null);
      expect(await service.validate('missing')).toBeNull();
    });

    it('returns null when the session has been revoked', async () => {
      prisma.session.findUnique.mockResolvedValue({
        id: 's-1',
        revokedAt: new Date(),
        expiresAt: new Date(Date.now() + 10_000),
      });
      expect(await service.validate('s-1')).toBeNull();
    });

    it('returns null when the session has expired', async () => {
      prisma.session.findUnique.mockResolvedValue({
        id: 's-1',
        revokedAt: null,
        expiresAt: new Date(Date.now() - 10_000),
      });
      expect(await service.validate('s-1')).toBeNull();
    });

    it('returns the session when it is active', async () => {
      const session = {
        id: 's-1',
        revokedAt: null,
        expiresAt: new Date(Date.now() + 10_000),
      };
      prisma.session.findUnique.mockResolvedValue(session);
      expect(await service.validate('s-1')).toEqual(session);
    });
  });

  describe('create', () => {
    it('computes expiresAt from the given TTL in minutes', async () => {
      prisma.session.create.mockResolvedValue({ id: 's-1' });
      const before = Date.now();

      await service.create(
        'user-1',
        { ipAddress: '1.2.3.4', userAgent: 'curl' },
        30,
      );

      const call = prisma.session.create.mock.calls[0][0];
      expect(call.data.userId).toBe('user-1');
      expect(call.data.ipAddress).toBe('1.2.3.4');
      const expiresAt = call.data.expiresAt as Date;
      expect(expiresAt.getTime()).toBeGreaterThanOrEqual(
        before + 30 * 60_000 - 1000,
      );
      expect(expiresAt.getTime()).toBeLessThanOrEqual(
        before + 30 * 60_000 + 5000,
      );
    });
  });

  describe('revoke / revokeAllForUser', () => {
    it('only revokes sessions that are not already revoked', async () => {
      prisma.session.updateMany.mockResolvedValue({ count: 1 });
      await service.revoke('s-1');
      expect(prisma.session.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 's-1', revokedAt: null } }),
      );
    });

    it('can revoke all of a user sessions except the current one', async () => {
      prisma.session.updateMany.mockResolvedValue({ count: 2 });
      await service.revokeAllForUser('user-1', 's-current');
      expect(prisma.session.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            userId: 'user-1',
            revokedAt: null,
            id: { not: 's-current' },
          },
        }),
      );
    });
  });

  describe('revokeOwnedByUser', () => {
    it('scopes the revocation to the owning user and reports success', async () => {
      prisma.session.updateMany.mockResolvedValue({ count: 1 });

      const result = await service.revokeOwnedByUser('s-1', 'user-1');

      expect(result).toBe(true);
      expect(prisma.session.updateMany).toHaveBeenCalledWith({
        where: { id: 's-1', userId: 'user-1', revokedAt: null },
        data: { revokedAt: expect.any(Date) },
      });
    });

    it('reports failure when no matching, owned, active session exists', async () => {
      prisma.session.updateMany.mockResolvedValue({ count: 0 });

      const result = await service.revokeOwnedByUser(
        's-1',
        'someone-elses-user-id',
      );

      expect(result).toBe(false);
    });
  });
});
