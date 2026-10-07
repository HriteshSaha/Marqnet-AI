import { Test } from '@nestjs/testing';
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { MembersService } from './members.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { SystemRoleKey } from '../generated/prisma/enums.js';

type MockPrisma = {
  membership: {
    findMany: ReturnType<typeof vi.fn>;
    findUnique: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
    count: ReturnType<typeof vi.fn>;
  };
  role: { findFirst: ReturnType<typeof vi.fn> };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    membership: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      count: vi.fn(),
    },
    role: { findFirst: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(async (fn: (tx: unknown) => unknown) =>
      fn({
        membership: { update: vi.fn().mockResolvedValue({}) },
        auditLog: { create: vi.fn().mockResolvedValue({}) },
      }),
    ),
  };
}

describe('MembersService', () => {
  let service: MembersService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [MembersService, { provide: PrismaService, useValue: prisma }],
    }).compile();
    service = moduleRef.get(MembersService);
  });

  describe('updateRole', () => {
    it('404s when the target user is not a member of the organization', async () => {
      prisma.membership.findUnique.mockResolvedValue(null);

      await expect(
        service.updateRole('org-1', 'user-x', 'role-1', 'actor-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('rejects a roleId that does not belong to this organization', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        id: 'm-1',
        role: { name: 'Member', systemKey: SystemRoleKey.MEMBER },
      });
      prisma.role.findFirst.mockResolvedValue(null);

      await expect(
        service.updateRole('org-1', 'user-1', 'role-other-org', 'actor-1'),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('refuses to demote the last remaining Owner', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        id: 'm-1',
        role: { name: 'Owner', systemKey: SystemRoleKey.OWNER },
      });
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-admin',
        systemKey: SystemRoleKey.ADMIN,
      });
      prisma.membership.count.mockResolvedValue(0); // no other owners

      await expect(
        service.updateRole('org-1', 'user-1', 'role-admin', 'actor-1'),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('allows demoting an Owner when another Owner remains', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        id: 'm-1',
        role: { name: 'Owner', systemKey: SystemRoleKey.OWNER },
      });
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-admin',
        systemKey: SystemRoleKey.ADMIN,
      });
      prisma.membership.count.mockResolvedValue(1); // one other owner exists

      await expect(
        service.updateRole('org-1', 'user-1', 'role-admin', 'actor-1'),
      ).resolves.toBeDefined();
    });

    it('allows reassigning a non-owner member freely', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        id: 'm-1',
        role: { name: 'Member', systemKey: SystemRoleKey.MEMBER },
      });
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-admin',
        systemKey: SystemRoleKey.ADMIN,
      });

      await expect(
        service.updateRole('org-1', 'user-1', 'role-admin', 'actor-1'),
      ).resolves.toBeDefined();
      expect(prisma.membership.count).not.toHaveBeenCalled();
    });
  });
});
