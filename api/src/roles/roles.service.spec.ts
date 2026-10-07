import { Test } from '@nestjs/testing';
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { RolesService } from './roles.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { PermissionAction } from '../generated/prisma/enums.js';

type MockPrisma = {
  role: {
    findUnique: ReturnType<typeof vi.fn>;
    findFirst: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
    delete: ReturnType<typeof vi.fn>;
  };
  rolePermission: {
    findFirst: ReturnType<typeof vi.fn>;
    deleteMany: ReturnType<typeof vi.fn>;
  };
  membership: { count: ReturnType<typeof vi.fn> };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    role: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    rolePermission: { findFirst: vi.fn(), deleteMany: vi.fn() },
    membership: { count: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(),
  };
}

describe('RolesService', () => {
  let service: RolesService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [RolesService, { provide: PrismaService, useValue: prisma }],
    }).compile();
    service = moduleRef.get(RolesService);
  });

  describe('hasPermission', () => {
    it('grants when an exact module+action row exists', async () => {
      prisma.rolePermission.findFirst.mockResolvedValue({ id: 'p-1' });

      const result = await service.hasPermission(
        'role-1',
        'clients',
        PermissionAction.CREATE,
      );

      expect(result).toBe(true);
      expect(prisma.rolePermission.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            roleId: 'role-1',
            module: { in: ['clients', '*'] },
            action: { in: [PermissionAction.CREATE, PermissionAction.MANAGE] },
          },
        }),
      );
    });

    it('denies when no matching row exists, including no applicable wildcard', async () => {
      prisma.rolePermission.findFirst.mockResolvedValue(null);

      expect(
        await service.hasPermission(
          'role-1',
          'clients',
          PermissionAction.DELETE,
        ),
      ).toBe(false);
    });
  });

  describe('create', () => {
    it('rejects a duplicate role name within the same organization', async () => {
      prisma.role.findUnique.mockResolvedValue({ id: 'existing' });

      await expect(
        service.create('org-1', { name: 'Editors', permissions: [] }, 'user-1'),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('creates the role with its permission grants and audits it', async () => {
      prisma.role.findUnique.mockResolvedValue(null);
      const created = { id: 'role-1', name: 'Editors', permissions: [] };
      const txRoleCreate = vi.fn().mockResolvedValue(created);
      const txAuditCreate = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            role: { create: txRoleCreate },
            auditLog: { create: txAuditCreate },
          }),
      );

      const result = await service.create(
        'org-1',
        {
          name: 'Editors',
          permissions: [{ module: 'clients', action: PermissionAction.EDIT }],
        },
        'user-1',
      );

      expect(result).toEqual(created);
      expect(txRoleCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            organizationId: 'org-1',
            name: 'Editors',
            permissions: {
              create: [{ module: 'clients', action: PermissionAction.EDIT }],
            },
          }),
        }),
      );
      expect(txAuditCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'role.created' }),
        }),
      );
    });
  });

  describe('update', () => {
    it('refuses to edit a system role', async () => {
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-1',
        isSystem: true,
        name: 'Owner',
      });

      await expect(
        service.update('org-1', 'role-1', { name: 'Hacked Owner' }, 'user-1'),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('404s when the role does not belong to the organization', async () => {
      prisma.role.findFirst.mockResolvedValue(null);

      await expect(
        service.update('org-1', 'role-x', { name: 'New Name' }, 'user-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('rejects renaming to an already-taken name', async () => {
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-1',
        isSystem: false,
        name: 'Editors',
      });
      prisma.role.findUnique.mockResolvedValue({ id: 'other-role' });

      await expect(
        service.update('org-1', 'role-1', { name: 'Taken' }, 'user-1'),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('replaces permissions atomically and audits the update', async () => {
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-1',
        isSystem: false,
        name: 'Editors',
      });
      const txDeleteMany = vi.fn().mockResolvedValue({ count: 2 });
      const txUpdate = vi
        .fn()
        .mockResolvedValue({ id: 'role-1', name: 'Editors', permissions: [] });
      const txAuditCreate = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            rolePermission: { deleteMany: txDeleteMany },
            role: { update: txUpdate },
            auditLog: { create: txAuditCreate },
          }),
      );

      await service.update(
        'org-1',
        'role-1',
        { permissions: [{ module: 'clients', action: PermissionAction.READ }] },
        'user-1',
      );

      expect(txDeleteMany).toHaveBeenCalledWith({
        where: { roleId: 'role-1' },
      });
      expect(txUpdate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            permissions: {
              create: [{ module: 'clients', action: PermissionAction.READ }],
            },
          }),
        }),
      );
      expect(txAuditCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'role.updated' }),
        }),
      );
    });
  });

  describe('delete', () => {
    it('refuses to delete a system role', async () => {
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-1',
        isSystem: true,
        name: 'Owner',
      });

      await expect(
        service.delete('org-1', 'role-1', 'user-1'),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('refuses to delete a role that is still assigned to members', async () => {
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-1',
        isSystem: false,
        name: 'Editors',
      });
      prisma.membership.count.mockResolvedValue(2);

      await expect(
        service.delete('org-1', 'role-1', 'user-1'),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('deletes an unassigned custom role and audits it', async () => {
      prisma.role.findFirst.mockResolvedValue({
        id: 'role-1',
        isSystem: false,
        name: 'Editors',
      });
      prisma.membership.count.mockResolvedValue(0);
      prisma.role.delete.mockResolvedValue({ id: 'role-1' });
      prisma.auditLog.create.mockResolvedValue({});
      prisma.$transaction.mockImplementation(async (ops: unknown[]) =>
        Promise.all(ops),
      );

      await service.delete('org-1', 'role-1', 'user-1');

      expect(prisma.role.delete).toHaveBeenCalledWith({
        where: { id: 'role-1' },
      });
      expect(prisma.auditLog.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'role.deleted' }),
        }),
      );
    });
  });
});
