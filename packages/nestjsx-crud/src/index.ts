import axios, { AxiosInstance } from "axios";
import {
    QuerySort,
    QuerySortArr,
    QuerySortOperator,
    RequestQueryBuilder,
    CondOperator,
    ComparisonOperator,
    SCondition,
    QueryJoin,
    QueryJoinArr,
} from "@nestjsx/crud-request";
import {
    DataProvider,
    HttpError,
    CrudFilters as RefineCrudFilter,
    CrudOperators,
    CrudSorting,
    CrudFilter,
    pickNotDeprecated,
    Pagination,
} from "@pankod/refine-core";
import { stringify } from "query-string";

type SortBy = QuerySort | QuerySortArr | Array<QuerySort | QuerySortArr>;

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const customError: HttpError = {
            ...error,
            message: error.response?.data?.message,
            statusCode: error.response?.status,
        };

        return Promise.reject(customError);
    },
);

const mapOperator = (operator: CrudOperators): ComparisonOperator => {
    switch (operator) {
        case "and":
            return "$and";
        case "or":
            return "$or";
        case "ne":
            return CondOperator.NOT_EQUALS;
        case "lt":
            return CondOperator.LOWER_THAN;
        case "gt":
            return CondOperator.GREATER_THAN;
        case "lte":
            return CondOperator.LOWER_THAN_EQUALS;
        case "gte":
            return CondOperator.GREATER_THAN_EQUALS;
        case "in":
            return CondOperator.IN;
        case "nin":
            return CondOperator.NOT_IN;
        case "contains":
            return CondOperator.CONTAINS_LOW;
        case "ncontains":
            return CondOperator.EXCLUDES_LOW;
        case "containss":
            return CondOperator.CONTAINS;
        case "ncontainss":
            return CondOperator.EXCLUDES;
        case "null":
            return CondOperator.IS_NULL;
        case "startswith":
            return CondOperator.STARTS_LOW;
        case "startswiths":
            return CondOperator.STARTS;
        case "endswith":
            return CondOperator.ENDS_LOW;
        case "endswiths":
            return CondOperator.ENDS;
    }

    return CondOperator.EQUALS;
};

const generateSort = (sort?: CrudSorting): SortBy | undefined => {
    if (sort && sort.length > 0) {
        const multipleSort: SortBy = [];
        sort.map(({ field, order }) => {
            if (field && order) {
                multipleSort.push({
                    field: field,
                    order: order.toUpperCase() as QuerySortOperator,
                });
            }
        });
        return multipleSort;
    }

    return;
};

const createSearchQuery = (filter: CrudFilter): SCondition => {
    if (
        filter.operator !== "and" &&
        filter.operator !== "or" &&
        "field" in filter
    ) {
        // query
        return {
            [filter.field]: {
                [mapOperator(filter.operator)]: filter.value,
            },
        };
    }

    const { operator } = filter;

    return {
        [mapOperator(operator)]: filter.value.map((filter) =>
            createSearchQuery(filter),
        ),
    };
};

const generateSearchFilter = (filters: RefineCrudFilter): SCondition => {
    return createSearchQuery({
        operator: "and",
        value: filters,
    });
};

const handleFilter = (
    query: RequestQueryBuilder,
    filters?: RefineCrudFilter,
) => {
    if (filters) {
        query.search(generateSearchFilter(filters));
    }
    return query;
};

const handleJoin = (
    query: RequestQueryBuilder,
    join?: QueryJoin | QueryJoinArr | (QueryJoin | QueryJoinArr)[],
) => {
    if (join) {
        query.setJoin(join);
    }
    return query;
};

const handlePagination = (
    query: RequestQueryBuilder,
    hasPagination: boolean,
    pagination?: Pagination,
) => {
    // `pagination` has default values. However, it will be removed next major version
    const { current = 1, pageSize = 10, mode } = pagination ?? {};

    //`hasPagination` is deprecated with refine@4, refine will pass `pagination.mode` instead, however, we still support `hasPagination` for backward compatibility
    const hasPaginationString = hasPagination === false ? "off" : "server";
    const isServerPaginationEnabled =
        pickNotDeprecated(mode, hasPaginationString) === "server";

    if (isServerPaginationEnabled) {
        query
            .setLimit(pageSize)
            .setPage(current)
            .setOffset((current - 1) * pageSize);
    }

    return query;
};

