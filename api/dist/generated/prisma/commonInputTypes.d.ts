import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumOrganizationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | Prisma.EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationTypeFilter<$PrismaModel> | $Enums.OrganizationType;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumOrganizationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | Prisma.EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrganizationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrganizationTypeFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
};
export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumApprovalRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalRequestStatus | Prisma.EnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalRequestStatusFilter<$PrismaModel> | $Enums.ApprovalRequestStatus;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumApprovalRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalRequestStatus | Prisma.EnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApprovalRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApprovalRequestStatusFilter<$PrismaModel>;
};
export type EnumApprovalDecisionValueFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalDecisionValue | Prisma.EnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalDecisionValueFilter<$PrismaModel> | $Enums.ApprovalDecisionValue;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumApprovalDecisionValueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalDecisionValue | Prisma.EnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalDecisionValueWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalDecisionValue;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApprovalDecisionValueFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApprovalDecisionValueFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumSystemRoleKeyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRoleKey | Prisma.EnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSystemRoleKeyNullableFilter<$PrismaModel> | $Enums.SystemRoleKey | null;
};
export type EnumSystemRoleKeyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRoleKey | Prisma.EnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSystemRoleKeyNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemRoleKey | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSystemRoleKeyNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSystemRoleKeyNullableFilter<$PrismaModel>;
};
export type EnumPermissionActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | Prisma.EnumPermissionActionFieldRefInput<$PrismaModel>;
    in?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPermissionActionFilter<$PrismaModel> | $Enums.PermissionAction;
};
export type EnumPermissionActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | Prisma.EnumPermissionActionFieldRefInput<$PrismaModel>;
    in?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPermissionActionWithAggregatesFilter<$PrismaModel> | $Enums.PermissionAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPermissionActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPermissionActionFilter<$PrismaModel>;
};
export type EnumClientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusFilter<$PrismaModel> | $Enums.ClientStatus;
};
export type EnumClientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
};
export type EnumClientAccessScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientAccessScope | Prisma.EnumClientAccessScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientAccessScopeFilter<$PrismaModel> | $Enums.ClientAccessScope;
};
export type EnumClientAccessScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientAccessScope | Prisma.EnumClientAccessScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientAccessScopeWithAggregatesFilter<$PrismaModel> | $Enums.ClientAccessScope;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClientAccessScopeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClientAccessScopeFilter<$PrismaModel>;
};
export type EnumBusinessGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessGoal | Prisma.EnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBusinessGoalNullableFilter<$PrismaModel> | $Enums.BusinessGoal | null;
};
export type EnumKpiTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KpiType | Prisma.EnumKpiTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumKpiTypeNullableFilter<$PrismaModel> | $Enums.KpiType | null;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type EnumBusinessGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessGoal | Prisma.EnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBusinessGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.BusinessGoal | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBusinessGoalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBusinessGoalNullableFilter<$PrismaModel>;
};
export type EnumKpiTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KpiType | Prisma.EnumKpiTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumKpiTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.KpiType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumKpiTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumKpiTypeNullableFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type EnumGuardrailMetricFilter<$PrismaModel = never> = {
    equals?: $Enums.GuardrailMetric | Prisma.EnumGuardrailMetricFieldRefInput<$PrismaModel>;
    in?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGuardrailMetricFilter<$PrismaModel> | $Enums.GuardrailMetric;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumGuardrailMetricWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GuardrailMetric | Prisma.EnumGuardrailMetricFieldRefInput<$PrismaModel>;
    in?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGuardrailMetricWithAggregatesFilter<$PrismaModel> | $Enums.GuardrailMetric;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGuardrailMetricFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGuardrailMetricFilter<$PrismaModel>;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumComplianceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceCategory | Prisma.EnumComplianceCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplianceCategoryFilter<$PrismaModel> | $Enums.ComplianceCategory;
};
export type EnumComplianceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceCategory | Prisma.EnumComplianceCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplianceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ComplianceCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComplianceCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComplianceCategoryFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumOrganizationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | Prisma.EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationTypeFilter<$PrismaModel> | $Enums.OrganizationType;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationType | Prisma.EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationType[] | Prisma.ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrganizationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrganizationTypeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
};
export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
};
export type NestedEnumApprovalRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalRequestStatus | Prisma.EnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalRequestStatusFilter<$PrismaModel> | $Enums.ApprovalRequestStatus;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumApprovalRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalRequestStatus | Prisma.EnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalRequestStatus[] | Prisma.ListEnumApprovalRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApprovalRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApprovalRequestStatusFilter<$PrismaModel>;
};
export type NestedEnumApprovalDecisionValueFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalDecisionValue | Prisma.EnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalDecisionValueFilter<$PrismaModel> | $Enums.ApprovalDecisionValue;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumApprovalDecisionValueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalDecisionValue | Prisma.EnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    in?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApprovalDecisionValue[] | Prisma.ListEnumApprovalDecisionValueFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApprovalDecisionValueWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalDecisionValue;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApprovalDecisionValueFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApprovalDecisionValueFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumSystemRoleKeyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRoleKey | Prisma.EnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSystemRoleKeyNullableFilter<$PrismaModel> | $Enums.SystemRoleKey | null;
};
export type NestedEnumSystemRoleKeyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRoleKey | Prisma.EnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SystemRoleKey[] | Prisma.ListEnumSystemRoleKeyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSystemRoleKeyNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemRoleKey | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSystemRoleKeyNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSystemRoleKeyNullableFilter<$PrismaModel>;
};
export type NestedEnumPermissionActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | Prisma.EnumPermissionActionFieldRefInput<$PrismaModel>;
    in?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPermissionActionFilter<$PrismaModel> | $Enums.PermissionAction;
};
export type NestedEnumPermissionActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | Prisma.EnumPermissionActionFieldRefInput<$PrismaModel>;
    in?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PermissionAction[] | Prisma.ListEnumPermissionActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPermissionActionWithAggregatesFilter<$PrismaModel> | $Enums.PermissionAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPermissionActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPermissionActionFilter<$PrismaModel>;
};
export type NestedEnumClientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusFilter<$PrismaModel> | $Enums.ClientStatus;
};
export type NestedEnumClientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
};
export type NestedEnumClientAccessScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientAccessScope | Prisma.EnumClientAccessScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientAccessScopeFilter<$PrismaModel> | $Enums.ClientAccessScope;
};
export type NestedEnumClientAccessScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientAccessScope | Prisma.EnumClientAccessScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientAccessScope[] | Prisma.ListEnumClientAccessScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientAccessScopeWithAggregatesFilter<$PrismaModel> | $Enums.ClientAccessScope;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClientAccessScopeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClientAccessScopeFilter<$PrismaModel>;
};
export type NestedEnumBusinessGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessGoal | Prisma.EnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBusinessGoalNullableFilter<$PrismaModel> | $Enums.BusinessGoal | null;
};
export type NestedEnumKpiTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KpiType | Prisma.EnumKpiTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumKpiTypeNullableFilter<$PrismaModel> | $Enums.KpiType | null;
};
export type NestedEnumBusinessGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessGoal | Prisma.EnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBusinessGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.BusinessGoal | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBusinessGoalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBusinessGoalNullableFilter<$PrismaModel>;
};
export type NestedEnumKpiTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KpiType | Prisma.EnumKpiTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumKpiTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.KpiType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumKpiTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumKpiTypeNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedEnumGuardrailMetricFilter<$PrismaModel = never> = {
    equals?: $Enums.GuardrailMetric | Prisma.EnumGuardrailMetricFieldRefInput<$PrismaModel>;
    in?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGuardrailMetricFilter<$PrismaModel> | $Enums.GuardrailMetric;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumGuardrailMetricWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GuardrailMetric | Prisma.EnumGuardrailMetricFieldRefInput<$PrismaModel>;
    in?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GuardrailMetric[] | Prisma.ListEnumGuardrailMetricFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGuardrailMetricWithAggregatesFilter<$PrismaModel> | $Enums.GuardrailMetric;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGuardrailMetricFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGuardrailMetricFilter<$PrismaModel>;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedEnumComplianceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceCategory | Prisma.EnumComplianceCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplianceCategoryFilter<$PrismaModel> | $Enums.ComplianceCategory;
};
export type NestedEnumComplianceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplianceCategory | Prisma.EnumComplianceCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComplianceCategory[] | Prisma.ListEnumComplianceCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComplianceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ComplianceCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComplianceCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComplianceCategoryFilter<$PrismaModel>;
};
