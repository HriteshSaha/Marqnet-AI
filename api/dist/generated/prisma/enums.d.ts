export declare const OrganizationType: {
    readonly AGENCY: "AGENCY";
    readonly DIRECT_BRAND: "DIRECT_BRAND";
};
export type OrganizationType = (typeof OrganizationType)[keyof typeof OrganizationType];
export declare const SystemRoleKey: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly MEMBER: "MEMBER";
};
export type SystemRoleKey = (typeof SystemRoleKey)[keyof typeof SystemRoleKey];
export declare const PermissionAction: {
    readonly READ: "READ";
    readonly CREATE: "CREATE";
    readonly EDIT: "EDIT";
    readonly DELETE: "DELETE";
    readonly EXPORT: "EXPORT";
    readonly MANAGE: "MANAGE";
};
export type PermissionAction = (typeof PermissionAction)[keyof typeof PermissionAction];
export declare const ClientStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly ARCHIVED: "ARCHIVED";
};
export type ClientStatus = (typeof ClientStatus)[keyof typeof ClientStatus];
export declare const ClientAccessScope: {
    readonly ALL: "ALL";
    readonly RESTRICTED: "RESTRICTED";
};
export type ClientAccessScope = (typeof ClientAccessScope)[keyof typeof ClientAccessScope];
export declare const OnboardingStep: {
    readonly BUSINESS_PROFILE: "BUSINESS_PROFILE";
    readonly GOALS_AND_KPIS: "GOALS_AND_KPIS";
    readonly CHANNELS: "CHANNELS";
    readonly AUDIENCE_AND_GEOGRAPHY: "AUDIENCE_AND_GEOGRAPHY";
    readonly BUDGET: "BUDGET";
    readonly COMPETITORS: "COMPETITORS";
};
export type OnboardingStep = (typeof OnboardingStep)[keyof typeof OnboardingStep];
export declare const MarketingChannel: {
    readonly SEO: "SEO";
    readonly GOOGLE_ADS: "GOOGLE_ADS";
    readonly META_ADS: "META_ADS";
    readonly MICROSOFT_ADS: "MICROSOFT_ADS";
    readonly LINKEDIN_ADS: "LINKEDIN_ADS";
    readonly TIKTOK_ADS: "TIKTOK_ADS";
    readonly YOUTUBE_ADS: "YOUTUBE_ADS";
    readonly EMAIL_MARKETING: "EMAIL_MARKETING";
};
export type MarketingChannel = (typeof MarketingChannel)[keyof typeof MarketingChannel];
export declare const BusinessGoal: {
    readonly LEAD_GENERATION: "LEAD_GENERATION";
    readonly ECOMMERCE_SALES: "ECOMMERCE_SALES";
    readonly BRAND_AWARENESS: "BRAND_AWARENESS";
    readonly APP_INSTALLS: "APP_INSTALLS";
    readonly FOOT_TRAFFIC: "FOOT_TRAFFIC";
    readonly CUSTOMER_RETENTION: "CUSTOMER_RETENTION";
};
export type BusinessGoal = (typeof BusinessGoal)[keyof typeof BusinessGoal];
export declare const KpiType: {
    readonly CPA: "CPA";
    readonly ROAS: "ROAS";
    readonly REVENUE: "REVENUE";
    readonly LEADS: "LEADS";
    readonly TRAFFIC: "TRAFFIC";
    readonly CONVERSION_RATE: "CONVERSION_RATE";
    readonly BRAND_AWARENESS_LIFT: "BRAND_AWARENESS_LIFT";
};
export type KpiType = (typeof KpiType)[keyof typeof KpiType];
export declare const GuardrailMetric: {
    readonly CPA: "CPA";
    readonly ROAS: "ROAS";
    readonly REVENUE: "REVENUE";
    readonly BUDGET: "BUDGET";
    readonly LEAD_QUALITY_SCORE: "LEAD_QUALITY_SCORE";
};
export type GuardrailMetric = (typeof GuardrailMetric)[keyof typeof GuardrailMetric];
export declare const ComplianceCategory: {
    readonly REGULATED_INDUSTRY: "REGULATED_INDUSTRY";
    readonly FINANCIAL_SERVICES: "FINANCIAL_SERVICES";
    readonly HEALTHCARE: "HEALTHCARE";
    readonly LEGAL: "LEGAL";
    readonly ALCOHOL: "ALCOHOL";
    readonly GAMBLING: "GAMBLING";
    readonly CANNABIS: "CANNABIS";
    readonly PROHIBITED_CLAIMS: "PROHIBITED_CLAIMS";
    readonly PROHIBITED_KEYWORDS: "PROHIBITED_KEYWORDS";
    readonly BRAND_RESTRICTION: "BRAND_RESTRICTION";
    readonly DATA_PRIVACY: "DATA_PRIVACY";
    readonly OTHER: "OTHER";
};
export type ComplianceCategory = (typeof ComplianceCategory)[keyof typeof ComplianceCategory];
export declare const RiskLevel: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
export declare const ApprovalRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type ApprovalRequestStatus = (typeof ApprovalRequestStatus)[keyof typeof ApprovalRequestStatus];
export declare const ApprovalDecisionValue: {
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type ApprovalDecisionValue = (typeof ApprovalDecisionValue)[keyof typeof ApprovalDecisionValue];
