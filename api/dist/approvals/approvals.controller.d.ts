import type { AuthenticatedUser } from '../auth/auth.service.js';
import { type MembershipWithRole } from '../common/guards/organization-membership.guard.js';
import { ApprovalRequestStatus } from '../generated/prisma/enums.js';
import { ApprovalsService } from './approvals.service.js';
import { SetApprovalPolicyDto } from './dto/set-approval-policy.dto.js';
import { CreateApprovalRequestDto } from './dto/create-approval-request.dto.js';
import { DecideApprovalDto } from './dto/decide-approval.dto.js';
export declare class ApprovalsController {
    private readonly approvalsService;
    constructor(approvalsService: ApprovalsService);
    getPolicy(organizationId: string): Promise<{
        thresholds: {
            id: string;
            policyId: string;
            riskLevel: import("../generated/prisma/enums.js").RiskLevel;
            dualApprovalRequired: boolean;
            roleIds: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        allowSelfApproval: boolean;
    }>;
    setPolicy(organizationId: string, dto: SetApprovalPolicyDto, user: AuthenticatedUser): Promise<{
        thresholds: {
            id: string;
            policyId: string;
            riskLevel: import("../generated/prisma/enums.js").RiskLevel;
            dualApprovalRequired: boolean;
            roleIds: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        allowSelfApproval: boolean;
    }>;
    list(organizationId: string, status?: ApprovalRequestStatus): Promise<({
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
        status: ApprovalRequestStatus;
        consumedAt: Date | null;
    })[]>;
    get(organizationId: string, requestId: string): Promise<{
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
        status: ApprovalRequestStatus;
        consumedAt: Date | null;
    }>;
    create(organizationId: string, dto: CreateApprovalRequestDto, user: AuthenticatedUser): Promise<{
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
        status: ApprovalRequestStatus;
        consumedAt: Date | null;
    }>;
    decide(organizationId: string, requestId: string, dto: DecideApprovalDto, user: AuthenticatedUser, membership: MembershipWithRole): Promise<{
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
        status: ApprovalRequestStatus;
        consumedAt: Date | null;
    }>;
}
