import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { OrganizationsService } from './organizations.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { RolesService } from '../roles/roles.service.js';
import { OrganizationType, SystemRoleKey } from '../generated/prisma/enums.js';

type MockPrisma = {
  organization: {
    findUnique: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
  };
  membership: {
    findUnique: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
  };
  user: { update: ReturnType<typeof vi.fn> };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    organization: { findUnique: vi.fn(), findMany: vi.fn(), create: vi.fn() },
    membership: { findUnique: vi.fn(), create: vi.fn() },
    user: { update: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(),
  };
}

describe('OrganizationsService', () => {
  let service: OrganizationsService;
  let prisma: MockPrisma;
  let roles: { seedSystemRoles: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    prisma = createPrismaMock();
    roles = {
      seedSystemRoles: vi.fn().mockResolvedValue({
        [SystemRoleKey.OWNER]: { id: 'role-owner' },
        [SystemRoleKey.ADMIN]: { id: 'role-admin' },
        [SystemRoleKey.MEMBER]: { id: 'role-member' },
      }),
    };
    const moduleRef = await Test.createTestingModule({
      providers: [
        OrganizationsService,
        { provide: PrismaService, useValue: prisma },
        { provide: RolesService, useValue: roles },
      ],
    }).compile();
    service = moduleRef.get(OrganizationsService);
  });

  describe('create', () => {
    it('creates the organization, seeds system roles, assigns the creator the Owner role, and audits it', async () => {
      prisma.organization.findUnique.mockResolvedValue(null);
      const createdOrg = {
        id: 'org-1',
        name: 'Acme Agency',
        slug: 'acme-agency',
        type: OrganizationType.AGENCY,
        locale: 'en-US',
        currency: 'USD',
        timezone: 'UTC',
      };

      const txOrgCreate = vi.fn().mockResolvedValue(createdOrg);
      const txMembershipCreate = vi.fn().mockResolvedValue({});
      const txAuditCreate = vi.fn().mockResolvedValue({});
      const tx = {
        organization: { create: txOrgCreate },
        membership: { create: txMembershipCreate },
        auditLog: { create: txAuditCreate },
      };
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) => fn(tx),
      );

      const result = await service.create(
        { name: 'Acme Agency', type: OrganizationType.AGENCY },
        'user-1',
      );

      expect(result).toEqual(createdOrg);
      expect(txOrgCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ slug: 'acme-agency' }),
        }),
      );
      expect(roles.seedSystemRoles).toHaveBeenCalledWith(tx, 'org-1');
      expect(txMembershipCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            userId: 'user-1',
            organizationId: 'org-1',
            roleId: 'role-owner',
          }),
        }),
      );
      expect(txAuditCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'organization.created',
            organizationId: 'org-1',
            actorUserId: 'user-1',
          }),
        }),
      );
    });

    it('appends a numeric suffix when the slug is already taken', async () => {
      prisma.organization.findUnique
        .mockResolvedValueOnce({ id: 'existing' }) // "acme-agency" taken
        .mockResolvedValueOnce(null); // "acme-agency-2" free

      const createdOrg = { id: 'org-2', slug: 'acme-agency-2' };
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            organization: { create: vi.fn().mockResolvedValue(createdOrg) },
            membership: { create: vi.fn().mockResolvedValue({}) },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.create(
        { name: 'Acme Agency', type: OrganizationType.AGENCY },
        'user-1',
      );

      expect(result).toEqual(createdOrg);
      expect(prisma.organization.findUnique).toHaveBeenCalledTimes(2);
    });
  });

  describe('getForUser', () => {
    it('throws NotFound when the user has no membership (no tenant leakage)', async () => {
      prisma.membership.findUnique.mockResolvedValue(null);

      await expect(
        service.getForUser('org-1', 'user-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.organization.findUnique).not.toHaveBeenCalled();
    });

    it('returns the organization when the user is a member', async () => {
      prisma.membership.findUnique.mockResolvedValue({ id: 'm-1' });
      prisma.organization.findUnique.mockResolvedValue({
        id: 'org-1',
        name: 'Acme',
      });

      const result = await service.getForUser('org-1', 'user-1');

      expect(result).toEqual({ id: 'org-1', name: 'Acme' });
    });
  });

  describe('recordSelectedWorkspace', () => {
    it('persists the chosen organization on the user record', async () => {
      prisma.user.update.mockResolvedValue({});

      await service.recordSelectedWorkspace('org-1', 'user-1');

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 'user-1' },
        data: { lastSelectedOrganizationId: 'org-1' },
      });
    });
  });

  describe('listForUser', () => {
    it('scopes the query to organizations the user belongs to', async () => {
      prisma.organization.findMany.mockResolvedValue([]);

      await service.listForUser('user-1');

      expect(prisma.organization.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            memberships: { some: { userId: 'user-1' } },
            archivedAt: null,
          },
        }),
      );
    });
  });
});
