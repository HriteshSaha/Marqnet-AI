import { Test } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { KpiGuardrailsService } from './kpi-guardrails.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { GuardrailMetric } from '../generated/prisma/enums.js';

type MockPrisma = {
  organization: { findUnique: ReturnType<typeof vi.fn> };
  kpiGuardrail: {
    findMany: ReturnType<typeof vi.fn>;
    findFirst: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    organization: { findUnique: vi.fn() },
    kpiGuardrail: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(),
  };
}

describe('KpiGuardrailsService (EP-04-US-02)', () => {
  let service: KpiGuardrailsService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [
        KpiGuardrailsService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = moduleRef.get(KpiGuardrailsService);
  });

  describe('setGuardrail', () => {
    it('rejects an inverted range outright (not just a warning)', async () => {
      await expect(
        service.setGuardrail(
          'org-1',
          'client-1',
          GuardrailMetric.CPA,
          { targetValue: 30, acceptableMin: 50, acceptableMax: 20 },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.organization.findUnique).not.toHaveBeenCalled();
    });

    it('404s when the organization does not exist', async () => {
      prisma.organization.findUnique.mockResolvedValue(null);
      await expect(
        service.setGuardrail(
          'org-missing',
          'client-1',
          GuardrailMetric.CPA,
          { targetValue: 30, acceptableMin: 20, acceptableMax: 50 },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('inherits the workspace currency when none is given', async () => {
      prisma.organization.findUnique.mockResolvedValue({ currency: 'EUR' });
      prisma.kpiGuardrail.findFirst.mockResolvedValue(null);
      const txCreate = vi
        .fn()
        .mockResolvedValue({ id: 'g-1', currency: 'EUR', version: 1 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            kpiGuardrail: {
              findFirst: vi.fn().mockResolvedValue(null),
              update: vi.fn(),
              create: txCreate,
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.setGuardrail(
        'org-1',
        'client-1',
        GuardrailMetric.CPA,
        { targetValue: 30, acceptableMin: 20, acceptableMax: 50 },
        'user-1',
      );

      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ currency: 'EUR' }),
        }),
      );
    });

    it('uses an explicit currency override instead of the workspace default', async () => {
      prisma.organization.findUnique.mockResolvedValue({ currency: 'EUR' });
      const txCreate = vi
        .fn()
        .mockResolvedValue({ id: 'g-1', currency: 'USD', version: 1 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            kpiGuardrail: {
              findFirst: vi.fn().mockResolvedValue(null),
              update: vi.fn(),
              create: txCreate,
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.setGuardrail(
        'org-1',
        'client-1',
        GuardrailMetric.CPA,
        {
          targetValue: 30,
          acceptableMin: 20,
          acceptableMax: 50,
          currency: 'USD',
        },
        'user-1',
      );

      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ currency: 'USD' }),
        }),
      );
    });

    it('flags a target outside the acceptable range as a warning, but still saves it', async () => {
      prisma.organization.findUnique.mockResolvedValue({ currency: 'USD' });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            kpiGuardrail: {
              findFirst: vi.fn().mockResolvedValue(null),
              update: vi.fn(),
              create: vi.fn().mockResolvedValue({ id: 'g-1', version: 1 }),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.setGuardrail(
        'org-1',
        'client-1',
        GuardrailMetric.CPA,
        { targetValue: 100, acceptableMin: 20, acceptableMax: 50 },
        'user-1',
      );

      expect(result.warnings).toHaveLength(1);
      expect(result.warnings[0]).toContain('outside the acceptable range');
      expect(result.guardrail).toEqual({ id: 'g-1', version: 1 });
    });

    it('produces no warnings when the target is within range', async () => {
      prisma.organization.findUnique.mockResolvedValue({ currency: 'USD' });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            kpiGuardrail: {
              findFirst: vi.fn().mockResolvedValue(null),
              update: vi.fn(),
              create: vi.fn().mockResolvedValue({ id: 'g-1', version: 1 }),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.setGuardrail(
        'org-1',
        'client-1',
        GuardrailMetric.CPA,
        { targetValue: 35, acceptableMin: 20, acceptableMax: 50 },
        'user-1',
      );

      expect(result.warnings).toEqual([]);
    });

    it('closes out the previous current version and increments the version number, retaining history', async () => {
      prisma.organization.findUnique.mockResolvedValue({ currency: 'USD' });
      const previous = { id: 'g-old', version: 3, metric: GuardrailMetric.CPA };
      const txUpdate = vi.fn().mockResolvedValue({});
      const txCreate = vi.fn().mockResolvedValue({ id: 'g-new', version: 4 });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            kpiGuardrail: {
              findFirst: vi.fn().mockResolvedValue(previous),
              update: txUpdate,
              create: txCreate,
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.setGuardrail(
        'org-1',
        'client-1',
        GuardrailMetric.CPA,
        { targetValue: 35, acceptableMin: 20, acceptableMax: 50 },
        'user-1',
      );

      expect(txUpdate).toHaveBeenCalledWith({
        where: { id: 'g-old' },
        data: { isCurrent: false, supersededAt: expect.any(Date) },
      });
      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ version: 4 }),
        }),
      );
    });

    it('audits the change including any warnings', async () => {
      prisma.organization.findUnique.mockResolvedValue({ currency: 'USD' });
      const txAudit = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            kpiGuardrail: {
              findFirst: vi.fn().mockResolvedValue(null),
              update: vi.fn(),
              create: vi.fn().mockResolvedValue({ id: 'g-1', version: 1 }),
            },
            auditLog: { create: txAudit },
          }),
      );

      await service.setGuardrail(
        'org-1',
        'client-1',
        GuardrailMetric.ROAS,
        { targetValue: 2, acceptableMin: 3, acceptableMax: 5 },
        'user-1',
      );

      expect(txAudit).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'client.kpi_guardrail_set',
            metadata: expect.objectContaining({
              metric: GuardrailMetric.ROAS,
              warnings: expect.arrayContaining([expect.any(String)]),
            }),
          }),
        }),
      );
    });
  });

  describe('getActiveGuardrail', () => {
    it('returns null when no guardrail has been set for the metric', async () => {
      prisma.kpiGuardrail.findFirst.mockResolvedValue(null);
      expect(
        await service.getActiveGuardrail('client-1', GuardrailMetric.BUDGET),
      ).toBeNull();
    });
  });
});
