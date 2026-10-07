import { PrismaService } from '../prisma/prisma.service.js';
import { OnboardingStep } from '../generated/prisma/enums.js';
import type { ClientOnboarding } from '../generated/prisma/client.js';
import type { BusinessProfileDto } from './dto/business-profile.dto.js';
import type { GoalsAndKpisDto } from './dto/goals-and-kpis.dto.js';
import type { ChannelsDto } from './dto/channels.dto.js';
import type { AudienceGeographyDto } from './dto/audience-geography.dto.js';
import type { BudgetDto } from './dto/budget.dto.js';
import type { CompetitorsDto } from './dto/competitors.dto.js';
export interface OnboardingWithCompletion extends Partial<ClientOnboarding> {
    clientId: string;
    requiredSteps: OnboardingStep[];
    missingSteps: OnboardingStep[];
    completionPercent: number;
}
export declare class OnboardingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getForClient(clientId: string): Promise<OnboardingWithCompletion>;
    saveBusinessProfile(organizationId: string, clientId: string, dto: BusinessProfileDto, actorUserId: string): Promise<OnboardingWithCompletion>;
    saveGoalsAndKpis(organizationId: string, clientId: string, dto: GoalsAndKpisDto, actorUserId: string): Promise<OnboardingWithCompletion>;
    saveChannels(organizationId: string, clientId: string, dto: ChannelsDto, actorUserId: string): Promise<OnboardingWithCompletion>;
    saveAudienceGeography(organizationId: string, clientId: string, dto: AudienceGeographyDto, actorUserId: string): Promise<OnboardingWithCompletion>;
    saveBudget(organizationId: string, clientId: string, dto: BudgetDto, actorUserId: string): Promise<OnboardingWithCompletion>;
    saveCompetitors(organizationId: string, clientId: string, dto: CompetitorsDto, actorUserId: string): Promise<OnboardingWithCompletion>;
    private saveStep;
    private withCompletion;
    private emptyDefaults;
}
