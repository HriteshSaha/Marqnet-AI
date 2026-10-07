import { Test } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { OnboardingService } from './onboarding.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  BusinessGoal,
  KpiType,
  MarketingChannel,
  OnboardingStep,
} from '../generated/prisma/enums.js';

type MockPrisma = {
  clientOnboarding: {
    findUnique: ReturnType<typeof vi.fn>;
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  auditLog: { create: ReturnType<typeof vi.fn> };
  $transaction: ReturnType<typeof vi.fn>;
};

function createPrismaMock(): MockPrisma {
  return {
    clientOnboarding: { findUnique: vi.fn(), create: vi.fn(), update: vi.fn() },
    auditLog: { create: vi.fn() },
    $transaction: vi.fn(async (fn: (tx: unknown) => unknown) =>
      fn({
        clientOnboarding: { create: vi.fn(), update: vi.fn() },
        auditLog: { create: vi.fn().mockResolvedValue({}) },
      }),
    ),
  };
}

describe('OnboardingService (EP-04-US-01)', () => {
  let service: OnboardingService;
  let prisma: MockPrisma;

  beforeEach(async () => {
    prisma = createPrismaMock();
    const moduleRef = await Test.createTestingModule({
      providers: [
        OnboardingService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();
    service = moduleRef.get(OnboardingService);
  });

  describe('getForClient', () => {
    it('returns transient defaults (not persisted) when no row exists yet, with all base steps missing', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue(null);

      const result = await service.getForClient('client-1');

      expect(result.completionPercent).toBe(0);
      expect(result.missingSteps).toEqual([
        OnboardingStep.BUSINESS_PROFILE,
        OnboardingStep.GOALS_AND_KPIS,
        OnboardingStep.CHANNELS,
        OnboardingStep.AUDIENCE_AND_GEOGRAPHY,
      ]);
      expect(prisma.clientOnboarding.create).not.toHaveBeenCalled();
    });

    it('does not require Budget when no paid channel is selected', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue({
        clientId: 'client-1',
        channels: [MarketingChannel.SEO, MarketingChannel.EMAIL_MARKETING],
        completedSteps: [],
      });

      const result = await service.getForClient('client-1');

      expect(result.requiredSteps).not.toContain(OnboardingStep.BUDGET);
    });

    it('requires Budget once any paid channel is selected', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue({
        clientId: 'client-1',
        channels: [MarketingChannel.GOOGLE_ADS],
        completedSteps: [],
      });

      const result = await service.getForClient('client-1');

      expect(result.requiredSteps).toContain(OnboardingStep.BUDGET);
      expect(result.missingSteps).toContain(OnboardingStep.BUDGET);
    });

    it('reports 100% completion once every required step (including conditional Budget) is done', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue({
        clientId: 'client-1',
        channels: [MarketingChannel.GOOGLE_ADS],
        completedSteps: [
          OnboardingStep.BUSINESS_PROFILE,
          OnboardingStep.GOALS_AND_KPIS,
          OnboardingStep.CHANNELS,
          OnboardingStep.AUDIENCE_AND_GEOGRAPHY,
          OnboardingStep.BUDGET,
        ],
      });

      const result = await service.getForClient('client-1');

      expect(result.completionPercent).toBe(100);
      expect(result.missingSteps).toEqual([]);
    });
  });

  describe('saveStep (via saveBusinessProfile)', () => {
    it('creates a new row on first save, marking the step complete', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue(null);
      const txCreate = vi.fn().mockResolvedValue({
        id: 'ob-1',
        clientId: 'client-1',
        businessDescription: 'We sell widgets',
        completedSteps: [OnboardingStep.BUSINESS_PROFILE],
      });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            clientOnboarding: { create: txCreate, update: vi.fn() },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      const result = await service.saveBusinessProfile(
        'org-1',
        'client-1',
        { businessDescription: 'We sell widgets' },
        'user-1',
      );

      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            clientId: 'client-1',
            businessDescription: 'We sell widgets',
            completedSteps: [OnboardingStep.BUSINESS_PROFILE],
          }),
        }),
      );
      expect(result.missingSteps).not.toContain(
        OnboardingStep.BUSINESS_PROFILE,
      );
    });

    it('merges completedSteps without duplicating an already-saved step (idempotent progress)', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue({
        id: 'ob-1',
        clientId: 'client-1',
        completedSteps: [OnboardingStep.BUSINESS_PROFILE],
      });
      const txUpdate = vi.fn().mockResolvedValue({
        id: 'ob-1',
        clientId: 'client-1',
        completedSteps: [OnboardingStep.BUSINESS_PROFILE],
      });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            clientOnboarding: { create: vi.fn(), update: txUpdate },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.saveBusinessProfile(
        'org-1',
        'client-1',
        { businessDescription: 'Updated text here' },
        'user-1',
      );

      expect(txUpdate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            completedSteps: { set: [OnboardingStep.BUSINESS_PROFILE] },
          }),
        }),
      );
    });

    it('audits every step save', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue(null);
      const txAudit = vi.fn().mockResolvedValue({});
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            clientOnboarding: {
              create: vi.fn().mockResolvedValue({
                id: 'ob-1',
                clientId: 'client-1',
                completedSteps: [],
              }),
              update: vi.fn(),
            },
            auditLog: { create: txAudit },
          }),
      );

      await service.saveChannels(
        'org-1',
        'client-1',
        { channels: [MarketingChannel.SEO] },
        'user-1',
      );

      expect(txAudit).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            action: 'client.onboarding_step_saved',
            organizationId: 'org-1',
          }),
        }),
      );
    });
  });

  describe('saveGoalsAndKpis', () => {
    it('defaults secondary goals/kpis to an empty array when omitted', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue(null);
      const txCreate = vi.fn().mockResolvedValue({
        id: 'ob-1',
        clientId: 'client-1',
        completedSteps: [],
      });
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            clientOnboarding: { create: txCreate, update: vi.fn() },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await service.saveGoalsAndKpis(
        'org-1',
        'client-1',
        { primaryGoal: BusinessGoal.LEAD_GENERATION, primaryKpi: KpiType.CPA },
        'user-1',
      );

      expect(txCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            secondaryGoals: [],
            secondaryKpis: [],
          }),
        }),
      );
    });
  });

  describe('saveBudget', () => {
    it('rejects a budget range where the max is below the min', async () => {
      await expect(
        service.saveBudget(
          'org-1',
          'client-1',
          { budgetMin: 5000, budgetMax: 1000 },
          'user-1',
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.clientOnboarding.findUnique).not.toHaveBeenCalled();
    });

    it('accepts an equal min and max', async () => {
      prisma.clientOnboarding.findUnique.mockResolvedValue(null);
      prisma.$transaction.mockImplementation(
        async (fn: (tx: unknown) => unknown) =>
          fn({
            clientOnboarding: {
              create: vi.fn().mockResolvedValue({
                id: 'ob-1',
                clientId: 'client-1',
                completedSteps: [],
              }),
              update: vi.fn(),
            },
            auditLog: { create: vi.fn().mockResolvedValue({}) },
          }),
      );

      await expect(
        service.saveBudget(
          'org-1',
          'client-1',
          { budgetMin: 1000, budgetMax: 1000 },
          'user-1',
        ),
      ).resolves.toBeDefined();
    });
  });
});
