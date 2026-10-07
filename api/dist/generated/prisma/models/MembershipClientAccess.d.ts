import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MembershipClientAccessModel = runtime.Types.Result.DefaultSelection<Prisma.$MembershipClientAccessPayload>;
export type AggregateMembershipClientAccess = {
    _count: MembershipClientAccessCountAggregateOutputType | null;
    _min: MembershipClientAccessMinAggregateOutputType | null;
    _max: MembershipClientAccessMaxAggregateOutputType | null;
};
export type MembershipClientAccessMinAggregateOutputType = {
    id: string | null;
    membershipId: string | null;
    clientId: string | null;
    createdAt: Date | null;
};
export type MembershipClientAccessMaxAggregateOutputType = {
    id: string | null;
    membershipId: string | null;
    clientId: string | null;
    createdAt: Date | null;
};
export type MembershipClientAccessCountAggregateOutputType = {
    id: number;
    membershipId: number;
    clientId: number;
    createdAt: number;
    _all: number;
};
export type MembershipClientAccessMinAggregateInputType = {
    id?: true;
    membershipId?: true;
    clientId?: true;
    createdAt?: true;
};
export type MembershipClientAccessMaxAggregateInputType = {
    id?: true;
    membershipId?: true;
    clientId?: true;
    createdAt?: true;
};
export type MembershipClientAccessCountAggregateInputType = {
    id?: true;
    membershipId?: true;
    clientId?: true;
    createdAt?: true;
    _all?: true;
};
export type MembershipClientAccessAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipClientAccessWhereInput;
    orderBy?: Prisma.MembershipClientAccessOrderByWithRelationInput | Prisma.MembershipClientAccessOrderByWithRelationInput[];
    cursor?: Prisma.MembershipClientAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MembershipClientAccessCountAggregateInputType;
    _min?: MembershipClientAccessMinAggregateInputType;
    _max?: MembershipClientAccessMaxAggregateInputType;
};
export type GetMembershipClientAccessAggregateType<T extends MembershipClientAccessAggregateArgs> = {
    [P in keyof T & keyof AggregateMembershipClientAccess]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMembershipClientAccess[P]> : Prisma.GetScalarType<T[P], AggregateMembershipClientAccess[P]>;
};
export type MembershipClientAccessGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipClientAccessWhereInput;
    orderBy?: Prisma.MembershipClientAccessOrderByWithAggregationInput | Prisma.MembershipClientAccessOrderByWithAggregationInput[];
    by: Prisma.MembershipClientAccessScalarFieldEnum[] | Prisma.MembershipClientAccessScalarFieldEnum;
    having?: Prisma.MembershipClientAccessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MembershipClientAccessCountAggregateInputType | true;
    _min?: MembershipClientAccessMinAggregateInputType;
    _max?: MembershipClientAccessMaxAggregateInputType;
};
export type MembershipClientAccessGroupByOutputType = {
    id: string;
    membershipId: string;
    clientId: string;
    createdAt: Date;
    _count: MembershipClientAccessCountAggregateOutputType | null;
    _min: MembershipClientAccessMinAggregateOutputType | null;
    _max: MembershipClientAccessMaxAggregateOutputType | null;
};
export type GetMembershipClientAccessGroupByPayload<T extends MembershipClientAccessGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MembershipClientAccessGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MembershipClientAccessGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MembershipClientAccessGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MembershipClientAccessGroupByOutputType[P]>;
}>>;
export type MembershipClientAccessWhereInput = {
    AND?: Prisma.MembershipClientAccessWhereInput | Prisma.MembershipClientAccessWhereInput[];
    OR?: Prisma.MembershipClientAccessWhereInput[];
    NOT?: Prisma.MembershipClientAccessWhereInput | Prisma.MembershipClientAccessWhereInput[];
    id?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    membershipId?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    clientId?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    createdAt?: Prisma.DateTimeFilter<"MembershipClientAccess"> | Date | string;
    membership?: Prisma.XOR<Prisma.MembershipScalarRelationFilter, Prisma.MembershipWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type MembershipClientAccessOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    membership?: Prisma.MembershipOrderByWithRelationInput;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type MembershipClientAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    membershipId_clientId?: Prisma.MembershipClientAccessMembershipIdClientIdCompoundUniqueInput;
    AND?: Prisma.MembershipClientAccessWhereInput | Prisma.MembershipClientAccessWhereInput[];
    OR?: Prisma.MembershipClientAccessWhereInput[];
    NOT?: Prisma.MembershipClientAccessWhereInput | Prisma.MembershipClientAccessWhereInput[];
    membershipId?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    clientId?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    createdAt?: Prisma.DateTimeFilter<"MembershipClientAccess"> | Date | string;
    membership?: Prisma.XOR<Prisma.MembershipScalarRelationFilter, Prisma.MembershipWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id" | "membershipId_clientId">;
export type MembershipClientAccessOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MembershipClientAccessCountOrderByAggregateInput;
    _max?: Prisma.MembershipClientAccessMaxOrderByAggregateInput;
    _min?: Prisma.MembershipClientAccessMinOrderByAggregateInput;
};
export type MembershipClientAccessScalarWhereWithAggregatesInput = {
    AND?: Prisma.MembershipClientAccessScalarWhereWithAggregatesInput | Prisma.MembershipClientAccessScalarWhereWithAggregatesInput[];
    OR?: Prisma.MembershipClientAccessScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MembershipClientAccessScalarWhereWithAggregatesInput | Prisma.MembershipClientAccessScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MembershipClientAccess"> | string;
    membershipId?: Prisma.StringWithAggregatesFilter<"MembershipClientAccess"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"MembershipClientAccess"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MembershipClientAccess"> | Date | string;
};
export type MembershipClientAccessCreateInput = {
    id?: string;
    createdAt?: Date | string;
    membership: Prisma.MembershipCreateNestedOneWithoutClientAccessInput;
    client: Prisma.ClientCreateNestedOneWithoutMembershipAccessInput;
};
export type MembershipClientAccessUncheckedCreateInput = {
    id?: string;
    membershipId: string;
    clientId: string;
    createdAt?: Date | string;
};
export type MembershipClientAccessUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneRequiredWithoutClientAccessNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutMembershipAccessNestedInput;
};
export type MembershipClientAccessUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessCreateManyInput = {
    id?: string;
    membershipId: string;
    clientId: string;
    createdAt?: Date | string;
};
export type MembershipClientAccessUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessListRelationFilter = {
    every?: Prisma.MembershipClientAccessWhereInput;
    some?: Prisma.MembershipClientAccessWhereInput;
    none?: Prisma.MembershipClientAccessWhereInput;
};
export type MembershipClientAccessOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MembershipClientAccessMembershipIdClientIdCompoundUniqueInput = {
    membershipId: string;
    clientId: string;
};
export type MembershipClientAccessCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MembershipClientAccessMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MembershipClientAccessMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MembershipClientAccessCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutClientInput, Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput> | Prisma.MembershipClientAccessCreateWithoutClientInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput | Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyClientInputEnvelope;
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
};
export type MembershipClientAccessUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutClientInput, Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput> | Prisma.MembershipClientAccessCreateWithoutClientInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput | Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyClientInputEnvelope;
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
};
export type MembershipClientAccessUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutClientInput, Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput> | Prisma.MembershipClientAccessCreateWithoutClientInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput | Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutClientInput | Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyClientInputEnvelope;
    set?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    disconnect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    delete?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    update?: Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutClientInput | Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.MembershipClientAccessUpdateManyWithWhereWithoutClientInput | Prisma.MembershipClientAccessUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.MembershipClientAccessScalarWhereInput | Prisma.MembershipClientAccessScalarWhereInput[];
};
export type MembershipClientAccessUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutClientInput, Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput> | Prisma.MembershipClientAccessCreateWithoutClientInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput | Prisma.MembershipClientAccessCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutClientInput | Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyClientInputEnvelope;
    set?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    disconnect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    delete?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    update?: Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutClientInput | Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.MembershipClientAccessUpdateManyWithWhereWithoutClientInput | Prisma.MembershipClientAccessUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.MembershipClientAccessScalarWhereInput | Prisma.MembershipClientAccessScalarWhereInput[];
};
export type MembershipClientAccessCreateNestedManyWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput> | Prisma.MembershipClientAccessCreateWithoutMembershipInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput | Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyMembershipInputEnvelope;
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
};
export type MembershipClientAccessUncheckedCreateNestedManyWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput> | Prisma.MembershipClientAccessCreateWithoutMembershipInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput | Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyMembershipInputEnvelope;
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
};
export type MembershipClientAccessUpdateManyWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput> | Prisma.MembershipClientAccessCreateWithoutMembershipInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput | Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput[];
    upsert?: Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutMembershipInput | Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutMembershipInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyMembershipInputEnvelope;
    set?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    disconnect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    delete?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    update?: Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutMembershipInput | Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutMembershipInput[];
    updateMany?: Prisma.MembershipClientAccessUpdateManyWithWhereWithoutMembershipInput | Prisma.MembershipClientAccessUpdateManyWithWhereWithoutMembershipInput[];
    deleteMany?: Prisma.MembershipClientAccessScalarWhereInput | Prisma.MembershipClientAccessScalarWhereInput[];
};
export type MembershipClientAccessUncheckedUpdateManyWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput> | Prisma.MembershipClientAccessCreateWithoutMembershipInput[] | Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput | Prisma.MembershipClientAccessCreateOrConnectWithoutMembershipInput[];
    upsert?: Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutMembershipInput | Prisma.MembershipClientAccessUpsertWithWhereUniqueWithoutMembershipInput[];
    createMany?: Prisma.MembershipClientAccessCreateManyMembershipInputEnvelope;
    set?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    disconnect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    delete?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    connect?: Prisma.MembershipClientAccessWhereUniqueInput | Prisma.MembershipClientAccessWhereUniqueInput[];
    update?: Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutMembershipInput | Prisma.MembershipClientAccessUpdateWithWhereUniqueWithoutMembershipInput[];
    updateMany?: Prisma.MembershipClientAccessUpdateManyWithWhereWithoutMembershipInput | Prisma.MembershipClientAccessUpdateManyWithWhereWithoutMembershipInput[];
    deleteMany?: Prisma.MembershipClientAccessScalarWhereInput | Prisma.MembershipClientAccessScalarWhereInput[];
};
export type MembershipClientAccessCreateWithoutClientInput = {
    id?: string;
    createdAt?: Date | string;
    membership: Prisma.MembershipCreateNestedOneWithoutClientAccessInput;
};
export type MembershipClientAccessUncheckedCreateWithoutClientInput = {
    id?: string;
    membershipId: string;
    createdAt?: Date | string;
};
export type MembershipClientAccessCreateOrConnectWithoutClientInput = {
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutClientInput, Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput>;
};
export type MembershipClientAccessCreateManyClientInputEnvelope = {
    data: Prisma.MembershipClientAccessCreateManyClientInput | Prisma.MembershipClientAccessCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type MembershipClientAccessUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipClientAccessUpdateWithoutClientInput, Prisma.MembershipClientAccessUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutClientInput, Prisma.MembershipClientAccessUncheckedCreateWithoutClientInput>;
};
export type MembershipClientAccessUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateWithoutClientInput, Prisma.MembershipClientAccessUncheckedUpdateWithoutClientInput>;
};
export type MembershipClientAccessUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.MembershipClientAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateManyMutationInput, Prisma.MembershipClientAccessUncheckedUpdateManyWithoutClientInput>;
};
export type MembershipClientAccessScalarWhereInput = {
    AND?: Prisma.MembershipClientAccessScalarWhereInput | Prisma.MembershipClientAccessScalarWhereInput[];
    OR?: Prisma.MembershipClientAccessScalarWhereInput[];
    NOT?: Prisma.MembershipClientAccessScalarWhereInput | Prisma.MembershipClientAccessScalarWhereInput[];
    id?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    membershipId?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    clientId?: Prisma.StringFilter<"MembershipClientAccess"> | string;
    createdAt?: Prisma.DateTimeFilter<"MembershipClientAccess"> | Date | string;
};
export type MembershipClientAccessCreateWithoutMembershipInput = {
    id?: string;
    createdAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutMembershipAccessInput;
};
export type MembershipClientAccessUncheckedCreateWithoutMembershipInput = {
    id?: string;
    clientId: string;
    createdAt?: Date | string;
};
export type MembershipClientAccessCreateOrConnectWithoutMembershipInput = {
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput>;
};
export type MembershipClientAccessCreateManyMembershipInputEnvelope = {
    data: Prisma.MembershipClientAccessCreateManyMembershipInput | Prisma.MembershipClientAccessCreateManyMembershipInput[];
    skipDuplicates?: boolean;
};
export type MembershipClientAccessUpsertWithWhereUniqueWithoutMembershipInput = {
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipClientAccessUpdateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedUpdateWithoutMembershipInput>;
    create: Prisma.XOR<Prisma.MembershipClientAccessCreateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedCreateWithoutMembershipInput>;
};
export type MembershipClientAccessUpdateWithWhereUniqueWithoutMembershipInput = {
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateWithoutMembershipInput, Prisma.MembershipClientAccessUncheckedUpdateWithoutMembershipInput>;
};
export type MembershipClientAccessUpdateManyWithWhereWithoutMembershipInput = {
    where: Prisma.MembershipClientAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateManyMutationInput, Prisma.MembershipClientAccessUncheckedUpdateManyWithoutMembershipInput>;
};
export type MembershipClientAccessCreateManyClientInput = {
    id?: string;
    membershipId: string;
    createdAt?: Date | string;
};
export type MembershipClientAccessUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneRequiredWithoutClientAccessNestedInput;
};
export type MembershipClientAccessUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessCreateManyMembershipInput = {
    id?: string;
    clientId: string;
    createdAt?: Date | string;
};
export type MembershipClientAccessUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutMembershipAccessNestedInput;
};
export type MembershipClientAccessUncheckedUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessUncheckedUpdateManyWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipClientAccessSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    membershipId?: boolean;
    clientId?: boolean;
    createdAt?: boolean;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membershipClientAccess"]>;
