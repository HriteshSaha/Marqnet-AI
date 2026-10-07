import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalRequestPayload>;
export type AggregateApprovalRequest = {
    _count: ApprovalRequestCountAggregateOutputType | null;
    _min: ApprovalRequestMinAggregateOutputType | null;
    _max: ApprovalRequestMaxAggregateOutputType | null;
};
export type ApprovalRequestMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    riskLevel: $Enums.RiskLevel | null;
    actionType: string | null;
    summary: string | null;
    requestedByUserId: string | null;
    status: $Enums.ApprovalRequestStatus | null;
    consumedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApprovalRequestMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    riskLevel: $Enums.RiskLevel | null;
    actionType: string | null;
    summary: string | null;
    requestedByUserId: string | null;
    status: $Enums.ApprovalRequestStatus | null;
    consumedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApprovalRequestCountAggregateOutputType = {
    id: number;
    organizationId: number;
    riskLevel: number;
    actionType: number;
    summary: number;
    payload: number;
    requestedByUserId: number;
    status: number;
    consumedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ApprovalRequestMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    riskLevel?: true;
    actionType?: true;
    summary?: true;
    requestedByUserId?: true;
    status?: true;
    consumedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApprovalRequestMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    riskLevel?: true;
    actionType?: true;
    summary?: true;
    requestedByUserId?: true;
    status?: true;
    consumedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApprovalRequestCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    riskLevel?: true;
    actionType?: true;
    summary?: true;
    payload?: true;
    requestedByUserId?: true;
    status?: true;
    consumedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ApprovalRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRequestWhereInput;
    orderBy?: Prisma.ApprovalRequestOrderByWithRelationInput | Prisma.ApprovalRequestOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalRequestCountAggregateInputType;
    _min?: ApprovalRequestMinAggregateInputType;
    _max?: ApprovalRequestMaxAggregateInputType;
};
export type GetApprovalRequestAggregateType<T extends ApprovalRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalRequest[P]> : Prisma.GetScalarType<T[P], AggregateApprovalRequest[P]>;
};
export type ApprovalRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRequestWhereInput;
    orderBy?: Prisma.ApprovalRequestOrderByWithAggregationInput | Prisma.ApprovalRequestOrderByWithAggregationInput[];
    by: Prisma.ApprovalRequestScalarFieldEnum[] | Prisma.ApprovalRequestScalarFieldEnum;
    having?: Prisma.ApprovalRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalRequestCountAggregateInputType | true;
    _min?: ApprovalRequestMinAggregateInputType;
    _max?: ApprovalRequestMaxAggregateInputType;
};
export type ApprovalRequestGroupByOutputType = {
    id: string;
    organizationId: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload: runtime.JsonValue | null;
    requestedByUserId: string;
    status: $Enums.ApprovalRequestStatus;
    consumedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ApprovalRequestCountAggregateOutputType | null;
    _min: ApprovalRequestMinAggregateOutputType | null;
    _max: ApprovalRequestMaxAggregateOutputType | null;
};
export type GetApprovalRequestGroupByPayload<T extends ApprovalRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalRequestGroupByOutputType[P]>;
}>>;
export type ApprovalRequestWhereInput = {
    AND?: Prisma.ApprovalRequestWhereInput | Prisma.ApprovalRequestWhereInput[];
    OR?: Prisma.ApprovalRequestWhereInput[];
    NOT?: Prisma.ApprovalRequestWhereInput | Prisma.ApprovalRequestWhereInput[];
    id?: Prisma.StringFilter<"ApprovalRequest"> | string;
    organizationId?: Prisma.StringFilter<"ApprovalRequest"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ApprovalRequest"> | $Enums.RiskLevel;
    actionType?: Prisma.StringFilter<"ApprovalRequest"> | string;
    summary?: Prisma.StringFilter<"ApprovalRequest"> | string;
    payload?: Prisma.JsonNullableFilter<"ApprovalRequest">;
    requestedByUserId?: Prisma.StringFilter<"ApprovalRequest"> | string;
    status?: Prisma.EnumApprovalRequestStatusFilter<"ApprovalRequest"> | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApprovalRequest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    decisions?: Prisma.ApprovalDecisionListRelationFilter;
};
export type ApprovalRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    requestedBy?: Prisma.UserOrderByWithRelationInput;
    decisions?: Prisma.ApprovalDecisionOrderByRelationAggregateInput;
};
export type ApprovalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApprovalRequestWhereInput | Prisma.ApprovalRequestWhereInput[];
    OR?: Prisma.ApprovalRequestWhereInput[];
    NOT?: Prisma.ApprovalRequestWhereInput | Prisma.ApprovalRequestWhereInput[];
    organizationId?: Prisma.StringFilter<"ApprovalRequest"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ApprovalRequest"> | $Enums.RiskLevel;
    actionType?: Prisma.StringFilter<"ApprovalRequest"> | string;
    summary?: Prisma.StringFilter<"ApprovalRequest"> | string;
    payload?: Prisma.JsonNullableFilter<"ApprovalRequest">;
    requestedByUserId?: Prisma.StringFilter<"ApprovalRequest"> | string;
    status?: Prisma.EnumApprovalRequestStatusFilter<"ApprovalRequest"> | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApprovalRequest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    decisions?: Prisma.ApprovalDecisionListRelationFilter;
}, "id">;
export type ApprovalRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalRequestCountOrderByAggregateInput;
    _max?: Prisma.ApprovalRequestMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalRequestMinOrderByAggregateInput;
};
export type ApprovalRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalRequestScalarWhereWithAggregatesInput | Prisma.ApprovalRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalRequestScalarWhereWithAggregatesInput | Prisma.ApprovalRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalRequest"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"ApprovalRequest"> | string;
    riskLevel?: Prisma.EnumRiskLevelWithAggregatesFilter<"ApprovalRequest"> | $Enums.RiskLevel;
    actionType?: Prisma.StringWithAggregatesFilter<"ApprovalRequest"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"ApprovalRequest"> | string;
    payload?: Prisma.JsonNullableWithAggregatesFilter<"ApprovalRequest">;
    requestedByUserId?: Prisma.StringWithAggregatesFilter<"ApprovalRequest"> | string;
    status?: Prisma.EnumApprovalRequestStatusWithAggregatesFilter<"ApprovalRequest"> | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ApprovalRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalRequest"> | Date | string;
};
export type ApprovalRequestCreateInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutApprovalRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutApprovalRequestsMadeInput;
    decisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutRequestInput;
};
export type ApprovalRequestUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId: string;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    decisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutRequestInput;
};
export type ApprovalRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutApprovalRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutApprovalRequestsMadeNestedInput;
    decisions?: Prisma.ApprovalDecisionUpdateManyWithoutRequestNestedInput;
};
export type ApprovalRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutRequestNestedInput;
};
export type ApprovalRequestCreateManyInput = {
    id?: string;
    organizationId: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId: string;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApprovalRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRequestListRelationFilter = {
    every?: Prisma.ApprovalRequestWhereInput;
    some?: Prisma.ApprovalRequestWhereInput;
    none?: Prisma.ApprovalRequestWhereInput;
};
export type ApprovalRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApprovalRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApprovalRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    actionType?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    requestedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consumedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApprovalRequestScalarRelationFilter = {
    is?: Prisma.ApprovalRequestWhereInput;
    isNot?: Prisma.ApprovalRequestWhereInput;
};
export type ApprovalRequestCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ApprovalRequestCreateWithoutOrganizationInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput | Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ApprovalRequestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
};
export type ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ApprovalRequestCreateWithoutOrganizationInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput | Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ApprovalRequestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
};
export type ApprovalRequestUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ApprovalRequestCreateWithoutOrganizationInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput | Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ApprovalRequestCreateManyOrganizationInputEnvelope;
    set?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    delete?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    update?: Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ApprovalRequestUpdateManyWithWhereWithoutOrganizationInput | Prisma.ApprovalRequestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ApprovalRequestScalarWhereInput | Prisma.ApprovalRequestScalarWhereInput[];
};
export type ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput> | Prisma.ApprovalRequestCreateWithoutOrganizationInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput | Prisma.ApprovalRequestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ApprovalRequestCreateManyOrganizationInputEnvelope;
    set?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    delete?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    update?: Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ApprovalRequestUpdateManyWithWhereWithoutOrganizationInput | Prisma.ApprovalRequestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ApprovalRequestScalarWhereInput | Prisma.ApprovalRequestScalarWhereInput[];
};
export type EnumApprovalRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalRequestStatus;
};
export type ApprovalRequestCreateNestedOneWithoutDecisionsInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutDecisionsInput, Prisma.ApprovalRequestUncheckedCreateWithoutDecisionsInput>;
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutDecisionsInput;
    connect?: Prisma.ApprovalRequestWhereUniqueInput;
};
export type ApprovalRequestUpdateOneRequiredWithoutDecisionsNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutDecisionsInput, Prisma.ApprovalRequestUncheckedCreateWithoutDecisionsInput>;
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutDecisionsInput;
    upsert?: Prisma.ApprovalRequestUpsertWithoutDecisionsInput;
    connect?: Prisma.ApprovalRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApprovalRequestUpdateToOneWithWhereWithoutDecisionsInput, Prisma.ApprovalRequestUpdateWithoutDecisionsInput>, Prisma.ApprovalRequestUncheckedUpdateWithoutDecisionsInput>;
};
export type ApprovalRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ApprovalRequestCreateWithoutRequestedByInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput | Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.ApprovalRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
};
export type ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ApprovalRequestCreateWithoutRequestedByInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput | Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.ApprovalRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
};
export type ApprovalRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ApprovalRequestCreateWithoutRequestedByInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput | Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.ApprovalRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    delete?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    update?: Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.ApprovalRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.ApprovalRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.ApprovalRequestScalarWhereInput | Prisma.ApprovalRequestScalarWhereInput[];
};
export type ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ApprovalRequestCreateWithoutRequestedByInput[] | Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput | Prisma.ApprovalRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.ApprovalRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.ApprovalRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    delete?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    connect?: Prisma.ApprovalRequestWhereUniqueInput | Prisma.ApprovalRequestWhereUniqueInput[];
    update?: Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.ApprovalRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.ApprovalRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.ApprovalRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.ApprovalRequestScalarWhereInput | Prisma.ApprovalRequestScalarWhereInput[];
};
export type ApprovalRequestCreateWithoutOrganizationInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    requestedBy: Prisma.UserCreateNestedOneWithoutApprovalRequestsMadeInput;
    decisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutRequestInput;
};
export type ApprovalRequestUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId: string;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    decisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutRequestInput;
};
export type ApprovalRequestCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput>;
};
export type ApprovalRequestCreateManyOrganizationInputEnvelope = {
    data: Prisma.ApprovalRequestCreateManyOrganizationInput | Prisma.ApprovalRequestCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRequestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRequestUpdateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedCreateWithoutOrganizationInput>;
};
export type ApprovalRequestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateWithoutOrganizationInput, Prisma.ApprovalRequestUncheckedUpdateWithoutOrganizationInput>;
};
export type ApprovalRequestUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ApprovalRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateManyMutationInput, Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ApprovalRequestScalarWhereInput = {
    AND?: Prisma.ApprovalRequestScalarWhereInput | Prisma.ApprovalRequestScalarWhereInput[];
    OR?: Prisma.ApprovalRequestScalarWhereInput[];
    NOT?: Prisma.ApprovalRequestScalarWhereInput | Prisma.ApprovalRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"ApprovalRequest"> | string;
    organizationId?: Prisma.StringFilter<"ApprovalRequest"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ApprovalRequest"> | $Enums.RiskLevel;
    actionType?: Prisma.StringFilter<"ApprovalRequest"> | string;
    summary?: Prisma.StringFilter<"ApprovalRequest"> | string;
    payload?: Prisma.JsonNullableFilter<"ApprovalRequest">;
    requestedByUserId?: Prisma.StringFilter<"ApprovalRequest"> | string;
    status?: Prisma.EnumApprovalRequestStatusFilter<"ApprovalRequest"> | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApprovalRequest"> | Date | string;
};
export type ApprovalRequestCreateWithoutDecisionsInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutApprovalRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutApprovalRequestsMadeInput;
};
export type ApprovalRequestUncheckedCreateWithoutDecisionsInput = {
    id?: string;
    organizationId: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId: string;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApprovalRequestCreateOrConnectWithoutDecisionsInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutDecisionsInput, Prisma.ApprovalRequestUncheckedCreateWithoutDecisionsInput>;
};
export type ApprovalRequestUpsertWithoutDecisionsInput = {
    update: Prisma.XOR<Prisma.ApprovalRequestUpdateWithoutDecisionsInput, Prisma.ApprovalRequestUncheckedUpdateWithoutDecisionsInput>;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutDecisionsInput, Prisma.ApprovalRequestUncheckedCreateWithoutDecisionsInput>;
    where?: Prisma.ApprovalRequestWhereInput;
};
export type ApprovalRequestUpdateToOneWithWhereWithoutDecisionsInput = {
    where?: Prisma.ApprovalRequestWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateWithoutDecisionsInput, Prisma.ApprovalRequestUncheckedUpdateWithoutDecisionsInput>;
};
export type ApprovalRequestUpdateWithoutDecisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutApprovalRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutApprovalRequestsMadeNestedInput;
};
export type ApprovalRequestUncheckedUpdateWithoutDecisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRequestCreateWithoutRequestedByInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutApprovalRequestsInput;
    decisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutRequestInput;
};
export type ApprovalRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    organizationId: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    decisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutRequestInput;
};
export type ApprovalRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput>;
};
export type ApprovalRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.ApprovalRequestCreateManyRequestedByInput | Prisma.ApprovalRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRequestUpdateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedCreateWithoutRequestedByInput>;
};
export type ApprovalRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.ApprovalRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateWithoutRequestedByInput, Prisma.ApprovalRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type ApprovalRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.ApprovalRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateManyMutationInput, Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type ApprovalRequestCreateManyOrganizationInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId: string;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApprovalRequestUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutApprovalRequestsMadeNestedInput;
    decisions?: Prisma.ApprovalDecisionUpdateManyWithoutRequestNestedInput;
};
export type ApprovalRequestUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutRequestNestedInput;
};
export type ApprovalRequestUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    requestedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRequestCreateManyRequestedByInput = {
    id?: string;
    organizationId: string;
    riskLevel: $Enums.RiskLevel;
    actionType: string;
    summary: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.ApprovalRequestStatus;
    consumedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApprovalRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutApprovalRequestsNestedInput;
    decisions?: Prisma.ApprovalDecisionUpdateManyWithoutRequestNestedInput;
};
export type ApprovalRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutRequestNestedInput;
};
export type ApprovalRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    actionType?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumApprovalRequestStatusFieldUpdateOperationsInput | $Enums.ApprovalRequestStatus;
    consumedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRequestCountOutputType = {
    decisions: number;
};
export type ApprovalRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    decisions?: boolean | ApprovalRequestCountOutputTypeCountDecisionsArgs;
};
export type ApprovalRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestCountOutputTypeSelect<ExtArgs> | null;
};
export type ApprovalRequestCountOutputTypeCountDecisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
};
export type ApprovalRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    riskLevel?: boolean;
    actionType?: boolean;
    summary?: boolean;
    payload?: boolean;
    requestedByUserId?: boolean;
    status?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    decisions?: boolean | Prisma.ApprovalRequest$decisionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRequest"]>;
