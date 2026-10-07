import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoleModel = runtime.Types.Result.DefaultSelection<Prisma.$RolePayload>;
export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
export type RoleMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    isSystem: boolean | null;
    systemKey: $Enums.SystemRoleKey | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoleMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    isSystem: boolean | null;
    systemKey: $Enums.SystemRoleKey | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoleCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    isSystem: number;
    systemKey: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RoleMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    isSystem?: true;
    systemKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoleMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    isSystem?: true;
    systemKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoleCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    isSystem?: true;
    systemKey?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleCountAggregateInputType;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole[P]> : Prisma.GetScalarType<T[P], AggregateRole[P]>;
};
export type RoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithAggregationInput | Prisma.RoleOrderByWithAggregationInput[];
    by: Prisma.RoleScalarFieldEnum[] | Prisma.RoleScalarFieldEnum;
    having?: Prisma.RoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type RoleGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    isSystem: boolean;
    systemKey: $Enums.SystemRoleKey | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
export type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]>;
}>>;
export type RoleWhereInput = {
    AND?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    OR?: Prisma.RoleWhereInput[];
    NOT?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    id?: Prisma.StringFilter<"Role"> | string;
    organizationId?: Prisma.StringFilter<"Role"> | string;
    name?: Prisma.StringFilter<"Role"> | string;
    isSystem?: Prisma.BoolFilter<"Role"> | boolean;
    systemKey?: Prisma.EnumSystemRoleKeyNullableFilter<"Role"> | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    permissions?: Prisma.RolePermissionListRelationFilter;
    memberships?: Prisma.MembershipListRelationFilter;
};
export type RoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    systemKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    permissions?: Prisma.RolePermissionOrderByRelationAggregateInput;
    memberships?: Prisma.MembershipOrderByRelationAggregateInput;
};
export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId_name?: Prisma.RoleOrganizationIdNameCompoundUniqueInput;
    organizationId_systemKey?: Prisma.RoleOrganizationIdSystemKeyCompoundUniqueInput;
    AND?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    OR?: Prisma.RoleWhereInput[];
    NOT?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    organizationId?: Prisma.StringFilter<"Role"> | string;
    name?: Prisma.StringFilter<"Role"> | string;
    isSystem?: Prisma.BoolFilter<"Role"> | boolean;
    systemKey?: Prisma.EnumSystemRoleKeyNullableFilter<"Role"> | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    permissions?: Prisma.RolePermissionListRelationFilter;
    memberships?: Prisma.MembershipListRelationFilter;
}, "id" | "organizationId_name" | "organizationId_systemKey">;
export type RoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    systemKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RoleCountOrderByAggregateInput;
    _max?: Prisma.RoleMaxOrderByAggregateInput;
    _min?: Prisma.RoleMinOrderByAggregateInput;
};
export type RoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoleScalarWhereWithAggregatesInput | Prisma.RoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoleScalarWhereWithAggregatesInput | Prisma.RoleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Role"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Role"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Role"> | string;
    isSystem?: Prisma.BoolWithAggregatesFilter<"Role"> | boolean;
    systemKey?: Prisma.EnumSystemRoleKeyNullableWithAggregatesFilter<"Role"> | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Role"> | Date | string;
};
export type RoleCreateInput = {
    id?: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutRolesInput;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutRolesNestedInput;
    permissions?: Prisma.RolePermissionUpdateManyWithoutRoleNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleListRelationFilter = {
    every?: Prisma.RoleWhereInput;
    some?: Prisma.RoleWhereInput;
    none?: Prisma.RoleWhereInput;
};
export type RoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoleOrganizationIdNameCompoundUniqueInput = {
    organizationId: string;
    name: string;
};
export type RoleOrganizationIdSystemKeyCompoundUniqueInput = {
    organizationId: string;
    systemKey: $Enums.SystemRoleKey;
};
export type RoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    systemKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    systemKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    systemKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleScalarRelationFilter = {
    is?: Prisma.RoleWhereInput;
    isNot?: Prisma.RoleWhereInput;
};
export type RoleCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutOrganizationInput, Prisma.RoleUncheckedCreateWithoutOrganizationInput> | Prisma.RoleCreateWithoutOrganizationInput[] | Prisma.RoleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutOrganizationInput | Prisma.RoleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.RoleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
};
export type RoleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutOrganizationInput, Prisma.RoleUncheckedCreateWithoutOrganizationInput> | Prisma.RoleCreateWithoutOrganizationInput[] | Prisma.RoleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutOrganizationInput | Prisma.RoleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.RoleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
};
export type RoleUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutOrganizationInput, Prisma.RoleUncheckedCreateWithoutOrganizationInput> | Prisma.RoleCreateWithoutOrganizationInput[] | Prisma.RoleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutOrganizationInput | Prisma.RoleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.RoleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.RoleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.RoleCreateManyOrganizationInputEnvelope;
    set?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    disconnect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    delete?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    update?: Prisma.RoleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.RoleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.RoleUpdateManyWithWhereWithoutOrganizationInput | Prisma.RoleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
};
export type RoleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutOrganizationInput, Prisma.RoleUncheckedCreateWithoutOrganizationInput> | Prisma.RoleCreateWithoutOrganizationInput[] | Prisma.RoleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutOrganizationInput | Prisma.RoleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.RoleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.RoleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.RoleCreateManyOrganizationInputEnvelope;
    set?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    disconnect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    delete?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    update?: Prisma.RoleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.RoleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.RoleUpdateManyWithWhereWithoutOrganizationInput | Prisma.RoleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
};
export type NullableEnumSystemRoleKeyFieldUpdateOperationsInput = {
    set?: $Enums.SystemRoleKey | null;
};
export type RoleCreateNestedOneWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutPermissionsInput, Prisma.RoleUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutPermissionsInput;
    connect?: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutPermissionsInput, Prisma.RoleUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutPermissionsInput;
    upsert?: Prisma.RoleUpsertWithoutPermissionsInput;
    connect?: Prisma.RoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoleUpdateToOneWithWhereWithoutPermissionsInput, Prisma.RoleUpdateWithoutPermissionsInput>, Prisma.RoleUncheckedUpdateWithoutPermissionsInput>;
};
export type RoleCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutMembershipsInput, Prisma.RoleUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutMembershipsInput, Prisma.RoleUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.RoleUpsertWithoutMembershipsInput;
    connect?: Prisma.RoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoleUpdateToOneWithWhereWithoutMembershipsInput, Prisma.RoleUpdateWithoutMembershipsInput>, Prisma.RoleUncheckedUpdateWithoutMembershipsInput>;
};
export type RoleCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutOrganizationInput, Prisma.RoleUncheckedCreateWithoutOrganizationInput>;
};
export type RoleCreateManyOrganizationInputEnvelope = {
    data: Prisma.RoleCreateManyOrganizationInput | Prisma.RoleCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type RoleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.RoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleUpdateWithoutOrganizationInput, Prisma.RoleUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutOrganizationInput, Prisma.RoleUncheckedCreateWithoutOrganizationInput>;
};
export type RoleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.RoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutOrganizationInput, Prisma.RoleUncheckedUpdateWithoutOrganizationInput>;
};
export type RoleUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.RoleScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyWithoutOrganizationInput>;
};
export type RoleScalarWhereInput = {
    AND?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
    OR?: Prisma.RoleScalarWhereInput[];
    NOT?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
    id?: Prisma.StringFilter<"Role"> | string;
    organizationId?: Prisma.StringFilter<"Role"> | string;
    name?: Prisma.StringFilter<"Role"> | string;
    isSystem?: Prisma.BoolFilter<"Role"> | boolean;
    systemKey?: Prisma.EnumSystemRoleKeyNullableFilter<"Role"> | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
};
export type RoleCreateWithoutPermissionsInput = {
    id?: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutRolesInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string;
    organizationId: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutPermissionsInput, Prisma.RoleUncheckedCreateWithoutPermissionsInput>;
};
export type RoleUpsertWithoutPermissionsInput = {
    update: Prisma.XOR<Prisma.RoleUpdateWithoutPermissionsInput, Prisma.RoleUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutPermissionsInput, Prisma.RoleUncheckedCreateWithoutPermissionsInput>;
    where?: Prisma.RoleWhereInput;
};
export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: Prisma.RoleWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutPermissionsInput, Prisma.RoleUncheckedUpdateWithoutPermissionsInput>;
};
export type RoleUpdateWithoutPermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutRolesNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutRolesInput;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    organizationId: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutMembershipsInput, Prisma.RoleUncheckedCreateWithoutMembershipsInput>;
};
export type RoleUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.RoleUpdateWithoutMembershipsInput, Prisma.RoleUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutMembershipsInput, Prisma.RoleUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.RoleWhereInput;
};
export type RoleUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.RoleWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutMembershipsInput, Prisma.RoleUncheckedUpdateWithoutMembershipsInput>;
};
export type RoleUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutRolesNestedInput;
    permissions?: Prisma.RolePermissionUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateManyOrganizationInput = {
    id?: string;
    name: string;
    isSystem?: boolean;
    systemKey?: $Enums.SystemRoleKey | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUpdateManyWithoutRoleNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    systemKey?: Prisma.NullableEnumSystemRoleKeyFieldUpdateOperationsInput | $Enums.SystemRoleKey | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleCountOutputType = {
    permissions: number;
    memberships: number;
};
export type RoleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs;
    memberships?: boolean | RoleCountOutputTypeCountMembershipsArgs;
};
export type RoleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleCountOutputTypeSelect<ExtArgs> | null;
};
export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
};
export type RoleCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
};
export type RoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    isSystem?: boolean;
    systemKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    permissions?: boolean | Prisma.Role$permissionsArgs<ExtArgs>;
    memberships?: boolean | Prisma.Role$membershipsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    isSystem?: boolean;
    systemKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    isSystem?: boolean;
    systemKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    isSystem?: boolean;
    systemKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "isSystem" | "systemKey" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>;
