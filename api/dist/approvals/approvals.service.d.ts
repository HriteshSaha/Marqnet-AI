import { PrismaService } from '../prisma/prisma.service.js';
import { ApprovalDecisionValue, ApprovalRequestStatus, RiskLevel } from '../generated/prisma/enums.js';
import type { SetApprovalPolicyDto } from './dto/set-approval-policy.dto.js';
import type { CreateApprovalRequestDto } from './dto/create-approval-request.dto.js';
import type { DecideApprovalDto } from './dto/decide-approval.dto.js';
export declare class ApprovalsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPolicy(organizationId: string): Promise<{
        thresholds: {
            id: string;
            policyId: string;
            riskLevel: RiskLevel;
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
    setPolicy(organizationId: string, dto: SetApprovalPolicyDto, actorUserId: string): Promise<{
        thresholds: {
            id: string;
            policyId: string;
            riskLevel: RiskLevel;
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
    createRequest(organizationId: string, dto: CreateApprovalRequestDto, requestedByUserId: string): Promise<{
        decisions: {
            id: string;
            createdAt: Date;
            requestId: string;
            actorUserId: string;
            decision: ApprovalDecisionValue;
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
    listForOrganization(organizationId: string, status?: ApprovalRequestStatus): Promise<({
        decisions: {
            id: string;
            createdAt: Date;
            requestId: string;
            actorUserId: string;
            decision: ApprovalDecisionValue;
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
    })[]>;
    getForOrganization(organizationId: string, requestId: string): Promise<{
        decisions: {
            id: string;
            createdAt: Date;
            requestId: string;
            actorUserId: string;
            decision: ApprovalDecisionValue;
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
    decide(organizationId: string, requestId: string, dto: DecideApprovalDto, actorUserId: string, actorRoleId: string): Promise<{
        decisions: {
            id: string;
            createdAt: Date;
            requestId: string;
            actorUserId: string;
            decision: ApprovalDecisionValue;
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
}
