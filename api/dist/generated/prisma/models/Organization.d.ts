import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationPayload>;
export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _avg: OrganizationAvgAggregateOutputType | null;
    _sum: OrganizationSumAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type OrganizationAvgAggregateOutputType = {
    sessionTtlMinutes: number | null;
};
export type OrganizationSumAggregateOutputType = {
    sessionTtlMinutes: number | null;
};
export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    type: $Enums.OrganizationType | null;
    locale: string | null;
    currency: string | null;
    timezone: string | null;
    archivedAt: Date | null;
    sessionTtlMinutes: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    type: $Enums.OrganizationType | null;
    locale: string | null;
    currency: string | null;
    timezone: string | null;
    archivedAt: Date | null;
    sessionTtlMinutes: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    type: number;
    locale: number;
    currency: number;
    timezone: number;
    archivedAt: number;
    sessionTtlMinutes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationAvgAggregateInputType = {
    sessionTtlMinutes?: true;
};
export type OrganizationSumAggregateInputType = {
    sessionTtlMinutes?: true;
};
export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    type?: true;
    locale?: true;
    currency?: true;
    timezone?: true;
    archivedAt?: true;
    sessionTtlMinutes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    type?: true;
    locale?: true;
    currency?: true;
    timezone?: true;
    archivedAt?: true;
    sessionTtlMinutes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    type?: true;
    locale?: true;
    currency?: true;
    timezone?: true;
    archivedAt?: true;
    sessionTtlMinutes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationCountAggregateInputType;
    _avg?: OrganizationAvgAggregateInputType;
    _sum?: OrganizationSumAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganization[P]> : Prisma.GetScalarType<T[P], AggregateOrganization[P]>;
};
export type OrganizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithAggregationInput | Prisma.OrganizationOrderByWithAggregationInput[];
    by: Prisma.OrganizationScalarFieldEnum[] | Prisma.OrganizationScalarFieldEnum;
    having?: Prisma.OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _avg?: OrganizationAvgAggregateInputType;
    _sum?: OrganizationSumAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale: string;
    currency: string;
    timezone: string;
    archivedAt: Date | null;
    sessionTtlMinutes: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _avg: OrganizationAvgAggregateOutputType | null;
    _sum: OrganizationSumAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
}>>;
export type OrganizationWhereInput = {
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    id?: Prisma.StringFilter<"Organization"> | string;
    name?: Prisma.StringFilter<"Organization"> | string;
    slug?: Prisma.StringFilter<"Organization"> | string;
    type?: Prisma.EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType;
    locale?: Prisma.StringFilter<"Organization"> | string;
    currency?: Prisma.StringFilter<"Organization"> | string;
    timezone?: Prisma.StringFilter<"Organization"> | string;
    archivedAt?: Prisma.DateTimeNullableFilter<"Organization"> | Date | string | null;
    sessionTtlMinutes?: Prisma.IntNullableFilter<"Organization"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    memberships?: Prisma.MembershipListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    clients?: Prisma.ClientListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    usersWithThisAsLastSelected?: Prisma.UserListRelationFilter;
    approvalPolicy?: Prisma.XOR<Prisma.ApprovalPolicyNullableScalarRelationFilter, Prisma.ApprovalPolicyWhereInput> | null;
    approvalRequests?: Prisma.ApprovalRequestListRelationFilter;
};
export type OrganizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    memberships?: Prisma.MembershipOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
    clients?: Prisma.ClientOrderByRelationAggregateInput;
    roles?: Prisma.RoleOrderByRelationAggregateInput;
    usersWithThisAsLastSelected?: Prisma.UserOrderByRelationAggregateInput;
    approvalPolicy?: Prisma.ApprovalPolicyOrderByWithRelationInput;
    approvalRequests?: Prisma.ApprovalRequestOrderByRelationAggregateInput;
};
export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    name?: Prisma.StringFilter<"Organization"> | string;
    type?: Prisma.EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType;
    locale?: Prisma.StringFilter<"Organization"> | string;
    currency?: Prisma.StringFilter<"Organization"> | string;
    timezone?: Prisma.StringFilter<"Organization"> | string;
    archivedAt?: Prisma.DateTimeNullableFilter<"Organization"> | Date | string | null;
    sessionTtlMinutes?: Prisma.IntNullableFilter<"Organization"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    memberships?: Prisma.MembershipListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    clients?: Prisma.ClientListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    usersWithThisAsLastSelected?: Prisma.UserListRelationFilter;
    approvalPolicy?: Prisma.XOR<Prisma.ApprovalPolicyNullableScalarRelationFilter, Prisma.ApprovalPolicyWhereInput> | null;
    approvalRequests?: Prisma.ApprovalRequestListRelationFilter;
}, "id" | "slug">;
export type OrganizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationCountOrderByAggregateInput;
    _avg?: Prisma.OrganizationAvgOrderByAggregateInput;
    _max?: Prisma.OrganizationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMinOrderByAggregateInput;
    _sum?: Prisma.OrganizationSumOrderByAggregateInput;
};
export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    type?: Prisma.EnumOrganizationTypeWithAggregatesFilter<"Organization"> | $Enums.OrganizationType;
    locale?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    currency?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    timezone?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    archivedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null;
    sessionTtlMinutes?: Prisma.IntNullableWithAggregatesFilter<"Organization"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
};
export type OrganizationCreateInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationAvgOrderByAggregateInput = {
    sessionTtlMinutes?: Prisma.SortOrder;
};
export type OrganizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    sessionTtlMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationSumOrderByAggregateInput = {
    sessionTtlMinutes?: Prisma.SortOrder;
};
export type OrganizationScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput;
    isNot?: Prisma.OrganizationWhereInput;
};
export type OrganizationNullableScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput | null;
    isNot?: Prisma.OrganizationWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumOrganizationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationType;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type OrganizationCreateNestedOneWithoutApprovalPolicyInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalPolicyInput, Prisma.OrganizationUncheckedCreateWithoutApprovalPolicyInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutApprovalPolicyInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutApprovalPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalPolicyInput, Prisma.OrganizationUncheckedCreateWithoutApprovalPolicyInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutApprovalPolicyInput;
    upsert?: Prisma.OrganizationUpsertWithoutApprovalPolicyInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutApprovalPolicyInput, Prisma.OrganizationUpdateWithoutApprovalPolicyInput>, Prisma.OrganizationUncheckedUpdateWithoutApprovalPolicyInput>;
};
export type OrganizationCreateNestedOneWithoutApprovalRequestsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalRequestsInput, Prisma.OrganizationUncheckedCreateWithoutApprovalRequestsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutApprovalRequestsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutApprovalRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalRequestsInput, Prisma.OrganizationUncheckedCreateWithoutApprovalRequestsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutApprovalRequestsInput;
    upsert?: Prisma.OrganizationUpsertWithoutApprovalRequestsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutApprovalRequestsInput, Prisma.OrganizationUpdateWithoutApprovalRequestsInput>, Prisma.OrganizationUncheckedUpdateWithoutApprovalRequestsInput>;
};
export type OrganizationCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutRolesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.OrganizationUpsertWithoutRolesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutRolesInput, Prisma.OrganizationUpdateWithoutRolesInput>, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
};
export type OrganizationCreateNestedOneWithoutClientsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutClientsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutClientsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutClientsInput;
    upsert?: Prisma.OrganizationUpsertWithoutClientsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutClientsInput, Prisma.OrganizationUpdateWithoutClientsInput>, Prisma.OrganizationUncheckedUpdateWithoutClientsInput>;
};
export type OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUncheckedCreateWithoutUsersWithThisAsLastSelectedInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutUsersWithThisAsLastSelectedInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUncheckedCreateWithoutUsersWithThisAsLastSelectedInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutUsersWithThisAsLastSelectedInput;
    upsert?: Prisma.OrganizationUpsertWithoutUsersWithThisAsLastSelectedInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUpdateWithoutUsersWithThisAsLastSelectedInput>, Prisma.OrganizationUncheckedUpdateWithoutUsersWithThisAsLastSelectedInput>;
};
export type OrganizationCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.OrganizationUpsertWithoutMembershipsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutMembershipsInput, Prisma.OrganizationUpdateWithoutMembershipsInput>, Prisma.OrganizationUncheckedUpdateWithoutMembershipsInput>;
};
export type OrganizationCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.OrganizationUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.OrganizationUpdateWithoutAuditLogsInput>, Prisma.OrganizationUncheckedUpdateWithoutAuditLogsInput>;
};
export type OrganizationCreateWithoutApprovalPolicyInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutApprovalPolicyInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutApprovalPolicyInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalPolicyInput, Prisma.OrganizationUncheckedCreateWithoutApprovalPolicyInput>;
};
export type OrganizationUpsertWithoutApprovalPolicyInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutApprovalPolicyInput, Prisma.OrganizationUncheckedUpdateWithoutApprovalPolicyInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalPolicyInput, Prisma.OrganizationUncheckedCreateWithoutApprovalPolicyInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutApprovalPolicyInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutApprovalPolicyInput, Prisma.OrganizationUncheckedUpdateWithoutApprovalPolicyInput>;
};
export type OrganizationUpdateWithoutApprovalPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutApprovalPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutApprovalRequestsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutApprovalRequestsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutApprovalRequestsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalRequestsInput, Prisma.OrganizationUncheckedCreateWithoutApprovalRequestsInput>;
};
export type OrganizationUpsertWithoutApprovalRequestsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutApprovalRequestsInput, Prisma.OrganizationUncheckedUpdateWithoutApprovalRequestsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutApprovalRequestsInput, Prisma.OrganizationUncheckedCreateWithoutApprovalRequestsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutApprovalRequestsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutApprovalRequestsInput, Prisma.OrganizationUncheckedUpdateWithoutApprovalRequestsInput>;
};
export type OrganizationUpdateWithoutApprovalRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutApprovalRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutRolesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
};
export type OrganizationUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutRolesInput, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutRolesInput, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
};
export type OrganizationUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutClientsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutClientsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutClientsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
};
export type OrganizationUpsertWithoutClientsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutClientsInput, Prisma.OrganizationUncheckedUpdateWithoutClientsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutClientsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutClientsInput, Prisma.OrganizationUncheckedUpdateWithoutClientsInput>;
};
export type OrganizationUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutUsersWithThisAsLastSelectedInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutUsersWithThisAsLastSelectedInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutUsersWithThisAsLastSelectedInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUncheckedCreateWithoutUsersWithThisAsLastSelectedInput>;
};
export type OrganizationUpsertWithoutUsersWithThisAsLastSelectedInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUncheckedUpdateWithoutUsersWithThisAsLastSelectedInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUncheckedCreateWithoutUsersWithThisAsLastSelectedInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutUsersWithThisAsLastSelectedInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutUsersWithThisAsLastSelectedInput, Prisma.OrganizationUncheckedUpdateWithoutUsersWithThisAsLastSelectedInput>;
};
export type OrganizationUpdateWithoutUsersWithThisAsLastSelectedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutUsersWithThisAsLastSelectedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
};
export type OrganizationUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutMembershipsInput, Prisma.OrganizationUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutMembershipsInput, Prisma.OrganizationUncheckedUpdateWithoutMembershipsInput>;
};
export type OrganizationUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    slug: string;
    type: $Enums.OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
    archivedAt?: Date | string | null;
    sessionTtlMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedCreateNestedOneWithoutOrganizationInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
};
export type OrganizationUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutAuditLogsInput, Prisma.OrganizationUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutAuditLogsInput, Prisma.OrganizationUncheckedUpdateWithoutAuditLogsInput>;
};
export type OrganizationUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOrganizationTypeFieldUpdateOperationsInput | $Enums.OrganizationType;
    locale?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessionTtlMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    usersWithThisAsLastSelected?: Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput;
    approvalPolicy?: Prisma.ApprovalPolicyUncheckedUpdateOneWithoutOrganizationNestedInput;
    approvalRequests?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCountOutputType = {
    memberships: number;
    auditLogs: number;
    clients: number;
    roles: number;
    usersWithThisAsLastSelected: number;
    approvalRequests: number;
};
export type OrganizationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs;
    auditLogs?: boolean | OrganizationCountOutputTypeCountAuditLogsArgs;
    clients?: boolean | OrganizationCountOutputTypeCountClientsArgs;
    roles?: boolean | OrganizationCountOutputTypeCountRolesArgs;
    usersWithThisAsLastSelected?: boolean | OrganizationCountOutputTypeCountUsersWithThisAsLastSelectedArgs;
    approvalRequests?: boolean | OrganizationCountOutputTypeCountApprovalRequestsArgs;
};
export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganizationCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
};
export type OrganizationCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type OrganizationCountOutputTypeCountClientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
};
export type OrganizationCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
};
export type OrganizationCountOutputTypeCountUsersWithThisAsLastSelectedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type OrganizationCountOutputTypeCountApprovalRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRequestWhereInput;
};
export type OrganizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
    locale?: boolean;
    currency?: boolean;
    timezone?: boolean;
    archivedAt?: boolean;
    sessionTtlMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    memberships?: boolean | Prisma.Organization$membershipsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Organization$auditLogsArgs<ExtArgs>;
    clients?: boolean | Prisma.Organization$clientsArgs<ExtArgs>;
    roles?: boolean | Prisma.Organization$rolesArgs<ExtArgs>;
    usersWithThisAsLastSelected?: boolean | Prisma.Organization$usersWithThisAsLastSelectedArgs<ExtArgs>;
    approvalPolicy?: boolean | Prisma.Organization$approvalPolicyArgs<ExtArgs>;
    approvalRequests?: boolean | Prisma.Organization$approvalRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
    locale?: boolean;
    currency?: boolean;
    timezone?: boolean;
    archivedAt?: boolean;
    sessionTtlMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
    locale?: boolean;
    currency?: boolean;
    timezone?: boolean;
    archivedAt?: boolean;
    sessionTtlMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    type?: boolean;
    locale?: boolean;
    currency?: boolean;
    timezone?: boolean;
    archivedAt?: boolean;
    sessionTtlMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "type" | "locale" | "currency" | "timezone" | "archivedAt" | "sessionTtlMinutes" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>;
