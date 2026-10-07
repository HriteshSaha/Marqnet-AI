import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MembershipModel = runtime.Types.Result.DefaultSelection<Prisma.$MembershipPayload>;
export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
};
export type MembershipMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    roleId: string | null;
    clientAccessScope: $Enums.ClientAccessScope | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MembershipMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    roleId: string | null;
    clientAccessScope: $Enums.ClientAccessScope | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MembershipCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    roleId: number;
    clientAccessScope: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MembershipMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    roleId?: true;
    clientAccessScope?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MembershipMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    roleId?: true;
    clientAccessScope?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MembershipCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    roleId?: true;
    clientAccessScope?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MembershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MembershipCountAggregateInputType;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
};
export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMembership[P]> : Prisma.GetScalarType<T[P], AggregateMembership[P]>;
};
export type MembershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithAggregationInput | Prisma.MembershipOrderByWithAggregationInput[];
    by: Prisma.MembershipScalarFieldEnum[] | Prisma.MembershipScalarFieldEnum;
    having?: Prisma.MembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MembershipCountAggregateInputType | true;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
};
export type MembershipGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string;
    roleId: string;
    clientAccessScope: $Enums.ClientAccessScope;
    createdAt: Date;
    updatedAt: Date;
    _count: MembershipCountAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
};
export type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MembershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MembershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MembershipGroupByOutputType[P]>;
}>>;
export type MembershipWhereInput = {
    AND?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    OR?: Prisma.MembershipWhereInput[];
    NOT?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    id?: Prisma.StringFilter<"Membership"> | string;
    userId?: Prisma.StringFilter<"Membership"> | string;
    organizationId?: Prisma.StringFilter<"Membership"> | string;
    roleId?: Prisma.StringFilter<"Membership"> | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFilter<"Membership"> | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
    clientAccess?: Prisma.MembershipClientAccessListRelationFilter;
};
export type MembershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    clientAccessScope?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    role?: Prisma.RoleOrderByWithRelationInput;
    clientAccess?: Prisma.MembershipClientAccessOrderByRelationAggregateInput;
};
export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_organizationId?: Prisma.MembershipUserIdOrganizationIdCompoundUniqueInput;
    AND?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    OR?: Prisma.MembershipWhereInput[];
    NOT?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    userId?: Prisma.StringFilter<"Membership"> | string;
    organizationId?: Prisma.StringFilter<"Membership"> | string;
    roleId?: Prisma.StringFilter<"Membership"> | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFilter<"Membership"> | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
    clientAccess?: Prisma.MembershipClientAccessListRelationFilter;
}, "id" | "userId_organizationId">;
export type MembershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    clientAccessScope?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MembershipCountOrderByAggregateInput;
    _max?: Prisma.MembershipMaxOrderByAggregateInput;
    _min?: Prisma.MembershipMinOrderByAggregateInput;
};
export type MembershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.MembershipScalarWhereWithAggregatesInput | Prisma.MembershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.MembershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MembershipScalarWhereWithAggregatesInput | Prisma.MembershipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    roleId?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeWithAggregatesFilter<"Membership"> | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Membership"> | Date | string;
};
export type MembershipCreateInput = {
    id?: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembershipsInput;
    role: Prisma.RoleCreateNestedOneWithoutMembershipsInput;
    clientAccess?: Prisma.MembershipClientAccessCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembershipsNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutMembershipsNestedInput;
    clientAccess?: Prisma.MembershipClientAccessUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipCreateManyInput = {
    id?: string;
    userId: string;
    organizationId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipListRelationFilter = {
    every?: Prisma.MembershipWhereInput;
    some?: Prisma.MembershipWhereInput;
    none?: Prisma.MembershipWhereInput;
};
export type MembershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MembershipUserIdOrganizationIdCompoundUniqueInput = {
    userId: string;
    organizationId: string;
};
export type MembershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    clientAccessScope?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MembershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    clientAccessScope?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MembershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    clientAccessScope?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MembershipScalarRelationFilter = {
    is?: Prisma.MembershipWhereInput;
    isNot?: Prisma.MembershipWhereInput;
};
export type MembershipCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutOrganizationInput, Prisma.MembershipUncheckedCreateWithoutOrganizationInput> | Prisma.MembershipCreateWithoutOrganizationInput[] | Prisma.MembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutOrganizationInput | Prisma.MembershipCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MembershipCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutOrganizationInput, Prisma.MembershipUncheckedCreateWithoutOrganizationInput> | Prisma.MembershipCreateWithoutOrganizationInput[] | Prisma.MembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutOrganizationInput | Prisma.MembershipCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MembershipCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutOrganizationInput, Prisma.MembershipUncheckedCreateWithoutOrganizationInput> | Prisma.MembershipCreateWithoutOrganizationInput[] | Prisma.MembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutOrganizationInput | Prisma.MembershipCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MembershipUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MembershipCreateManyOrganizationInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MembershipUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutOrganizationInput | Prisma.MembershipUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutOrganizationInput, Prisma.MembershipUncheckedCreateWithoutOrganizationInput> | Prisma.MembershipCreateWithoutOrganizationInput[] | Prisma.MembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutOrganizationInput | Prisma.MembershipCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MembershipUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MembershipCreateManyOrganizationInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MembershipUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutOrganizationInput | Prisma.MembershipUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutRoleInput, Prisma.MembershipUncheckedCreateWithoutRoleInput> | Prisma.MembershipCreateWithoutRoleInput[] | Prisma.MembershipUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutRoleInput | Prisma.MembershipCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.MembershipCreateManyRoleInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutRoleInput, Prisma.MembershipUncheckedCreateWithoutRoleInput> | Prisma.MembershipCreateWithoutRoleInput[] | Prisma.MembershipUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutRoleInput | Prisma.MembershipCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.MembershipCreateManyRoleInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutRoleInput, Prisma.MembershipUncheckedCreateWithoutRoleInput> | Prisma.MembershipCreateWithoutRoleInput[] | Prisma.MembershipUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutRoleInput | Prisma.MembershipCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutRoleInput | Prisma.MembershipUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.MembershipCreateManyRoleInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutRoleInput | Prisma.MembershipUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutRoleInput | Prisma.MembershipUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutRoleInput, Prisma.MembershipUncheckedCreateWithoutRoleInput> | Prisma.MembershipCreateWithoutRoleInput[] | Prisma.MembershipUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutRoleInput | Prisma.MembershipCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutRoleInput | Prisma.MembershipUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.MembershipCreateManyRoleInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutRoleInput | Prisma.MembershipUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutRoleInput | Prisma.MembershipUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutUserInput | Prisma.MembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutUserInput | Prisma.MembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type EnumClientAccessScopeFieldUpdateOperationsInput = {
    set?: $Enums.ClientAccessScope;
};
export type MembershipCreateNestedOneWithoutClientAccessInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutClientAccessInput, Prisma.MembershipUncheckedCreateWithoutClientAccessInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutClientAccessInput;
    connect?: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateOneRequiredWithoutClientAccessNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutClientAccessInput, Prisma.MembershipUncheckedCreateWithoutClientAccessInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutClientAccessInput;
    upsert?: Prisma.MembershipUpsertWithoutClientAccessInput;
    connect?: Prisma.MembershipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MembershipUpdateToOneWithWhereWithoutClientAccessInput, Prisma.MembershipUpdateWithoutClientAccessInput>, Prisma.MembershipUncheckedUpdateWithoutClientAccessInput>;
};
export type MembershipCreateWithoutOrganizationInput = {
    id?: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    role: Prisma.RoleCreateNestedOneWithoutMembershipsInput;
    clientAccess?: Prisma.MembershipClientAccessCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutOrganizationInput, Prisma.MembershipUncheckedCreateWithoutOrganizationInput>;
};
export type MembershipCreateManyOrganizationInputEnvelope = {
    data: Prisma.MembershipCreateManyOrganizationInput | Prisma.MembershipCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutOrganizationInput, Prisma.MembershipUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutOrganizationInput, Prisma.MembershipUncheckedCreateWithoutOrganizationInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutOrganizationInput, Prisma.MembershipUncheckedUpdateWithoutOrganizationInput>;
};
export type MembershipUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutOrganizationInput>;
};
export type MembershipScalarWhereInput = {
    AND?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
    OR?: Prisma.MembershipScalarWhereInput[];
    NOT?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
    id?: Prisma.StringFilter<"Membership"> | string;
    userId?: Prisma.StringFilter<"Membership"> | string;
    organizationId?: Prisma.StringFilter<"Membership"> | string;
    roleId?: Prisma.StringFilter<"Membership"> | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFilter<"Membership"> | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
};
export type MembershipCreateWithoutRoleInput = {
    id?: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembershipsInput;
    clientAccess?: Prisma.MembershipClientAccessCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutRoleInput = {
    id?: string;
    userId: string;
    organizationId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutRoleInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutRoleInput, Prisma.MembershipUncheckedCreateWithoutRoleInput>;
};
export type MembershipCreateManyRoleInputEnvelope = {
    data: Prisma.MembershipCreateManyRoleInput | Prisma.MembershipCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutRoleInput, Prisma.MembershipUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutRoleInput, Prisma.MembershipUncheckedCreateWithoutRoleInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutRoleInput, Prisma.MembershipUncheckedUpdateWithoutRoleInput>;
};
export type MembershipUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutRoleInput>;
};
export type MembershipCreateWithoutUserInput = {
    id?: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembershipsInput;
    role: Prisma.RoleCreateNestedOneWithoutMembershipsInput;
    clientAccess?: Prisma.MembershipClientAccessCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput>;
};
export type MembershipCreateManyUserInputEnvelope = {
    data: Prisma.MembershipCreateManyUserInput | Prisma.MembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutUserInput, Prisma.MembershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutUserInput, Prisma.MembershipUncheckedUpdateWithoutUserInput>;
};
export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutUserInput>;
};
export type MembershipCreateWithoutClientAccessInput = {
    id?: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembershipsInput;
    role: Prisma.RoleCreateNestedOneWithoutMembershipsInput;
};
export type MembershipUncheckedCreateWithoutClientAccessInput = {
    id?: string;
    userId: string;
    organizationId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipCreateOrConnectWithoutClientAccessInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutClientAccessInput, Prisma.MembershipUncheckedCreateWithoutClientAccessInput>;
};
export type MembershipUpsertWithoutClientAccessInput = {
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutClientAccessInput, Prisma.MembershipUncheckedUpdateWithoutClientAccessInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutClientAccessInput, Prisma.MembershipUncheckedCreateWithoutClientAccessInput>;
    where?: Prisma.MembershipWhereInput;
};
export type MembershipUpdateToOneWithWhereWithoutClientAccessInput = {
    where?: Prisma.MembershipWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutClientAccessInput, Prisma.MembershipUncheckedUpdateWithoutClientAccessInput>;
};
export type MembershipUpdateWithoutClientAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembershipsNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type MembershipUncheckedUpdateWithoutClientAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutMembershipsNestedInput;
    clientAccess?: Prisma.MembershipClientAccessUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCreateManyRoleInput = {
    id?: string;
    userId: string;
    organizationId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembershipsNestedInput;
    clientAccess?: Prisma.MembershipClientAccessUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCreateManyUserInput = {
    id?: string;
    organizationId: string;
    roleId: string;
    clientAccessScope?: $Enums.ClientAccessScope;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembershipsNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutMembershipsNestedInput;
    clientAccess?: Prisma.MembershipClientAccessUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientAccess?: Prisma.MembershipClientAccessUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientAccessScope?: Prisma.EnumClientAccessScopeFieldUpdateOperationsInput | $Enums.ClientAccessScope;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCountOutputType = {
    clientAccess: number;
};
export type MembershipCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientAccess?: boolean | MembershipCountOutputTypeCountClientAccessArgs;
};
export type MembershipCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipCountOutputTypeSelect<ExtArgs> | null;
};
export type MembershipCountOutputTypeCountClientAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipClientAccessWhereInput;
};
export type MembershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    roleId?: boolean;
    clientAccessScope?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    clientAccess?: boolean | Prisma.Membership$clientAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.MembershipCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    roleId?: boolean;
    clientAccessScope?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    roleId?: boolean;
    clientAccessScope?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    roleId?: boolean;
    clientAccessScope?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MembershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "organizationId" | "roleId" | "clientAccessScope" | "createdAt" | "updatedAt", ExtArgs["result"]["membership"]>;
