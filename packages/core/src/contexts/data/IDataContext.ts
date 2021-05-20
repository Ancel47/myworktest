import { SorterResult } from "antd/lib/table/interface";

import { BaseRecord, HttpError, Identifier } from "../../interfaces";

export interface Pagination {
    current?: number;
    pageSize?: number;
}

export type Sort = SorterResult<any> | SorterResult<any>[];

export interface Search {
    field?: string;
    value?: string;
}

// Filters are used as a suffix of a field name:

// | Filter              | Description                    |
// | ------------------- | ------------------------------ |
// | No suffix or `eq`   | Equal                          |
// | ne                  | Not equal                      |
// | lt                  | Less than                      |
// | gt                  | Greater than                   |
// | lte                 | Less than or equal to          |
// | gte                 | Greater than or equal to       |
// | in                  | Included in an array           |
// | nin                 | Not included in an array       |
// | contains            | Contains                       |
// | ncontains           | Doesn't contain                |
// | containss           | Contains, case sensitive       |
// | ncontainss          | Doesn't contain, case sensitive|
// | null                | Is null or not null            |

export type CrudOperators =
    | "eq"
    | "ne"
    | "lt"
    | "gt"
    | "lte"
    | "gte"
    | "in"
    | "nin"
    | "contains"
    | "ncontains"
    | "containss"
    | "ncontainss"
    | "null";

export type CrudFilter = {
    field: string;
    operator: CrudOperators;
    value: any;
};

export type CrudFilters = CrudFilter[];

export interface GetListResponse<TData = BaseRecord> {
    data: TData[];
    total: number;
}

export interface CreateResponse<TData = BaseRecord> {
    data: TData;
}

export interface CreateManyResponse<TData = BaseRecord> {
    data: TData[];
}

export interface UpdateResponse<TData = BaseRecord> {
    data: TData;
}

export interface UpdateManyResponse<TData = BaseRecord> {
    data: TData[];
}

export interface GetOneResponse<TData = BaseRecord> {
    data: TData;
}

export interface GetManyResponse<TData = BaseRecord> {
    data: TData[];
}

export interface DeleteOneResponse<TData = BaseRecord> {
    data: TData;
}

export interface DeleteManyResponse<TData = BaseRecord> {
    data: TData[];
}

export interface IDataContext {
    getList: <TData extends BaseRecord = BaseRecord>(
        resource: string,
        params: {
            pagination?: Pagination;
            search?: Search;
            sort?: Sort;
            filters?: CrudFilter[];
        },
    ) => Promise<GetListResponse<TData>>;
    getMany: <TData extends BaseRecord = BaseRecord>(
        resource: string,
        ids: Identifier[],
    ) => Promise<GetManyResponse<TData>>;
    getOne: <TData extends BaseRecord = BaseRecord>(
        resource: string,
        id: Identifier,
    ) => Promise<GetOneResponse<TData>>;
    create: <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        resource: string,
        params: TVariables,
    ) => Promise<CreateResponse<TData>>;
    createMany: <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        resource: string,
        params: TVariables[],
    ) => Promise<CreateManyResponse<TData>>;
    update: <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        resource: string,
        id: Identifier,
        params: TVariables,
    ) => Promise<UpdateResponse<TData>>;
    updateMany: <TData extends BaseRecord = BaseRecord, TVariables = {}>(
        resource: string,
        ids: Identifier[],
        params: TVariables,
    ) => Promise<UpdateManyResponse<TData>>;
    deleteOne: <TData extends BaseRecord = BaseRecord>(
        resource: string,
        id: Identifier,
    ) => Promise<DeleteOneResponse<TData>>;
    deleteMany: <TData extends BaseRecord = BaseRecord>(
        resource: string,
        ids: Identifier[],
    ) => Promise<DeleteManyResponse<TData>>;
    getApiUrl: () => string;
}
