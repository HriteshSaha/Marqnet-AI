import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComplianceConstraintModel = runtime.Types.Result.DefaultSelection<Prisma.$ComplianceConstraintPayload>;
export type AggregateComplianceConstraint = {
    _count: ComplianceConstraintCountAggregateOutputType | null;
    _avg: ComplianceConstraintAvgAggregateOutputType | null;
    _sum: ComplianceConstraintSumAggregateOutputType | null;
    _min: ComplianceConstraintMinAggregateOutputType | null;
    _max: ComplianceConstraintMaxAggregateOutputType | null;
};
export type ComplianceConstraintAvgAggregateOutputType = {
    version: number | null;
};
export type ComplianceConstraintSumAggregateOutputType = {
    version: number | null;
};
export type ComplianceConstraintMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    category: $Enums.ComplianceCategory | null;
    description: string | null;
    riskLevel: $Enums.RiskLevel | null;
    disableAutoExecution: boolean | null;
    isActive: boolean | null;
    version: number | null;
    isCurrent: boolean | null;
    supersededAt: Date | null;
    pendingRetirementRequestId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type ComplianceConstraintMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    category: $Enums.ComplianceCategory | null;
    description: string | null;
    riskLevel: $Enums.RiskLevel | null;
    disableAutoExecution: boolean | null;
    isActive: boolean | null;
    version: number | null;
    isCurrent: boolean | null;
    supersededAt: Date | null;
    pendingRetirementRequestId: string | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type ComplianceConstraintCountAggregateOutputType = {
    id: number;
    clientId: number;
    category: number;
    description: number;
    riskLevel: number;
    disableAutoExecution: number;
    isActive: number;
    version: number;
    isCurrent: number;
    supersededAt: number;
    pendingRetirementRequestId: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type ComplianceConstraintAvgAggregateInputType = {
    version?: true;
};
export type ComplianceConstraintSumAggregateInputType = {
    version?: true;
};
export type ComplianceConstraintMinAggregateInputType = {
    id?: true;
    clientId?: true;
    category?: true;
    description?: true;
    riskLevel?: true;
    disableAutoExecution?: true;
    isActive?: true;
    version?: true;
    isCurrent?: true;
    supersededAt?: true;
    pendingRetirementRequestId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type ComplianceConstraintMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    category?: true;
    description?: true;
    riskLevel?: true;
    disableAutoExecution?: true;
    isActive?: true;
    version?: true;
    isCurrent?: true;
    supersededAt?: true;
    pendingRetirementRequestId?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type ComplianceConstraintCountAggregateInputType = {
    id?: true;
    clientId?: true;
    category?: true;
    description?: true;
    riskLevel?: true;
    disableAutoExecution?: true;
    isActive?: true;
    version?: true;
    isCurrent?: true;
    supersededAt?: true;
    pendingRetirementRequestId?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type ComplianceConstraintAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceConstraintWhereInput;
    orderBy?: Prisma.ComplianceConstraintOrderByWithRelationInput | Prisma.ComplianceConstraintOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceConstraintWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComplianceConstraintCountAggregateInputType;
    _avg?: ComplianceConstraintAvgAggregateInputType;
    _sum?: ComplianceConstraintSumAggregateInputType;
    _min?: ComplianceConstraintMinAggregateInputType;
    _max?: ComplianceConstraintMaxAggregateInputType;
};
export type GetComplianceConstraintAggregateType<T extends ComplianceConstraintAggregateArgs> = {
    [P in keyof T & keyof AggregateComplianceConstraint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComplianceConstraint[P]> : Prisma.GetScalarType<T[P], AggregateComplianceConstraint[P]>;
};
export type ComplianceConstraintGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceConstraintWhereInput;
    orderBy?: Prisma.ComplianceConstraintOrderByWithAggregationInput | Prisma.ComplianceConstraintOrderByWithAggregationInput[];
    by: Prisma.ComplianceConstraintScalarFieldEnum[] | Prisma.ComplianceConstraintScalarFieldEnum;
    having?: Prisma.ComplianceConstraintScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComplianceConstraintCountAggregateInputType | true;
    _avg?: ComplianceConstraintAvgAggregateInputType;
    _sum?: ComplianceConstraintSumAggregateInputType;
    _min?: ComplianceConstraintMinAggregateInputType;
    _max?: ComplianceConstraintMaxAggregateInputType;
};
export type ComplianceConstraintGroupByOutputType = {
    id: string;
    clientId: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution: boolean;
    isActive: boolean;
    version: number;
    isCurrent: boolean;
    supersededAt: Date | null;
    pendingRetirementRequestId: string | null;
    createdByUserId: string;
    createdAt: Date;
    _count: ComplianceConstraintCountAggregateOutputType | null;
    _avg: ComplianceConstraintAvgAggregateOutputType | null;
    _sum: ComplianceConstraintSumAggregateOutputType | null;
    _min: ComplianceConstraintMinAggregateOutputType | null;
    _max: ComplianceConstraintMaxAggregateOutputType | null;
};
export type GetComplianceConstraintGroupByPayload<T extends ComplianceConstraintGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComplianceConstraintGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComplianceConstraintGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComplianceConstraintGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComplianceConstraintGroupByOutputType[P]>;
}>>;
export type ComplianceConstraintWhereInput = {
    AND?: Prisma.ComplianceConstraintWhereInput | Prisma.ComplianceConstraintWhereInput[];
    OR?: Prisma.ComplianceConstraintWhereInput[];
    NOT?: Prisma.ComplianceConstraintWhereInput | Prisma.ComplianceConstraintWhereInput[];
    id?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    clientId?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    category?: Prisma.EnumComplianceCategoryFilter<"ComplianceConstraint"> | $Enums.ComplianceCategory;
    description?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ComplianceConstraint"> | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    isActive?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    version?: Prisma.IntFilter<"ComplianceConstraint"> | number;
    isCurrent?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    supersededAt?: Prisma.DateTimeNullableFilter<"ComplianceConstraint"> | Date | string | null;
    pendingRetirementRequestId?: Prisma.StringNullableFilter<"ComplianceConstraint"> | string | null;
    createdByUserId?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComplianceConstraint"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type ComplianceConstraintOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    disableAutoExecution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingRetirementRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type ComplianceConstraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clientId_category_version?: Prisma.ComplianceConstraintClientIdCategoryVersionCompoundUniqueInput;
    AND?: Prisma.ComplianceConstraintWhereInput | Prisma.ComplianceConstraintWhereInput[];
    OR?: Prisma.ComplianceConstraintWhereInput[];
    NOT?: Prisma.ComplianceConstraintWhereInput | Prisma.ComplianceConstraintWhereInput[];
    clientId?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    category?: Prisma.EnumComplianceCategoryFilter<"ComplianceConstraint"> | $Enums.ComplianceCategory;
    description?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ComplianceConstraint"> | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    isActive?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    version?: Prisma.IntFilter<"ComplianceConstraint"> | number;
    isCurrent?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    supersededAt?: Prisma.DateTimeNullableFilter<"ComplianceConstraint"> | Date | string | null;
    pendingRetirementRequestId?: Prisma.StringNullableFilter<"ComplianceConstraint"> | string | null;
    createdByUserId?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComplianceConstraint"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id" | "clientId_category_version">;
export type ComplianceConstraintOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    disableAutoExecution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pendingRetirementRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ComplianceConstraintCountOrderByAggregateInput;
    _avg?: Prisma.ComplianceConstraintAvgOrderByAggregateInput;
    _max?: Prisma.ComplianceConstraintMaxOrderByAggregateInput;
    _min?: Prisma.ComplianceConstraintMinOrderByAggregateInput;
    _sum?: Prisma.ComplianceConstraintSumOrderByAggregateInput;
};
export type ComplianceConstraintScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComplianceConstraintScalarWhereWithAggregatesInput | Prisma.ComplianceConstraintScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComplianceConstraintScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComplianceConstraintScalarWhereWithAggregatesInput | Prisma.ComplianceConstraintScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ComplianceConstraint"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"ComplianceConstraint"> | string;
    category?: Prisma.EnumComplianceCategoryWithAggregatesFilter<"ComplianceConstraint"> | $Enums.ComplianceCategory;
    description?: Prisma.StringWithAggregatesFilter<"ComplianceConstraint"> | string;
    riskLevel?: Prisma.EnumRiskLevelWithAggregatesFilter<"ComplianceConstraint"> | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolWithAggregatesFilter<"ComplianceConstraint"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"ComplianceConstraint"> | boolean;
    version?: Prisma.IntWithAggregatesFilter<"ComplianceConstraint"> | number;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"ComplianceConstraint"> | boolean;
    supersededAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ComplianceConstraint"> | Date | string | null;
    pendingRetirementRequestId?: Prisma.StringNullableWithAggregatesFilter<"ComplianceConstraint"> | string | null;
    createdByUserId?: Prisma.StringWithAggregatesFilter<"ComplianceConstraint"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ComplianceConstraint"> | Date | string;
};
export type ComplianceConstraintCreateInput = {
    id?: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    pendingRetirementRequestId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutComplianceConstraintsInput;
};
export type ComplianceConstraintUncheckedCreateInput = {
    id?: string;
    clientId: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    pendingRetirementRequestId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ComplianceConstraintUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutComplianceConstraintsNestedInput;
};
export type ComplianceConstraintUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceConstraintCreateManyInput = {
    id?: string;
    clientId: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    pendingRetirementRequestId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ComplianceConstraintUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceConstraintUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceConstraintListRelationFilter = {
    every?: Prisma.ComplianceConstraintWhereInput;
    some?: Prisma.ComplianceConstraintWhereInput;
    none?: Prisma.ComplianceConstraintWhereInput;
};
export type ComplianceConstraintOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComplianceConstraintClientIdCategoryVersionCompoundUniqueInput = {
    clientId: string;
    category: $Enums.ComplianceCategory;
    version: number;
};
export type ComplianceConstraintCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    disableAutoExecution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrder;
    pendingRetirementRequestId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceConstraintAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ComplianceConstraintMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    disableAutoExecution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrder;
    pendingRetirementRequestId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceConstraintMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    riskLevel?: Prisma.SortOrder;
    disableAutoExecution?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrder;
    pendingRetirementRequestId?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ComplianceConstraintSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ComplianceConstraintCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ComplianceConstraintCreateWithoutClientInput, Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput> | Prisma.ComplianceConstraintCreateWithoutClientInput[] | Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput | Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.ComplianceConstraintCreateManyClientInputEnvelope;
    connect?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
};
export type ComplianceConstraintUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ComplianceConstraintCreateWithoutClientInput, Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput> | Prisma.ComplianceConstraintCreateWithoutClientInput[] | Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput | Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.ComplianceConstraintCreateManyClientInputEnvelope;
    connect?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
};
export type ComplianceConstraintUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceConstraintCreateWithoutClientInput, Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput> | Prisma.ComplianceConstraintCreateWithoutClientInput[] | Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput | Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.ComplianceConstraintUpsertWithWhereUniqueWithoutClientInput | Prisma.ComplianceConstraintUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.ComplianceConstraintCreateManyClientInputEnvelope;
    set?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    disconnect?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    delete?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    connect?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    update?: Prisma.ComplianceConstraintUpdateWithWhereUniqueWithoutClientInput | Prisma.ComplianceConstraintUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.ComplianceConstraintUpdateManyWithWhereWithoutClientInput | Prisma.ComplianceConstraintUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.ComplianceConstraintScalarWhereInput | Prisma.ComplianceConstraintScalarWhereInput[];
};
export type ComplianceConstraintUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceConstraintCreateWithoutClientInput, Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput> | Prisma.ComplianceConstraintCreateWithoutClientInput[] | Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput | Prisma.ComplianceConstraintCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.ComplianceConstraintUpsertWithWhereUniqueWithoutClientInput | Prisma.ComplianceConstraintUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.ComplianceConstraintCreateManyClientInputEnvelope;
    set?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    disconnect?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    delete?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    connect?: Prisma.ComplianceConstraintWhereUniqueInput | Prisma.ComplianceConstraintWhereUniqueInput[];
    update?: Prisma.ComplianceConstraintUpdateWithWhereUniqueWithoutClientInput | Prisma.ComplianceConstraintUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.ComplianceConstraintUpdateManyWithWhereWithoutClientInput | Prisma.ComplianceConstraintUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.ComplianceConstraintScalarWhereInput | Prisma.ComplianceConstraintScalarWhereInput[];
};
export type EnumComplianceCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ComplianceCategory;
};
export type ComplianceConstraintCreateWithoutClientInput = {
    id?: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    pendingRetirementRequestId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ComplianceConstraintUncheckedCreateWithoutClientInput = {
    id?: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    pendingRetirementRequestId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ComplianceConstraintCreateOrConnectWithoutClientInput = {
    where: Prisma.ComplianceConstraintWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceConstraintCreateWithoutClientInput, Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput>;
};
export type ComplianceConstraintCreateManyClientInputEnvelope = {
    data: Prisma.ComplianceConstraintCreateManyClientInput | Prisma.ComplianceConstraintCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type ComplianceConstraintUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.ComplianceConstraintWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComplianceConstraintUpdateWithoutClientInput, Prisma.ComplianceConstraintUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.ComplianceConstraintCreateWithoutClientInput, Prisma.ComplianceConstraintUncheckedCreateWithoutClientInput>;
};
export type ComplianceConstraintUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.ComplianceConstraintWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComplianceConstraintUpdateWithoutClientInput, Prisma.ComplianceConstraintUncheckedUpdateWithoutClientInput>;
};
export type ComplianceConstraintUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.ComplianceConstraintScalarWhereInput;
    data: Prisma.XOR<Prisma.ComplianceConstraintUpdateManyMutationInput, Prisma.ComplianceConstraintUncheckedUpdateManyWithoutClientInput>;
};
export type ComplianceConstraintScalarWhereInput = {
    AND?: Prisma.ComplianceConstraintScalarWhereInput | Prisma.ComplianceConstraintScalarWhereInput[];
    OR?: Prisma.ComplianceConstraintScalarWhereInput[];
    NOT?: Prisma.ComplianceConstraintScalarWhereInput | Prisma.ComplianceConstraintScalarWhereInput[];
    id?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    clientId?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    category?: Prisma.EnumComplianceCategoryFilter<"ComplianceConstraint"> | $Enums.ComplianceCategory;
    description?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    riskLevel?: Prisma.EnumRiskLevelFilter<"ComplianceConstraint"> | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    isActive?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    version?: Prisma.IntFilter<"ComplianceConstraint"> | number;
    isCurrent?: Prisma.BoolFilter<"ComplianceConstraint"> | boolean;
    supersededAt?: Prisma.DateTimeNullableFilter<"ComplianceConstraint"> | Date | string | null;
    pendingRetirementRequestId?: Prisma.StringNullableFilter<"ComplianceConstraint"> | string | null;
    createdByUserId?: Prisma.StringFilter<"ComplianceConstraint"> | string;
    createdAt?: Prisma.DateTimeFilter<"ComplianceConstraint"> | Date | string;
};
export type ComplianceConstraintCreateManyClientInput = {
    id?: string;
    category: $Enums.ComplianceCategory;
    description: string;
    riskLevel: $Enums.RiskLevel;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    pendingRetirementRequestId?: string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type ComplianceConstraintUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceConstraintUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceConstraintUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumComplianceCategoryFieldUpdateOperationsInput | $Enums.ComplianceCategory;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    riskLevel?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    disableAutoExecution?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pendingRetirementRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComplianceConstraintSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    category?: boolean;
    description?: boolean;
    riskLevel?: boolean;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    pendingRetirementRequestId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceConstraint"]>;
export type ComplianceConstraintSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    category?: boolean;
    description?: boolean;
    riskLevel?: boolean;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    pendingRetirementRequestId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceConstraint"]>;
export type ComplianceConstraintSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    category?: boolean;
    description?: boolean;
    riskLevel?: boolean;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    pendingRetirementRequestId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceConstraint"]>;
export type ComplianceConstraintSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    category?: boolean;
    description?: boolean;
    riskLevel?: boolean;
    disableAutoExecution?: boolean;
    isActive?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    pendingRetirementRequestId?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type ComplianceConstraintOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "category" | "description" | "riskLevel" | "disableAutoExecution" | "isActive" | "version" | "isCurrent" | "supersededAt" | "pendingRetirementRequestId" | "createdByUserId" | "createdAt", ExtArgs["result"]["complianceConstraint"]>;
export type ComplianceConstraintInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type ComplianceConstraintIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type ComplianceConstraintIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $ComplianceConstraintPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComplianceConstraint";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        category: $Enums.ComplianceCategory;
        description: string;
        riskLevel: $Enums.RiskLevel;
        disableAutoExecution: boolean;
        isActive: boolean;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        pendingRetirementRequestId: string | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["complianceConstraint"]>;
    composites: {};
};
export type ComplianceConstraintGetPayload<S extends boolean | null | undefined | ComplianceConstraintDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload, S>;
export type ComplianceConstraintCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComplianceConstraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplianceConstraintCountAggregateInputType | true;
};
export interface ComplianceConstraintDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComplianceConstraint'];
        meta: {
            name: 'ComplianceConstraint';
        };
    };
    findUnique<T extends ComplianceConstraintFindUniqueArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComplianceConstraintFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComplianceConstraintFindFirstArgs>(args?: Prisma.SelectSubset<T, ComplianceConstraintFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComplianceConstraintFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComplianceConstraintFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComplianceConstraintFindManyArgs>(args?: Prisma.SelectSubset<T, ComplianceConstraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComplianceConstraintCreateArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintCreateArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComplianceConstraintCreateManyArgs>(args?: Prisma.SelectSubset<T, ComplianceConstraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComplianceConstraintCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComplianceConstraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComplianceConstraintDeleteArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintDeleteArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComplianceConstraintUpdateArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintUpdateArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComplianceConstraintDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComplianceConstraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComplianceConstraintUpdateManyArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComplianceConstraintUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComplianceConstraintUpsertArgs>(args: Prisma.SelectSubset<T, ComplianceConstraintUpsertArgs<ExtArgs>>): Prisma.Prisma__ComplianceConstraintClient<runtime.Types.Result.GetResult<Prisma.$ComplianceConstraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComplianceConstraintCountArgs>(args?: Prisma.Subset<T, ComplianceConstraintCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComplianceConstraintCountAggregateOutputType> : number>;
    aggregate<T extends ComplianceConstraintAggregateArgs>(args: Prisma.Subset<T, ComplianceConstraintAggregateArgs>): Prisma.PrismaPromise<GetComplianceConstraintAggregateType<T>>;
    groupBy<T extends ComplianceConstraintGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComplianceConstraintGroupByArgs['orderBy'];
    } : {
        orderBy?: ComplianceConstraintGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComplianceConstraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceConstraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComplianceConstraintFieldRefs;
}
export interface Prisma__ComplianceConstraintClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComplianceConstraintFieldRefs {
    readonly id: Prisma.FieldRef<"ComplianceConstraint", 'String'>;
    readonly clientId: Prisma.FieldRef<"ComplianceConstraint", 'String'>;
    readonly category: Prisma.FieldRef<"ComplianceConstraint", 'ComplianceCategory'>;
    readonly description: Prisma.FieldRef<"ComplianceConstraint", 'String'>;
    readonly riskLevel: Prisma.FieldRef<"ComplianceConstraint", 'RiskLevel'>;
    readonly disableAutoExecution: Prisma.FieldRef<"ComplianceConstraint", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"ComplianceConstraint", 'Boolean'>;
    readonly version: Prisma.FieldRef<"ComplianceConstraint", 'Int'>;
    readonly isCurrent: Prisma.FieldRef<"ComplianceConstraint", 'Boolean'>;
    readonly supersededAt: Prisma.FieldRef<"ComplianceConstraint", 'DateTime'>;
    readonly pendingRetirementRequestId: Prisma.FieldRef<"ComplianceConstraint", 'String'>;
    readonly createdByUserId: Prisma.FieldRef<"ComplianceConstraint", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ComplianceConstraint", 'DateTime'>;
}
export type ComplianceConstraintFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where: Prisma.ComplianceConstraintWhereUniqueInput;
};
export type ComplianceConstraintFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where: Prisma.ComplianceConstraintWhereUniqueInput;
};
export type ComplianceConstraintFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where?: Prisma.ComplianceConstraintWhereInput;
    orderBy?: Prisma.ComplianceConstraintOrderByWithRelationInput | Prisma.ComplianceConstraintOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceConstraintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceConstraintScalarFieldEnum | Prisma.ComplianceConstraintScalarFieldEnum[];
};
export type ComplianceConstraintFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where?: Prisma.ComplianceConstraintWhereInput;
    orderBy?: Prisma.ComplianceConstraintOrderByWithRelationInput | Prisma.ComplianceConstraintOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceConstraintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceConstraintScalarFieldEnum | Prisma.ComplianceConstraintScalarFieldEnum[];
};
export type ComplianceConstraintFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where?: Prisma.ComplianceConstraintWhereInput;
    orderBy?: Prisma.ComplianceConstraintOrderByWithRelationInput | Prisma.ComplianceConstraintOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceConstraintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceConstraintScalarFieldEnum | Prisma.ComplianceConstraintScalarFieldEnum[];
};
export type ComplianceConstraintCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceConstraintCreateInput, Prisma.ComplianceConstraintUncheckedCreateInput>;
};
export type ComplianceConstraintCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComplianceConstraintCreateManyInput | Prisma.ComplianceConstraintCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplianceConstraintCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    data: Prisma.ComplianceConstraintCreateManyInput | Prisma.ComplianceConstraintCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ComplianceConstraintIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ComplianceConstraintUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceConstraintUpdateInput, Prisma.ComplianceConstraintUncheckedUpdateInput>;
    where: Prisma.ComplianceConstraintWhereUniqueInput;
};
export type ComplianceConstraintUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComplianceConstraintUpdateManyMutationInput, Prisma.ComplianceConstraintUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceConstraintWhereInput;
    limit?: number;
};
export type ComplianceConstraintUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceConstraintUpdateManyMutationInput, Prisma.ComplianceConstraintUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceConstraintWhereInput;
    limit?: number;
    include?: Prisma.ComplianceConstraintIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ComplianceConstraintUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where: Prisma.ComplianceConstraintWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceConstraintCreateInput, Prisma.ComplianceConstraintUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComplianceConstraintUpdateInput, Prisma.ComplianceConstraintUncheckedUpdateInput>;
};
export type ComplianceConstraintDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
    where: Prisma.ComplianceConstraintWhereUniqueInput;
};
export type ComplianceConstraintDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceConstraintWhereInput;
    limit?: number;
};
export type ComplianceConstraintDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceConstraintSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceConstraintOmit<ExtArgs> | null;
    include?: Prisma.ComplianceConstraintInclude<ExtArgs> | null;
};
