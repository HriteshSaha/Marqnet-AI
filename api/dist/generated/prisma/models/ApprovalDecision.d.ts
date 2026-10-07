import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalDecisionModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalDecisionPayload>;
export type AggregateApprovalDecision = {
    _count: ApprovalDecisionCountAggregateOutputType | null;
    _min: ApprovalDecisionMinAggregateOutputType | null;
    _max: ApprovalDecisionMaxAggregateOutputType | null;
};
export type ApprovalDecisionMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    actorUserId: string | null;
    decision: $Enums.ApprovalDecisionValue | null;
    comment: string | null;
    createdAt: Date | null;
};
export type ApprovalDecisionMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    actorUserId: string | null;
    decision: $Enums.ApprovalDecisionValue | null;
    comment: string | null;
    createdAt: Date | null;
};
export type ApprovalDecisionCountAggregateOutputType = {
    id: number;
    requestId: number;
    actorUserId: number;
    decision: number;
    comment: number;
    createdAt: number;
    _all: number;
};
export type ApprovalDecisionMinAggregateInputType = {
    id?: true;
    requestId?: true;
    actorUserId?: true;
    decision?: true;
    comment?: true;
    createdAt?: true;
};
export type ApprovalDecisionMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    actorUserId?: true;
    decision?: true;
    comment?: true;
    createdAt?: true;
};
export type ApprovalDecisionCountAggregateInputType = {
    id?: true;
    requestId?: true;
    actorUserId?: true;
    decision?: true;
    comment?: true;
    createdAt?: true;
    _all?: true;
};
export type ApprovalDecisionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
    orderBy?: Prisma.ApprovalDecisionOrderByWithRelationInput | Prisma.ApprovalDecisionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalDecisionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalDecisionCountAggregateInputType;
    _min?: ApprovalDecisionMinAggregateInputType;
    _max?: ApprovalDecisionMaxAggregateInputType;
};
export type GetApprovalDecisionAggregateType<T extends ApprovalDecisionAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalDecision]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalDecision[P]> : Prisma.GetScalarType<T[P], AggregateApprovalDecision[P]>;
};
export type ApprovalDecisionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
    orderBy?: Prisma.ApprovalDecisionOrderByWithAggregationInput | Prisma.ApprovalDecisionOrderByWithAggregationInput[];
    by: Prisma.ApprovalDecisionScalarFieldEnum[] | Prisma.ApprovalDecisionScalarFieldEnum;
    having?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalDecisionCountAggregateInputType | true;
    _min?: ApprovalDecisionMinAggregateInputType;
    _max?: ApprovalDecisionMaxAggregateInputType;
};
export type ApprovalDecisionGroupByOutputType = {
    id: string;
    requestId: string;
    actorUserId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment: string | null;
    createdAt: Date;
    _count: ApprovalDecisionCountAggregateOutputType | null;
    _min: ApprovalDecisionMinAggregateOutputType | null;
    _max: ApprovalDecisionMaxAggregateOutputType | null;
};
export type GetApprovalDecisionGroupByPayload<T extends ApprovalDecisionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalDecisionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalDecisionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalDecisionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalDecisionGroupByOutputType[P]>;
}>>;
export type ApprovalDecisionWhereInput = {
    AND?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    OR?: Prisma.ApprovalDecisionWhereInput[];
    NOT?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    id?: Prisma.StringFilter<"ApprovalDecision"> | string;
    requestId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    actorUserId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionValueFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionValue;
    comment?: Prisma.StringNullableFilter<"ApprovalDecision"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalDecision"> | Date | string;
    request?: Prisma.XOR<Prisma.ApprovalRequestScalarRelationFilter, Prisma.ApprovalRequestWhereInput>;
    actor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ApprovalDecisionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    request?: Prisma.ApprovalRequestOrderByWithRelationInput;
    actor?: Prisma.UserOrderByWithRelationInput;
};
export type ApprovalDecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    requestId_actorUserId?: Prisma.ApprovalDecisionRequestIdActorUserIdCompoundUniqueInput;
    AND?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    OR?: Prisma.ApprovalDecisionWhereInput[];
    NOT?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    requestId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    actorUserId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionValueFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionValue;
    comment?: Prisma.StringNullableFilter<"ApprovalDecision"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalDecision"> | Date | string;
    request?: Prisma.XOR<Prisma.ApprovalRequestScalarRelationFilter, Prisma.ApprovalRequestWhereInput>;
    actor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "requestId_actorUserId">;
