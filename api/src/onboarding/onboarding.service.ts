import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { MarketingChannel, OnboardingStep } from '../generated/prisma/enums.js';
import type { ClientOnboarding } from '../generated/prisma/client.js';
import type { BusinessProfileDto } from './dto/business-profile.dto.js';
import type { GoalsAndKpisDto } from './dto/goals-and-kpis.dto.js';
import type { ChannelsDto } from './dto/channels.dto.js';
import type { AudienceGeographyDto } from './dto/audience-geography.dto.js';
import type { BudgetDto } from './dto/budget.dto.js';
import type { CompetitorsDto } from './dto/competitors.dto.js';

/** Every onboarding wizard must at least cover these, regardless of channels. */
const ALWAYS_REQUIRED_STEPS: OnboardingStep[] = [
  OnboardingStep.BUSINESS_PROFILE,
  OnboardingStep.GOALS_AND_KPIS,
  OnboardingStep.CHANNELS,
  OnboardingStep.AUDIENCE_AND_GEOGRAPHY,
];

/** Selecting any paid channel makes the Budget step required too (EP-04-US-01: "required fields vary by selected channels"). */
const PAID_CHANNELS: MarketingChannel[] = [
  MarketingChannel.GOOGLE_ADS,
  MarketingChannel.META_ADS,
  MarketingChannel.MICROSOFT_ADS,
  MarketingChannel.LINKEDIN_ADS,
  MarketingChannel.TIKTOK_ADS,
  MarketingChannel.YOUTUBE_ADS,
];

export interface OnboardingWithCompletion extends Partial<ClientOnboarding> {
  clientId: string;
  requiredSteps: OnboardingStep[];
  missingSteps: OnboardingStep[];
  completionPercent: number;
}

@Injectable()
export class OnboardingService {
  constructor(private readonly prisma: PrismaService) {}

  async getForClient(clientId: string): Promise<OnboardingWithCompletion> {
    const record = await this.prisma.clientOnboarding.findUnique({
      where: { clientId },
    });
    return this.withCompletion(record ?? this.emptyDefaults(clientId));
  }

  async saveBusinessProfile(
    organizationId: string,
    clientId: string,
    dto: BusinessProfileDto,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    return this.saveStep(
      organizationId,
      clientId,
      OnboardingStep.BUSINESS_PROFILE,
      { ...dto },
      actorUserId,
    );
  }

  async saveGoalsAndKpis(
    organizationId: string,
    clientId: string,
    dto: GoalsAndKpisDto,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    return this.saveStep(
      organizationId,
      clientId,
      OnboardingStep.GOALS_AND_KPIS,
      {
        primaryGoal: dto.primaryGoal,
        secondaryGoals: dto.secondaryGoals ?? [],
        primaryKpi: dto.primaryKpi,
        secondaryKpis: dto.secondaryKpis ?? [],
      },
      actorUserId,
    );
  }

  async saveChannels(
    organizationId: string,
    clientId: string,
    dto: ChannelsDto,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    return this.saveStep(
      organizationId,
      clientId,
      OnboardingStep.CHANNELS,
      { channels: dto.channels },
      actorUserId,
    );
  }

  async saveAudienceGeography(
    organizationId: string,
    clientId: string,
    dto: AudienceGeographyDto,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    return this.saveStep(
      organizationId,
      clientId,
      OnboardingStep.AUDIENCE_AND_GEOGRAPHY,
      {
        targetGeographies: dto.targetGeographies,
        targetAudience: dto.targetAudience,
      },
      actorUserId,
    );
  }

  async saveBudget(
    organizationId: string,
    clientId: string,
    dto: BudgetDto,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    if (dto.budgetMax < dto.budgetMin) {
      throw new BadRequestException(
        'budgetMax must be greater than or equal to budgetMin',
      );
    }
    return this.saveStep(
      organizationId,
      clientId,
      OnboardingStep.BUDGET,
      { budgetMin: dto.budgetMin, budgetMax: dto.budgetMax },
      actorUserId,
    );
  }

  async saveCompetitors(
    organizationId: string,
    clientId: string,
    dto: CompetitorsDto,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    return this.saveStep(
      organizationId,
      clientId,
      OnboardingStep.COMPETITORS,
      { competitors: dto.competitors },
      actorUserId,
    );
  }

  private async saveStep(
    organizationId: string,
    clientId: string,
    step: OnboardingStep,
    data: Record<string, unknown>,
    actorUserId: string,
  ): Promise<OnboardingWithCompletion> {
    const existing = await this.prisma.clientOnboarding.findUnique({
      where: { clientId },
    });
    const completedSteps = Array.from(
      new Set([...(existing?.completedSteps ?? []), step]),
    );

    const record = await this.prisma.$transaction(async (tx) => {
      const saved = existing
        ? await tx.clientOnboarding.update({
            where: { clientId },
            data: { ...data, completedSteps: { set: completedSteps } },
          })
        : await tx.clientOnboarding.create({
            data: { clientId, ...data, completedSteps },
          });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.ONBOARDING_STEP_SAVED,
          targetType: 'ClientOnboarding',
          targetId: saved.id,
          metadata: { clientId, step },
        },
      });

      return saved;
    });

    return this.withCompletion(record);
  }

  private withCompletion(
    record: Partial<ClientOnboarding> & { clientId: string },
  ): OnboardingWithCompletion {
    const channels = record.channels ?? [];
    const requiresBudget = channels.some((c) => PAID_CHANNELS.includes(c));
    const requiredSteps = requiresBudget
      ? [...ALWAYS_REQUIRED_STEPS, OnboardingStep.BUDGET]
      : ALWAYS_REQUIRED_STEPS;
    const completedSteps = record.completedSteps ?? [];
    const missingSteps = requiredSteps.filter(
      (s) => !completedSteps.includes(s),
    );
    const completionPercent = Math.round(
      ((requiredSteps.length - missingSteps.length) / requiredSteps.length) *
        100,
    );

    return { ...record, requiredSteps, missingSteps, completionPercent };
  }

  private emptyDefaults(
    clientId: string,
  ): Partial<ClientOnboarding> & { clientId: string } {
    return {
      clientId,
      secondaryGoals: [],
      secondaryKpis: [],
      channels: [],
      targetGeographies: [],
      competitors: [],
      completedSteps: [],
    };
  }
}
