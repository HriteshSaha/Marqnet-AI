import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RolePermissionModel = runtime.Types.Result.DefaultSelection<Prisma.$RolePermissionPayload>;
export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null;
    _min: RolePermissionMinAggregateOutputType | null;
    _max: RolePermissionMaxAggregateOutputType | null;
};
export type RolePermissionMinAggregateOutputType = {
    id: string | null;
    roleId: string | null;
    module: string | null;
    action: $Enums.PermissionAction | null;
};
export type RolePermissionMaxAggregateOutputType = {
    id: string | null;
    roleId: string | null;
    module: string | null;
    action: $Enums.PermissionAction | null;
};
export type RolePermissionCountAggregateOutputType = {
    id: number;
    roleId: number;
    module: number;
    action: number;
    _all: number;
};
export type RolePermissionMinAggregateInputType = {
    id?: true;
    roleId?: true;
    module?: true;
    action?: true;
};
export type RolePermissionMaxAggregateInputType = {
    id?: true;
    roleId?: true;
    module?: true;
    action?: true;
};
export type RolePermissionCountAggregateInputType = {
    id?: true;
    roleId?: true;
    module?: true;
    action?: true;
    _all?: true;
};
export type RolePermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
    orderBy?: Prisma.RolePermissionOrderByWithRelationInput | Prisma.RolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RolePermissionCountAggregateInputType;
    _min?: RolePermissionMinAggregateInputType;
    _max?: RolePermissionMaxAggregateInputType;
};
export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
    [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRolePermission[P]> : Prisma.GetScalarType<T[P], AggregateRolePermission[P]>;
};
export type RolePermissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
    orderBy?: Prisma.RolePermissionOrderByWithAggregationInput | Prisma.RolePermissionOrderByWithAggregationInput[];
    by: Prisma.RolePermissionScalarFieldEnum[] | Prisma.RolePermissionScalarFieldEnum;
    having?: Prisma.RolePermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolePermissionCountAggregateInputType | true;
    _min?: RolePermissionMinAggregateInputType;
    _max?: RolePermissionMaxAggregateInputType;
};
export type RolePermissionGroupByOutputType = {
    id: string;
    roleId: string;
    module: string;
    action: $Enums.PermissionAction;
    _count: RolePermissionCountAggregateOutputType | null;
    _min: RolePermissionMinAggregateOutputType | null;
    _max: RolePermissionMaxAggregateOutputType | null;
};
export type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolePermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolePermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolePermissionGroupByOutputType[P]>;
}>>;
export type RolePermissionWhereInput = {
    AND?: Prisma.RolePermissionWhereInput | Prisma.RolePermissionWhereInput[];
    OR?: Prisma.RolePermissionWhereInput[];
    NOT?: Prisma.RolePermissionWhereInput | Prisma.RolePermissionWhereInput[];
    id?: Prisma.StringFilter<"RolePermission"> | string;
    roleId?: Prisma.StringFilter<"RolePermission"> | string;
    module?: Prisma.StringFilter<"RolePermission"> | string;
    action?: Prisma.EnumPermissionActionFilter<"RolePermission"> | $Enums.PermissionAction;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type RolePermissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    role?: Prisma.RoleOrderByWithRelationInput;
};
export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    roleId_module_action?: Prisma.RolePermissionRoleIdModuleActionCompoundUniqueInput;
    AND?: Prisma.RolePermissionWhereInput | Prisma.RolePermissionWhereInput[];
    OR?: Prisma.RolePermissionWhereInput[];
    NOT?: Prisma.RolePermissionWhereInput | Prisma.RolePermissionWhereInput[];
    roleId?: Prisma.StringFilter<"RolePermission"> | string;
    module?: Prisma.StringFilter<"RolePermission"> | string;
    action?: Prisma.EnumPermissionActionFilter<"RolePermission"> | $Enums.PermissionAction;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "id" | "roleId_module_action">;