export type ApprovalRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    riskLevel?: boolean;
    actionType?: boolean;
    summary?: boolean;
    payload?: boolean;
    requestedByUserId?: boolean;
    status?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRequest"]>;
export type ApprovalRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    riskLevel?: boolean;
    actionType?: boolean;
    summary?: boolean;
    payload?: boolean;
    requestedByUserId?: boolean;
    status?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRequest"]>;
export type ApprovalRequestSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    riskLevel?: boolean;
    actionType?: boolean;
    summary?: boolean;
    payload?: boolean;
    requestedByUserId?: boolean;
    status?: boolean;
    consumedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ApprovalRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "riskLevel" | "actionType" | "summary" | "payload" | "requestedByUserId" | "status" | "consumedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["approvalRequest"]>;
export type ApprovalRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    decisions?: boolean | Prisma.ApprovalRequest$decisionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApprovalRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApprovalRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ApprovalRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalRequest";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        requestedBy: Prisma.$UserPayload<ExtArgs>;
        decisions: Prisma.$ApprovalDecisionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        riskLevel: $Enums.RiskLevel;
        actionType: string;
        summary: string;
        payload: runtime.JsonValue | null;
        requestedByUserId: string;
        status: $Enums.ApprovalRequestStatus;
        consumedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["approvalRequest"]>;
    composites: {};
};
export type ApprovalRequestGetPayload<S extends boolean | null | undefined | ApprovalRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload, S>;
export type ApprovalRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalRequestCountAggregateInputType | true;
};
export interface ApprovalRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRequest'];
        meta: {
            name: 'ApprovalRequest';
        };
    };
    findUnique<T extends ApprovalRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalRequestFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalRequestCreateArgs>(args: Prisma.SelectSubset<T, ApprovalRequestCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalRequestDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalRequestUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalRequestUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalRequestCountArgs>(args?: Prisma.Subset<T, ApprovalRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalRequestCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalRequestAggregateArgs>(args: Prisma.Subset<T, ApprovalRequestAggregateArgs>): Prisma.PrismaPromise<GetApprovalRequestAggregateType<T>>;
    groupBy<T extends ApprovalRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalRequestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalRequestFieldRefs;
}
export interface Prisma__ApprovalRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    decisions<T extends Prisma.ApprovalRequest$decisionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRequest$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalRequestFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalRequest", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ApprovalRequest", 'String'>;
    readonly riskLevel: Prisma.FieldRef<"ApprovalRequest", 'RiskLevel'>;
    readonly actionType: Prisma.FieldRef<"ApprovalRequest", 'String'>;
    readonly summary: Prisma.FieldRef<"ApprovalRequest", 'String'>;
    readonly payload: Prisma.FieldRef<"ApprovalRequest", 'Json'>;
    readonly requestedByUserId: Prisma.FieldRef<"ApprovalRequest", 'String'>;
    readonly status: Prisma.FieldRef<"ApprovalRequest", 'ApprovalRequestStatus'>;
    readonly consumedAt: Prisma.FieldRef<"ApprovalRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ApprovalRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ApprovalRequest", 'DateTime'>;
}
export type ApprovalRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where: Prisma.ApprovalRequestWhereUniqueInput;
};
export type ApprovalRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where: Prisma.ApprovalRequestWhereUniqueInput;
};
export type ApprovalRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRequestWhereInput;
    orderBy?: Prisma.ApprovalRequestOrderByWithRelationInput | Prisma.ApprovalRequestOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRequestScalarFieldEnum | Prisma.ApprovalRequestScalarFieldEnum[];
};
export type ApprovalRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRequestWhereInput;
    orderBy?: Prisma.ApprovalRequestOrderByWithRelationInput | Prisma.ApprovalRequestOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRequestScalarFieldEnum | Prisma.ApprovalRequestScalarFieldEnum[];
};
export type ApprovalRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRequestWhereInput;
    orderBy?: Prisma.ApprovalRequestOrderByWithRelationInput | Prisma.ApprovalRequestOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRequestScalarFieldEnum | Prisma.ApprovalRequestScalarFieldEnum[];
};
export type ApprovalRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalRequestCreateInput, Prisma.ApprovalRequestUncheckedCreateInput>;
};
export type ApprovalRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalRequestCreateManyInput | Prisma.ApprovalRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    data: Prisma.ApprovalRequestCreateManyInput | Prisma.ApprovalRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateInput, Prisma.ApprovalRequestUncheckedUpdateInput>;
    where: Prisma.ApprovalRequestWhereUniqueInput;
};
export type ApprovalRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateManyMutationInput, Prisma.ApprovalRequestUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalRequestWhereInput;
    limit?: number;
};
export type ApprovalRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalRequestUpdateManyMutationInput, Prisma.ApprovalRequestUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalRequestWhereInput;
    limit?: number;
    include?: Prisma.ApprovalRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where: Prisma.ApprovalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRequestCreateInput, Prisma.ApprovalRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalRequestUpdateInput, Prisma.ApprovalRequestUncheckedUpdateInput>;
};
export type ApprovalRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
    where: Prisma.ApprovalRequestWhereUniqueInput;
};
export type ApprovalRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRequestWhereInput;
    limit?: number;
};
export type ApprovalRequest$decisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where?: Prisma.ApprovalDecisionWhereInput;
    orderBy?: Prisma.ApprovalDecisionOrderByWithRelationInput | Prisma.ApprovalDecisionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalDecisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalDecisionScalarFieldEnum | Prisma.ApprovalDecisionScalarFieldEnum[];
};
export type ApprovalRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRequestSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRequestOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRequestInclude<ExtArgs> | null;
};
