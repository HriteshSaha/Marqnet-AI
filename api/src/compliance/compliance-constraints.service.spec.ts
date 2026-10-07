import { Test } from '@nestjs/testing';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { ComplianceConstraintsService } from './compliance-constraints.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ApprovalsService } from '../approvals/approvals.service.js';
import {
  ApprovalRequestStatus,
  ComplianceCategory,
  RiskLevel,
} from '../generated/prisma/enums.js';

type MockPrisma = {
  complianceConstraint: {
    findMany: ReturnType<typeof vi.fn>;
    findFirst: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  approvalRequest: {
    findUnique: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    complianceConstraint: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    approvalRequest: { findUnique: vi.fn(), update: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(),
  };
}

describe('ComplianceConstraintsService (EP-04-US-03)', () => {
  let service: ComplianceConstraintsService;
  let prisma: MockPrisma;
  let approvals: {
    createRequest: ReturnType<typeof vi.fn>;
    getForOrganization: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    prisma = createPrismaMock();
    approvals = { createRequest: vi.fn(), getForOrganization: vi.fn() };
    const moduleRef = await Test.createTestingModule({
      providers: [
        ComplianceConstraintsService,
        { provide: PrismaService, useValue: prisma },
        { provide: ApprovalsService, useValue: approvals },
      ],
    }).compile();
    service = moduleRef.get(ComplianceConstraintsService);
  });

  describe('create', () => {
    it('forces disableAutoExecution true for HIGH risk regardless of the DTO value', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(null);
      const txCreate = vi.fn().mockResolvedValue({ id: 'c-1', version: 1 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            complianceConstraint: { create: txCreate, update: vi.fn() },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.create(
        'org-1',
        'client-1',
        {
          category: ComplianceCategory.HEALTHCARE,
          description: 'No medical claims without disclaimer',
          riskLevel: RiskLevel.HIGH,
          disableAutoExecution: false,
        },
        'user-1',
      );

      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ disableAutoExecution: true }),
        }),
      );
    });

    it('respects the explicit flag for LOW/MEDIUM risk', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(null);
      const txCreate = vi.fn().mockResolvedValue({ id: 'c-1', version: 1 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            complianceConstraint: { create: txCreate, update: vi.fn() },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.create(
        'org-1',
        'client-1',
        {
          category: ComplianceCategory.OTHER,
          description: 'Minor brand note',
          riskLevel: RiskLevel.LOW,
          disableAutoExecution: true,
        },
        'user-1',
      );

      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ disableAutoExecution: true }),
        }),
      );
    });

    it('tightening an existing category supersedes it directly, incrementing the version', async () => {
      const existing = { id: 'c-old', version: 2, riskLevel: RiskLevel.MEDIUM };
      prisma.complianceConstraint.findFirst.mockResolvedValue(existing);
      const txUpdate = vi.fn().mockResolvedValue({});
      const txCreate = vi.fn().mockResolvedValue({ id: 'c-new', version: 3 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            complianceConstraint: { create: txCreate, update: txUpdate },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.create(
        'org-1',
        'client-1',
        {
          category: ComplianceCategory.LEGAL,
          description: 'Tightened wording',
          riskLevel: RiskLevel.HIGH,
        },
        'user-1',
      );

      expect(txUpdate).toHaveBeenCalledWith({
        where: { id: 'c-old' },
        data: { isCurrent: false, supersededAt: expect.any(Date) },
      });
      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ version: 3 }),
        }),
      );
    });

    it('refuses to loosen an existing constraint directly', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue({
        id: 'c-old',
        version: 1,
        riskLevel: RiskLevel.CRITICAL,
      });

      await expect(
        service.create(
          'org-1',
          'client-1',
          {
            category: ComplianceCategory.GAMBLING,
            description: 'Now allowed broadly',
            riskLevel: RiskLevel.LOW,
          },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.$transaction).not.toHaveBeenCalled();
    });

    it('allows setting the same risk level again (not a loosening)', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue({
        id: 'c-old',
        version: 1,
        riskLevel: RiskLevel.HIGH,
      });
      const txCreate = vi.fn().mockResolvedValue({ id: 'c-new', version: 2 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            complianceConstraint: { create: txCreate, update: vi.fn() },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await expect(
        service.create(
          'org-1',
          'client-1',
          {
            category: ComplianceCategory.ALCOHOL,
            description: 'Reworded, same severity',
            riskLevel: RiskLevel.HIGH,
          },
          'user-1',
        ),
      ).resolves.toBeDefined();
    });
  });

  describe('requestRetirement', () => {
    it('404s for a constraint that does not belong to the client', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(null);
      await expect(
        service.requestRetirement('org-1', 'client-1', 'c-x', {}, 'user-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('refuses to open a request for an already-retired (inactive) constraint', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue({
        id: 'c-1',
        isCurrent: false,
        isActive: false,
      });
      await expect(
        service.requestRetirement('org-1', 'client-1', 'c-1', {}, 'user-1'),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('opens an approval request scoped to the constraint risk level and links it back', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue({
        id: 'c-1',
        isCurrent: true,
        isActive: true,
        riskLevel: RiskLevel.CRITICAL,
        category: ComplianceCategory.FINANCIAL_SERVICES,
        description: 'No guaranteed-return claims',
        pendingRetirementRequestId: null,
      });
      approvals.createRequest.mockResolvedValue({ id: 'req-1' });
      prisma.complianceConstraint.update.mockResolvedValue({});
      prisma.auditLog.create.mockResolvedValue({});

      const result = await service.requestRetirement(
        'org-1',
        'client-1',
        'c-1',
        { comment: 'client approved' },
        'user-1',
      );

      expect(approvals.createRequest).toHaveBeenCalledWith(
        'org-1',
        expect.objectContaining({
          riskLevel: RiskLevel.CRITICAL,
          actionType: 'compliance_constraint.retire',
        }),
        'user-1',
      );
      expect(prisma.complianceConstraint.update).toHaveBeenCalledWith({
        where: { id: 'c-1' },
        data: { pendingRetirementRequestId: 'req-1' },
      });
      expect(result).toEqual({ id: 'req-1' });
    });

    it('refuses a second retirement request while one is still pending', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue({
        id: 'c-1',
        isCurrent: true,
        isActive: true,
        riskLevel: RiskLevel.HIGH,
        pendingRetirementRequestId: 'req-old',
      });
      prisma.approvalRequest.findUnique.mockResolvedValue({
        id: 'req-old',
        status: ApprovalRequestStatus.PENDING,
      });

      await expect(
        service.requestRetirement('org-1', 'client-1', 'c-1', {}, 'user-1'),
      ).rejects.toBeInstanceOf(ConflictException);
      expect(approvals.createRequest).not.toHaveBeenCalled();
    });
  });

  describe('applyRetirement', () => {
    const activeConstraint = { id: 'c-1', isCurrent: true, isActive: true };

    it('rejects when the approval request was opened for a different constraint', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(activeConstraint);
      approvals.getForOrganization.mockResolvedValue({
        actionType: 'compliance_constraint.retire',
        payload: { constraintId: 'some-other-constraint' },
        status: ApprovalRequestStatus.APPROVED,
        consumedAt: null,
      });

      await expect(
        service.applyRetirement(
          'org-1',
          'client-1',
          'c-1',
          { approvalRequestId: 'req-1' },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('rejects when the request has not been approved yet', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(activeConstraint);
      approvals.getForOrganization.mockResolvedValue({
        actionType: 'compliance_constraint.retire',
        payload: { constraintId: 'c-1' },
        status: ApprovalRequestStatus.PENDING,
        consumedAt: null,
      });

      await expect(
        service.applyRetirement(
          'org-1',
          'client-1',
          'c-1',
          { approvalRequestId: 'req-1' },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('rejects replaying an already-consumed approval', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(activeConstraint);
      approvals.getForOrganization.mockResolvedValue({
        actionType: 'compliance_constraint.retire',
        payload: { constraintId: 'c-1' },
        status: ApprovalRequestStatus.APPROVED,
        consumedAt: new Date(),
      });

      await expect(
        service.applyRetirement(
          'org-1',
          'client-1',
          'c-1',
          { approvalRequestId: 'req-1' },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('retires the constraint and marks the approval consumed when everything checks out', async () => {
      prisma.complianceConstraint.findFirst.mockResolvedValue(activeConstraint);
      approvals.getForOrganization.mockResolvedValue({
        actionType: 'compliance_constraint.retire',
        payload: { constraintId: 'c-1' },
        status: ApprovalRequestStatus.APPROVED,
        consumedAt: null,
      });
      const txUpdateConstraint = vi
        .fn()
        .mockResolvedValue({ id: 'c-1', isActive: false });
      const txUpdateRequest = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            complianceConstraint: { update: txUpdateConstraint },
            approvalRequest: { update: txUpdateRequest },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.applyRetirement(
        'org-1',
        'client-1',
        'c-1',
        { approvalRequestId: 'req-1' },
        'user-1',
      );

      expect(txUpdateConstraint).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'c-1' },
          data: expect.objectContaining({ isActive: false, isCurrent: false }),
        }),
      );
      expect(txUpdateRequest).toHaveBeenCalledWith({
        where: { id: 'req-1' },
        data: { consumedAt: expect.any(Date) },
      });
      expect(result).toEqual({ id: 'c-1', isActive: false });
    });
  });
});
