import { PrismaService } from '../prisma/prisma.service.js';
import { ApprovalsService } from '../approvals/approvals.service.js';
import { ApprovalRequestStatus, ComplianceCategory, RiskLevel } from '../generated/prisma/enums.js';
import type { ComplianceConstraint } from '../generated/prisma/client.js';
import type { CreateComplianceConstraintDto } from './dto/create-compliance-constraint.dto.js';
import type { RequestRetirementDto } from './dto/request-retirement.dto.js';
import type { ApplyRetirementDto } from './dto/apply-retirement.dto.js';
export declare class ComplianceConstraintsService {
    private readonly prisma;
    private readonly approvals;
    constructor(prisma: PrismaService, approvals: ApprovalsService);
    listActiveForClient(clientId: string): Promise<ComplianceConstraint[]>;
    getHistory(clientId: string, category: ComplianceCategory): Promise<ComplianceConstraint[]>;
    create(organizationId: string, clientId: string, dto: CreateComplianceConstraintDto, actorUserId: string): Promise<ComplianceConstraint>;
    requestRetirement(organizationId: string, clientId: string, constraintId: string, dto: RequestRetirementDto, actorUserId: string): Promise<{
        decisions: {
            id: string;
            createdAt: Date;
            requestId: string;
            actorUserId: string;
            decision: import("../generated/prisma/enums.js").ApprovalDecisionValue;
            comment: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        riskLevel: RiskLevel;
        actionType: string;
        summary: string;
        payload: import("@prisma/client/runtime/client").JsonValue | null;
        requestedByUserId: string;
        status: ApprovalRequestStatus;
        consumedAt: Date | null;
    }>;
    applyRetirement(organizationId: string, clientId: string, constraintId: string, dto: ApplyRetirementDto, actorUserId: string): Promise<ComplianceConstraint>;
    private getActiveOwned;
}