export type ApprovalDecisionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalDecisionCountOrderByAggregateInput;
    _max?: Prisma.ApprovalDecisionMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalDecisionMinOrderByAggregateInput;
};
export type ApprovalDecisionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput | Prisma.ApprovalDecisionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput | Prisma.ApprovalDecisionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalDecision"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"ApprovalDecision"> | string;
    actorUserId?: Prisma.StringWithAggregatesFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionValueWithAggregatesFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionValue;
    comment?: Prisma.StringNullableWithAggregatesFilter<"ApprovalDecision"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalDecision"> | Date | string;
};
export type ApprovalDecisionCreateInput = {
    id?: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
    request: Prisma.ApprovalRequestCreateNestedOneWithoutDecisionsInput;
    actor: Prisma.UserCreateNestedOneWithoutApprovalDecisionsInput;
};
export type ApprovalDecisionUncheckedCreateInput = {
    id?: string;
    requestId: string;
    actorUserId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ApprovalDecisionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.ApprovalRequestUpdateOneRequiredWithoutDecisionsNestedInput;
    actor?: Prisma.UserUpdateOneRequiredWithoutApprovalDecisionsNestedInput;
};
export type ApprovalDecisionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    actorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionCreateManyInput = {
    id?: string;
    requestId: string;
    actorUserId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ApprovalDecisionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    actorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionListRelationFilter = {
    every?: Prisma.ApprovalDecisionWhereInput;
    some?: Prisma.ApprovalDecisionWhereInput;
    none?: Prisma.ApprovalDecisionWhereInput;
};
export type ApprovalDecisionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalDecisionRequestIdActorUserIdCompoundUniqueInput = {
    requestId: string;
    actorUserId: string;
};
export type ApprovalDecisionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalDecisionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalDecisionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    actorUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalDecisionCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput> | Prisma.ApprovalDecisionCreateWithoutRequestInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput | Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyRequestInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput> | Prisma.ApprovalDecisionCreateWithoutRequestInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput | Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyRequestInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput> | Prisma.ApprovalDecisionCreateWithoutRequestInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput | Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutRequestInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyRequestInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutRequestInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutRequestInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type ApprovalDecisionUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput> | Prisma.ApprovalDecisionCreateWithoutRequestInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput | Prisma.ApprovalDecisionCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutRequestInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyRequestInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutRequestInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutRequestInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type EnumApprovalDecisionValueFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalDecisionValue;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ApprovalDecisionCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutActorInput, Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput> | Prisma.ApprovalDecisionCreateWithoutActorInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput | Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyActorInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutActorInput, Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput> | Prisma.ApprovalDecisionCreateWithoutActorInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput | Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyActorInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutActorInput, Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput> | Prisma.ApprovalDecisionCreateWithoutActorInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput | Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutActorInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyActorInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutActorInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutActorInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutActorInput, Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput> | Prisma.ApprovalDecisionCreateWithoutActorInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput | Prisma.ApprovalDecisionCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutActorInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyActorInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutActorInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutActorInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type ApprovalDecisionCreateWithoutRequestInput = {
    id?: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
    actor: Prisma.UserCreateNestedOneWithoutApprovalDecisionsInput;
};
export type ApprovalDecisionUncheckedCreateWithoutRequestInput = {
    id?: string;
    actorUserId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ApprovalDecisionCreateOrConnectWithoutRequestInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput>;
};
export type ApprovalDecisionCreateManyRequestInputEnvelope = {
    data: Prisma.ApprovalDecisionCreateManyRequestInput | Prisma.ApprovalDecisionCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type ApprovalDecisionUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedCreateWithoutRequestInput>;
};
export type ApprovalDecisionUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutRequestInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutRequestInput>;
};
export type ApprovalDecisionUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.ApprovalDecisionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyWithoutRequestInput>;
};
export type ApprovalDecisionScalarWhereInput = {
    AND?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
    OR?: Prisma.ApprovalDecisionScalarWhereInput[];
    NOT?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
    id?: Prisma.StringFilter<"ApprovalDecision"> | string;
    requestId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    actorUserId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionValueFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionValue;
    comment?: Prisma.StringNullableFilter<"ApprovalDecision"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalDecision"> | Date | string;
};
export type ApprovalDecisionCreateWithoutActorInput = {
    id?: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
    request: Prisma.ApprovalRequestCreateNestedOneWithoutDecisionsInput;
};
export type ApprovalDecisionUncheckedCreateWithoutActorInput = {
    id?: string;
    requestId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ApprovalDecisionCreateOrConnectWithoutActorInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutActorInput, Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput>;
};
export type ApprovalDecisionCreateManyActorInputEnvelope = {
    data: Prisma.ApprovalDecisionCreateManyActorInput | Prisma.ApprovalDecisionCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type ApprovalDecisionUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutActorInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutActorInput, Prisma.ApprovalDecisionUncheckedCreateWithoutActorInput>;
};
export type ApprovalDecisionUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutActorInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutActorInput>;
};
export type ApprovalDecisionUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.ApprovalDecisionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorInput>;
};
export type ApprovalDecisionCreateManyRequestInput = {
    id?: string;
    actorUserId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ApprovalDecisionUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneRequiredWithoutApprovalDecisionsNestedInput;
};
export type ApprovalDecisionUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionCreateManyActorInput = {
    id?: string;
    requestId: string;
    decision: $Enums.ApprovalDecisionValue;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ApprovalDecisionUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    request?: Prisma.ApprovalRequestUpdateOneRequiredWithoutDecisionsNestedInput;
};
export type ApprovalDecisionUncheckedUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionUncheckedUpdateManyWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionValueFieldUpdateOperationsInput | $Enums.ApprovalDecisionValue;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    actorUserId?: boolean;
    decision?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    request?: boolean | Prisma.ApprovalRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    actorUserId?: boolean;
    decision?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    request?: boolean | Prisma.ApprovalRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    actorUserId?: boolean;
    decision?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    request?: boolean | Prisma.ApprovalRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    actorUserId?: boolean;
    decision?: boolean;
    comment?: boolean;
    createdAt?: boolean;
};
export type ApprovalDecisionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "actorUserId" | "decision" | "comment" | "createdAt", ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.ApprovalRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApprovalDecisionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.ApprovalRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApprovalDecisionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.ApprovalRequestDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ApprovalDecisionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalDecision";
    objects: {
        request: Prisma.$ApprovalRequestPayload<ExtArgs>;
        actor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        actorUserId: string;
        decision: $Enums.ApprovalDecisionValue;
        comment: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["approvalDecision"]>;
    composites: {};
};
export type ApprovalDecisionGetPayload<S extends boolean | null | undefined | ApprovalDecisionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload, S>;
export type ApprovalDecisionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalDecisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalDecisionCountAggregateInputType | true;
};
export interface ApprovalDecisionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalDecision'];
        meta: {
            name: 'ApprovalDecision';
        };
    };
    findUnique<T extends ApprovalDecisionFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalDecisionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalDecisionFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalDecisionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalDecisionFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalDecisionCreateArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalDecisionCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalDecisionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalDecisionDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalDecisionUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalDecisionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalDecisionUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalDecisionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalDecisionUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalDecisionCountArgs>(args?: Prisma.Subset<T, ApprovalDecisionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalDecisionCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalDecisionAggregateArgs>(args: Prisma.Subset<T, ApprovalDecisionAggregateArgs>): Prisma.PrismaPromise<GetApprovalDecisionAggregateType<T>>;
    groupBy<T extends ApprovalDecisionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalDecisionGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalDecisionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalDecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalDecisionFieldRefs;
}
export interface Prisma__ApprovalDecisionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.ApprovalRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__ApprovalRequestClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    actor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalDecisionFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly requestId: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly actorUserId: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly decision: Prisma.FieldRef<"ApprovalDecision", 'ApprovalDecisionValue'>;
    readonly comment: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ApprovalDecision", 'DateTime'>;
}
export type ApprovalDecisionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalDecisionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalDecisionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalDecisionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalDecisionCreateInput, Prisma.ApprovalDecisionUncheckedCreateInput>;
};
export type ApprovalDecisionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalDecisionCreateManyInput | Prisma.ApprovalDecisionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalDecisionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    data: Prisma.ApprovalDecisionCreateManyInput | Prisma.ApprovalDecisionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalDecisionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalDecisionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateInput, Prisma.ApprovalDecisionUncheckedUpdateInput>;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalDecisionWhereInput;
    limit?: number;
};
export type ApprovalDecisionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalDecisionWhereInput;
    limit?: number;
    include?: Prisma.ApprovalDecisionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalDecisionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateInput, Prisma.ApprovalDecisionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalDecisionUpdateInput, Prisma.ApprovalDecisionUncheckedUpdateInput>;
};
export type ApprovalDecisionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
    limit?: number;
};
export type ApprovalDecisionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
};
