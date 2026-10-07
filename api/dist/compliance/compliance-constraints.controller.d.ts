import type { AuthenticatedUser } from '../auth/auth.service.js';
import { type MembershipWithRole } from '../common/guards/organization-membership.guard.js';
import { ComplianceCategory } from '../generated/prisma/enums.js';
import { ClientsService } from '../clients/clients.service.js';
import { ClientAccessService } from '../members/client-access.service.js';
import { ComplianceConstraintsService } from './compliance-constraints.service.js';
import { CreateComplianceConstraintDto } from './dto/create-compliance-constraint.dto.js';
import { RequestRetirementDto } from './dto/request-retirement.dto.js';
import { ApplyRetirementDto } from './dto/apply-retirement.dto.js';
export declare class ComplianceConstraintsController {
    private readonly constraintsService;
    private readonly clientsService;
    private readonly clientAccessService;
    constructor(constraintsService: ComplianceConstraintsService, clientsService: ClientsService, clientAccessService: ClientAccessService);
    list(organizationId: string, clientId: string, membership: MembershipWithRole): Promise<{
        id: string;
        createdAt: Date;
        riskLevel: import("../generated/prisma/enums.js").RiskLevel;
        clientId: string;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
        category: ComplianceCategory;
        description: string;
        disableAutoExecution: boolean;
        isActive: boolean;
        pendingRetirementRequestId: string | null;
    }[]>;
    history(organizationId: string, clientId: string, category: ComplianceCategory, membership: MembershipWithRole): Promise<{
        id: string;
        createdAt: Date;
        riskLevel: import("../generated/prisma/enums.js").RiskLevel;
        clientId: string;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
        category: ComplianceCategory;
        description: string;
        disableAutoExecution: boolean;
        isActive: boolean;
        pendingRetirementRequestId: string | null;
    }[]>;
    create(organizationId: string, clientId: string, dto: CreateComplianceConstraintDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
        id: string;
        createdAt: Date;
        riskLevel: import("../generated/prisma/enums.js").RiskLevel;
        clientId: string;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
        category: ComplianceCategory;
        description: string;
        disableAutoExecution: boolean;
        isActive: boolean;
        pendingRetirementRequestId: string | null;
    }>;
    requestRetirement(organizationId: string, clientId: string, constraintId: string, dto: RequestRetirementDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
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
        riskLevel: import("../generated/prisma/enums.js").RiskLevel;
        actionType: string;
        summary: string;
        payload: import("@prisma/client/runtime/client").JsonValue | null;
        requestedByUserId: string;
        status: import("../generated/prisma/enums.js").ApprovalRequestStatus;
        consumedAt: Date | null;
    }>;
    applyRetirement(organizationId: string, clientId: string, constraintId: string, dto: ApplyRetirementDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
        id: string;
        createdAt: Date;
        riskLevel: import("../generated/prisma/enums.js").RiskLevel;
        clientId: string;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
        category: ComplianceCategory;
        description: string;
        disableAutoExecution: boolean;
        isActive: boolean;
        pendingRetirementRequestId: string | null;
    }>;
    private assertClientAccessible;
}
