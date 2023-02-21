import { NhostClient } from "@nhost/nhost-js";
import * as gql from "gql-query-builder";
import {
    CrudOperators,
    CrudFilters,
    CrudSorting,
    DataProvider,
    HttpError,
    CrudFilter,
    pickNotDeprecated,
} from "@pankod/refine-core";
import setWith from "lodash/setWith";
import set from "lodash/set";

export type HasuraSortingType = Record<string, "asc" | "desc">;

export type GenerateSortingType = {
    (sorting?: CrudSorting): HasuraSortingType | undefined;
};

export const generateSorting: GenerateSortingType = (sorters?: CrudSorting) => {
    if (!sorters) {
        return undefined;
    }

    const sortingQueryResult: Record<
        string,
        "asc" | "desc" | HasuraSortingType
    > = {};

    sorters.forEach((sortItem) => {
        set(sortingQueryResult, sortItem.field, sortItem.order);
    });

    return sortingQueryResult as HasuraSortingType;
};

export type HasuraFilterCondition =
    | "_and"
    | "_not"
    | "_or"
    | "_eq"
    | "_gt"
    | "_gte"
    | "_lt"
    | "_lte"
    | "_neq"
    | "_in"
    | "_nin"
    | "_like"
    | "_nlike"
    | "_ilike"
    | "_nilike"
    | "_is_null"
    | "_similar"
    | "_nsimilar"
    | "_regex"
    | "_iregex";

const hasuraFilters: Record<CrudOperators, HasuraFilterCondition | undefined> =
    {
        eq: "_eq",
        ne: "_neq",
        lt: "_lt",
        gt: "_gt",
        lte: "_lte",
        gte: "_gte",
        in: "_in",
        nin: "_nin",
        contains: "_ilike",
        ncontains: "_nilike",
        containss: "_like",
        ncontainss: "_nlike",
        null: "_is_null",
        or: "_or",
        and: "_and",
        between: undefined,
        nbetween: undefined,
        nnull: "_is_null",
        startswith: "_iregex",
        nstartswith: "_iregex",
        endswith: "_iregex",
        nendswith: "_iregex",
        startswiths: "_similar",
        nstartswiths: "_nsimilar",
        endswiths: "_similar",
        nendswiths: "_nsimilar",
    };

export const handleFilterValue = (operator: CrudOperators, value: any) => {
    switch (operator) {
        case "startswiths":
        case "nstartswiths":
            return `${value}%`;
        case "endswiths":
        case "nendswiths":
            return `%${value}`;
        case "startswith":
            return `^${value}`;
        case "nstartswith":
            return `^(?!${value})`;
        case "endswith":
            return `${value}$`;
        case "nendswith":
            return `(?<!${value})$`;
        case "nnull":
            return false;
        default:
            return value;
    }
};

const generateNestedFilterQuery = (filter: CrudFilter): any => {
    const { operator } = filter;

    if (operator !== "or" && operator !== "and" && "field" in filter) {
        const { field, value } = filter;

        const hasuraOperator = hasuraFilters[filter.operator];
        if (!hasuraOperator) {
            throw new Error(`Operator ${operator} is not supported`);
        }

        const fieldsArray = field.split(".");
        const fieldsWithOperator = [...fieldsArray, hasuraOperator];
        const filteredValue = handleFilterValue(operator, value);

        return {
            ...setWith({}, fieldsWithOperator, filteredValue, Object),
        };
    }

    return {
        [`_${operator}`]: filter.value.map((f) => generateNestedFilterQuery(f)),
    };
};

export const generateFilters: any = (filters?: CrudFilters) => {
    if (!filters) {
        return undefined;
    }

    const nestedQuery = generateNestedFilterQuery({
        operator: "and",
        value: filters,
    });

    return nestedQuery;
};

const handleError = (error: object | Error) => {
    const customError: HttpError = {
        ...error,
        message: Array.isArray(error)
            ? error.map((p) => p.message).join(", ")
            : JSON.stringify(error),
        statusCode: 200,
    };

    return Promise.reject(customError);
};

