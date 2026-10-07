import { PrismaService } from '../prisma/prisma.service.js';
import { GuardrailMetric } from '../generated/prisma/enums.js';
import type { KpiGuardrail } from '../generated/prisma/client.js';
import type { SetKpiGuardrailDto } from './dto/set-kpi-guardrail.dto.js';
export declare class KpiGuardrailsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listCurrentForClient(clientId: string): Promise<KpiGuardrail[]>;
    getActiveGuardrail(clientId: string, metric: GuardrailMetric): Promise<KpiGuardrail | null>;
    getHistory(clientId: string, metric: GuardrailMetric): Promise<KpiGuardrail[]>;
    setGuardrail(organizationId: string, clientId: string, metric: GuardrailMetric, dto: SetKpiGuardrailDto, actorUserId: string): Promise<{
        guardrail: KpiGuardrail;
        warnings: string[];
    }>;
}
