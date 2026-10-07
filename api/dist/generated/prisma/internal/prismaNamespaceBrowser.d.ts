import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Organization: "Organization";
    readonly ApprovalPolicy: "ApprovalPolicy";
    readonly ApprovalThreshold: "ApprovalThreshold";
    readonly ApprovalRequest: "ApprovalRequest";
    readonly ApprovalDecision: "ApprovalDecision";
    readonly Role: "Role";
    readonly RolePermission: "RolePermission";
    readonly Client: "Client";
    readonly User: "User";
    readonly Session: "Session";
    readonly Membership: "Membership";
    readonly MembershipClientAccess: "MembershipClientAccess";
    readonly AuditLog: "AuditLog";
    readonly ClientOnboarding: "ClientOnboarding";
    readonly KpiGuardrail: "KpiGuardrail";
    readonly ComplianceConstraint: "ComplianceConstraint";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly type: "type";
    readonly locale: "locale";
    readonly currency: "currency";
    readonly timezone: "timezone";
    readonly archivedAt: "archivedAt";
    readonly sessionTtlMinutes: "sessionTtlMinutes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const ApprovalPolicyScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly allowSelfApproval: "allowSelfApproval";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApprovalPolicyScalarFieldEnum = (typeof ApprovalPolicyScalarFieldEnum)[keyof typeof ApprovalPolicyScalarFieldEnum];
export declare const ApprovalThresholdScalarFieldEnum: {
    readonly id: "id";
    readonly policyId: "policyId";
    readonly riskLevel: "riskLevel";
    readonly dualApprovalRequired: "dualApprovalRequired";
    readonly roleIds: "roleIds";
};
export type ApprovalThresholdScalarFieldEnum = (typeof ApprovalThresholdScalarFieldEnum)[keyof typeof ApprovalThresholdScalarFieldEnum];
export declare const ApprovalRequestScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly riskLevel: "riskLevel";
    readonly actionType: "actionType";
    readonly summary: "summary";
    readonly payload: "payload";
    readonly requestedByUserId: "requestedByUserId";
    readonly status: "status";
    readonly consumedAt: "consumedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApprovalRequestScalarFieldEnum = (typeof ApprovalRequestScalarFieldEnum)[keyof typeof ApprovalRequestScalarFieldEnum];
export declare const ApprovalDecisionScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly actorUserId: "actorUserId";
    readonly decision: "decision";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type ApprovalDecisionScalarFieldEnum = (typeof ApprovalDecisionScalarFieldEnum)[keyof typeof ApprovalDecisionScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly isSystem: "isSystem";
    readonly systemKey: "systemKey";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly id: "id";
    readonly roleId: "roleId";
    readonly module: "module";
    readonly action: "action";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly slug: "slug";
    readonly status: "status";
    readonly archivedAt: "archivedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly fullName: "fullName";
    readonly lastSelectedOrganizationId: "lastSelectedOrganizationId";
    readonly mfaSecret: "mfaSecret";
    readonly mfaEnabled: "mfaEnabled";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const MembershipScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly organizationId: "organizationId";
    readonly roleId: "roleId";
    readonly clientAccessScope: "clientAccessScope";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum];
export declare const MembershipClientAccessScalarFieldEnum: {
    readonly id: "id";
    readonly membershipId: "membershipId";
    readonly clientId: "clientId";
    readonly createdAt: "createdAt";
};
export type MembershipClientAccessScalarFieldEnum = (typeof MembershipClientAccessScalarFieldEnum)[keyof typeof MembershipClientAccessScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly actorUserId: "actorUserId";
    readonly action: "action";
    readonly targetType: "targetType";
    readonly targetId: "targetId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const ClientOnboardingScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly businessDescription: "businessDescription";
    readonly website: "website";
    readonly industry: "industry";
    readonly productsServices: "productsServices";
    readonly brandVoice: "brandVoice";
    readonly primaryGoal: "primaryGoal";
    readonly secondaryGoals: "secondaryGoals";
    readonly primaryKpi: "primaryKpi";
    readonly secondaryKpis: "secondaryKpis";
    readonly channels: "channels";
    readonly targetGeographies: "targetGeographies";
    readonly targetAudience: "targetAudience";
    readonly budgetMin: "budgetMin";
    readonly budgetMax: "budgetMax";
    readonly competitors: "competitors";
    readonly completedSteps: "completedSteps";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClientOnboardingScalarFieldEnum = (typeof ClientOnboardingScalarFieldEnum)[keyof typeof ClientOnboardingScalarFieldEnum];
export declare const KpiGuardrailScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly metric: "metric";
    readonly targetValue: "targetValue";
    readonly acceptableMin: "acceptableMin";
    readonly acceptableMax: "acceptableMax";
    readonly currency: "currency";
    readonly version: "version";
    readonly isCurrent: "isCurrent";
    readonly supersededAt: "supersededAt";
    readonly createdByUserId: "createdByUserId";
    readonly createdAt: "createdAt";
};
export type KpiGuardrailScalarFieldEnum = (typeof KpiGuardrailScalarFieldEnum)[keyof typeof KpiGuardrailScalarFieldEnum];
export declare const ComplianceConstraintScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly category: "category";
    readonly description: "description";
    readonly riskLevel: "riskLevel";
    readonly disableAutoExecution: "disableAutoExecution";
    readonly isActive: "isActive";
    readonly version: "version";
    readonly isCurrent: "isCurrent";
    readonly supersededAt: "supersededAt";
    readonly pendingRetirementRequestId: "pendingRetirementRequestId";
    readonly createdByUserId: "createdByUserId";
    readonly createdAt: "createdAt";
};
export type ComplianceConstraintScalarFieldEnum = (typeof ComplianceConstraintScalarFieldEnum)[keyof typeof ComplianceConstraintScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
