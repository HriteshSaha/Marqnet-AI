import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalPolicyPayload>;
export type AggregateApprovalPolicy = {
    _count: ApprovalPolicyCountAggregateOutputType | null;
    _min: ApprovalPolicyMinAggregateOutputType | null;
    _max: ApprovalPolicyMaxAggregateOutputType | null;
};
export type ApprovalPolicyMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    allowSelfApproval: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApprovalPolicyMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    allowSelfApproval: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApprovalPolicyCountAggregateOutputType = {
    id: number;
    organizationId: number;
    allowSelfApproval: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ApprovalPolicyMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    allowSelfApproval?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApprovalPolicyMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    allowSelfApproval?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApprovalPolicyCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    allowSelfApproval?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ApprovalPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalPolicyWhereInput;
    orderBy?: Prisma.ApprovalPolicyOrderByWithRelationInput | Prisma.ApprovalPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalPolicyCountAggregateInputType;
    _min?: ApprovalPolicyMinAggregateInputType;
    _max?: ApprovalPolicyMaxAggregateInputType;
};
export type GetApprovalPolicyAggregateType<T extends ApprovalPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalPolicy[P]> : Prisma.GetScalarType<T[P], AggregateApprovalPolicy[P]>;
};
export type ApprovalPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalPolicyWhereInput;
    orderBy?: Prisma.ApprovalPolicyOrderByWithAggregationInput | Prisma.ApprovalPolicyOrderByWithAggregationInput[];
    by: Prisma.ApprovalPolicyScalarFieldEnum[] | Prisma.ApprovalPolicyScalarFieldEnum;
    having?: Prisma.ApprovalPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalPolicyCountAggregateInputType | true;
    _min?: ApprovalPolicyMinAggregateInputType;
    _max?: ApprovalPolicyMaxAggregateInputType;
};
export type ApprovalPolicyGroupByOutputType = {
    id: string;
    organizationId: string;
    allowSelfApproval: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ApprovalPolicyCountAggregateOutputType | null;
    _min: ApprovalPolicyMinAggregateOutputType | null;
    _max: ApprovalPolicyMaxAggregateOutputType | null;
};
export type GetApprovalPolicyGroupByPayload<T extends ApprovalPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalPolicyGroupByOutputType[P]>;
}>>;
export type ApprovalPolicyWhereInput = {
    AND?: Prisma.ApprovalPolicyWhereInput | Prisma.ApprovalPolicyWhereInput[];
    OR?: Prisma.ApprovalPolicyWhereInput[];
    NOT?: Prisma.ApprovalPolicyWhereInput | Prisma.ApprovalPolicyWhereInput[];
    id?: Prisma.StringFilter<"ApprovalPolicy"> | string;
    organizationId?: Prisma.StringFilter<"ApprovalPolicy"> | string;
    allowSelfApproval?: Prisma.BoolFilter<"ApprovalPolicy"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ApprovalPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApprovalPolicy"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    thresholds?: Prisma.ApprovalThresholdListRelationFilter;
};
export type ApprovalPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    allowSelfApproval?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    thresholds?: Prisma.ApprovalThresholdOrderByRelationAggregateInput;
};
export type ApprovalPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId?: string;
    AND?: Prisma.ApprovalPolicyWhereInput | Prisma.ApprovalPolicyWhereInput[];
    OR?: Prisma.ApprovalPolicyWhereInput[];
    NOT?: Prisma.ApprovalPolicyWhereInput | Prisma.ApprovalPolicyWhereInput[];
    allowSelfApproval?: Prisma.BoolFilter<"ApprovalPolicy"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ApprovalPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApprovalPolicy"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    thresholds?: Prisma.ApprovalThresholdListRelationFilter;
}, "id" | "organizationId">;
export type ApprovalPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    allowSelfApproval?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalPolicyCountOrderByAggregateInput;
    _max?: Prisma.ApprovalPolicyMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalPolicyMinOrderByAggregateInput;
};
export type ApprovalPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalPolicyScalarWhereWithAggregatesInput | Prisma.ApprovalPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalPolicyScalarWhereWithAggregatesInput | Prisma.ApprovalPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalPolicy"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"ApprovalPolicy"> | string;
    allowSelfApproval?: Prisma.BoolWithAggregatesFilter<"ApprovalPolicy"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalPolicy"> | Date | string;
};
export type ApprovalPolicyCreateInput = {
    id?: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutApprovalPolicyInput;
    thresholds?: Prisma.ApprovalThresholdCreateNestedManyWithoutPolicyInput;
};
export type ApprovalPolicyUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    thresholds?: Prisma.ApprovalThresholdUncheckedCreateNestedManyWithoutPolicyInput;
};
export type ApprovalPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutApprovalPolicyNestedInput;
    thresholds?: Prisma.ApprovalThresholdUpdateManyWithoutPolicyNestedInput;
};
export type ApprovalPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholds?: Prisma.ApprovalThresholdUncheckedUpdateManyWithoutPolicyNestedInput;
};
export type ApprovalPolicyCreateManyInput = {
    id?: string;
    organizationId: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApprovalPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalPolicyNullableScalarRelationFilter = {
    is?: Prisma.ApprovalPolicyWhereInput | null;
    isNot?: Prisma.ApprovalPolicyWhereInput | null;
};
export type ApprovalPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    allowSelfApproval?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApprovalPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    allowSelfApproval?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApprovalPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    allowSelfApproval?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApprovalPolicyScalarRelationFilter = {
    is?: Prisma.ApprovalPolicyWhereInput;
    isNot?: Prisma.ApprovalPolicyWhereInput;
};
export type ApprovalPolicyCreateNestedOneWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.ApprovalPolicyCreateOrConnectWithoutOrganizationInput;
    connect?: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.ApprovalPolicyCreateOrConnectWithoutOrganizationInput;
    connect?: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyUpdateOneWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.ApprovalPolicyCreateOrConnectWithoutOrganizationInput;
    upsert?: Prisma.ApprovalPolicyUpsertWithoutOrganizationInput;
    disconnect?: Prisma.ApprovalPolicyWhereInput | boolean;
    delete?: Prisma.ApprovalPolicyWhereInput | boolean;
    connect?: Prisma.ApprovalPolicyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApprovalPolicyUpdateToOneWithWhereWithoutOrganizationInput, Prisma.ApprovalPolicyUpdateWithoutOrganizationInput>, Prisma.ApprovalPolicyUncheckedUpdateWithoutOrganizationInput>;
};
export type ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.ApprovalPolicyCreateOrConnectWithoutOrganizationInput;
    upsert?: Prisma.ApprovalPolicyUpsertWithoutOrganizationInput;
    disconnect?: Prisma.ApprovalPolicyWhereInput | boolean;
    delete?: Prisma.ApprovalPolicyWhereInput | boolean;
    connect?: Prisma.ApprovalPolicyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApprovalPolicyUpdateToOneWithWhereWithoutOrganizationInput, Prisma.ApprovalPolicyUpdateWithoutOrganizationInput>, Prisma.ApprovalPolicyUncheckedUpdateWithoutOrganizationInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ApprovalPolicyCreateNestedOneWithoutThresholdsInput = {
    create?: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutThresholdsInput, Prisma.ApprovalPolicyUncheckedCreateWithoutThresholdsInput>;
    connectOrCreate?: Prisma.ApprovalPolicyCreateOrConnectWithoutThresholdsInput;
    connect?: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyUpdateOneRequiredWithoutThresholdsNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutThresholdsInput, Prisma.ApprovalPolicyUncheckedCreateWithoutThresholdsInput>;
    connectOrCreate?: Prisma.ApprovalPolicyCreateOrConnectWithoutThresholdsInput;
    upsert?: Prisma.ApprovalPolicyUpsertWithoutThresholdsInput;
    connect?: Prisma.ApprovalPolicyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApprovalPolicyUpdateToOneWithWhereWithoutThresholdsInput, Prisma.ApprovalPolicyUpdateWithoutThresholdsInput>, Prisma.ApprovalPolicyUncheckedUpdateWithoutThresholdsInput>;
};
export type ApprovalPolicyCreateWithoutOrganizationInput = {
    id?: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    thresholds?: Prisma.ApprovalThresholdCreateNestedManyWithoutPolicyInput;
};
export type ApprovalPolicyUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    thresholds?: Prisma.ApprovalThresholdUncheckedCreateNestedManyWithoutPolicyInput;
};
export type ApprovalPolicyCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ApprovalPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedCreateWithoutOrganizationInput>;
};
export type ApprovalPolicyUpsertWithoutOrganizationInput = {
    update: Prisma.XOR<Prisma.ApprovalPolicyUpdateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedCreateWithoutOrganizationInput>;
    where?: Prisma.ApprovalPolicyWhereInput;
};
export type ApprovalPolicyUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: Prisma.ApprovalPolicyWhereInput;
    data: Prisma.XOR<Prisma.ApprovalPolicyUpdateWithoutOrganizationInput, Prisma.ApprovalPolicyUncheckedUpdateWithoutOrganizationInput>;
};
export type ApprovalPolicyUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholds?: Prisma.ApprovalThresholdUpdateManyWithoutPolicyNestedInput;
};
export type ApprovalPolicyUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    thresholds?: Prisma.ApprovalThresholdUncheckedUpdateManyWithoutPolicyNestedInput;
};
export type ApprovalPolicyCreateWithoutThresholdsInput = {
    id?: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutApprovalPolicyInput;
};
export type ApprovalPolicyUncheckedCreateWithoutThresholdsInput = {
    id?: string;
    organizationId: string;
    allowSelfApproval?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApprovalPolicyCreateOrConnectWithoutThresholdsInput = {
    where: Prisma.ApprovalPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutThresholdsInput, Prisma.ApprovalPolicyUncheckedCreateWithoutThresholdsInput>;
};
export type ApprovalPolicyUpsertWithoutThresholdsInput = {
    update: Prisma.XOR<Prisma.ApprovalPolicyUpdateWithoutThresholdsInput, Prisma.ApprovalPolicyUncheckedUpdateWithoutThresholdsInput>;
    create: Prisma.XOR<Prisma.ApprovalPolicyCreateWithoutThresholdsInput, Prisma.ApprovalPolicyUncheckedCreateWithoutThresholdsInput>;
    where?: Prisma.ApprovalPolicyWhereInput;
};
export type ApprovalPolicyUpdateToOneWithWhereWithoutThresholdsInput = {
    where?: Prisma.ApprovalPolicyWhereInput;
    data: Prisma.XOR<Prisma.ApprovalPolicyUpdateWithoutThresholdsInput, Prisma.ApprovalPolicyUncheckedUpdateWithoutThresholdsInput>;
};
export type ApprovalPolicyUpdateWithoutThresholdsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutApprovalPolicyNestedInput;
};
export type ApprovalPolicyUncheckedUpdateWithoutThresholdsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    allowSelfApproval?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalPolicyCountOutputType = {
    thresholds: number;
};
export type ApprovalPolicyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    thresholds?: boolean | ApprovalPolicyCountOutputTypeCountThresholdsArgs;
};
export type ApprovalPolicyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicyCountOutputTypeSelect<ExtArgs> | null;
};
export type ApprovalPolicyCountOutputTypeCountThresholdsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalThresholdWhereInput;
};
export type ApprovalPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    allowSelfApproval?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    thresholds?: boolean | Prisma.ApprovalPolicy$thresholdsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalPolicyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalPolicy"]>;
export type ApprovalPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    allowSelfApproval?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalPolicy"]>;
export type ApprovalPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    allowSelfApproval?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalPolicy"]>;
export type ApprovalPolicySelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    allowSelfApproval?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ApprovalPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "allowSelfApproval" | "createdAt" | "updatedAt", ExtArgs["result"]["approvalPolicy"]>;
export type ApprovalPolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    thresholds?: boolean | Prisma.ApprovalPolicy$thresholdsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalPolicyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApprovalPolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type ApprovalPolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $ApprovalPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalPolicy";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        thresholds: Prisma.$ApprovalThresholdPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        allowSelfApproval: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["approvalPolicy"]>;
    composites: {};
};
export type ApprovalPolicyGetPayload<S extends boolean | null | undefined | ApprovalPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload, S>;
export type ApprovalPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalPolicyCountAggregateInputType | true;
};
export interface ApprovalPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalPolicy'];
        meta: {
            name: 'ApprovalPolicy';
        };
    };
    findUnique<T extends ApprovalPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalPolicyCreateArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalPolicyDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalPolicyUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalPolicyUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalPolicyCountArgs>(args?: Prisma.Subset<T, ApprovalPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalPolicyCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalPolicyAggregateArgs>(args: Prisma.Subset<T, ApprovalPolicyAggregateArgs>): Prisma.PrismaPromise<GetApprovalPolicyAggregateType<T>>;
    groupBy<T extends ApprovalPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalPolicyFieldRefs;
}
export interface Prisma__ApprovalPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    thresholds<T extends Prisma.ApprovalPolicy$thresholdsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalPolicy$thresholdsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalThresholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalPolicy", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ApprovalPolicy", 'String'>;
    readonly allowSelfApproval: Prisma.FieldRef<"ApprovalPolicy", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ApprovalPolicy", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ApprovalPolicy", 'DateTime'>;
}
export type ApprovalPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where?: Prisma.ApprovalPolicyWhereInput;
    orderBy?: Prisma.ApprovalPolicyOrderByWithRelationInput | Prisma.ApprovalPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalPolicyScalarFieldEnum | Prisma.ApprovalPolicyScalarFieldEnum[];
};
export type ApprovalPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where?: Prisma.ApprovalPolicyWhereInput;
    orderBy?: Prisma.ApprovalPolicyOrderByWithRelationInput | Prisma.ApprovalPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalPolicyScalarFieldEnum | Prisma.ApprovalPolicyScalarFieldEnum[];
};
export type ApprovalPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where?: Prisma.ApprovalPolicyWhereInput;
    orderBy?: Prisma.ApprovalPolicyOrderByWithRelationInput | Prisma.ApprovalPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalPolicyScalarFieldEnum | Prisma.ApprovalPolicyScalarFieldEnum[];
};
export type ApprovalPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalPolicyCreateInput, Prisma.ApprovalPolicyUncheckedCreateInput>;
};
export type ApprovalPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalPolicyCreateManyInput | Prisma.ApprovalPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    data: Prisma.ApprovalPolicyCreateManyInput | Prisma.ApprovalPolicyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalPolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalPolicyUpdateInput, Prisma.ApprovalPolicyUncheckedUpdateInput>;
    where: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalPolicyUpdateManyMutationInput, Prisma.ApprovalPolicyUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalPolicyWhereInput;
    limit?: number;
};
export type ApprovalPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalPolicyUpdateManyMutationInput, Prisma.ApprovalPolicyUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalPolicyWhereInput;
    limit?: number;
    include?: Prisma.ApprovalPolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where: Prisma.ApprovalPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalPolicyCreateInput, Prisma.ApprovalPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalPolicyUpdateInput, Prisma.ApprovalPolicyUncheckedUpdateInput>;
};
export type ApprovalPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where: Prisma.ApprovalPolicyWhereUniqueInput;
};
export type ApprovalPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalPolicyWhereInput;
    limit?: number;
};
export type ApprovalPolicy$thresholdsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
};
