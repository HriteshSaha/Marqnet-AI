var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { MarketingChannel, OnboardingStep } from '../generated/prisma/enums.js';
const ALWAYS_REQUIRED_STEPS = [
    OnboardingStep.BUSINESS_PROFILE,
    OnboardingStep.GOALS_AND_KPIS,
    OnboardingStep.CHANNELS,
    OnboardingStep.AUDIENCE_AND_GEOGRAPHY,
];
const PAID_CHANNELS = [
    MarketingChannel.GOOGLE_ADS,
    MarketingChannel.META_ADS,
    MarketingChannel.MICROSOFT_ADS,
    MarketingChannel.LINKEDIN_ADS,
    MarketingChannel.TIKTOK_ADS,
    MarketingChannel.YOUTUBE_ADS,
];
let OnboardingService = class OnboardingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getForClient(clientId) {
        const record = await this.prisma.clientOnboarding.findUnique({
            where: { clientId },
        });
        return this.withCompletion(record ?? this.emptyDefaults(clientId));
    }
    async saveBusinessProfile(organizationId, clientId, dto, actorUserId) {
        return this.saveStep(organizationId, clientId, OnboardingStep.BUSINESS_PROFILE, { ...dto }, actorUserId);
    }
    async saveGoalsAndKpis(organizationId, clientId, dto, actorUserId) {
        return this.saveStep(organizationId, clientId, OnboardingStep.GOALS_AND_KPIS, {
            primaryGoal: dto.primaryGoal,
            secondaryGoals: dto.secondaryGoals ?? [],
            primaryKpi: dto.primaryKpi,
            secondaryKpis: dto.secondaryKpis ?? [],
        }, actorUserId);
    }
    async saveChannels(organizationId, clientId, dto, actorUserId) {
        return this.saveStep(organizationId, clientId, OnboardingStep.CHANNELS, { channels: dto.channels }, actorUserId);
    }
    async saveAudienceGeography(organizationId, clientId, dto, actorUserId) {
        return this.saveStep(organizationId, clientId, OnboardingStep.AUDIENCE_AND_GEOGRAPHY, {
            targetGeographies: dto.targetGeographies,
            targetAudience: dto.targetAudience,
        }, actorUserId);
    }
    async saveBudget(organizationId, clientId, dto, actorUserId) {
        if (dto.budgetMax < dto.budgetMin) {
            throw new BadRequestException('budgetMax must be greater than or equal to budgetMin');
        }
        return this.saveStep(organizationId, clientId, OnboardingStep.BUDGET, { budgetMin: dto.budgetMin, budgetMax: dto.budgetMax }, actorUserId);
    }
    async saveCompetitors(organizationId, clientId, dto, actorUserId) {
        return this.saveStep(organizationId, clientId, OnboardingStep.COMPETITORS, { competitors: dto.competitors }, actorUserId);
    }
    async saveStep(organizationId, clientId, step, data, actorUserId) {
        const existing = await this.prisma.clientOnboarding.findUnique({
            where: { clientId },
        });
        const completedSteps = Array.from(new Set([...(existing?.completedSteps ?? []), step]));
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
    withCompletion(record) {
        const channels = record.channels ?? [];
        const requiresBudget = channels.some((c) => PAID_CHANNELS.includes(c));
        const requiredSteps = requiresBudget
            ? [...ALWAYS_REQUIRED_STEPS, OnboardingStep.BUDGET]
            : ALWAYS_REQUIRED_STEPS;
        const completedSteps = record.completedSteps ?? [];
        const missingSteps = requiredSteps.filter((s) => !completedSteps.includes(s));
        const completionPercent = Math.round(((requiredSteps.length - missingSteps.length) / requiredSteps.length) *
            100);
        return { ...record, requiredSteps, missingSteps, completionPercent };
    }
    emptyDefaults(clientId) {
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
};
OnboardingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OnboardingService);
export { OnboardingService };
//# sourceMappingURL=onboarding.service.js.map