export type MembershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    clientAccess?: boolean | Prisma.Membership$clientAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.MembershipCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MembershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $MembershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Membership";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        role: Prisma.$RolePayload<ExtArgs>;
        clientAccess: Prisma.$MembershipClientAccessPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        organizationId: string;
        roleId: string;
        clientAccessScope: $Enums.ClientAccessScope;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["membership"]>;
    composites: {};
};
export type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MembershipPayload, S>;
export type MembershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MembershipCountAggregateInputType | true;
};
export interface MembershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Membership'];
        meta: {
            name: 'Membership';
        };
    };
    findUnique<T extends MembershipFindUniqueArgs>(args: Prisma.SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MembershipFindFirstArgs>(args?: Prisma.SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MembershipFindManyArgs>(args?: Prisma.SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MembershipCreateArgs>(args: Prisma.SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MembershipCreateManyArgs>(args?: Prisma.SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MembershipDeleteArgs>(args: Prisma.SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MembershipUpdateArgs>(args: Prisma.SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MembershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MembershipUpdateManyArgs>(args: Prisma.SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MembershipUpsertArgs>(args: Prisma.SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MembershipCountArgs>(args?: Prisma.Subset<T, MembershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MembershipCountAggregateOutputType> : number>;
    aggregate<T extends MembershipAggregateArgs>(args: Prisma.Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>;
    groupBy<T extends MembershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MembershipGroupByArgs['orderBy'];
    } : {
        orderBy?: MembershipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MembershipFieldRefs;
}
export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    clientAccess<T extends Prisma.Membership$clientAccessArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Membership$clientAccessArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipClientAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MembershipFieldRefs {
    readonly id: Prisma.FieldRef<"Membership", 'String'>;
    readonly userId: Prisma.FieldRef<"Membership", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Membership", 'String'>;
    readonly roleId: Prisma.FieldRef<"Membership", 'String'>;
    readonly clientAccessScope: Prisma.FieldRef<"Membership", 'ClientAccessScope'>;
    readonly createdAt: Prisma.FieldRef<"Membership", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Membership", 'DateTime'>;
}
export type MembershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type MembershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type MembershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type MembershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipCreateInput, Prisma.MembershipUncheckedCreateInput>;
};
export type MembershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MembershipCreateManyInput | Prisma.MembershipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MembershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    data: Prisma.MembershipCreateManyInput | Prisma.MembershipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MembershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MembershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipUpdateInput, Prisma.MembershipUncheckedUpdateInput>;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyInput>;
    where?: Prisma.MembershipWhereInput;
    limit?: number;
};
export type MembershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyInput>;
    where?: Prisma.MembershipWhereInput;
    limit?: number;
    include?: Prisma.MembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MembershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateInput, Prisma.MembershipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MembershipUpdateInput, Prisma.MembershipUncheckedUpdateInput>;
};
export type MembershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    limit?: number;
};
export type Membership$clientAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
};
