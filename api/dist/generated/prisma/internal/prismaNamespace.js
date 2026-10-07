import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Organization: 'Organization',
    ApprovalPolicy: 'ApprovalPolicy',
    ApprovalThreshold: 'ApprovalThreshold',
    ApprovalRequest: 'ApprovalRequest',
    ApprovalDecision: 'ApprovalDecision',
    Role: 'Role',
    RolePermission: 'RolePermission',
    Client: 'Client',
    User: 'User',
    Session: 'Session',
    Membership: 'Membership',
    MembershipClientAccess: 'MembershipClientAccess',
    AuditLog: 'AuditLog',
    ClientOnboarding: 'ClientOnboarding',
    KpiGuardrail: 'KpiGuardrail',
    ComplianceConstraint: 'ComplianceConstraint'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type',
    locale: 'locale',
    currency: 'currency',
    timezone: 'timezone',
    archivedAt: 'archivedAt',
    sessionTtlMinutes: 'sessionTtlMinutes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ApprovalPolicyScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    allowSelfApproval: 'allowSelfApproval',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ApprovalThresholdScalarFieldEnum = {
    id: 'id',
    policyId: 'policyId',
    riskLevel: 'riskLevel',
    dualApprovalRequired: 'dualApprovalRequired',
    roleIds: 'roleIds'
};
export const ApprovalRequestScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    riskLevel: 'riskLevel',
    actionType: 'actionType',
    summary: 'summary',
    payload: 'payload',
    requestedByUserId: 'requestedByUserId',
    status: 'status',
    consumedAt: 'consumedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ApprovalDecisionScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    actorUserId: 'actorUserId',
    decision: 'decision',
    comment: 'comment',
    createdAt: 'createdAt'
};
export const RoleScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    isSystem: 'isSystem',
    systemKey: 'systemKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RolePermissionScalarFieldEnum = {
    id: 'id',
    roleId: 'roleId',
    module: 'module',
    action: 'action'
};
export const ClientScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    slug: 'slug',
    status: 'status',
    archivedAt: 'archivedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    lastSelectedOrganizationId: 'lastSelectedOrganizationId',
    mfaSecret: 'mfaSecret',
    mfaEnabled: 'mfaEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
};
export const MembershipScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    roleId: 'roleId',
    clientAccessScope: 'clientAccessScope',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MembershipClientAccessScalarFieldEnum = {
    id: 'id',
    membershipId: 'membershipId',
    clientId: 'clientId',
    createdAt: 'createdAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    actorUserId: 'actorUserId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const ClientOnboardingScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    businessDescription: 'businessDescription',
    website: 'website',
    industry: 'industry',
    productsServices: 'productsServices',
    brandVoice: 'brandVoice',
    primaryGoal: 'primaryGoal',
    secondaryGoals: 'secondaryGoals',
    primaryKpi: 'primaryKpi',
    secondaryKpis: 'secondaryKpis',
    channels: 'channels',
    targetGeographies: 'targetGeographies',
    targetAudience: 'targetAudience',
    budgetMin: 'budgetMin',
    budgetMax: 'budgetMax',
    competitors: 'competitors',
    completedSteps: 'completedSteps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const KpiGuardrailScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    metric: 'metric',
    targetValue: 'targetValue',
    acceptableMin: 'acceptableMin',
    acceptableMax: 'acceptableMax',
    currency: 'currency',
    version: 'version',
    isCurrent: 'isCurrent',
    supersededAt: 'supersededAt',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
export const ComplianceConstraintScalarFieldEnum = {
    id: 'id',
    clientId: 'clientId',
    category: 'category',
    description: 'description',
    riskLevel: 'riskLevel',
    disableAutoExecution: 'disableAutoExecution',
    isActive: 'isActive',
    version: 'version',
    isCurrent: 'isCurrent',
    supersededAt: 'supersededAt',
    pendingRetirementRequestId: 'pendingRetirementRequestId',
    createdByUserId: 'createdByUserId',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map