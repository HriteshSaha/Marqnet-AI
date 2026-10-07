import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    lastSelectedOrganizationId: string | null;
    mfaSecret: string | null;
    mfaEnabled: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    lastSelectedOrganizationId: string | null;
    mfaSecret: string | null;
    mfaEnabled: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    fullName: number;
    lastSelectedOrganizationId: number;
    mfaSecret: number;
    mfaEnabled: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    lastSelectedOrganizationId?: true;
    mfaSecret?: true;
    mfaEnabled?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    lastSelectedOrganizationId?: true;
    mfaSecret?: true;
    mfaEnabled?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    lastSelectedOrganizationId?: true;
    mfaSecret?: true;
    mfaEnabled?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    fullName: string | null;
    lastSelectedOrganizationId: string | null;
    mfaSecret: string | null;
    mfaEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringNullableFilter<"User"> | string | null;
    lastSelectedOrganizationId?: Prisma.StringNullableFilter<"User"> | string | null;
    mfaSecret?: Prisma.StringNullableFilter<"User"> | string | null;
    mfaEnabled?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    memberships?: Prisma.MembershipListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    lastSelectedOrganization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    approvalRequestsMade?: Prisma.ApprovalRequestListRelationFilter;
    approvalDecisions?: Prisma.ApprovalDecisionListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSelectedOrganizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfaSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfaEnabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    memberships?: Prisma.MembershipOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    lastSelectedOrganization?: Prisma.OrganizationOrderByWithRelationInput;
    approvalRequestsMade?: Prisma.ApprovalRequestOrderByRelationAggregateInput;
    approvalDecisions?: Prisma.ApprovalDecisionOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringNullableFilter<"User"> | string | null;
    lastSelectedOrganizationId?: Prisma.StringNullableFilter<"User"> | string | null;
    mfaSecret?: Prisma.StringNullableFilter<"User"> | string | null;
    mfaEnabled?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    memberships?: Prisma.MembershipListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    lastSelectedOrganization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    approvalRequestsMade?: Prisma.ApprovalRequestListRelationFilter;
    approvalDecisions?: Prisma.ApprovalDecisionListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSelectedOrganizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfaSecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfaEnabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    lastSelectedOrganizationId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    mfaSecret?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    mfaEnabled?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    lastSelectedOrganization?: Prisma.OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    lastSelectedOrganization?: Prisma.OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    lastSelectedOrganizationId?: Prisma.SortOrder;
    mfaSecret?: Prisma.SortOrder;
    mfaEnabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    lastSelectedOrganizationId?: Prisma.SortOrder;
    mfaSecret?: Prisma.SortOrder;
    mfaEnabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    lastSelectedOrganizationId?: Prisma.SortOrder;
    mfaSecret?: Prisma.SortOrder;
    mfaEnabled?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserCreateNestedManyWithoutLastSelectedOrganizationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput> | Prisma.UserCreateWithoutLastSelectedOrganizationInput[] | Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput | Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput[];
    createMany?: Prisma.UserCreateManyLastSelectedOrganizationInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutLastSelectedOrganizationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput> | Prisma.UserCreateWithoutLastSelectedOrganizationInput[] | Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput | Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput[];
    createMany?: Prisma.UserCreateManyLastSelectedOrganizationInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutLastSelectedOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput> | Prisma.UserCreateWithoutLastSelectedOrganizationInput[] | Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput | Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLastSelectedOrganizationInput | Prisma.UserUpsertWithWhereUniqueWithoutLastSelectedOrganizationInput[];
    createMany?: Prisma.UserCreateManyLastSelectedOrganizationInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLastSelectedOrganizationInput | Prisma.UserUpdateWithWhereUniqueWithoutLastSelectedOrganizationInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLastSelectedOrganizationInput | Prisma.UserUpdateManyWithWhereWithoutLastSelectedOrganizationInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutLastSelectedOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput> | Prisma.UserCreateWithoutLastSelectedOrganizationInput[] | Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput | Prisma.UserCreateOrConnectWithoutLastSelectedOrganizationInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLastSelectedOrganizationInput | Prisma.UserUpsertWithWhereUniqueWithoutLastSelectedOrganizationInput[];
    createMany?: Prisma.UserCreateManyLastSelectedOrganizationInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLastSelectedOrganizationInput | Prisma.UserUpdateWithWhereUniqueWithoutLastSelectedOrganizationInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLastSelectedOrganizationInput | Prisma.UserUpdateManyWithWhereWithoutLastSelectedOrganizationInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutApprovalRequestsMadeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovalRequestsMadeInput, Prisma.UserUncheckedCreateWithoutApprovalRequestsMadeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovalRequestsMadeInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutApprovalRequestsMadeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovalRequestsMadeInput, Prisma.UserUncheckedCreateWithoutApprovalRequestsMadeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovalRequestsMadeInput;
    upsert?: Prisma.UserUpsertWithoutApprovalRequestsMadeInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutApprovalRequestsMadeInput, Prisma.UserUpdateWithoutApprovalRequestsMadeInput>, Prisma.UserUncheckedUpdateWithoutApprovalRequestsMadeInput>;
};
export type UserCreateNestedOneWithoutApprovalDecisionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovalDecisionsInput, Prisma.UserUncheckedCreateWithoutApprovalDecisionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovalDecisionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutApprovalDecisionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApprovalDecisionsInput, Prisma.UserUncheckedCreateWithoutApprovalDecisionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApprovalDecisionsInput;
    upsert?: Prisma.UserUpsertWithoutApprovalDecisionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutApprovalDecisionsInput, Prisma.UserUpdateWithoutApprovalDecisionsInput>, Prisma.UserUncheckedUpdateWithoutApprovalDecisionsInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMembershipsInput, Prisma.UserUpdateWithoutMembershipsInput>, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateWithoutLastSelectedOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    approvalRequestsMade?: Prisma.ApprovalRequestCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateWithoutLastSelectedOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput;
};
export type UserCreateOrConnectWithoutLastSelectedOrganizationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput>;
};
export type UserCreateManyLastSelectedOrganizationInputEnvelope = {
    data: Prisma.UserCreateManyLastSelectedOrganizationInput | Prisma.UserCreateManyLastSelectedOrganizationInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutLastSelectedOrganizationInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedUpdateWithoutLastSelectedOrganizationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedCreateWithoutLastSelectedOrganizationInput>;
};
export type UserUpdateWithWhereUniqueWithoutLastSelectedOrganizationInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLastSelectedOrganizationInput, Prisma.UserUncheckedUpdateWithoutLastSelectedOrganizationInput>;
};
export type UserUpdateManyWithWhereWithoutLastSelectedOrganizationInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutLastSelectedOrganizationInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringNullableFilter<"User"> | string | null;
    lastSelectedOrganizationId?: Prisma.StringNullableFilter<"User"> | string | null;
    mfaSecret?: Prisma.StringNullableFilter<"User"> | string | null;
    mfaEnabled?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
};
export type UserCreateWithoutApprovalRequestsMadeInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    lastSelectedOrganization?: Prisma.OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput;
    approvalDecisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateWithoutApprovalRequestsMadeInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput;
};
export type UserCreateOrConnectWithoutApprovalRequestsMadeInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovalRequestsMadeInput, Prisma.UserUncheckedCreateWithoutApprovalRequestsMadeInput>;
};
export type UserUpsertWithoutApprovalRequestsMadeInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutApprovalRequestsMadeInput, Prisma.UserUncheckedUpdateWithoutApprovalRequestsMadeInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovalRequestsMadeInput, Prisma.UserUncheckedCreateWithoutApprovalRequestsMadeInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutApprovalRequestsMadeInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutApprovalRequestsMadeInput, Prisma.UserUncheckedUpdateWithoutApprovalRequestsMadeInput>;
};
export type UserUpdateWithoutApprovalRequestsMadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    lastSelectedOrganization?: Prisma.OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateWithoutApprovalRequestsMadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserCreateWithoutApprovalDecisionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    lastSelectedOrganization?: Prisma.OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestCreateNestedManyWithoutRequestedByInput;
};
export type UserUncheckedCreateWithoutApprovalDecisionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput;
};
export type UserCreateOrConnectWithoutApprovalDecisionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovalDecisionsInput, Prisma.UserUncheckedCreateWithoutApprovalDecisionsInput>;
};
export type UserUpsertWithoutApprovalDecisionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutApprovalDecisionsInput, Prisma.UserUncheckedUpdateWithoutApprovalDecisionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutApprovalDecisionsInput, Prisma.UserUncheckedCreateWithoutApprovalDecisionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutApprovalDecisionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutApprovalDecisionsInput, Prisma.UserUncheckedUpdateWithoutApprovalDecisionsInput>;
};
export type UserUpdateWithoutApprovalDecisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    lastSelectedOrganization?: Prisma.OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUpdateManyWithoutRequestedByNestedInput;
};
export type UserUncheckedUpdateWithoutApprovalDecisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    lastSelectedOrganization?: Prisma.OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    lastSelectedOrganization?: Prisma.OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserCreateWithoutMembershipsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    lastSelectedOrganization?: Prisma.OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput;
};
export type UserCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
};
export type UserUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    lastSelectedOrganization?: Prisma.OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    lastSelectedOrganization?: Prisma.OrganizationCreateNestedOneWithoutUsersWithThisAsLastSelectedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionCreateNestedManyWithoutActorInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    lastSelectedOrganizationId?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedCreateNestedManyWithoutRequestedByInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutActorInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    lastSelectedOrganization?: Prisma.OrganizationUpdateOneWithoutUsersWithThisAsLastSelectedNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSelectedOrganizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserCreateManyLastSelectedOrganizationInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName?: string | null;
    mfaSecret?: string | null;
    mfaEnabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateWithoutLastSelectedOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateWithoutLastSelectedOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    approvalRequestsMade?: Prisma.ApprovalRequestUncheckedUpdateManyWithoutRequestedByNestedInput;
    approvalDecisions?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutActorNestedInput;
};
export type UserUncheckedUpdateManyWithoutLastSelectedOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaSecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mfaEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOutputType = {
    memberships: number;
    auditLogs: number;
    sessions: number;
    approvalRequestsMade: number;
    approvalDecisions: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    approvalRequestsMade?: boolean | UserCountOutputTypeCountApprovalRequestsMadeArgs;
    approvalDecisions?: boolean | UserCountOutputTypeCountApprovalDecisionsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
};
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountApprovalRequestsMadeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRequestWhereInput;
};
export type UserCountOutputTypeCountApprovalDecisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    lastSelectedOrganizationId?: boolean;
    mfaSecret?: boolean;
    mfaEnabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    lastSelectedOrganization?: boolean | Prisma.User$lastSelectedOrganizationArgs<ExtArgs>;
    approvalRequestsMade?: boolean | Prisma.User$approvalRequestsMadeArgs<ExtArgs>;
    approvalDecisions?: boolean | Prisma.User$approvalDecisionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    lastSelectedOrganizationId?: boolean;
    mfaSecret?: boolean;
    mfaEnabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lastSelectedOrganization?: boolean | Prisma.User$lastSelectedOrganizationArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    lastSelectedOrganizationId?: boolean;
    mfaSecret?: boolean;
    mfaEnabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lastSelectedOrganization?: boolean | Prisma.User$lastSelectedOrganizationArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    lastSelectedOrganizationId?: boolean;
    mfaSecret?: boolean;
    mfaEnabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "lastSelectedOrganizationId" | "mfaSecret" | "mfaEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    lastSelectedOrganization?: boolean | Prisma.User$lastSelectedOrganizationArgs<ExtArgs>;
    approvalRequestsMade?: boolean | Prisma.User$approvalRequestsMadeArgs<ExtArgs>;
    approvalDecisions?: boolean | Prisma.User$approvalDecisionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lastSelectedOrganization?: boolean | Prisma.User$lastSelectedOrganizationArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lastSelectedOrganization?: boolean | Prisma.User$lastSelectedOrganizationArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        memberships: Prisma.$MembershipPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        lastSelectedOrganization: Prisma.$OrganizationPayload<ExtArgs> | null;
        approvalRequestsMade: Prisma.$ApprovalRequestPayload<ExtArgs>[];
        approvalDecisions: Prisma.$ApprovalDecisionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        fullName: string | null;
        lastSelectedOrganizationId: string | null;
        mfaSecret: string | null;
        mfaEnabled: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memberships<T extends Prisma.User$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lastSelectedOrganization<T extends Prisma.User$lastSelectedOrganizationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$lastSelectedOrganizationArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    approvalRequestsMade<T extends Prisma.User$approvalRequestsMadeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$approvalRequestsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvalDecisions<T extends Prisma.User$approvalDecisionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$approvalDecisionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly fullName: Prisma.FieldRef<"User", 'String'>;
    readonly lastSelectedOrganizationId: Prisma.FieldRef<"User", 'String'>;
    readonly mfaSecret: Prisma.FieldRef<"User", 'String'>;
    readonly mfaEnabled: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$lastSelectedOrganizationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
};
export type User$approvalRequestsMadeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$approvalDecisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
