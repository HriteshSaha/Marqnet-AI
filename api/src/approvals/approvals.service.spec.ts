import { Test } from '@nestjs/testing';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { ApprovalsService } from './approvals.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  ApprovalDecisionValue,
  ApprovalRequestStatus,
  RiskLevel,
  SystemRoleKey,
} from '../generated/prisma/enums.js';

type MockPrisma = {
  approvalPolicy: {
    findUnique: ReturnType<typeof vi.fn>;
    findUniqueOrThrow: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  approvalThreshold: {
    deleteMany: ReturnType<typeof vi.fn>;
    createMany: ReturnType<typeof vi.fn>;
  };
  approvalRequest: {
    create: ReturnType<typeof vi.fn>;
    findFirst: ReturnType<typeof vi.fn>;
    findMany: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  approvalDecision: { create: ReturnType<typeof vi.fn> };
  role: { findMany: ReturnType<typeof vi.fn>; count: ReturnType<typeof vi.fn> };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    approvalPolicy: {
      findUnique: vi.fn(),
      findUniqueOrThrow: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    approvalThreshold: { deleteMany: vi.fn(), createMany: vi.fn() },
    approvalRequest: {
      create: vi.fn(),
      findFirst: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
    },
    approvalDecision: { create: vi.fn() },
    role: { findMany: vi.fn(), count: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(),
  };
}

describe('ApprovalsService (EP-03-US-03)', () => {
  let service: ApprovalsService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [
        ApprovalsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = moduleRef.get(ApprovalsService);
  });

  describe('getPolicy', () => {
    it('returns an existing policy untouched', async () => {
      const existing = { id: 'p-1', organizationId: 'org-1', thresholds: [] };
      prisma.approvalPolicy.findUnique.mockResolvedValue(existing);

      expect(await service.getPolicy('org-1')).toEqual(existing);
      expect(prisma.approvalPolicy.create).not.toHaveBeenCalled();
    });

    it('lazily creates sane defaults: Owner can decide everything, only Owner for HIGH/CRITICAL, dual-approval on CRITICAL', async () => {
      prisma.approvalPolicy.findUnique.mockResolvedValue(null);
      prisma.role.findMany.mockResolvedValue([
        { id: 'role-owner', systemKey: SystemRoleKey.OWNER },
        { id: 'role-admin', systemKey: SystemRoleKey.ADMIN },
      ]);
      prisma.approvalPolicy.create.mockResolvedValue({
        id: 'p-1',
        thresholds: [],
      });

      await service.getPolicy('org-1');

      const createArg = prisma.approvalPolicy.create.mock.calls[0][0];
      expect(createArg.data.allowSelfApproval).toBe(true);
      const byLevel = Object.fromEntries(
        createArg.data.thresholds.create.map((t: { riskLevel: string }) => [
          t.riskLevel,
          t,
        ]),
      );
      expect(byLevel[RiskLevel.LOW].roleIds.sort()).toEqual(
        ['role-admin', 'role-owner'].sort(),
      );
      expect(byLevel[RiskLevel.HIGH].roleIds).toEqual(['role-owner']);
      expect(byLevel[RiskLevel.CRITICAL].roleIds).toEqual(['role-owner']);
      expect(byLevel[RiskLevel.CRITICAL].dualApprovalRequired).toBe(true);
      expect(byLevel[RiskLevel.LOW].dualApprovalRequired).toBe(false);
    });
  });

  describe('setPolicy', () => {
    const fullThresholds = () =>
      Object.values(RiskLevel).map((riskLevel) => ({
        riskLevel,
        dualApprovalRequired: false,
        roleIds: ['role-owner'],
      }));

    it('rejects a policy that does not cover every risk level exactly once', async () => {
      const incomplete = fullThresholds().slice(0, 3);
      await expect(
        service.setPolicy(
          'org-1',
          { allowSelfApproval: true, thresholds: incomplete },
          'actor-1',
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('rejects a roleId that does not belong to the organization', async () => {
      prisma.role.count.mockResolvedValue(0);
      await expect(
        service.setPolicy(
          'org-1',
          { allowSelfApproval: true, thresholds: fullThresholds() },
          'actor-1',
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('replaces all thresholds and audits the change', async () => {
      prisma.role.count.mockResolvedValue(1);
      prisma.approvalPolicy.findUnique.mockResolvedValue({
        id: 'p-1',
        organizationId: 'org-1',
        thresholds: [],
      });
      const txUpdate = vi.fn().mockResolvedValue({});
      const txDeleteMany = vi.fn().mockResolvedValue({});
      const txFindUniqueOrThrow = vi.fn().mockResolvedValue({ id: 'p-1' });
      const txCreateMany = vi.fn().mockResolvedValue({});
      const txAuditCreate = vi.fn().mockResolvedValue({});
      const finalPolicy = { id: 'p-1', thresholds: fullThresholds() };
      let call = 0;
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            approvalPolicy: {
              update: txUpdate,
              findUniqueOrThrow: vi.fn(() => {
                call += 1;
                return call === 1
                  ? txFindUniqueOrThrow()
                  : Promise.resolve(finalPolicy);
              }),
            },
            approvalThreshold: {
              deleteMany: txDeleteMany,
              createMany: txCreateMany,
            },
            auditLog: { create: txAuditCreate },
          }),
      );

      const result = await service.setPolicy(
        'org-1',
        { allowSelfApproval: false, thresholds: fullThresholds() },
        'actor-1',
      );

      expect(result).toEqual(finalPolicy);
      expect(txUpdate).toHaveBeenCalledWith({
        where: { organizationId: 'org-1' },
        data: { allowSelfApproval: false },
      });
      expect(txDeleteMany).toHaveBeenCalledWith({
        where: { policy: { organizationId: 'org-1' } },
      });
      expect(txCreateMany).toHaveBeenCalled();
      expect(txAuditCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ action: 'approval.policy_updated' }),
        }),
      );
    });
  });

  describe('decide', () => {
    const baseRequest = {
      id: 'req-1',
      organizationId: 'org-1',
      riskLevel: RiskLevel.HIGH,
      status: ApprovalRequestStatus.PENDING,
      requestedByUserId: 'requester-1',
      decisions: [] as {
        actorUserId: string;
        decision: ApprovalDecisionValue;
      }[],
    };
    const policyWithHighThreshold = (
      overrides: Partial<{
        allowSelfApproval: boolean;
        dualApprovalRequired: boolean;
        roleIds: string[];
      }> = {},
    ) => ({
      allowSelfApproval: overrides.allowSelfApproval ?? true,
      thresholds: [
        {
          riskLevel: RiskLevel.HIGH,
          dualApprovalRequired: overrides.dualApprovalRequired ?? false,
          roleIds: overrides.roleIds ?? ['role-owner'],
        },
      ],
    });

    function mockDecideTransaction() {
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            approvalDecision: { create: vi.fn().mockResolvedValue({}) },
            approvalRequest: {
              update: vi.fn((args) =>
                Promise.resolve({ ...baseRequest, ...args.data }),
              ),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );
    }

    it('404s for a request in a different organization', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(null);
      await expect(
        service.decide(
          'org-1',
          'req-x',
          { decision: ApprovalDecisionValue.APPROVED },
          'user-1',
          'role-owner',
        ),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('rejects deciding on an already-decided request', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue({
        ...baseRequest,
        status: ApprovalRequestStatus.APPROVED,
      });
      await expect(
        service.decide(
          'org-1',
          'req-1',
          { decision: ApprovalDecisionValue.APPROVED },
          'user-1',
          'role-owner',
        ),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('refuses a decision from a role outside the configured authority for this risk level', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(baseRequest);
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({ roleIds: ['role-owner'] }),
      );

      await expect(
        service.decide(
          'org-1',
          'req-1',
          { decision: ApprovalDecisionValue.APPROVED },
          'user-2',
          'role-admin',
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('refuses self-approval when the policy disallows it', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(baseRequest);
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({
          allowSelfApproval: false,
          roleIds: ['role-owner'],
        }),
      );

      await expect(
        service.decide(
          'org-1',
          'req-1',
          { decision: ApprovalDecisionValue.APPROVED },
          'requester-1',
          'role-owner',
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('allows self-approval when the policy permits it', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(baseRequest);
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({
          allowSelfApproval: true,
          roleIds: ['role-owner'],
        }),
      );
      mockDecideTransaction();

      await expect(
        service.decide(
          'org-1',
          'req-1',
          { decision: ApprovalDecisionValue.APPROVED },
          'requester-1',
          'role-owner',
        ),
      ).resolves.toBeDefined();
    });

    it('rejects a second decision from the same actor on the same request', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue({
        ...baseRequest,
        decisions: [
          { actorUserId: 'user-2', decision: ApprovalDecisionValue.APPROVED },
        ],
      });
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({ roleIds: ['role-owner'] }),
      );

      await expect(
        service.decide(
          'org-1',
          'req-1',
          { decision: ApprovalDecisionValue.APPROVED },
          'user-2',
          'role-owner',
        ),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('a single rejection immediately closes the request', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(baseRequest);
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({ roleIds: ['role-owner'] }),
      );
      let updateData: unknown;
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            approvalDecision: { create: vi.fn().mockResolvedValue({}) },
            approvalRequest: {
              update: vi.fn((args) => {
                updateData = args.data;
                return Promise.resolve({ ...baseRequest, ...args.data });
              }),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.decide(
        'org-1',
        'req-1',
        { decision: ApprovalDecisionValue.REJECTED },
        'user-2',
        'role-owner',
      );

      expect(updateData).toEqual({ status: ApprovalRequestStatus.REJECTED });
    });

    it('a single approval is enough when dual-approval is not required', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(baseRequest);
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({
          dualApprovalRequired: false,
          roleIds: ['role-owner'],
        }),
      );
      let updateData: unknown;
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            approvalDecision: { create: vi.fn().mockResolvedValue({}) },
            approvalRequest: {
              update: vi.fn((args) => {
                updateData = args.data;
                return Promise.resolve({});
              }),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.decide(
        'org-1',
        'req-1',
        { decision: ApprovalDecisionValue.APPROVED },
        'user-2',
        'role-owner',
      );

      expect(updateData).toEqual({ status: ApprovalRequestStatus.APPROVED });
    });

    it('requires a second, distinct approval when dual-approval is required', async () => {
      prisma.approvalRequest.findFirst.mockResolvedValue(baseRequest);
      prisma.approvalPolicy.findUnique.mockResolvedValue(
        policyWithHighThreshold({
          dualApprovalRequired: true,
          roleIds: ['role-owner'],
        }),
      );
      let updateData: unknown;
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            approvalDecision: { create: vi.fn().mockResolvedValue({}) },
            approvalRequest: {
              update: vi.fn((args) => {
                updateData = args.data;
                return Promise.resolve({});
              }),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      // First approval: stays PENDING.
      await service.decide(
        'org-1',
        'req-1',
        { decision: ApprovalDecisionValue.APPROVED },
        'user-2',
        'role-owner',
      );
      expect(updateData).toEqual({ status: ApprovalRequestStatus.PENDING });

      // Second, distinct approver: now APPROVED.
      prisma.approvalRequest.findFirst.mockResolvedValue({
        ...baseRequest,
        decisions: [
          { actorUserId: 'user-2', decision: ApprovalDecisionValue.APPROVED },
        ],
      });
      await service.decide(
        'org-1',
        'req-1',
        { decision: ApprovalDecisionValue.APPROVED },
        'user-3',
        'role-owner',
      );
      expect(updateData).toEqual({ status: ApprovalRequestStatus.APPROVED });
    });
  });
});