export type MembershipClientAccessSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    membershipId?: boolean;
    clientId?: boolean;
    createdAt?: boolean;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membershipClientAccess"]>;
export type MembershipClientAccessSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    membershipId?: boolean;
    clientId?: boolean;
    createdAt?: boolean;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membershipClientAccess"]>;
export type MembershipClientAccessSelectScalar = {
    id?: boolean;
    membershipId?: boolean;
    clientId?: boolean;
    createdAt?: boolean;
};
export type MembershipClientAccessOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "membershipId" | "clientId" | "createdAt", ExtArgs["result"]["membershipClientAccess"]>;
export type MembershipClientAccessInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type MembershipClientAccessIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type MembershipClientAccessIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $MembershipClientAccessPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MembershipClientAccess";
    objects: {
        membership: Prisma.$MembershipPayload<ExtArgs>;
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        membershipId: string;
        clientId: string;
        createdAt: Date;
    }, ExtArgs["result"]["membershipClientAccess"]>;
    composites: {};
};
export type MembershipClientAccessGetPayload<S extends boolean | null | undefined | MembershipClientAccessDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload, S>;
export type MembershipClientAccessCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MembershipClientAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MembershipClientAccessCountAggregateInputType | true;
};
export interface MembershipClientAccessDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MembershipClientAccess'];
        meta: {
            name: 'MembershipClientAccess';
        };
    };
    findUnique<T extends MembershipClientAccessFindUniqueArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MembershipClientAccessFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MembershipClientAccessFindFirstArgs>(args?: Prisma.SelectSubset<T, MembershipClientAccessFindFirstArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MembershipClientAccessFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MembershipClientAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MembershipClientAccessFindManyArgs>(args?: Prisma.SelectSubset<T, MembershipClientAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MembershipClientAccessCreateArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessCreateArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MembershipClientAccessCreateManyArgs>(args?: Prisma.SelectSubset<T, MembershipClientAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MembershipClientAccessCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MembershipClientAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MembershipClientAccessDeleteArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessDeleteArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MembershipClientAccessUpdateArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessUpdateArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MembershipClientAccessDeleteManyArgs>(args?: Prisma.SelectSubset<T, MembershipClientAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MembershipClientAccessUpdateManyArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MembershipClientAccessUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MembershipClientAccessUpsertArgs>(args: Prisma.SelectSubset<T, MembershipClientAccessUpsertArgs<ExtArgs>>): Prisma.Prisma__MembershipClientAccessClient<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MembershipClientAccessCountArgs>(args?: Prisma.Subset<T, MembershipClientAccessCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MembershipClientAccessCountAggregateOutputType> : number>;
    aggregate<T extends MembershipClientAccessAggregateArgs>(args: Prisma.Subset<T, MembershipClientAccessAggregateArgs>): Prisma.PrismaPromise<GetMembershipClientAccessAggregateType<T>>;
    groupBy<T extends MembershipClientAccessGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MembershipClientAccessGroupByArgs['orderBy'];
    } : {
        orderBy?: MembershipClientAccessGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MembershipClientAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipClientAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MembershipClientAccessFieldRefs;
}
export interface Prisma__MembershipClientAccessClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    membership<T extends Prisma.MembershipDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MembershipDefaultArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MembershipClientAccessFieldRefs {
    readonly id: Prisma.FieldRef<"MembershipClientAccess", 'String'>;
    readonly membershipId: Prisma.FieldRef<"MembershipClientAccess", 'String'>;
    readonly clientId: Prisma.FieldRef<"MembershipClientAccess", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MembershipClientAccess", 'DateTime'>;
}
export type MembershipClientAccessFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where: Prisma.MembershipClientAccessWhereUniqueInput;
};
export type MembershipClientAccessFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where: Prisma.MembershipClientAccessWhereUniqueInput;
};
export type MembershipClientAccessFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where?: Prisma.MembershipClientAccessWhereInput;
    orderBy?: Prisma.MembershipClientAccessOrderByWithRelationInput | Prisma.MembershipClientAccessOrderByWithRelationInput[];
    cursor?: Prisma.MembershipClientAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipClientAccessScalarFieldEnum | Prisma.MembershipClientAccessScalarFieldEnum[];
};
export type MembershipClientAccessFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where?: Prisma.MembershipClientAccessWhereInput;
    orderBy?: Prisma.MembershipClientAccessOrderByWithRelationInput | Prisma.MembershipClientAccessOrderByWithRelationInput[];
    cursor?: Prisma.MembershipClientAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipClientAccessScalarFieldEnum | Prisma.MembershipClientAccessScalarFieldEnum[];
};
export type MembershipClientAccessFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where?: Prisma.MembershipClientAccessWhereInput;
    orderBy?: Prisma.MembershipClientAccessOrderByWithRelationInput | Prisma.MembershipClientAccessOrderByWithRelationInput[];
    cursor?: Prisma.MembershipClientAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipClientAccessScalarFieldEnum | Prisma.MembershipClientAccessScalarFieldEnum[];
};
export type MembershipClientAccessCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipClientAccessCreateInput, Prisma.MembershipClientAccessUncheckedCreateInput>;
};
export type MembershipClientAccessCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MembershipClientAccessCreateManyInput | Prisma.MembershipClientAccessCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MembershipClientAccessCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    data: Prisma.MembershipClientAccessCreateManyInput | Prisma.MembershipClientAccessCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MembershipClientAccessIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MembershipClientAccessUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateInput, Prisma.MembershipClientAccessUncheckedUpdateInput>;
    where: Prisma.MembershipClientAccessWhereUniqueInput;
};
export type MembershipClientAccessUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateManyMutationInput, Prisma.MembershipClientAccessUncheckedUpdateManyInput>;
    where?: Prisma.MembershipClientAccessWhereInput;
    limit?: number;
};
export type MembershipClientAccessUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipClientAccessUpdateManyMutationInput, Prisma.MembershipClientAccessUncheckedUpdateManyInput>;
    where?: Prisma.MembershipClientAccessWhereInput;
    limit?: number;
    include?: Prisma.MembershipClientAccessIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MembershipClientAccessUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where: Prisma.MembershipClientAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipClientAccessCreateInput, Prisma.MembershipClientAccessUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MembershipClientAccessUpdateInput, Prisma.MembershipClientAccessUncheckedUpdateInput>;
};
export type MembershipClientAccessDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
    where: Prisma.MembershipClientAccessWhereUniqueInput;
};
export type MembershipClientAccessDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipClientAccessWhereInput;
    limit?: number;
};
export type MembershipClientAccessDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipClientAccessSelect<ExtArgs> | null;
    omit?: Prisma.MembershipClientAccessOmit<ExtArgs> | null;
    include?: Prisma.MembershipClientAccessInclude<ExtArgs> | null;
};