export type OrganizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | Prisma.Organization$membershipsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Organization$auditLogsArgs<ExtArgs>;
    clients?: boolean | Prisma.Organization$clientsArgs<ExtArgs>;
    roles?: boolean | Prisma.Organization$rolesArgs<ExtArgs>;
    usersWithThisAsLastSelected?: boolean | Prisma.Organization$usersWithThisAsLastSelectedArgs<ExtArgs>;
    approvalPolicy?: boolean | Prisma.Organization$approvalPolicyArgs<ExtArgs>;
    approvalRequests?: boolean | Prisma.Organization$approvalRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrganizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organization";
    objects: {
        memberships: Prisma.$MembershipPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
        clients: Prisma.$ClientPayload<ExtArgs>[];
        roles: Prisma.$RolePayload<ExtArgs>[];
        usersWithThisAsLastSelected: Prisma.$UserPayload<ExtArgs>[];
        approvalPolicy: Prisma.$ApprovalPolicyPayload<ExtArgs> | null;
        approvalRequests: Prisma.$ApprovalRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        type: $Enums.OrganizationType;
        locale: string;
        currency: string;
        timezone: string;
        archivedAt: Date | null;
        sessionTtlMinutes: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organization"]>;
    composites: {};
};
export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationPayload, S>;
export type OrganizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationCountAggregateInputType | true;
};
export interface OrganizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
        meta: {
            name: 'Organization';
        };
    };
    findUnique<T extends OrganizationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationCountArgs>(args?: Prisma.Subset<T, OrganizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationAggregateArgs>(args: Prisma.Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;
    groupBy<T extends OrganizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationFieldRefs;
}
export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memberships<T extends Prisma.Organization$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.Organization$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    clients<T extends Prisma.Organization$clientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    roles<T extends Prisma.Organization$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    usersWithThisAsLastSelected<T extends Prisma.Organization$usersWithThisAsLastSelectedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$usersWithThisAsLastSelectedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvalPolicy<T extends Prisma.Organization$approvalPolicyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$approvalPolicyArgs<ExtArgs>>): Prisma.Prisma__ApprovalPolicyClient<runtime.Types.Result.GetResult<Prisma.$ApprovalPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    approvalRequests<T extends Prisma.Organization$approvalRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$approvalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationFieldRefs {
    readonly id: Prisma.FieldRef<"Organization", 'String'>;
    readonly name: Prisma.FieldRef<"Organization", 'String'>;
    readonly slug: Prisma.FieldRef<"Organization", 'String'>;
    readonly type: Prisma.FieldRef<"Organization", 'OrganizationType'>;
    readonly locale: Prisma.FieldRef<"Organization", 'String'>;
    readonly currency: Prisma.FieldRef<"Organization", 'String'>;
    readonly timezone: Prisma.FieldRef<"Organization", 'String'>;
    readonly archivedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly sessionTtlMinutes: Prisma.FieldRef<"Organization", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
}
export type OrganizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
};
export type OrganizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
};
export type OrganizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type Organization$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type Organization$clientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type Organization$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$usersWithThisAsLastSelectedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Organization$approvalPolicyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalPolicySelect<ExtArgs> | null;
    omit?: Prisma.ApprovalPolicyOmit<ExtArgs> | null;
    include?: Prisma.ApprovalPolicyInclude<ExtArgs> | null;
    where?: Prisma.ApprovalPolicyWhereInput;
};
export type Organization$approvalRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrganizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
};
