import { Test } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ClientStatus } from '../generated/prisma/enums.js';

type MockPrisma = {
  client: {
    findUnique: ReturnType<typeof vi.fn>;
    findFirst: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    client: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(),
  };
}

describe('ClientsService', () => {
  let service: ClientsService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [ClientsService, { provide: PrismaService, useValue: prisma }],
    }).compile();
    service = moduleRef.get(ClientsService);
  });

  describe('create', () => {
    it('creates a client scoped to the organization and writes an audit log', async () => {
      prisma.client.findUnique.mockResolvedValue(null);
      const created = {
        id: 'client-1',
        organizationId: 'org-1',
        name: 'Acme Co',
        slug: 'acme-co',
      };
      const txCreate = vi.fn().mockResolvedValue(created);
      const txAudit = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({ client: { create: txCreate }, auditLog: { create: txAudit } }),
      );

      const result = await service.create(
        'org-1',
        { name: 'Acme Co' },
        'user-1',
      );

      expect(result).toEqual(created);
      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            organizationId: 'org-1',
            slug: 'acme-co',
          }),
        }),
      );
      expect(txAudit).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'client.created',
            organizationId: 'org-1',
            targetId: 'client-1',
          }),
        }),
      );
    });

    it('scopes slug uniqueness per-organization (lookup keyed by organizationId_slug)', async () => {
      prisma.client.findUnique
        .mockResolvedValueOnce({ id: 'existing' })
        .mockResolvedValueOnce(null);
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            client: {
              create: vi
                .fn()
                .mockResolvedValue({ id: 'client-2', slug: 'acme-co-2' }),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.create(
        'org-1',
        { name: 'Acme Co' },
        'user-1',
      );

      expect(result).toEqual({ id: 'client-2', slug: 'acme-co-2' });
      expect(prisma.client.findUnique).toHaveBeenNthCalledWith(1, {
        where: {
          organizationId_slug: { organizationId: 'org-1', slug: 'acme-co' },
        },
      });
    });
  });

  describe('getForOrganization', () => {
    it('throws NotFound when the client does not belong to the organization', async () => {
      prisma.client.findFirst.mockResolvedValue(null);
      await expect(
        service.getForOrganization('org-1', 'client-x', null),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('throws NotFound (not Forbidden) for a real client outside a RESTRICTED scope (EP-03-US-02)', async () => {
      prisma.client.findFirst.mockResolvedValue({
        id: 'client-1',
        status: ClientStatus.ACTIVE,
      });
      await expect(
        service.getForOrganization('org-1', 'client-1', ['other-client-id']),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('allows a client that is within the RESTRICTED scope', async () => {
      const client = { id: 'client-1', status: ClientStatus.ACTIVE };
      prisma.client.findFirst.mockResolvedValue(client);
      await expect(
        service.getForOrganization('org-1', 'client-1', ['client-1']),
      ).resolves.toEqual(client);
    });
  });

  describe('archive / restore', () => {
    it('archives an active client and records an audit entry', async () => {
      prisma.client.findFirst.mockResolvedValue({
        id: 'client-1',
        status: ClientStatus.ACTIVE,
      });
      const txUpdate = vi
        .fn()
        .mockResolvedValue({ id: 'client-1', status: ClientStatus.ARCHIVED });
      const txAudit = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({ client: { update: txUpdate }, auditLog: { create: txAudit } }),
      );

      const result = await service.archive('org-1', 'client-1', 'user-1', null);

      expect(result.status).toBe(ClientStatus.ARCHIVED);
      expect(txAudit).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'client.archived' }),
        }),
      );
    });

    it('rejects archiving an already-archived client', async () => {
      prisma.client.findFirst.mockResolvedValue({
        id: 'client-1',
        status: ClientStatus.ARCHIVED,
      });
      await expect(
        service.archive('org-1', 'client-1', 'user-1', null),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('refuses to archive a client outside a RESTRICTED scope (EP-03-US-02)', async () => {
      prisma.client.findFirst.mockResolvedValue({
        id: 'client-1',
        status: ClientStatus.ACTIVE,
      });
      await expect(
        service.archive('org-1', 'client-1', 'user-1', ['other-client-id']),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('restores an archived client', async () => {
      prisma.client.findFirst.mockResolvedValue({
        id: 'client-1',
        status: ClientStatus.ARCHIVED,
      });
      const txUpdate = vi
        .fn()
        .mockResolvedValue({ id: 'client-1', status: ClientStatus.ACTIVE });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            client: { update: txUpdate },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.restore('org-1', 'client-1', 'user-1', null);

      expect(result.status).toBe(ClientStatus.ACTIVE);
    });

    it('rejects restoring an already-active client', async () => {
      prisma.client.findFirst.mockResolvedValue({
        id: 'client-1',
        status: ClientStatus.ACTIVE,
      });
      await expect(
        service.restore('org-1', 'client-1', 'user-1', null),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });

  describe('listForOrganization', () => {
    it('excludes archived clients by default', async () => {
      prisma.client.findMany.mockResolvedValue([]);

      await service.listForOrganization('org-1', false, null);

      expect(prisma.client.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { organizationId: 'org-1', status: ClientStatus.ACTIVE },
        }),
      );
    });

    it('includes archived clients when requested', async () => {
      prisma.client.findMany.mockResolvedValue([]);

      await service.listForOrganization('org-1', true, null);

      expect(prisma.client.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { organizationId: 'org-1' } }),
      );
    });

    it('scopes the query to the RESTRICTED client ids (EP-03-US-02)', async () => {
      prisma.client.findMany.mockResolvedValue([]);

      await service.listForOrganization('org-1', false, [
        'client-1',
        'client-2',
      ]);

      expect(prisma.client.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            organizationId: 'org-1',
            status: ClientStatus.ACTIVE,
            id: { in: ['client-1', 'client-2'] },
          },
        }),
      );
    });

    it('short-circuits to an empty list when RESTRICTED to zero clients, without querying', async () => {
      const result = await service.listForOrganization('org-1', false, []);

      expect(result).toEqual([]);
      expect(prisma.client.findMany).not.toHaveBeenCalled();
    });
  });
});