export type RoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    permissions?: boolean | Prisma.Role$permissionsArgs<ExtArgs>;
    memberships?: boolean | Prisma.Role$membershipsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type RoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $RolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Role";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        permissions: Prisma.$RolePermissionPayload<ExtArgs>[];
        memberships: Prisma.$MembershipPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        isSystem: boolean;
        systemKey: $Enums.SystemRoleKey | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["role"]>;
    composites: {};
};
export type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolePayload, S>;
export type RoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleCountAggregateInputType | true;
};
export interface RoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Role'];
        meta: {
            name: 'Role';
        };
    };
    findUnique<T extends RoleFindUniqueArgs>(args: Prisma.SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoleFindFirstArgs>(args?: Prisma.SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoleFindManyArgs>(args?: Prisma.SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoleCreateArgs>(args: Prisma.SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoleCreateManyArgs>(args?: Prisma.SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoleDeleteArgs>(args: Prisma.SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoleUpdateArgs>(args: Prisma.SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoleUpdateManyArgs>(args: Prisma.SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoleUpsertArgs>(args: Prisma.SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoleCountArgs>(args?: Prisma.Subset<T, RoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleCountAggregateOutputType> : number>;
    aggregate<T extends RoleAggregateArgs>(args: Prisma.Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>;
    groupBy<T extends RoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoleGroupByArgs['orderBy'];
    } : {
        orderBy?: RoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoleFieldRefs;
}
export interface Prisma__RoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    permissions<T extends Prisma.Role$permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    memberships<T extends Prisma.Role$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Role$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoleFieldRefs {
    readonly id: Prisma.FieldRef<"Role", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Role", 'String'>;
    readonly name: Prisma.FieldRef<"Role", 'String'>;
    readonly isSystem: Prisma.FieldRef<"Role", 'Boolean'>;
    readonly systemKey: Prisma.FieldRef<"Role", 'SystemRoleKey'>;
    readonly createdAt: Prisma.FieldRef<"Role", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Role", 'DateTime'>;
}
export type RoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleCreateInput, Prisma.RoleUncheckedCreateInput>;
};
export type RoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoleCreateManyInput | Prisma.RoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    data: Prisma.RoleCreateManyInput | Prisma.RoleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleUpdateInput, Prisma.RoleUncheckedUpdateInput>;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyInput>;
    where?: Prisma.RoleWhereInput;
    limit?: number;
};
export type RoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyInput>;
    where?: Prisma.RoleWhereInput;
    limit?: number;
    include?: Prisma.RoleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateInput, Prisma.RoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoleUpdateInput, Prisma.RoleUncheckedUpdateInput>;
};
export type RoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    limit?: number;
};
export type Role$permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where?: Prisma.RolePermissionWhereInput;
    orderBy?: Prisma.RolePermissionOrderByWithRelationInput | Prisma.RolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolePermissionScalarFieldEnum | Prisma.RolePermissionScalarFieldEnum[];
};
export type Role$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
};
