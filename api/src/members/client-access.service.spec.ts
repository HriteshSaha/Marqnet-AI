import { Test } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ClientAccessService } from './client-access.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ClientAccessScope } from '../generated/prisma/enums.js';

type MockPrisma = {
  membership: {
    findUnique: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  membershipClientAccess: {
    findMany: ReturnType<typeof vi.fn>;
    deleteMany: ReturnType<typeof vi.fn>;
    createMany: ReturnType<typeof vi.fn>;
  };
  client: { count: ReturnType<typeof vi.fn> };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    membership: { findUnique: vi.fn(), update: vi.fn() },
    membershipClientAccess: {
      findMany: vi.fn(),
      deleteMany: vi.fn(),
      createMany: vi.fn(),
    },
    client: { count: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(async (fn: (tx: unknown) => unknown) =>
      fn({
        membership: { update: vi.fn().mockResolvedValue({}) },
        membershipClientAccess: {
          deleteMany: vi.fn().mockResolvedValue({}),
          createMany: vi.fn().mockResolvedValue({}),
        },
        auditLog: { create: vi.fn().mockResolvedValue({}) },
      }),
    ),
  };
}

describe('ClientAccessService (EP-03-US-02)', () => {
  let service: ClientAccessService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [
        ClientAccessService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = moduleRef.get(ClientAccessService);
  });

  describe('getAccessibleClientIds', () => {
    it('returns null (unrestricted) for a membership with ALL scope', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        clientAccessScope: ClientAccessScope.ALL,
      });

      expect(await service.getAccessibleClientIds('m-1')).toBeNull();
      expect(prisma.membershipClientAccess.findMany).not.toHaveBeenCalled();
    });

    it('returns null for a membership that no longer exists (fails open to the existing guard chain, not silently restrictive)', async () => {
      prisma.membership.findUnique.mockResolvedValue(null);

      expect(await service.getAccessibleClientIds('missing')).toBeNull();
    });

    it('returns the explicit client id list for a RESTRICTED membership', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        clientAccessScope: ClientAccessScope.RESTRICTED,
      });
      prisma.membershipClientAccess.findMany.mockResolvedValue([
        { clientId: 'c-1' },
        { clientId: 'c-2' },
      ]);

      expect(await service.getAccessibleClientIds('m-1')).toEqual([
        'c-1',
        'c-2',
      ]);
    });

    it('returns an empty array (not null) for a RESTRICTED membership with zero grants', async () => {
      prisma.membership.findUnique.mockResolvedValue({
        clientAccessScope: ClientAccessScope.RESTRICTED,
      });
      prisma.membershipClientAccess.findMany.mockResolvedValue([]);

      expect(await service.getAccessibleClientIds('m-1')).toEqual([]);
    });
  });

  describe('setAccess', () => {
    it('404s when the target user is not a member of the organization', async () => {
      prisma.membership.findUnique.mockResolvedValue(null);

      await expect(
        service.setAccess(
          'org-1',
          'user-x',
          { scope: ClientAccessScope.ALL },
          'actor-1',
        ),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('rejects a clientId that does not belong to the organization', async () => {
      prisma.membership.findUnique.mockResolvedValue({ id: 'm-1' });
      prisma.client.count.mockResolvedValue(1); // only 1 of 2 given ids is valid

      await expect(
        service.setAccess(
          'org-1',
          'user-1',
          {
            scope: ClientAccessScope.RESTRICTED,
            clientIds: ['valid-id', 'foreign-id'],
          },
          'actor-1',
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('sets RESTRICTED access with a validated client list and audits it', async () => {
      prisma.membership.findUnique
        .mockResolvedValueOnce({ id: 'm-1' }) // initial lookup
        .mockResolvedValueOnce({
          id: 'm-1',
          clientAccessScope: ClientAccessScope.RESTRICTED,
          clientAccess: [],
        });
      prisma.client.count.mockResolvedValue(2);

      let transactionTx: any;
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) => {
          transactionTx = {
            membership: { update: vi.fn().mockResolvedValue({}) },
            membershipClientAccess: {
              deleteMany: vi.fn().mockResolvedValue({}),
              createMany: vi.fn().mockResolvedValue({}),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          };
          await fn(transactionTx);
        },
      );

      await service.setAccess(
        'org-1',
        'user-1',
        { scope: ClientAccessScope.RESTRICTED, clientIds: ['c-1', 'c-2'] },
        'actor-1',
      );

      expect(transactionTx.membership.update).toHaveBeenCalledWith({
        where: { id: 'm-1' },
        data: { clientAccessScope: ClientAccessScope.RESTRICTED },
      });
      expect(
        transactionTx.membershipClientAccess.createMany,
      ).toHaveBeenCalledWith({
        data: [
          { membershipId: 'm-1', clientId: 'c-1' },
          { membershipId: 'm-1', clientId: 'c-2' },
        ],
      });
      expect(transactionTx.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'member.client_access_updated',
          }),
        }),
      );
    });

    it('clears any existing grants when switching back to ALL', async () => {
      prisma.membership.findUnique
        .mockResolvedValueOnce({ id: 'm-1' })
        .mockResolvedValueOnce({
          id: 'm-1',
          clientAccessScope: ClientAccessScope.ALL,
          clientAccess: [],
        });

      let transactionTx: any;
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) => {
          transactionTx = {
            membership: { update: vi.fn().mockResolvedValue({}) },
            membershipClientAccess: {
              deleteMany: vi.fn().mockResolvedValue({}),
              createMany: vi.fn().mockResolvedValue({}),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          };
          await fn(transactionTx);
        },
      );

      await service.setAccess(
        'org-1',
        'user-1',
        { scope: ClientAccessScope.ALL },
        'actor-1',
      );

      expect(
        transactionTx.membershipClientAccess.deleteMany,
      ).toHaveBeenCalledWith({ where: { membershipId: 'm-1' } });
      expect(
        transactionTx.membershipClientAccess.createMany,
      ).not.toHaveBeenCalled();
      expect(prisma.client.count).not.toHaveBeenCalled();
    });
  });
});
