import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KpiGuardrailModel = runtime.Types.Result.DefaultSelection<Prisma.$KpiGuardrailPayload>;
export type AggregateKpiGuardrail = {
    _count: KpiGuardrailCountAggregateOutputType | null;
    _avg: KpiGuardrailAvgAggregateOutputType | null;
    _sum: KpiGuardrailSumAggregateOutputType | null;
    _min: KpiGuardrailMinAggregateOutputType | null;
    _max: KpiGuardrailMaxAggregateOutputType | null;
};
export type KpiGuardrailAvgAggregateOutputType = {
    targetValue: number | null;
    acceptableMin: number | null;
    acceptableMax: number | null;
    version: number | null;
};
export type KpiGuardrailSumAggregateOutputType = {
    targetValue: number | null;
    acceptableMin: number | null;
    acceptableMax: number | null;
    version: number | null;
};
export type KpiGuardrailMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    metric: $Enums.GuardrailMetric | null;
    targetValue: number | null;
    acceptableMin: number | null;
    acceptableMax: number | null;
    currency: string | null;
    version: number | null;
    isCurrent: boolean | null;
    supersededAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type KpiGuardrailMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    metric: $Enums.GuardrailMetric | null;
    targetValue: number | null;
    acceptableMin: number | null;
    acceptableMax: number | null;
    currency: string | null;
    version: number | null;
    isCurrent: boolean | null;
    supersededAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type KpiGuardrailCountAggregateOutputType = {
    id: number;
    clientId: number;
    metric: number;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: number;
    version: number;
    isCurrent: number;
    supersededAt: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type KpiGuardrailAvgAggregateInputType = {
    targetValue?: true;
    acceptableMin?: true;
    acceptableMax?: true;
    version?: true;
};
export type KpiGuardrailSumAggregateInputType = {
    targetValue?: true;
    acceptableMin?: true;
    acceptableMax?: true;
    version?: true;
};
export type KpiGuardrailMinAggregateInputType = {
    id?: true;
    clientId?: true;
    metric?: true;
    targetValue?: true;
    acceptableMin?: true;
    acceptableMax?: true;
    currency?: true;
    version?: true;
    isCurrent?: true;
    supersededAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type KpiGuardrailMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    metric?: true;
    targetValue?: true;
    acceptableMin?: true;
    acceptableMax?: true;
    currency?: true;
    version?: true;
    isCurrent?: true;
    supersededAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type KpiGuardrailCountAggregateInputType = {
    id?: true;
    clientId?: true;
    metric?: true;
    targetValue?: true;
    acceptableMin?: true;
    acceptableMax?: true;
    currency?: true;
    version?: true;
    isCurrent?: true;
    supersededAt?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type KpiGuardrailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiGuardrailWhereInput;
    orderBy?: Prisma.KpiGuardrailOrderByWithRelationInput | Prisma.KpiGuardrailOrderByWithRelationInput[];
    cursor?: Prisma.KpiGuardrailWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KpiGuardrailCountAggregateInputType;
    _avg?: KpiGuardrailAvgAggregateInputType;
    _sum?: KpiGuardrailSumAggregateInputType;
    _min?: KpiGuardrailMinAggregateInputType;
    _max?: KpiGuardrailMaxAggregateInputType;
};
export type GetKpiGuardrailAggregateType<T extends KpiGuardrailAggregateArgs> = {
    [P in keyof T & keyof AggregateKpiGuardrail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKpiGuardrail[P]> : Prisma.GetScalarType<T[P], AggregateKpiGuardrail[P]>;
};
export type KpiGuardrailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiGuardrailWhereInput;
    orderBy?: Prisma.KpiGuardrailOrderByWithAggregationInput | Prisma.KpiGuardrailOrderByWithAggregationInput[];
    by: Prisma.KpiGuardrailScalarFieldEnum[] | Prisma.KpiGuardrailScalarFieldEnum;
    having?: Prisma.KpiGuardrailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KpiGuardrailCountAggregateInputType | true;
    _avg?: KpiGuardrailAvgAggregateInputType;
    _sum?: KpiGuardrailSumAggregateInputType;
    _min?: KpiGuardrailMinAggregateInputType;
    _max?: KpiGuardrailMaxAggregateInputType;
};
export type KpiGuardrailGroupByOutputType = {
    id: string;
    clientId: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent: boolean;
    supersededAt: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: KpiGuardrailCountAggregateOutputType | null;
    _avg: KpiGuardrailAvgAggregateOutputType | null;
    _sum: KpiGuardrailSumAggregateOutputType | null;
    _min: KpiGuardrailMinAggregateOutputType | null;
    _max: KpiGuardrailMaxAggregateOutputType | null;
};
export type GetKpiGuardrailGroupByPayload<T extends KpiGuardrailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KpiGuardrailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KpiGuardrailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KpiGuardrailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KpiGuardrailGroupByOutputType[P]>;
}>>;
export type KpiGuardrailWhereInput = {
    AND?: Prisma.KpiGuardrailWhereInput | Prisma.KpiGuardrailWhereInput[];
    OR?: Prisma.KpiGuardrailWhereInput[];
    NOT?: Prisma.KpiGuardrailWhereInput | Prisma.KpiGuardrailWhereInput[];
    id?: Prisma.StringFilter<"KpiGuardrail"> | string;
    clientId?: Prisma.StringFilter<"KpiGuardrail"> | string;
    metric?: Prisma.EnumGuardrailMetricFilter<"KpiGuardrail"> | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    acceptableMin?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    acceptableMax?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    currency?: Prisma.StringFilter<"KpiGuardrail"> | string;
    version?: Prisma.IntFilter<"KpiGuardrail"> | number;
    isCurrent?: Prisma.BoolFilter<"KpiGuardrail"> | boolean;
    supersededAt?: Prisma.DateTimeNullableFilter<"KpiGuardrail"> | Date | string | null;
    createdByUserId?: Prisma.StringFilter<"KpiGuardrail"> | string;
    createdAt?: Prisma.DateTimeFilter<"KpiGuardrail"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type KpiGuardrailOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type KpiGuardrailWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clientId_metric_version?: Prisma.KpiGuardrailClientIdMetricVersionCompoundUniqueInput;
    AND?: Prisma.KpiGuardrailWhereInput | Prisma.KpiGuardrailWhereInput[];
    OR?: Prisma.KpiGuardrailWhereInput[];
    NOT?: Prisma.KpiGuardrailWhereInput | Prisma.KpiGuardrailWhereInput[];
    clientId?: Prisma.StringFilter<"KpiGuardrail"> | string;
    metric?: Prisma.EnumGuardrailMetricFilter<"KpiGuardrail"> | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    acceptableMin?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    acceptableMax?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    currency?: Prisma.StringFilter<"KpiGuardrail"> | string;
    version?: Prisma.IntFilter<"KpiGuardrail"> | number;
    isCurrent?: Prisma.BoolFilter<"KpiGuardrail"> | boolean;
    supersededAt?: Prisma.DateTimeNullableFilter<"KpiGuardrail"> | Date | string | null;
    createdByUserId?: Prisma.StringFilter<"KpiGuardrail"> | string;
    createdAt?: Prisma.DateTimeFilter<"KpiGuardrail"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id" | "clientId_metric_version">;
export type KpiGuardrailOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KpiGuardrailCountOrderByAggregateInput;
    _avg?: Prisma.KpiGuardrailAvgOrderByAggregateInput;
    _max?: Prisma.KpiGuardrailMaxOrderByAggregateInput;
    _min?: Prisma.KpiGuardrailMinOrderByAggregateInput;
    _sum?: Prisma.KpiGuardrailSumOrderByAggregateInput;
};
export type KpiGuardrailScalarWhereWithAggregatesInput = {
    AND?: Prisma.KpiGuardrailScalarWhereWithAggregatesInput | Prisma.KpiGuardrailScalarWhereWithAggregatesInput[];
    OR?: Prisma.KpiGuardrailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KpiGuardrailScalarWhereWithAggregatesInput | Prisma.KpiGuardrailScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KpiGuardrail"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"KpiGuardrail"> | string;
    metric?: Prisma.EnumGuardrailMetricWithAggregatesFilter<"KpiGuardrail"> | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatWithAggregatesFilter<"KpiGuardrail"> | number;
    acceptableMin?: Prisma.FloatWithAggregatesFilter<"KpiGuardrail"> | number;
    acceptableMax?: Prisma.FloatWithAggregatesFilter<"KpiGuardrail"> | number;
    currency?: Prisma.StringWithAggregatesFilter<"KpiGuardrail"> | string;
    version?: Prisma.IntWithAggregatesFilter<"KpiGuardrail"> | number;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"KpiGuardrail"> | boolean;
    supersededAt?: Prisma.DateTimeNullableWithAggregatesFilter<"KpiGuardrail"> | Date | string | null;
    createdByUserId?: Prisma.StringWithAggregatesFilter<"KpiGuardrail"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KpiGuardrail"> | Date | string;
};
export type KpiGuardrailCreateInput = {
    id?: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutKpiGuardrailsInput;
};
export type KpiGuardrailUncheckedCreateInput = {
    id?: string;
    clientId: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type KpiGuardrailUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutKpiGuardrailsNestedInput;
};
export type KpiGuardrailUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiGuardrailCreateManyInput = {
    id?: string;
    clientId: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type KpiGuardrailUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiGuardrailUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiGuardrailListRelationFilter = {
    every?: Prisma.KpiGuardrailWhereInput;
    some?: Prisma.KpiGuardrailWhereInput;
    none?: Prisma.KpiGuardrailWhereInput;
};
export type KpiGuardrailOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KpiGuardrailClientIdMetricVersionCompoundUniqueInput = {
    clientId: string;
    metric: $Enums.GuardrailMetric;
    version: number;
};
export type KpiGuardrailCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KpiGuardrailAvgOrderByAggregateInput = {
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type KpiGuardrailMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KpiGuardrailMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    supersededAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KpiGuardrailSumOrderByAggregateInput = {
    targetValue?: Prisma.SortOrder;
    acceptableMin?: Prisma.SortOrder;
    acceptableMax?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type KpiGuardrailCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.KpiGuardrailCreateWithoutClientInput, Prisma.KpiGuardrailUncheckedCreateWithoutClientInput> | Prisma.KpiGuardrailCreateWithoutClientInput[] | Prisma.KpiGuardrailUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.KpiGuardrailCreateOrConnectWithoutClientInput | Prisma.KpiGuardrailCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.KpiGuardrailCreateManyClientInputEnvelope;
    connect?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
};
export type KpiGuardrailUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.KpiGuardrailCreateWithoutClientInput, Prisma.KpiGuardrailUncheckedCreateWithoutClientInput> | Prisma.KpiGuardrailCreateWithoutClientInput[] | Prisma.KpiGuardrailUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.KpiGuardrailCreateOrConnectWithoutClientInput | Prisma.KpiGuardrailCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.KpiGuardrailCreateManyClientInputEnvelope;
    connect?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
};
export type KpiGuardrailUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.KpiGuardrailCreateWithoutClientInput, Prisma.KpiGuardrailUncheckedCreateWithoutClientInput> | Prisma.KpiGuardrailCreateWithoutClientInput[] | Prisma.KpiGuardrailUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.KpiGuardrailCreateOrConnectWithoutClientInput | Prisma.KpiGuardrailCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.KpiGuardrailUpsertWithWhereUniqueWithoutClientInput | Prisma.KpiGuardrailUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.KpiGuardrailCreateManyClientInputEnvelope;
    set?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    disconnect?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    delete?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    connect?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    update?: Prisma.KpiGuardrailUpdateWithWhereUniqueWithoutClientInput | Prisma.KpiGuardrailUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.KpiGuardrailUpdateManyWithWhereWithoutClientInput | Prisma.KpiGuardrailUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.KpiGuardrailScalarWhereInput | Prisma.KpiGuardrailScalarWhereInput[];
};
export type KpiGuardrailUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.KpiGuardrailCreateWithoutClientInput, Prisma.KpiGuardrailUncheckedCreateWithoutClientInput> | Prisma.KpiGuardrailCreateWithoutClientInput[] | Prisma.KpiGuardrailUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.KpiGuardrailCreateOrConnectWithoutClientInput | Prisma.KpiGuardrailCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.KpiGuardrailUpsertWithWhereUniqueWithoutClientInput | Prisma.KpiGuardrailUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.KpiGuardrailCreateManyClientInputEnvelope;
    set?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    disconnect?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    delete?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    connect?: Prisma.KpiGuardrailWhereUniqueInput | Prisma.KpiGuardrailWhereUniqueInput[];
    update?: Prisma.KpiGuardrailUpdateWithWhereUniqueWithoutClientInput | Prisma.KpiGuardrailUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.KpiGuardrailUpdateManyWithWhereWithoutClientInput | Prisma.KpiGuardrailUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.KpiGuardrailScalarWhereInput | Prisma.KpiGuardrailScalarWhereInput[];
};
export type EnumGuardrailMetricFieldUpdateOperationsInput = {
    set?: $Enums.GuardrailMetric;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type KpiGuardrailCreateWithoutClientInput = {
    id?: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type KpiGuardrailUncheckedCreateWithoutClientInput = {
    id?: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type KpiGuardrailCreateOrConnectWithoutClientInput = {
    where: Prisma.KpiGuardrailWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiGuardrailCreateWithoutClientInput, Prisma.KpiGuardrailUncheckedCreateWithoutClientInput>;
};
export type KpiGuardrailCreateManyClientInputEnvelope = {
    data: Prisma.KpiGuardrailCreateManyClientInput | Prisma.KpiGuardrailCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type KpiGuardrailUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.KpiGuardrailWhereUniqueInput;
    update: Prisma.XOR<Prisma.KpiGuardrailUpdateWithoutClientInput, Prisma.KpiGuardrailUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.KpiGuardrailCreateWithoutClientInput, Prisma.KpiGuardrailUncheckedCreateWithoutClientInput>;
};
export type KpiGuardrailUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.KpiGuardrailWhereUniqueInput;
    data: Prisma.XOR<Prisma.KpiGuardrailUpdateWithoutClientInput, Prisma.KpiGuardrailUncheckedUpdateWithoutClientInput>;
};
export type KpiGuardrailUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.KpiGuardrailScalarWhereInput;
    data: Prisma.XOR<Prisma.KpiGuardrailUpdateManyMutationInput, Prisma.KpiGuardrailUncheckedUpdateManyWithoutClientInput>;
};
export type KpiGuardrailScalarWhereInput = {
    AND?: Prisma.KpiGuardrailScalarWhereInput | Prisma.KpiGuardrailScalarWhereInput[];
    OR?: Prisma.KpiGuardrailScalarWhereInput[];
    NOT?: Prisma.KpiGuardrailScalarWhereInput | Prisma.KpiGuardrailScalarWhereInput[];
    id?: Prisma.StringFilter<"KpiGuardrail"> | string;
    clientId?: Prisma.StringFilter<"KpiGuardrail"> | string;
    metric?: Prisma.EnumGuardrailMetricFilter<"KpiGuardrail"> | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    acceptableMin?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    acceptableMax?: Prisma.FloatFilter<"KpiGuardrail"> | number;
    currency?: Prisma.StringFilter<"KpiGuardrail"> | string;
    version?: Prisma.IntFilter<"KpiGuardrail"> | number;
    isCurrent?: Prisma.BoolFilter<"KpiGuardrail"> | boolean;
    supersededAt?: Prisma.DateTimeNullableFilter<"KpiGuardrail"> | Date | string | null;
    createdByUserId?: Prisma.StringFilter<"KpiGuardrail"> | string;
    createdAt?: Prisma.DateTimeFilter<"KpiGuardrail"> | Date | string;
};
export type KpiGuardrailCreateManyClientInput = {
    id?: string;
    metric: $Enums.GuardrailMetric;
    targetValue: number;
    acceptableMin: number;
    acceptableMax: number;
    currency: string;
    version: number;
    isCurrent?: boolean;
    supersededAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type KpiGuardrailUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiGuardrailUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiGuardrailUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.EnumGuardrailMetricFieldUpdateOperationsInput | $Enums.GuardrailMetric;
    targetValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMin?: Prisma.FloatFieldUpdateOperationsInput | number;
    acceptableMax?: Prisma.FloatFieldUpdateOperationsInput | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    supersededAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiGuardrailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    metric?: boolean;
    targetValue?: boolean;
    acceptableMin?: boolean;
    acceptableMax?: boolean;
    currency?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiGuardrail"]>;
export type KpiGuardrailSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    metric?: boolean;
    targetValue?: boolean;
    acceptableMin?: boolean;
    acceptableMax?: boolean;
    currency?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiGuardrail"]>;
export type KpiGuardrailSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    metric?: boolean;
    targetValue?: boolean;
    acceptableMin?: boolean;
    acceptableMax?: boolean;
    currency?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiGuardrail"]>;
export type KpiGuardrailSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    metric?: boolean;
    targetValue?: boolean;
    acceptableMin?: boolean;
    acceptableMax?: boolean;
    currency?: boolean;
    version?: boolean;
    isCurrent?: boolean;
    supersededAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type KpiGuardrailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "metric" | "targetValue" | "acceptableMin" | "acceptableMax" | "currency" | "version" | "isCurrent" | "supersededAt" | "createdByUserId" | "createdAt", ExtArgs["result"]["kpiGuardrail"]>;
export type KpiGuardrailInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type KpiGuardrailIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type KpiGuardrailIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $KpiGuardrailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KpiGuardrail";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        metric: $Enums.GuardrailMetric;
        targetValue: number;
        acceptableMin: number;
        acceptableMax: number;
        currency: string;
        version: number;
        isCurrent: boolean;
        supersededAt: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["kpiGuardrail"]>;
    composites: {};
};
export type KpiGuardrailGetPayload<S extends boolean | null | undefined | KpiGuardrailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload, S>;
export type KpiGuardrailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KpiGuardrailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KpiGuardrailCountAggregateInputType | true;
};
export interface KpiGuardrailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KpiGuardrail'];
        meta: {
            name: 'KpiGuardrail';
        };
    };
    findUnique<T extends KpiGuardrailFindUniqueArgs>(args: Prisma.SelectSubset<T, KpiGuardrailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KpiGuardrailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KpiGuardrailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KpiGuardrailFindFirstArgs>(args?: Prisma.SelectSubset<T, KpiGuardrailFindFirstArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KpiGuardrailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KpiGuardrailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KpiGuardrailFindManyArgs>(args?: Prisma.SelectSubset<T, KpiGuardrailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KpiGuardrailCreateArgs>(args: Prisma.SelectSubset<T, KpiGuardrailCreateArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KpiGuardrailCreateManyArgs>(args?: Prisma.SelectSubset<T, KpiGuardrailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KpiGuardrailCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KpiGuardrailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KpiGuardrailDeleteArgs>(args: Prisma.SelectSubset<T, KpiGuardrailDeleteArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KpiGuardrailUpdateArgs>(args: Prisma.SelectSubset<T, KpiGuardrailUpdateArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KpiGuardrailDeleteManyArgs>(args?: Prisma.SelectSubset<T, KpiGuardrailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KpiGuardrailUpdateManyArgs>(args: Prisma.SelectSubset<T, KpiGuardrailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KpiGuardrailUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KpiGuardrailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KpiGuardrailUpsertArgs>(args: Prisma.SelectSubset<T, KpiGuardrailUpsertArgs<ExtArgs>>): Prisma.Prisma__KpiGuardrailClient<runtime.Types.Result.GetResult<Prisma.$KpiGuardrailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KpiGuardrailCountArgs>(args?: Prisma.Subset<T, KpiGuardrailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KpiGuardrailCountAggregateOutputType> : number>;
    aggregate<T extends KpiGuardrailAggregateArgs>(args: Prisma.Subset<T, KpiGuardrailAggregateArgs>): Prisma.PrismaPromise<GetKpiGuardrailAggregateType<T>>;
    groupBy<T extends KpiGuardrailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KpiGuardrailGroupByArgs['orderBy'];
    } : {
        orderBy?: KpiGuardrailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KpiGuardrailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKpiGuardrailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KpiGuardrailFieldRefs;
}
export interface Prisma__KpiGuardrailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KpiGuardrailFieldRefs {
    readonly id: Prisma.FieldRef<"KpiGuardrail", 'String'>;
    readonly clientId: Prisma.FieldRef<"KpiGuardrail", 'String'>;
    readonly metric: Prisma.FieldRef<"KpiGuardrail", 'GuardrailMetric'>;
    readonly targetValue: Prisma.FieldRef<"KpiGuardrail", 'Float'>;
    readonly acceptableMin: Prisma.FieldRef<"KpiGuardrail", 'Float'>;
    readonly acceptableMax: Prisma.FieldRef<"KpiGuardrail", 'Float'>;
    readonly currency: Prisma.FieldRef<"KpiGuardrail", 'String'>;
    readonly version: Prisma.FieldRef<"KpiGuardrail", 'Int'>;
    readonly isCurrent: Prisma.FieldRef<"KpiGuardrail", 'Boolean'>;
    readonly supersededAt: Prisma.FieldRef<"KpiGuardrail", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"KpiGuardrail", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KpiGuardrail", 'DateTime'>;
}
export type KpiGuardrailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where: Prisma.KpiGuardrailWhereUniqueInput;
};
export type KpiGuardrailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where: Prisma.KpiGuardrailWhereUniqueInput;
};
export type KpiGuardrailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where?: Prisma.KpiGuardrailWhereInput;
    orderBy?: Prisma.KpiGuardrailOrderByWithRelationInput | Prisma.KpiGuardrailOrderByWithRelationInput[];
    cursor?: Prisma.KpiGuardrailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiGuardrailScalarFieldEnum | Prisma.KpiGuardrailScalarFieldEnum[];
};
export type KpiGuardrailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where?: Prisma.KpiGuardrailWhereInput;
    orderBy?: Prisma.KpiGuardrailOrderByWithRelationInput | Prisma.KpiGuardrailOrderByWithRelationInput[];
    cursor?: Prisma.KpiGuardrailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiGuardrailScalarFieldEnum | Prisma.KpiGuardrailScalarFieldEnum[];
};
export type KpiGuardrailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where?: Prisma.KpiGuardrailWhereInput;
    orderBy?: Prisma.KpiGuardrailOrderByWithRelationInput | Prisma.KpiGuardrailOrderByWithRelationInput[];
    cursor?: Prisma.KpiGuardrailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiGuardrailScalarFieldEnum | Prisma.KpiGuardrailScalarFieldEnum[];
};
export type KpiGuardrailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiGuardrailCreateInput, Prisma.KpiGuardrailUncheckedCreateInput>;
};
export type KpiGuardrailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KpiGuardrailCreateManyInput | Prisma.KpiGuardrailCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KpiGuardrailCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    data: Prisma.KpiGuardrailCreateManyInput | Prisma.KpiGuardrailCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KpiGuardrailIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KpiGuardrailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiGuardrailUpdateInput, Prisma.KpiGuardrailUncheckedUpdateInput>;
    where: Prisma.KpiGuardrailWhereUniqueInput;
};
export type KpiGuardrailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KpiGuardrailUpdateManyMutationInput, Prisma.KpiGuardrailUncheckedUpdateManyInput>;
    where?: Prisma.KpiGuardrailWhereInput;
    limit?: number;
};
export type KpiGuardrailUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiGuardrailUpdateManyMutationInput, Prisma.KpiGuardrailUncheckedUpdateManyInput>;
    where?: Prisma.KpiGuardrailWhereInput;
    limit?: number;
    include?: Prisma.KpiGuardrailIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KpiGuardrailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where: Prisma.KpiGuardrailWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiGuardrailCreateInput, Prisma.KpiGuardrailUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KpiGuardrailUpdateInput, Prisma.KpiGuardrailUncheckedUpdateInput>;
};
export type KpiGuardrailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
    where: Prisma.KpiGuardrailWhereUniqueInput;
};
export type KpiGuardrailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiGuardrailWhereInput;
    limit?: number;
};
export type KpiGuardrailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiGuardrailSelect<ExtArgs> | null;
    omit?: Prisma.KpiGuardrailOmit<ExtArgs> | null;
    include?: Prisma.KpiGuardrailInclude<ExtArgs> | null;
};