const dataProvider = (client: NhostClient): Required<DataProvider> => {
    return {
        getOne: async ({ resource, id, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = `${metaData?.operation ?? resource}_by_pk`;

            const { query, variables } = gql.query({
                operation,
                variables: {
                    id: { value: id, type: "uuid", required: true },
                    ...meta?.variables,
                },
                fields: meta?.fields,
            });

            const { data, error } = await client.graphql.request(
                query,
                variables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[operation],
            };
        },

        getMany: async ({ resource, ids, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = metaData?.operation ?? resource;

            const { query, variables } = gql.query({
                operation,
                fields: meta?.fields,
                variables: meta?.variables ?? {
                    where: {
                        type: `${operation}_bool_exp`,
                        value: {
                            id: {
                                _in: ids,
                            },
                        },
                    },
                },
            });

            const { data, error } = await client.graphql.request(
                query,
                variables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[operation],
            };
        },

        getList: async ({
            resource,
            sort,
            sorters,
            filters,
            hasPagination = true,
            pagination,
            meta: _meta,
            metaData,
        }) => {
            // `pagination` has default values. However, it will be removed next major version
            const {
                current = 1,
                pageSize: limit = 10,
                mode,
            } = pagination ?? {};

            //`hasPagination` is deprecated with refine@4, refine will pass `pagination.mode` instead, however, we still support `hasPagination` for backward compatibility
            const hasPaginationString =
                hasPagination === false ? "off" : "server";
            const isServerPaginationEnabled =
                pickNotDeprecated(mode, hasPaginationString) === "server";

            //`sort` is deprecated with refine@4, refine will pass `sorters` instead, however, we still support `sort` for backward compatibility
            const hasuraSorting = generateSorting(
                pickNotDeprecated(sorters, sort),
            );
            const hasuraFilters = generateFilters(filters);

            const meta = pickNotDeprecated(_meta, metaData);

            const operation = meta?.operation ?? resource;

            const aggregateOperation = `${operation}_aggregate`;

            const hasuraSortingType = `[${operation}_order_by!]`;
            const hasuraFiltersType = `${operation}_bool_exp`;

            const { query, variables } = gql.query([
                {
                    operation,
                    fields: meta?.fields,
                    variables: {
                        ...(isServerPaginationEnabled
                            ? {
                                  limit,
                                  offset: (current - 1) * limit,
                              }
                            : {}),
                        ...(hasuraSorting && {
                            order_by: {
                                value: hasuraSorting,
                                type: hasuraSortingType,
                            },
                        }),
                        ...(hasuraFilters && {
                            where: {
                                value: hasuraFilters,
                                type: hasuraFiltersType,
                            },
                        }),
                    },
                },
                {
                    operation: aggregateOperation,
                    fields: [{ aggregate: ["count"] }],
                    variables: {
                        where: {
                            value: hasuraFilters,
                            type: hasuraFiltersType,
                        },
                    },
                },
            ]);

            const { data, error } = await client.graphql.request(
                query,
                variables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[operation],
                total: (data as any)?.[aggregateOperation]?.aggregate?.count,
            };
        },

        create: async ({ resource, variables, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = meta?.operation ?? resource;

            const insertOperation = `insert_${operation}_one`;
            const insertType = `${operation}_insert_input`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: insertOperation,
                variables: {
                    object: {
                        type: insertType,
                        value: variables,
                        required: true,
                    },
                },
                fields: meta?.fields ?? ["id", ...Object.keys(variables || {})],
            });

            const { data, error } = await client.graphql.request(
                query,
                gqlVariables,
            );

            if (error) {
                return await handleError(error);
            }
            return {
                data: (data as any)?.[insertOperation],
            };
        },

        createMany: async ({ resource, variables, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = metaData?.operation ?? resource;

            const insertOperation = `insert_${operation}`;
            const insertType = `[${operation}_insert_input!]`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: insertOperation,
                variables: {
                    objects: {
                        type: insertType,
                        value: variables,
                        required: true,
                    },
                },
                fields: [
                    {
                        returning: meta?.fields ?? ["id"],
                    },
                ],
            });

            const { data, error } = await client.graphql.request(
                query,
                gqlVariables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[insertOperation]?.["returning"],
            };
        },

        update: async ({ resource, id, variables, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = meta?.operation ?? resource;

            const updateOperation = `update_${operation}_by_pk`;

            const pkColumnsType = `${operation}_pk_columns_input`;
            const setInputType = `${operation}_set_input`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: updateOperation,
                variables: {
                    pk_columns: {
                        type: pkColumnsType,
                        value: {
                            id: id,
                        },
                        required: true,
                    },
                    _set: {
                        type: setInputType,
                        value: variables,
                        required: true,
                    },
                },
                fields: meta?.fields ?? ["id"],
            });

            const { data, error } = await client.graphql.request(
                query,
                gqlVariables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[updateOperation],
            };
        },
        updateMany: async ({
            resource,
            ids,
            variables,
            meta: _meta,
            metaData,
        }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = meta?.operation ?? resource;

            const updateOperation = `update_${operation}`;

            const whereType = `${operation}_bool_exp`;
            const setInputType = `${operation}_set_input`;

            const { query, variables: gqlVariables } = gql.mutation({
                operation: updateOperation,
                variables: {
                    where: {
                        type: whereType,
                        value: {
                            id: {
                                _in: ids,
                            },
                        },
                        required: true,
                    },
                    _set: {
                        type: setInputType,
                        value: variables,
                        required: true,
                    },
                },
                fields: [
                    {
                        returning: meta?.fields ?? ["id"],
                    },
                ],
            });

            const { data, error } = await client.graphql.request(
                query,
                gqlVariables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[updateOperation]?.["returning"],
            };
        },

        deleteOne: async ({ resource, id, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = meta?.operation ?? resource;

            const deleteOperation = `delete_${operation}_by_pk`;

            const { query, variables } = gql.mutation({
                operation: deleteOperation,
                variables: {
                    id: { value: id, type: "uuid", required: true },
                    ...meta?.variables,
                },
                fields: meta?.fields ?? ["id"],
            });

            const { data, error } = await client.graphql.request(
                query,
                variables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[deleteOperation],
            };
        },

        deleteMany: async ({ resource, ids, meta: _meta, metaData }) => {
            const meta = pickNotDeprecated(_meta, metaData);
            const operation = meta?.operation ?? resource;

            const deleteOperation = `delete_${operation}`;

            const whereType = `${operation}_bool_exp`;

            const { query, variables } = gql.mutation({
                operation: deleteOperation,
                fields: [
                    {
                        returning: meta?.fields ?? ["id"],
                    },
                ],
                variables: meta?.variables ?? {
                    where: {
                        type: whereType,
                        required: true,
                        value: {
                            id: {
                                _in: ids,
                            },
                        },
                    },
                },
            });

            const { data, error } = await client.graphql.request(
                query,
                variables,
            );

            if (error) {
                return await handleError(error);
            }

            return {
                data: (data as any)?.[deleteOperation]?.["returning"],
            };
        },

        getApiUrl: () => {
            return client.graphql.getUrl();
        },

        custom: () => {
            throw Error("useCustom is not implemented in @pankod/refine-nhost");
        },
    };
};

export default dataProvider;
