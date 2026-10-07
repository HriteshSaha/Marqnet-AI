import type { AuthenticatedUser } from '../auth/auth.service.js';
import { type MembershipWithRole } from '../common/guards/organization-membership.guard.js';
import { GuardrailMetric } from '../generated/prisma/enums.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { KpiGuardrailsService } from './kpi-guardrails.service.js';
import { SetKpiGuardrailDto } from './dto/set-kpi-guardrail.dto.js';
export declare class KpiGuardrailsController {
    private readonly guardrailsService;
    private readonly clientsService;
    private readonly clientAccessService;
    constructor(guardrailsService: KpiGuardrailsService, clientsService: ClientsService, clientAccessService: ClientAccessService);
    list(organizationId: string, clientId: string, membership: MembershipWithRole): Promise<{
        id: string;
        currency: string;
        createdAt: Date;
        clientId: string;
        metric: GuardrailMetric;
        targetValue: number;
        acceptableMin: number;
        acceptableMax: number;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
    }[]>;
    history(organizationId: string, clientId: string, metric: GuardrailMetric, membership: MembershipWithRole): Promise<{
        id: string;
        currency: string;
        createdAt: Date;
        clientId: string;
        metric: GuardrailMetric;
        targetValue: number;
        acceptableMin: number;
        acceptableMax: number;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
    }[]>;
    set(organizationId: string, clientId: string, metric: GuardrailMetric, dto: SetKpiGuardrailDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
        guardrail: import("../generated/prisma/client.js").KpiGuardrail;
        warnings: string[];
    }>;
    private assertClientAccessible;
}