const handleSort = (query: RequestQueryBuilder, sorters?: CrudSorting) => {
    const sortBy = generateSort(sorters);
    if (sortBy) {
        query.sortBy(sortBy);
    }

    return query;
};

const NestsxCrud = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
): Required<DataProvider> => ({
    getList: async ({
        resource,
        hasPagination = true,
        pagination,
        filters,
        sort,
        sorters,
        meta,
        metaData,
    }) => {
        const url = `${apiUrl}/${resource}`;

        let query = RequestQueryBuilder.create();

        query = handleFilter(query, filters);
        query = handleJoin(query, pickNotDeprecated(meta, metaData)?.join);
        query = handlePagination(query, hasPagination, pagination);
        //`sort` is deprecated with refine@4, refine will pass `sorters` instead, however, we still support `sort` for backward compatibility
        query = handleSort(query, pickNotDeprecated(sorters, sort));

        const { data } = await httpClient.get(`${url}?${query.query()}`);

        return {
            data: data.data,
            total: data.total,
        };
    },

    getMany: async ({ resource, ids, meta, metaData }) => {
        const url = `${apiUrl}/${resource}`;

        let query = RequestQueryBuilder.create().setFilter({
            field: "id",
            operator: CondOperator.IN,
            value: ids,
        });

        query = handleJoin(query, pickNotDeprecated(meta, metaData)?.join);

        const { data } = await httpClient.get(`${url}?${query.query()}`);

        return {
            data,
        };
    },

    create: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}`;

        const { data } = await httpClient.post(url, variables);

        return {
            data,
        };
    },

    update: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.patch(url, variables);

        return {
            data,
        };
    },

    updateMany: async ({ resource, ids, variables }) => {
        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.patch(
                    `${apiUrl}/${resource}/${id}`,
                    variables,
                );
                return data;
            }),
        );

        return { data: response };
    },

    createMany: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}/bulk`;

        const { data } = await httpClient.post(url, { bulk: variables });

        return {
            data,
        };
    },

    getOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.get(url);

        return {
            data,
        };
    },

    deleteOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.delete(url);

        return {
            data,
        };
    },

    deleteMany: async ({ resource, ids }) => {
        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.delete(
                    `${apiUrl}/${resource}/${id}`,
                );
                return data;
            }),
        );
        return { data: response };
    },

    getApiUrl: () => {
        return apiUrl;
    },

    custom: async ({
        url,
        method,
        meta,
        metaData,
        filters,
        sort,
        sorters,
        payload,
        query,
        headers,
    }) => {
        let requestQueryBuilder = RequestQueryBuilder.create();

        requestQueryBuilder = handleFilter(requestQueryBuilder, filters);

        requestQueryBuilder = handleJoin(
            requestQueryBuilder,
            pickNotDeprecated(meta, metaData)?.join,
        );

        //`sort` is deprecated with refine@4, refine will pass `sorters` instead, however, we still support `sort` for backward compatibility
        requestQueryBuilder = handleSort(
            requestQueryBuilder,
            pickNotDeprecated(sorters, sort),
        );

        let requestUrl = `${url}?${requestQueryBuilder.query()}`;

        if (query) {
            requestUrl = `${requestUrl}&${stringify(query)}`;
        }

        if (headers) {
            httpClient.defaults.headers = {
                ...httpClient.defaults.headers,
                ...headers,
            };
        }

        let axiosResponse;
        switch (method) {
            case "put":
            case "post":
            case "patch":
                axiosResponse = await httpClient[method](url, payload);
                break;
            case "delete":
                axiosResponse = await httpClient.delete(url, {
                    data: payload,
                });
                break;
            default:
                axiosResponse = await httpClient.get(requestUrl);
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    },
});

export default NestsxCrud;
