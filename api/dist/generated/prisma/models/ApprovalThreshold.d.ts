import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalThresholdModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalThresholdPayload>;
export type AggregateApprovalThreshold = {
    _count: ApprovalThresholdCountAggregateOutputType | null;
    _min: ApprovalThresholdMinAggregateOutputType | null;
    _max: ApprovalThresholdMaxAggregateOutputType | null;
};
export type ApprovalThresholdMinAggregateOutputType = {
    id: string | null;
    policyId: string | null;
    riskLevel: $Enums.RiskLevel | null;
    dualApprovalRequired: boolean | null;
};
export type ApprovalThresholdMaxAggregateOutputType = {
    id: string | null;
    policyId: string | null;
    riskLevel: $Enums.RiskLevel | null;
    dualApprovalRequired: boolean | null;
};
export type ApprovalThresholdCountAggregateOutputType = {
    id: number;
    policyId: number;
    riskLevel: number;
    dualApprovalRequired: number;
    roleIds: number;
    _all: number;
};
export type ApprovalThresholdMinAggregateInputType = {
    id?: true;
    policyId?: true;
    riskLevel?: true;
    dualApprovalRequired?: true;
};
export type ApprovalThresholdMaxAggregateInputType = {
    id?: true;
    policyId?: true;
    riskLevel?: true;
    dualApprovalRequired?: true;
};
export type ApprovalThresholdCountAggregateInputType = {
    id?: true;
    policyId?: true;
    riskLevel?: true;
    dualApprovalRequired?: true;
    roleIds?: true;
    _all?: true;
};
export type ApprovalThresholdAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalThresholdWhereInput;
    orderBy?: Prisma.ApprovalThresholdOrderByWithRelationInput | Prisma.ApprovalThresholdOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalThresholdCountAggregateInputType;
    _min?: ApprovalThresholdMinAggregateInputType;
    _max?: ApprovalThresholdMaxAggregateInputType;
};
export type GetApprovalThresholdAggregateType<T extends ApprovalThresholdAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalThreshold]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalThreshold[P]> : Prisma.GetScalarType<T[P], AggregateApprovalThreshold[P]>;
};
export type ApprovalThresholdGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalThresholdWhereInput;
    orderBy?: Prisma.ApprovalThresholdOrderByWithAggregationInput | Prisma.ApprovalThresholdOrderByWithAggregationInput[];
    by: Prisma.ApprovalThresholdScalarFieldEnum[] | Prisma.ApprovalThresholdScalarFieldEnum;
    having?: Prisma.ApprovalThresholdScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalThresholdCountAggregateInputType | true;
    _min?: ApprovalThresholdMinAggregateInputType;
    _max?: ApprovalThresholdMaxAggregateInputType;
};
export type ApprovalThresholdGroupByOutputType = {
    id: string;
    policyId: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired: boolean;
    roleIds: string[];
    _count: ApprovalThresholdCountAggregateOutputType | null;
    _min: ApprovalThresholdMinAggregateOutputType | null;
    _max: ApprovalThresholdMaxAggregateOutputType | null;
};
export type GetApprovalThresholdGroupByPayload<T extends ApprovalThresholdGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalThresholdGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalThresholdGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalThresholdGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalThresholdGroupByOutputType[P]>;
}>>;
export type ApprovalThresholdWhereInput = {
    AND?: Prisma.ApprovalThresholdWhereInput | Prisma.ApprovalThresholdWhereInput[];
    OR?: Prisma.ApprovalThresholdWhereInput[];
    NOT?: Prisma.ApprovalThresholdWhereInput | Prisma.ApprovalThresholdWhereInput[];
    id?: Prisma.StringFilter<"ApprovalThreshold"> | string;
    policyId?: Prisma.StringFilter<"ApprovalThreshold"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ApprovalThreshold"> | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFilter<"ApprovalThreshold"> | boolean;
    roleIds?: Prisma.StringNullableListFilter<"ApprovalThreshold">;
    policy?: Prisma.XOR<Prisma.ApprovalPolicyScalarRelationFilter, Prisma.ApprovalPolicyWhereInput>;
};
export type ApprovalThresholdOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    dualApprovalRequired?: Prisma.SortOrder;
    roleIds?: Prisma.SortOrder;
    policy?: Prisma.ApprovalPolicyOrderByWithRelationInput;
};
export type ApprovalThresholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    policyId_riskLevel?: Prisma.ApprovalThresholdPolicyIdRiskLevelCompoundUniqueInput;
    AND?: Prisma.ApprovalThresholdWhereInput | Prisma.ApprovalThresholdWhereInput[];
    OR?: Prisma.ApprovalThresholdWhereInput[];
    NOT?: Prisma.ApprovalThresholdWhereInput | Prisma.ApprovalThresholdWhereInput[];
    policyId?: Prisma.StringFilter<"ApprovalThreshold"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ApprovalThreshold"> | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFilter<"ApprovalThreshold"> | boolean;
    roleIds?: Prisma.StringNullableListFilter<"ApprovalThreshold">;
    policy?: Prisma.XOR<Prisma.ApprovalPolicyScalarRelationFilter, Prisma.ApprovalPolicyWhereInput>;
}, "id" | "policyId_riskLevel">;
export type ApprovalThresholdOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    dualApprovalRequired?: Prisma.SortOrder;
    roleIds?: Prisma.SortOrder;
    _count?: Prisma.ApprovalThresholdCountOrderByAggregateInput;
    _max?: Prisma.ApprovalThresholdMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalThresholdMinOrderByAggregateInput;
};
export type ApprovalThresholdScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalThresholdScalarWhereWithAggregatesInput | Prisma.ApprovalThresholdScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalThresholdScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalThresholdScalarWhereWithAggregatesInput | Prisma.ApprovalThresholdScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalThreshold"> | string;
    policyId?: Prisma.StringWithAggregatesFilter<"ApprovalThreshold"> | string;
    riskLevel?: Prisma.EnumRiskLevelWithAggregatesFilter<"ApprovalThreshold"> | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolWithAggregatesFilter<"ApprovalThreshold"> | boolean;
    roleIds?: Prisma.StringNullableListFilter<"ApprovalThreshold">;
};
export type ApprovalThresholdCreateInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired?: boolean;
    roleIds?: Prisma.ApprovalThresholdCreateroleIdsInput | string[];
    policy: Prisma.ApprovalPolicyCreateNestedOneWithoutThresholdsInput;
};
export type ApprovalThresholdUncheckedCreateInput = {
    id?: string;
    policyId: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired?: boolean;
    roleIds?: Prisma.ApprovalThresholdCreateroleIdsInput | string[];
};
export type ApprovalThresholdUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
    policy?: Prisma.ApprovalPolicyUpdateOneRequiredWithoutThresholdsNestedInput;
};
export type ApprovalThresholdUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policyId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
};
export type ApprovalThresholdCreateManyInput = {
    id?: string;
    policyId: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired?: boolean;
    roleIds?: Prisma.ApprovalThresholdCreateroleIdsInput | string[];
};
export type ApprovalThresholdUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
};
export type ApprovalThresholdUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policyId?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
};
export type ApprovalThresholdListRelationFilter = {
    every?: Prisma.ApprovalThresholdWhereInput;
    some?: Prisma.ApprovalThresholdWhereInput;
    none?: Prisma.ApprovalThresholdWhereInput;
};
export type ApprovalThresholdOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ApprovalThresholdPolicyIdRiskLevelCompoundUniqueInput = {
    policyId: string;
    riskLevel: $Enums.RiskLevel;
};
export type ApprovalThresholdCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    dualApprovalRequired?: Prisma.SortOrder;
    roleIds?: Prisma.SortOrder;
};
export type ApprovalThresholdMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    dualApprovalRequired?: Prisma.SortOrder;
};
export type ApprovalThresholdMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    dualApprovalRequired?: Prisma.SortOrder;
};
export type ApprovalThresholdCreateNestedManyWithoutPolicyInput = {
    create?: Prisma.XOR<Prisma.ApprovalThresholdCreateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput> | Prisma.ApprovalThresholdCreateWithoutPolicyInput[] | Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput | Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput[];
    createMany?: Prisma.ApprovalThresholdCreateManyPolicyInputEnvelope;
    connect?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
};
export type ApprovalThresholdUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: Prisma.XOR<Prisma.ApprovalThresholdCreateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput> | Prisma.ApprovalThresholdCreateWithoutPolicyInput[] | Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput | Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput[];
    createMany?: Prisma.ApprovalThresholdCreateManyPolicyInputEnvelope;
    connect?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
};
export type ApprovalThresholdUpdateManyWithoutPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalThresholdCreateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput> | Prisma.ApprovalThresholdCreateWithoutPolicyInput[] | Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput | Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput[];
    upsert?: Prisma.ApprovalThresholdUpsertWithWhereUniqueWithoutPolicyInput | Prisma.ApprovalThresholdUpsertWithWhereUniqueWithoutPolicyInput[];
    createMany?: Prisma.ApprovalThresholdCreateManyPolicyInputEnvelope;
    set?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    disconnect?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    delete?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    connect?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    update?: Prisma.ApprovalThresholdUpdateWithWhereUniqueWithoutPolicyInput | Prisma.ApprovalThresholdUpdateWithWhereUniqueWithoutPolicyInput[];
    updateMany?: Prisma.ApprovalThresholdUpdateManyWithWhereWithoutPolicyInput | Prisma.ApprovalThresholdUpdateManyWithWhereWithoutPolicyInput[];
    deleteMany?: Prisma.ApprovalThresholdScalarWhereInput | Prisma.ApprovalThresholdScalarWhereInput[];
};
export type ApprovalThresholdUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalThresholdCreateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput> | Prisma.ApprovalThresholdCreateWithoutPolicyInput[] | Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput | Prisma.ApprovalThresholdCreateOrConnectWithoutPolicyInput[];
    upsert?: Prisma.ApprovalThresholdUpsertWithWhereUniqueWithoutPolicyInput | Prisma.ApprovalThresholdUpsertWithWhereUniqueWithoutPolicyInput[];
    createMany?: Prisma.ApprovalThresholdCreateManyPolicyInputEnvelope;
    set?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    disconnect?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    delete?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    connect?: Prisma.ApprovalThresholdWhereUniqueInput | Prisma.ApprovalThresholdWhereUniqueInput[];
    update?: Prisma.ApprovalThresholdUpdateWithWhereUniqueWithoutPolicyInput | Prisma.ApprovalThresholdUpdateWithWhereUniqueWithoutPolicyInput[];
    updateMany?: Prisma.ApprovalThresholdUpdateManyWithWhereWithoutPolicyInput | Prisma.ApprovalThresholdUpdateManyWithWhereWithoutPolicyInput[];
    deleteMany?: Prisma.ApprovalThresholdScalarWhereInput | Prisma.ApprovalThresholdScalarWhereInput[];
};
export type ApprovalThresholdCreateroleIdsInput = {
    set: string[];
};
export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel;
};
export type ApprovalThresholdUpdateroleIdsInput = {
    set?: string[];
    push?: string | string[];
};
export type ApprovalThresholdCreateWithoutPolicyInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired?: boolean;
    roleIds?: Prisma.ApprovalThresholdCreateroleIdsInput | string[];
};
export type ApprovalThresholdUncheckedCreateWithoutPolicyInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired?: boolean;
    roleIds?: Prisma.ApprovalThresholdCreateroleIdsInput | string[];
};
export type ApprovalThresholdCreateOrConnectWithoutPolicyInput = {
    where: Prisma.ApprovalThresholdWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalThresholdCreateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput>;
};
export type ApprovalThresholdCreateManyPolicyInputEnvelope = {
    data: Prisma.ApprovalThresholdCreateManyPolicyInput | Prisma.ApprovalThresholdCreateManyPolicyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalThresholdUpsertWithWhereUniqueWithoutPolicyInput = {
    where: Prisma.ApprovalThresholdWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalThresholdUpdateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedUpdateWithoutPolicyInput>;
    create: Prisma.XOR<Prisma.ApprovalThresholdCreateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedCreateWithoutPolicyInput>;
};
export type ApprovalThresholdUpdateWithWhereUniqueWithoutPolicyInput = {
    where: Prisma.ApprovalThresholdWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalThresholdUpdateWithoutPolicyInput, Prisma.ApprovalThresholdUncheckedUpdateWithoutPolicyInput>;
};
export type ApprovalThresholdUpdateManyWithWhereWithoutPolicyInput = {
    where: Prisma.ApprovalThresholdScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalThresholdUpdateManyMutationInput, Prisma.ApprovalThresholdUncheckedUpdateManyWithoutPolicyInput>;
};
export type ApprovalThresholdScalarWhereInput = {
    AND?: Prisma.ApprovalThresholdScalarWhereInput | Prisma.ApprovalThresholdScalarWhereInput[];
    OR?: Prisma.ApprovalThresholdScalarWhereInput[];
    NOT?: Prisma.ApprovalThresholdScalarWhereInput | Prisma.ApprovalThresholdScalarWhereInput[];
    id?: Prisma.StringFilter<"ApprovalThreshold"> | string;
    policyId?: Prisma.StringFilter<"ApprovalThreshold"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ApprovalThreshold"> | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFilter<"ApprovalThreshold"> | boolean;
    roleIds?: Prisma.StringNullableListFilter<"ApprovalThreshold">;
};
export type ApprovalThresholdCreateManyPolicyInput = {
    id?: string;
    riskLevel: $Enums.RiskLevel;
    dualApprovalRequired?: boolean;
    roleIds?: Prisma.ApprovalThresholdCreateroleIdsInput | string[];
};
export type ApprovalThresholdUpdateWithoutPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
};
export type ApprovalThresholdUncheckedUpdateWithoutPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
};
export type ApprovalThresholdUncheckedUpdateManyWithoutPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    dualApprovalRequired?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roleIds?: Prisma.ApprovalThresholdUpdateroleIdsInput | string[];
};
export type ApprovalThresholdSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policyId?: boolean;
    riskLevel?: boolean;
    dualApprovalRequired?: boolean;
    roleIds?: boolean;
    policy?: boolean | Prisma.ApprovalPolicyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalThreshold"]>;