export type RolePermissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    _count?: Prisma.RolePermissionCountOrderByAggregateInput;
    _max?: Prisma.RolePermissionMaxOrderByAggregateInput;
    _min?: Prisma.RolePermissionMinOrderByAggregateInput;
};
export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RolePermissionScalarWhereWithAggregatesInput | Prisma.RolePermissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RolePermissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RolePermissionScalarWhereWithAggregatesInput | Prisma.RolePermissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RolePermission"> | string;
    roleId?: Prisma.StringWithAggregatesFilter<"RolePermission"> | string;
    module?: Prisma.StringWithAggregatesFilter<"RolePermission"> | string;
    action?: Prisma.EnumPermissionActionWithAggregatesFilter<"RolePermission"> | $Enums.PermissionAction;
};
export type RolePermissionCreateInput = {
    id?: string;
    module: string;
    action: $Enums.PermissionAction;
    role: Prisma.RoleCreateNestedOneWithoutPermissionsInput;
};
export type RolePermissionUncheckedCreateInput = {
    id?: string;
    roleId: string;
    module: string;
    action: $Enums.PermissionAction;
};
export type RolePermissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
    role?: Prisma.RoleUpdateOneRequiredWithoutPermissionsNestedInput;
};
export type RolePermissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
};
export type RolePermissionCreateManyInput = {
    id?: string;
    roleId: string;
    module: string;
    action: $Enums.PermissionAction;
};
export type RolePermissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
};
export type RolePermissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
};
export type RolePermissionListRelationFilter = {
    every?: Prisma.RolePermissionWhereInput;
    some?: Prisma.RolePermissionWhereInput;
    none?: Prisma.RolePermissionWhereInput;
};
export type RolePermissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RolePermissionRoleIdModuleActionCompoundUniqueInput = {
    roleId: string;
    module: string;
    action: $Enums.PermissionAction;
};
export type RolePermissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
};
export type RolePermissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
};
export type RolePermissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
};
export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.RolePermissionCreateWithoutRoleInput, Prisma.RolePermissionUncheckedCreateWithoutRoleInput> | Prisma.RolePermissionCreateWithoutRoleInput[] | Prisma.RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.RolePermissionCreateOrConnectWithoutRoleInput | Prisma.RolePermissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.RolePermissionCreateManyRoleInputEnvelope;
    connect?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
};
export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.RolePermissionCreateWithoutRoleInput, Prisma.RolePermissionUncheckedCreateWithoutRoleInput> | Prisma.RolePermissionCreateWithoutRoleInput[] | Prisma.RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.RolePermissionCreateOrConnectWithoutRoleInput | Prisma.RolePermissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.RolePermissionCreateManyRoleInputEnvelope;
    connect?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
};
export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.RolePermissionCreateWithoutRoleInput, Prisma.RolePermissionUncheckedCreateWithoutRoleInput> | Prisma.RolePermissionCreateWithoutRoleInput[] | Prisma.RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.RolePermissionCreateOrConnectWithoutRoleInput | Prisma.RolePermissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.RolePermissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.RolePermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.RolePermissionCreateManyRoleInputEnvelope;
    set?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    disconnect?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    delete?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    connect?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    update?: Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.RolePermissionUpdateManyWithWhereWithoutRoleInput | Prisma.RolePermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.RolePermissionScalarWhereInput | Prisma.RolePermissionScalarWhereInput[];
};
export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.RolePermissionCreateWithoutRoleInput, Prisma.RolePermissionUncheckedCreateWithoutRoleInput> | Prisma.RolePermissionCreateWithoutRoleInput[] | Prisma.RolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.RolePermissionCreateOrConnectWithoutRoleInput | Prisma.RolePermissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.RolePermissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.RolePermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.RolePermissionCreateManyRoleInputEnvelope;
    set?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    disconnect?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    delete?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    connect?: Prisma.RolePermissionWhereUniqueInput | Prisma.RolePermissionWhereUniqueInput[];
    update?: Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.RolePermissionUpdateManyWithWhereWithoutRoleInput | Prisma.RolePermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.RolePermissionScalarWhereInput | Prisma.RolePermissionScalarWhereInput[];
};
export type EnumPermissionActionFieldUpdateOperationsInput = {
    set?: $Enums.PermissionAction;
};
export type RolePermissionCreateWithoutRoleInput = {
    id?: string;
    module: string;
    action: $Enums.PermissionAction;
};
export type RolePermissionUncheckedCreateWithoutRoleInput = {
    id?: string;
    module: string;
    action: $Enums.PermissionAction;
};
export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: Prisma.RolePermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RolePermissionCreateWithoutRoleInput, Prisma.RolePermissionUncheckedCreateWithoutRoleInput>;
};
export type RolePermissionCreateManyRoleInputEnvelope = {
    data: Prisma.RolePermissionCreateManyRoleInput | Prisma.RolePermissionCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.RolePermissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RolePermissionUpdateWithoutRoleInput, Prisma.RolePermissionUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.RolePermissionCreateWithoutRoleInput, Prisma.RolePermissionUncheckedCreateWithoutRoleInput>;
};
export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.RolePermissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RolePermissionUpdateWithoutRoleInput, Prisma.RolePermissionUncheckedUpdateWithoutRoleInput>;
};
export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.RolePermissionScalarWhereInput;
    data: Prisma.XOR<Prisma.RolePermissionUpdateManyMutationInput, Prisma.RolePermissionUncheckedUpdateManyWithoutRoleInput>;
};
export type RolePermissionScalarWhereInput = {
    AND?: Prisma.RolePermissionScalarWhereInput | Prisma.RolePermissionScalarWhereInput[];
    OR?: Prisma.RolePermissionScalarWhereInput[];
    NOT?: Prisma.RolePermissionScalarWhereInput | Prisma.RolePermissionScalarWhereInput[];
    id?: Prisma.StringFilter<"RolePermission"> | string;
    roleId?: Prisma.StringFilter<"RolePermission"> | string;
    module?: Prisma.StringFilter<"RolePermission"> | string;
    action?: Prisma.EnumPermissionActionFilter<"RolePermission"> | $Enums.PermissionAction;
};
export type RolePermissionCreateManyRoleInput = {
    id?: string;
    module: string;
    action: $Enums.PermissionAction;
};
export type RolePermissionUpdateWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
};
export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
};
export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction;
};
export type RolePermissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roleId?: boolean;
    module?: boolean;
    action?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rolePermission"]>;
