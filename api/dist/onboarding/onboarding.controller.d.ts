import type { AuthenticatedUser } from '../auth/auth.service.js';
import { type MembershipWithRole } from '../common/guards/organization-membership.guard.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { OnboardingService } from './onboarding.service.js';
import { BusinessProfileDto } from './dto/business-profile.dto.js';
import { GoalsAndKpisDto } from './dto/goals-and-kpis.dto.js';
import { ChannelsDto } from './dto/channels.dto.js';
import { AudienceGeographyDto } from './dto/audience-geography.dto.js';
import { BudgetDto } from './dto/budget.dto.js';
import { CompetitorsDto } from './dto/competitors.dto.js';
export declare class OnboardingController {
    private readonly onboardingService;
    private readonly clientsService;
    private readonly clientAccessService;
    constructor(onboardingService: OnboardingService, clientsService: ClientsService, clientAccessService: ClientAccessService);
    get(organizationId: string, clientId: string, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    saveBusinessProfile(organizationId: string, clientId: string, dto: BusinessProfileDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    saveGoalsAndKpis(organizationId: string, clientId: string, dto: GoalsAndKpisDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    saveChannels(organizationId: string, clientId: string, dto: ChannelsDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    saveAudienceGeography(organizationId: string, clientId: string, dto: AudienceGeographyDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    saveBudget(organizationId: string, clientId: string, dto: BudgetDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    saveCompetitors(organizationId: string, clientId: string, dto: CompetitorsDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<import("./onboarding.service.js").OnboardingWithCompletion>;
    private assertClientAccessible;
}