export type ApprovalThresholdSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policyId?: boolean;
    riskLevel?: boolean;
    dualApprovalRequired?: boolean;
    roleIds?: boolean;
    policy?: boolean | Prisma.ApprovalPolicyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalThreshold"]>;
export type ApprovalThresholdSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policyId?: boolean;
    riskLevel?: boolean;
    dualApprovalRequired?: boolean;
    roleIds?: boolean;
    policy?: boolean | Prisma.ApprovalPolicyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalThreshold"]>;
export type ApprovalThresholdSelectScalar = {
    id?: boolean;
    policyId?: boolean;
    riskLevel?: boolean;
    dualApprovalRequired?: boolean;
    roleIds?: boolean;
};
export type ApprovalThresholdOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "policyId" | "riskLevel" | "dualApprovalRequired" | "roleIds", ExtArgs["result"]["approvalThreshold"]>;
export type ApprovalThresholdInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policy?: boolean | Prisma.ApprovalPolicyDefaultArgs<ExtArgs>;
};
export type ApprovalThresholdIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policy?: boolean | Prisma.ApprovalPolicyDefaultArgs<ExtArgs>;
};
export type ApprovalThresholdIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policy?: boolean | Prisma.ApprovalPolicyDefaultArgs<ExtArgs>;
};
export type $ApprovalThresholdPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalThreshold";
    objects: {
        policy: Prisma.$ApprovalPolicyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        policyId: string;
        riskLevel: $Enums.RiskLevel;
        dualApprovalRequired: boolean;
        roleIds: string[];
    }, ExtArgs["result"]["approvalThreshold"]>;
    composites: {};
};
export type ApprovalThresholdGetPayload<S extends boolean | null | undefined | ApprovalThresholdDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload, S>;
export type ApprovalThresholdCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalThresholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalThresholdCountAggregateInputType | true;
};
export interface ApprovalThresholdDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalThreshold'];
        meta: {
            name: 'ApprovalThreshold';
        };
    };
    findUnique<T extends ApprovalThresholdFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalThresholdFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalThresholdFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalThresholdFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalThresholdFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalThresholdFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalThresholdFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalThresholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalThresholdCreateArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalThresholdCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalThresholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalThresholdCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalThresholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalThresholdDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalThresholdUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalThresholdDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalThresholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalThresholdUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalThresholdUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalThresholdUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalThresholdUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalThresholdClient<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalThresholdCountArgs>(args?: Prisma.Subset<T, ApprovalThresholdCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalThresholdCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalThresholdAggregateArgs>(args: Prisma.Subset<T, ApprovalThresholdAggregateArgs>): Prisma.PrismaPromise<GetApprovalThresholdAggregateType<T>>;
    groupBy<T extends ApprovalThresholdGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalThresholdGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalThresholdGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalThresholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalThresholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalThresholdFieldRefs;
}
export interface Prisma__ApprovalThresholdClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    policy<T extends Prisma.ApprovalPolicyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalPolicyDefaultArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalThresholdFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalThreshold", 'String'>;
    readonly policyId: Prisma.FieldRef<"ApprovalThreshold", 'String'>;
    readonly riskLevel: Prisma.FieldRef<"ApprovalThreshold", 'RiskLevel'>;
    readonly dualApprovalRequired: Prisma.FieldRef<"ApprovalThreshold", 'Boolean'>;
    readonly roleIds: Prisma.FieldRef<"ApprovalThreshold", 'String[]'>;
}
export type ApprovalThresholdFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where: Prisma.ApprovalThresholdWhereUniqueInput;
};
export type ApprovalThresholdFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where: Prisma.ApprovalThresholdWhereUniqueInput;
};
export type ApprovalThresholdFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where?: Prisma.ApprovalThresholdWhereInput;
    orderBy?: Prisma.ApprovalThresholdOrderByWithRelationInput | Prisma.ApprovalThresholdOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalThresholdScalarFieldEnum | Prisma.ApprovalThresholdScalarFieldEnum[];
};
export type ApprovalThresholdFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where?: Prisma.ApprovalThresholdWhereInput;
    orderBy?: Prisma.ApprovalThresholdOrderByWithRelationInput | Prisma.ApprovalThresholdOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalThresholdScalarFieldEnum | Prisma.ApprovalThresholdScalarFieldEnum[];
};
export type ApprovalThresholdFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where?: Prisma.ApprovalThresholdWhereInput;
    orderBy?: Prisma.ApprovalThresholdOrderByWithRelationInput | Prisma.ApprovalThresholdOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalThresholdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalThresholdScalarFieldEnum | Prisma.ApprovalThresholdScalarFieldEnum[];
};
export type ApprovalThresholdCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalThresholdCreateInput, Prisma.ApprovalThresholdUncheckedCreateInput>;
};
export type ApprovalThresholdCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalThresholdCreateManyInput | Prisma.ApprovalThresholdCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalThresholdCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    data: Prisma.ApprovalThresholdCreateManyInput | Prisma.ApprovalThresholdCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalThresholdIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalThresholdUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalThresholdUpdateInput, Prisma.ApprovalThresholdUncheckedUpdateInput>;
    where: Prisma.ApprovalThresholdWhereUniqueInput;
};
export type ApprovalThresholdUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalThresholdUpdateManyMutationInput, Prisma.ApprovalThresholdUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalThresholdWhereInput;
    limit?: number;
};
export type ApprovalThresholdUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalThresholdUpdateManyMutationInput, Prisma.ApprovalThresholdUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalThresholdWhereInput;
    limit?: number;
    include?: Prisma.ApprovalThresholdIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalThresholdUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where: Prisma.ApprovalThresholdWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalThresholdCreateInput, Prisma.ApprovalThresholdUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalThresholdUpdateInput, Prisma.ApprovalThresholdUncheckedUpdateInput>;
};
export type ApprovalThresholdDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
    where: Prisma.ApprovalThresholdWhereUniqueInput;
};
export type ApprovalThresholdDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalThresholdWhereInput;
    limit?: number;
};
export type ApprovalThresholdDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalThresholdSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalThresholdOmit<ExtArgs> | null;
    include?: Prisma.ApprovalThresholdInclude<ExtArgs> | null;
};