export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roleId?: boolean;
    module?: boolean;
    action?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rolePermission"]>;
export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    roleId?: boolean;
    module?: boolean;
    action?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rolePermission"]>;
export type RolePermissionSelectScalar = {
    id?: boolean;
    roleId?: boolean;
    module?: boolean;
    action?: boolean;
};
export type RolePermissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "roleId" | "module" | "action", ExtArgs["result"]["rolePermission"]>;
export type RolePermissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $RolePermissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RolePermission";
    objects: {
        role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        roleId: string;
        module: string;
        action: $Enums.PermissionAction;
    }, ExtArgs["result"]["rolePermission"]>;
    composites: {};
};
export type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload, S>;
export type RolePermissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolePermissionCountAggregateInputType | true;
};
export interface RolePermissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'];
        meta: {
            name: 'RolePermission';
        };
    };
    findUnique<T extends RolePermissionFindUniqueArgs>(args: Prisma.SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RolePermissionFindFirstArgs>(args?: Prisma.SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RolePermissionFindManyArgs>(args?: Prisma.SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RolePermissionCreateArgs>(args: Prisma.SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RolePermissionCreateManyArgs>(args?: Prisma.SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RolePermissionDeleteArgs>(args: Prisma.SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RolePermissionUpdateArgs>(args: Prisma.SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RolePermissionUpdateManyArgs>(args: Prisma.SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RolePermissionUpsertArgs>(args: Prisma.SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma.Prisma__RolePermissionClient<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RolePermissionCountArgs>(args?: Prisma.Subset<T, RolePermissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolePermissionCountAggregateOutputType> : number>;
    aggregate<T extends RolePermissionAggregateArgs>(args: Prisma.Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>;
    groupBy<T extends RolePermissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RolePermissionGroupByArgs['orderBy'];
    } : {
        orderBy?: RolePermissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RolePermissionFieldRefs;
}
export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RolePermissionFieldRefs {
    readonly id: Prisma.FieldRef<"RolePermission", 'String'>;
    readonly roleId: Prisma.FieldRef<"RolePermission", 'String'>;
    readonly module: Prisma.FieldRef<"RolePermission", 'String'>;
    readonly action: Prisma.FieldRef<"RolePermission", 'PermissionAction'>;
}
export type RolePermissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where: Prisma.RolePermissionWhereUniqueInput;
};
export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where: Prisma.RolePermissionWhereUniqueInput;
};
export type RolePermissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RolePermissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RolePermissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolePermissionCreateInput, Prisma.RolePermissionUncheckedCreateInput>;
};
export type RolePermissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RolePermissionCreateManyInput | Prisma.RolePermissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    data: Prisma.RolePermissionCreateManyInput | Prisma.RolePermissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RolePermissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolePermissionUpdateInput, Prisma.RolePermissionUncheckedUpdateInput>;
    where: Prisma.RolePermissionWhereUniqueInput;
};
export type RolePermissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RolePermissionUpdateManyMutationInput, Prisma.RolePermissionUncheckedUpdateManyInput>;
    where?: Prisma.RolePermissionWhereInput;
    limit?: number;
};
export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolePermissionUpdateManyMutationInput, Prisma.RolePermissionUncheckedUpdateManyInput>;
    where?: Prisma.RolePermissionWhereInput;
    limit?: number;
    include?: Prisma.RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RolePermissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where: Prisma.RolePermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RolePermissionCreateInput, Prisma.RolePermissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RolePermissionUpdateInput, Prisma.RolePermissionUncheckedUpdateInput>;
};
export type RolePermissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where: Prisma.RolePermissionWhereUniqueInput;
};
export type RolePermissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
    limit?: number;
};
export type RolePermissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
};
