import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientOnboardingModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientOnboardingPayload>;
export type AggregateClientOnboarding = {
    _count: ClientOnboardingCountAggregateOutputType | null;
    _avg: ClientOnboardingAvgAggregateOutputType | null;
    _sum: ClientOnboardingSumAggregateOutputType | null;
    _min: ClientOnboardingMinAggregateOutputType | null;
    _max: ClientOnboardingMaxAggregateOutputType | null;
};
export type ClientOnboardingAvgAggregateOutputType = {
    budgetMin: number | null;
    budgetMax: number | null;
};
export type ClientOnboardingSumAggregateOutputType = {
    budgetMin: number | null;
    budgetMax: number | null;
};
export type ClientOnboardingMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    businessDescription: string | null;
    website: string | null;
    industry: string | null;
    productsServices: string | null;
    brandVoice: string | null;
    primaryGoal: $Enums.BusinessGoal | null;
    primaryKpi: $Enums.KpiType | null;
    targetAudience: string | null;
    budgetMin: number | null;
    budgetMax: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientOnboardingMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    businessDescription: string | null;
    website: string | null;
    industry: string | null;
    productsServices: string | null;
    brandVoice: string | null;
    primaryGoal: $Enums.BusinessGoal | null;
    primaryKpi: $Enums.KpiType | null;
    targetAudience: string | null;
    budgetMin: number | null;
    budgetMax: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientOnboardingCountAggregateOutputType = {
    id: number;
    clientId: number;
    businessDescription: number;
    website: number;
    industry: number;
    productsServices: number;
    brandVoice: number;
    primaryGoal: number;
    secondaryGoals: number;
    primaryKpi: number;
    secondaryKpis: number;
    channels: number;
    targetGeographies: number;
    targetAudience: number;
    budgetMin: number;
    budgetMax: number;
    competitors: number;
    completedSteps: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClientOnboardingAvgAggregateInputType = {
    budgetMin?: true;
    budgetMax?: true;
};
export type ClientOnboardingSumAggregateInputType = {
    budgetMin?: true;
    budgetMax?: true;
};
export type ClientOnboardingMinAggregateInputType = {
    id?: true;
    clientId?: true;
    businessDescription?: true;
    website?: true;
    industry?: true;
    productsServices?: true;
    brandVoice?: true;
    primaryGoal?: true;
    primaryKpi?: true;
    targetAudience?: true;
    budgetMin?: true;
    budgetMax?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientOnboardingMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    businessDescription?: true;
    website?: true;
    industry?: true;
    productsServices?: true;
    brandVoice?: true;
    primaryGoal?: true;
    primaryKpi?: true;
    targetAudience?: true;
    budgetMin?: true;
    budgetMax?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientOnboardingCountAggregateInputType = {
    id?: true;
    clientId?: true;
    businessDescription?: true;
    website?: true;
    industry?: true;
    productsServices?: true;
    brandVoice?: true;
    primaryGoal?: true;
    secondaryGoals?: true;
    primaryKpi?: true;
    secondaryKpis?: true;
    channels?: true;
    targetGeographies?: true;
    targetAudience?: true;
    budgetMin?: true;
    budgetMax?: true;
    competitors?: true;
    completedSteps?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClientOnboardingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientOnboardingWhereInput;
    orderBy?: Prisma.ClientOnboardingOrderByWithRelationInput | Prisma.ClientOnboardingOrderByWithRelationInput[];
    cursor?: Prisma.ClientOnboardingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientOnboardingCountAggregateInputType;
    _avg?: ClientOnboardingAvgAggregateInputType;
    _sum?: ClientOnboardingSumAggregateInputType;
    _min?: ClientOnboardingMinAggregateInputType;
    _max?: ClientOnboardingMaxAggregateInputType;
};
export type GetClientOnboardingAggregateType<T extends ClientOnboardingAggregateArgs> = {
    [P in keyof T & keyof AggregateClientOnboarding]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientOnboarding[P]> : Prisma.GetScalarType<T[P], AggregateClientOnboarding[P]>;
};
export type ClientOnboardingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientOnboardingWhereInput;
    orderBy?: Prisma.ClientOnboardingOrderByWithAggregationInput | Prisma.ClientOnboardingOrderByWithAggregationInput[];
    by: Prisma.ClientOnboardingScalarFieldEnum[] | Prisma.ClientOnboardingScalarFieldEnum;
    having?: Prisma.ClientOnboardingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientOnboardingCountAggregateInputType | true;
    _avg?: ClientOnboardingAvgAggregateInputType;
    _sum?: ClientOnboardingSumAggregateInputType;
    _min?: ClientOnboardingMinAggregateInputType;
    _max?: ClientOnboardingMaxAggregateInputType;
};
export type ClientOnboardingGroupByOutputType = {
    id: string;
    clientId: string;
    businessDescription: string | null;
    website: string | null;
    industry: string | null;
    productsServices: string | null;
    brandVoice: string | null;
    primaryGoal: $Enums.BusinessGoal | null;
    secondaryGoals: $Enums.BusinessGoal[];
    primaryKpi: $Enums.KpiType | null;
    secondaryKpis: $Enums.KpiType[];
    channels: $Enums.MarketingChannel[];
    targetGeographies: string[];
    targetAudience: string | null;
    budgetMin: number | null;
    budgetMax: number | null;
    competitors: string[];
    completedSteps: $Enums.OnboardingStep[];
    createdAt: Date;
    updatedAt: Date;
    _count: ClientOnboardingCountAggregateOutputType | null;
    _avg: ClientOnboardingAvgAggregateOutputType | null;
    _sum: ClientOnboardingSumAggregateOutputType | null;
    _min: ClientOnboardingMinAggregateOutputType | null;
    _max: ClientOnboardingMaxAggregateOutputType | null;
};
export type GetClientOnboardingGroupByPayload<T extends ClientOnboardingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientOnboardingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientOnboardingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientOnboardingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientOnboardingGroupByOutputType[P]>;
}>>;
export type ClientOnboardingWhereInput = {
    AND?: Prisma.ClientOnboardingWhereInput | Prisma.ClientOnboardingWhereInput[];
    OR?: Prisma.ClientOnboardingWhereInput[];
    NOT?: Prisma.ClientOnboardingWhereInput | Prisma.ClientOnboardingWhereInput[];
    id?: Prisma.StringFilter<"ClientOnboarding"> | string;
    clientId?: Prisma.StringFilter<"ClientOnboarding"> | string;
    businessDescription?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    website?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    industry?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    productsServices?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    brandVoice?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    primaryGoal?: Prisma.EnumBusinessGoalNullableFilter<"ClientOnboarding"> | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.EnumBusinessGoalNullableListFilter<"ClientOnboarding">;
    primaryKpi?: Prisma.EnumKpiTypeNullableFilter<"ClientOnboarding"> | $Enums.KpiType | null;
    secondaryKpis?: Prisma.EnumKpiTypeNullableListFilter<"ClientOnboarding">;
    channels?: Prisma.EnumMarketingChannelNullableListFilter<"ClientOnboarding">;
    targetGeographies?: Prisma.StringNullableListFilter<"ClientOnboarding">;
    targetAudience?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    budgetMin?: Prisma.FloatNullableFilter<"ClientOnboarding"> | number | null;
    budgetMax?: Prisma.FloatNullableFilter<"ClientOnboarding"> | number | null;
    competitors?: Prisma.StringNullableListFilter<"ClientOnboarding">;
    completedSteps?: Prisma.EnumOnboardingStepNullableListFilter<"ClientOnboarding">;
    createdAt?: Prisma.DateTimeFilter<"ClientOnboarding"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClientOnboarding"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type ClientOnboardingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    businessDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    industry?: Prisma.SortOrderInput | Prisma.SortOrder;
    productsServices?: Prisma.SortOrderInput | Prisma.SortOrder;
    brandVoice?: Prisma.SortOrderInput | Prisma.SortOrder;
    primaryGoal?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryGoals?: Prisma.SortOrder;
    primaryKpi?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryKpis?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    targetGeographies?: Prisma.SortOrder;
    targetAudience?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    competitors?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type ClientOnboardingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clientId?: string;
    AND?: Prisma.ClientOnboardingWhereInput | Prisma.ClientOnboardingWhereInput[];
    OR?: Prisma.ClientOnboardingWhereInput[];
    NOT?: Prisma.ClientOnboardingWhereInput | Prisma.ClientOnboardingWhereInput[];
    businessDescription?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    website?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    industry?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    productsServices?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    brandVoice?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    primaryGoal?: Prisma.EnumBusinessGoalNullableFilter<"ClientOnboarding"> | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.EnumBusinessGoalNullableListFilter<"ClientOnboarding">;
    primaryKpi?: Prisma.EnumKpiTypeNullableFilter<"ClientOnboarding"> | $Enums.KpiType | null;
    secondaryKpis?: Prisma.EnumKpiTypeNullableListFilter<"ClientOnboarding">;
    channels?: Prisma.EnumMarketingChannelNullableListFilter<"ClientOnboarding">;
    targetGeographies?: Prisma.StringNullableListFilter<"ClientOnboarding">;
    targetAudience?: Prisma.StringNullableFilter<"ClientOnboarding"> | string | null;
    budgetMin?: Prisma.FloatNullableFilter<"ClientOnboarding"> | number | null;
    budgetMax?: Prisma.FloatNullableFilter<"ClientOnboarding"> | number | null;
    competitors?: Prisma.StringNullableListFilter<"ClientOnboarding">;
    completedSteps?: Prisma.EnumOnboardingStepNullableListFilter<"ClientOnboarding">;
    createdAt?: Prisma.DateTimeFilter<"ClientOnboarding"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClientOnboarding"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id" | "clientId">;
export type ClientOnboardingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    businessDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    industry?: Prisma.SortOrderInput | Prisma.SortOrder;
    productsServices?: Prisma.SortOrderInput | Prisma.SortOrder;
    brandVoice?: Prisma.SortOrderInput | Prisma.SortOrder;
    primaryGoal?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryGoals?: Prisma.SortOrder;
    primaryKpi?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryKpis?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    targetGeographies?: Prisma.SortOrder;
    targetAudience?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    competitors?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClientOnboardingCountOrderByAggregateInput;
    _avg?: Prisma.ClientOnboardingAvgOrderByAggregateInput;
    _max?: Prisma.ClientOnboardingMaxOrderByAggregateInput;
    _min?: Prisma.ClientOnboardingMinOrderByAggregateInput;
    _sum?: Prisma.ClientOnboardingSumOrderByAggregateInput;
};
export type ClientOnboardingScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientOnboardingScalarWhereWithAggregatesInput | Prisma.ClientOnboardingScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientOnboardingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientOnboardingScalarWhereWithAggregatesInput | Prisma.ClientOnboardingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClientOnboarding"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"ClientOnboarding"> | string;
    businessDescription?: Prisma.StringNullableWithAggregatesFilter<"ClientOnboarding"> | string | null;
    website?: Prisma.StringNullableWithAggregatesFilter<"ClientOnboarding"> | string | null;
    industry?: Prisma.StringNullableWithAggregatesFilter<"ClientOnboarding"> | string | null;
    productsServices?: Prisma.StringNullableWithAggregatesFilter<"ClientOnboarding"> | string | null;
    brandVoice?: Prisma.StringNullableWithAggregatesFilter<"ClientOnboarding"> | string | null;
    primaryGoal?: Prisma.EnumBusinessGoalNullableWithAggregatesFilter<"ClientOnboarding"> | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.EnumBusinessGoalNullableListFilter<"ClientOnboarding">;
    primaryKpi?: Prisma.EnumKpiTypeNullableWithAggregatesFilter<"ClientOnboarding"> | $Enums.KpiType | null;
    secondaryKpis?: Prisma.EnumKpiTypeNullableListFilter<"ClientOnboarding">;
    channels?: Prisma.EnumMarketingChannelNullableListFilter<"ClientOnboarding">;
    targetGeographies?: Prisma.StringNullableListFilter<"ClientOnboarding">;
    targetAudience?: Prisma.StringNullableWithAggregatesFilter<"ClientOnboarding"> | string | null;
    budgetMin?: Prisma.FloatNullableWithAggregatesFilter<"ClientOnboarding"> | number | null;
    budgetMax?: Prisma.FloatNullableWithAggregatesFilter<"ClientOnboarding"> | number | null;
    competitors?: Prisma.StringNullableListFilter<"ClientOnboarding">;
    completedSteps?: Prisma.EnumOnboardingStepNullableListFilter<"ClientOnboarding">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ClientOnboarding"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ClientOnboarding"> | Date | string;
};
export type ClientOnboardingCreateInput = {
    id?: string;
    businessDescription?: string | null;
    website?: string | null;
    industry?: string | null;
    productsServices?: string | null;
    brandVoice?: string | null;
    primaryGoal?: $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingCreatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingCreatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingCreatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingCreatetargetGeographiesInput | string[];
    targetAudience?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    competitors?: Prisma.ClientOnboardingCreatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingCreatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutOnboardingInput;
};
export type ClientOnboardingUncheckedCreateInput = {
    id?: string;
    clientId: string;
    businessDescription?: string | null;
    website?: string | null;
    industry?: string | null;
    productsServices?: string | null;
    brandVoice?: string | null;
    primaryGoal?: $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingCreatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingCreatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingCreatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingCreatetargetGeographiesInput | string[];
    targetAudience?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    competitors?: Prisma.ClientOnboardingCreatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingCreatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientOnboardingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productsServices?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandVoice?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryGoal?: Prisma.NullableEnumBusinessGoalFieldUpdateOperationsInput | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingUpdatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: Prisma.NullableEnumKpiTypeFieldUpdateOperationsInput | $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingUpdatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingUpdatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingUpdatetargetGeographiesInput | string[];
    targetAudience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    competitors?: Prisma.ClientOnboardingUpdatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingUpdatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutOnboardingNestedInput;
};
export type ClientOnboardingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    businessDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productsServices?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandVoice?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryGoal?: Prisma.NullableEnumBusinessGoalFieldUpdateOperationsInput | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingUpdatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: Prisma.NullableEnumKpiTypeFieldUpdateOperationsInput | $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingUpdatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingUpdatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingUpdatetargetGeographiesInput | string[];
    targetAudience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    competitors?: Prisma.ClientOnboardingUpdatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingUpdatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientOnboardingCreateManyInput = {
    id?: string;
    clientId: string;
    businessDescription?: string | null;
    website?: string | null;
    industry?: string | null;
    productsServices?: string | null;
    brandVoice?: string | null;
    primaryGoal?: $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingCreatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingCreatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingCreatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingCreatetargetGeographiesInput | string[];
    targetAudience?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    competitors?: Prisma.ClientOnboardingCreatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingCreatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientOnboardingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productsServices?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandVoice?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryGoal?: Prisma.NullableEnumBusinessGoalFieldUpdateOperationsInput | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingUpdatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: Prisma.NullableEnumKpiTypeFieldUpdateOperationsInput | $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingUpdatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingUpdatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingUpdatetargetGeographiesInput | string[];
    targetAudience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    competitors?: Prisma.ClientOnboardingUpdatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingUpdatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientOnboardingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    businessDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productsServices?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandVoice?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryGoal?: Prisma.NullableEnumBusinessGoalFieldUpdateOperationsInput | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingUpdatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: Prisma.NullableEnumKpiTypeFieldUpdateOperationsInput | $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingUpdatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingUpdatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingUpdatetargetGeographiesInput | string[];
    targetAudience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    competitors?: Prisma.ClientOnboardingUpdatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingUpdatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientOnboardingNullableScalarRelationFilter = {
    is?: Prisma.ClientOnboardingWhereInput | null;
    isNot?: Prisma.ClientOnboardingWhereInput | null;
};
export type EnumBusinessGoalNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    has?: $Enums.BusinessGoal | Prisma.EnumBusinessGoalFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.BusinessGoal[] | Prisma.ListEnumBusinessGoalFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EnumKpiTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel> | null;
    has?: $Enums.KpiType | Prisma.EnumKpiTypeFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.KpiType[] | Prisma.ListEnumKpiTypeFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EnumMarketingChannelNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketingChannel[] | Prisma.ListEnumMarketingChannelFieldRefInput<$PrismaModel> | null;
    has?: $Enums.MarketingChannel | Prisma.EnumMarketingChannelFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.MarketingChannel[] | Prisma.ListEnumMarketingChannelFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.MarketingChannel[] | Prisma.ListEnumMarketingChannelFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EnumOnboardingStepNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingStep[] | Prisma.ListEnumOnboardingStepFieldRefInput<$PrismaModel> | null;
    has?: $Enums.OnboardingStep | Prisma.EnumOnboardingStepFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.OnboardingStep[] | Prisma.ListEnumOnboardingStepFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.OnboardingStep[] | Prisma.ListEnumOnboardingStepFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ClientOnboardingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    businessDescription?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    productsServices?: Prisma.SortOrder;
    brandVoice?: Prisma.SortOrder;
    primaryGoal?: Prisma.SortOrder;
    secondaryGoals?: Prisma.SortOrder;
    primaryKpi?: Prisma.SortOrder;
    secondaryKpis?: Prisma.SortOrder;
    channels?: Prisma.SortOrder;
    targetGeographies?: Prisma.SortOrder;
    targetAudience?: Prisma.SortOrder;
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    competitors?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientOnboardingAvgOrderByAggregateInput = {
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
};
export type ClientOnboardingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    businessDescription?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    productsServices?: Prisma.SortOrder;
    brandVoice?: Prisma.SortOrder;
    primaryGoal?: Prisma.SortOrder;
    primaryKpi?: Prisma.SortOrder;
    targetAudience?: Prisma.SortOrder;
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientOnboardingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    businessDescription?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    productsServices?: Prisma.SortOrder;
    brandVoice?: Prisma.SortOrder;
    primaryGoal?: Prisma.SortOrder;
    primaryKpi?: Prisma.SortOrder;
    targetAudience?: Prisma.SortOrder;
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientOnboardingSumOrderByAggregateInput = {
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
};
export type ClientOnboardingCreateNestedOneWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ClientOnboardingCreateWithoutClientInput, Prisma.ClientOnboardingUncheckedCreateWithoutClientInput>;
    connectOrCreate?: Prisma.ClientOnboardingCreateOrConnectWithoutClientInput;
    connect?: Prisma.ClientOnboardingWhereUniqueInput;
};
export type ClientOnboardingUncheckedCreateNestedOneWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ClientOnboardingCreateWithoutClientInput, Prisma.ClientOnboardingUncheckedCreateWithoutClientInput>;
    connectOrCreate?: Prisma.ClientOnboardingCreateOrConnectWithoutClientInput;
    connect?: Prisma.ClientOnboardingWhereUniqueInput;
};
export type ClientOnboardingUpdateOneWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ClientOnboardingCreateWithoutClientInput, Prisma.ClientOnboardingUncheckedCreateWithoutClientInput>;
    connectOrCreate?: Prisma.ClientOnboardingCreateOrConnectWithoutClientInput;
    upsert?: Prisma.ClientOnboardingUpsertWithoutClientInput;
    disconnect?: Prisma.ClientOnboardingWhereInput | boolean;
    delete?: Prisma.ClientOnboardingWhereInput | boolean;
    connect?: Prisma.ClientOnboardingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientOnboardingUpdateToOneWithWhereWithoutClientInput, Prisma.ClientOnboardingUpdateWithoutClientInput>, Prisma.ClientOnboardingUncheckedUpdateWithoutClientInput>;
};
export type ClientOnboardingUncheckedUpdateOneWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ClientOnboardingCreateWithoutClientInput, Prisma.ClientOnboardingUncheckedCreateWithoutClientInput>;
    connectOrCreate?: Prisma.ClientOnboardingCreateOrConnectWithoutClientInput;
    upsert?: Prisma.ClientOnboardingUpsertWithoutClientInput;
    disconnect?: Prisma.ClientOnboardingWhereInput | boolean;
    delete?: Prisma.ClientOnboardingWhereInput | boolean;
    connect?: Prisma.ClientOnboardingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientOnboardingUpdateToOneWithWhereWithoutClientInput, Prisma.ClientOnboardingUpdateWithoutClientInput>, Prisma.ClientOnboardingUncheckedUpdateWithoutClientInput>;
};
export type ClientOnboardingCreatesecondaryGoalsInput = {
    set: $Enums.BusinessGoal[];
};
export type ClientOnboardingCreatesecondaryKpisInput = {
    set: $Enums.KpiType[];
};
export type ClientOnboardingCreatechannelsInput = {
    set: $Enums.MarketingChannel[];
};
export type ClientOnboardingCreatetargetGeographiesInput = {
    set: string[];
};
export type ClientOnboardingCreatecompetitorsInput = {
    set: string[];
};
export type ClientOnboardingCreatecompletedStepsInput = {
    set: $Enums.OnboardingStep[];
};
export type NullableEnumBusinessGoalFieldUpdateOperationsInput = {
    set?: $Enums.BusinessGoal | null;
};
export type ClientOnboardingUpdatesecondaryGoalsInput = {
    set?: $Enums.BusinessGoal[];
    push?: $Enums.BusinessGoal | $Enums.BusinessGoal[];
};
export type NullableEnumKpiTypeFieldUpdateOperationsInput = {
    set?: $Enums.KpiType | null;
};
export type ClientOnboardingUpdatesecondaryKpisInput = {
    set?: $Enums.KpiType[];
    push?: $Enums.KpiType | $Enums.KpiType[];
};
export type ClientOnboardingUpdatechannelsInput = {
    set?: $Enums.MarketingChannel[];
    push?: $Enums.MarketingChannel | $Enums.MarketingChannel[];
};
export type ClientOnboardingUpdatetargetGeographiesInput = {
    set?: string[];
    push?: string | string[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ClientOnboardingUpdatecompetitorsInput = {
    set?: string[];
    push?: string | string[];
};
export type ClientOnboardingUpdatecompletedStepsInput = {
    set?: $Enums.OnboardingStep[];
    push?: $Enums.OnboardingStep | $Enums.OnboardingStep[];
};
export type ClientOnboardingCreateWithoutClientInput = {
    id?: string;
    businessDescription?: string | null;
    website?: string | null;
    industry?: string | null;
    productsServices?: string | null;
    brandVoice?: string | null;
    primaryGoal?: $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingCreatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingCreatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingCreatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingCreatetargetGeographiesInput | string[];
    targetAudience?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    competitors?: Prisma.ClientOnboardingCreatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingCreatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientOnboardingUncheckedCreateWithoutClientInput = {
    id?: string;
    businessDescription?: string | null;
    website?: string | null;
    industry?: string | null;
    productsServices?: string | null;
    brandVoice?: string | null;
    primaryGoal?: $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingCreatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingCreatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingCreatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingCreatetargetGeographiesInput | string[];
    targetAudience?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    competitors?: Prisma.ClientOnboardingCreatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingCreatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientOnboardingCreateOrConnectWithoutClientInput = {
    where: Prisma.ClientOnboardingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientOnboardingCreateWithoutClientInput, Prisma.ClientOnboardingUncheckedCreateWithoutClientInput>;
};
export type ClientOnboardingUpsertWithoutClientInput = {
    update: Prisma.XOR<Prisma.ClientOnboardingUpdateWithoutClientInput, Prisma.ClientOnboardingUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.ClientOnboardingCreateWithoutClientInput, Prisma.ClientOnboardingUncheckedCreateWithoutClientInput>;
    where?: Prisma.ClientOnboardingWhereInput;
};
export type ClientOnboardingUpdateToOneWithWhereWithoutClientInput = {
    where?: Prisma.ClientOnboardingWhereInput;
    data: Prisma.XOR<Prisma.ClientOnboardingUpdateWithoutClientInput, Prisma.ClientOnboardingUncheckedUpdateWithoutClientInput>;
};
export type ClientOnboardingUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productsServices?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandVoice?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryGoal?: Prisma.NullableEnumBusinessGoalFieldUpdateOperationsInput | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingUpdatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: Prisma.NullableEnumKpiTypeFieldUpdateOperationsInput | $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingUpdatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingUpdatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingUpdatetargetGeographiesInput | string[];
    targetAudience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    competitors?: Prisma.ClientOnboardingUpdatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingUpdatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientOnboardingUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productsServices?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brandVoice?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryGoal?: Prisma.NullableEnumBusinessGoalFieldUpdateOperationsInput | $Enums.BusinessGoal | null;
    secondaryGoals?: Prisma.ClientOnboardingUpdatesecondaryGoalsInput | $Enums.BusinessGoal[];
    primaryKpi?: Prisma.NullableEnumKpiTypeFieldUpdateOperationsInput | $Enums.KpiType | null;
    secondaryKpis?: Prisma.ClientOnboardingUpdatesecondaryKpisInput | $Enums.KpiType[];
    channels?: Prisma.ClientOnboardingUpdatechannelsInput | $Enums.MarketingChannel[];
    targetGeographies?: Prisma.ClientOnboardingUpdatetargetGeographiesInput | string[];
    targetAudience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    competitors?: Prisma.ClientOnboardingUpdatecompetitorsInput | string[];
    completedSteps?: Prisma.ClientOnboardingUpdatecompletedStepsInput | $Enums.OnboardingStep[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientOnboardingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    businessDescription?: boolean;
    website?: boolean;
    industry?: boolean;
    productsServices?: boolean;
    brandVoice?: boolean;
    primaryGoal?: boolean;
    secondaryGoals?: boolean;
    primaryKpi?: boolean;
    secondaryKpis?: boolean;
    channels?: boolean;
    targetGeographies?: boolean;
    targetAudience?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    competitors?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientOnboarding"]>;
export type ClientOnboardingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    businessDescription?: boolean;
    website?: boolean;
    industry?: boolean;
    productsServices?: boolean;
    brandVoice?: boolean;
    primaryGoal?: boolean;
    secondaryGoals?: boolean;
    primaryKpi?: boolean;
    secondaryKpis?: boolean;
    channels?: boolean;
    targetGeographies?: boolean;
    targetAudience?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    competitors?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientOnboarding"]>;
export type ClientOnboardingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    businessDescription?: boolean;
    website?: boolean;
    industry?: boolean;
    productsServices?: boolean;
    brandVoice?: boolean;
    primaryGoal?: boolean;
    secondaryGoals?: boolean;
    primaryKpi?: boolean;
    secondaryKpis?: boolean;
    channels?: boolean;
    targetGeographies?: boolean;
    targetAudience?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    competitors?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientOnboarding"]>;
export type ClientOnboardingSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    businessDescription?: boolean;
    website?: boolean;
    industry?: boolean;
    productsServices?: boolean;
    brandVoice?: boolean;
    primaryGoal?: boolean;
    secondaryGoals?: boolean;
    primaryKpi?: boolean;
    secondaryKpis?: boolean;
    channels?: boolean;
    targetGeographies?: boolean;
    targetAudience?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    competitors?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClientOnboardingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "businessDescription" | "website" | "industry" | "productsServices" | "brandVoice" | "primaryGoal" | "secondaryGoals" | "primaryKpi" | "secondaryKpis" | "channels" | "targetGeographies" | "targetAudience" | "budgetMin" | "budgetMax" | "competitors" | "completedSteps" | "createdAt" | "updatedAt", ExtArgs["result"]["clientOnboarding"]>;
export type ClientOnboardingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type ClientOnboardingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type ClientOnboardingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $ClientOnboardingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClientOnboarding";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        businessDescription: string | null;
        website: string | null;
        industry: string | null;
        productsServices: string | null;
        brandVoice: string | null;
        primaryGoal: $Enums.BusinessGoal | null;
        secondaryGoals: $Enums.BusinessGoal[];
        primaryKpi: $Enums.KpiType | null;
        secondaryKpis: $Enums.KpiType[];
        channels: $Enums.MarketingChannel[];
        targetGeographies: string[];
        targetAudience: string | null;
        budgetMin: number | null;
        budgetMax: number | null;
        competitors: string[];
        completedSteps: $Enums.OnboardingStep[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["clientOnboarding"]>;
    composites: {};
};
export type ClientOnboardingGetPayload<S extends boolean | null | undefined | ClientOnboardingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload, S>;
export type ClientOnboardingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientOnboardingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientOnboardingCountAggregateInputType | true;
};
export interface ClientOnboardingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClientOnboarding'];
        meta: {
            name: 'ClientOnboarding';
        };
    };
    findUnique<T extends ClientOnboardingFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientOnboardingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientOnboardingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientOnboardingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientOnboardingFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientOnboardingFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientOnboardingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientOnboardingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientOnboardingFindManyArgs>(args?: Prisma.SelectSubset<T, ClientOnboardingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientOnboardingCreateArgs>(args: Prisma.SelectSubset<T, ClientOnboardingCreateArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientOnboardingCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientOnboardingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientOnboardingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientOnboardingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientOnboardingDeleteArgs>(args: Prisma.SelectSubset<T, ClientOnboardingDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientOnboardingUpdateArgs>(args: Prisma.SelectSubset<T, ClientOnboardingUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientOnboardingDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientOnboardingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientOnboardingUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientOnboardingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientOnboardingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientOnboardingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientOnboardingUpsertArgs>(args: Prisma.SelectSubset<T, ClientOnboardingUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientOnboardingClient<runtime.Types.Result.GetResult<Prisma.$ClientOnboardingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientOnboardingCountArgs>(args?: Prisma.Subset<T, ClientOnboardingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientOnboardingCountAggregateOutputType> : number>;
    aggregate<T extends ClientOnboardingAggregateArgs>(args: Prisma.Subset<T, ClientOnboardingAggregateArgs>): Prisma.PrismaPromise<GetClientOnboardingAggregateType<T>>;
    groupBy<T extends ClientOnboardingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientOnboardingGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientOnboardingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientOnboardingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientOnboardingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientOnboardingFieldRefs;
}
export interface Prisma__ClientOnboardingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientOnboardingFieldRefs {
    readonly id: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly clientId: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly businessDescription: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly website: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly industry: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly productsServices: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly brandVoice: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly primaryGoal: Prisma.FieldRef<"ClientOnboarding", 'BusinessGoal'>;
    readonly secondaryGoals: Prisma.FieldRef<"ClientOnboarding", 'BusinessGoal[]'>;
    readonly primaryKpi: Prisma.FieldRef<"ClientOnboarding", 'KpiType'>;
    readonly secondaryKpis: Prisma.FieldRef<"ClientOnboarding", 'KpiType[]'>;
    readonly channels: Prisma.FieldRef<"ClientOnboarding", 'MarketingChannel[]'>;
    readonly targetGeographies: Prisma.FieldRef<"ClientOnboarding", 'String[]'>;
    readonly targetAudience: Prisma.FieldRef<"ClientOnboarding", 'String'>;
    readonly budgetMin: Prisma.FieldRef<"ClientOnboarding", 'Float'>;
    readonly budgetMax: Prisma.FieldRef<"ClientOnboarding", 'Float'>;
    readonly competitors: Prisma.FieldRef<"ClientOnboarding", 'String[]'>;
    readonly completedSteps: Prisma.FieldRef<"ClientOnboarding", 'OnboardingStep[]'>;
    readonly createdAt: Prisma.FieldRef<"ClientOnboarding", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ClientOnboarding", 'DateTime'>;
}
export type ClientOnboardingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where: Prisma.ClientOnboardingWhereUniqueInput;
};
export type ClientOnboardingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where: Prisma.ClientOnboardingWhereUniqueInput;
};
export type ClientOnboardingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where?: Prisma.ClientOnboardingWhereInput;
    orderBy?: Prisma.ClientOnboardingOrderByWithRelationInput | Prisma.ClientOnboardingOrderByWithRelationInput[];
    cursor?: Prisma.ClientOnboardingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientOnboardingScalarFieldEnum | Prisma.ClientOnboardingScalarFieldEnum[];
};
export type ClientOnboardingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where?: Prisma.ClientOnboardingWhereInput;
    orderBy?: Prisma.ClientOnboardingOrderByWithRelationInput | Prisma.ClientOnboardingOrderByWithRelationInput[];
    cursor?: Prisma.ClientOnboardingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientOnboardingScalarFieldEnum | Prisma.ClientOnboardingScalarFieldEnum[];
};
export type ClientOnboardingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where?: Prisma.ClientOnboardingWhereInput;
    orderBy?: Prisma.ClientOnboardingOrderByWithRelationInput | Prisma.ClientOnboardingOrderByWithRelationInput[];
    cursor?: Prisma.ClientOnboardingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientOnboardingScalarFieldEnum | Prisma.ClientOnboardingScalarFieldEnum[];
};
export type ClientOnboardingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientOnboardingCreateInput, Prisma.ClientOnboardingUncheckedCreateInput>;
};
export type ClientOnboardingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientOnboardingCreateManyInput | Prisma.ClientOnboardingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientOnboardingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    data: Prisma.ClientOnboardingCreateManyInput | Prisma.ClientOnboardingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClientOnboardingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClientOnboardingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientOnboardingUpdateInput, Prisma.ClientOnboardingUncheckedUpdateInput>;
    where: Prisma.ClientOnboardingWhereUniqueInput;
};
export type ClientOnboardingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientOnboardingUpdateManyMutationInput, Prisma.ClientOnboardingUncheckedUpdateManyInput>;
    where?: Prisma.ClientOnboardingWhereInput;
    limit?: number;
};
export type ClientOnboardingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientOnboardingUpdateManyMutationInput, Prisma.ClientOnboardingUncheckedUpdateManyInput>;
    where?: Prisma.ClientOnboardingWhereInput;
    limit?: number;
    include?: Prisma.ClientOnboardingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClientOnboardingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where: Prisma.ClientOnboardingWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientOnboardingCreateInput, Prisma.ClientOnboardingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientOnboardingUpdateInput, Prisma.ClientOnboardingUncheckedUpdateInput>;
};
export type ClientOnboardingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
    where: Prisma.ClientOnboardingWhereUniqueInput;
};
export type ClientOnboardingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientOnboardingWhereInput;
    limit?: number;
};
export type ClientOnboardingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientOnboardingSelect<ExtArgs> | null;
    omit?: Prisma.ClientOnboardingOmit<ExtArgs> | null;
    include?: Prisma.ClientOnboardingInclude<ExtArgs> | null;
};
