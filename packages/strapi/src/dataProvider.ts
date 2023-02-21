import axios, { AxiosInstance } from "axios";
import {
    DataProvider as IDataProvider,
    HttpError,
    CrudFilters,
    CrudSorting,
    BaseKey,
    LogicalFilter,
    pickNotDeprecated,
} from "@pankod/refine-core";
import { stringify } from "query-string";

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

const generateSort = (sorters?: CrudSorting) => {
    const _sort: string[] = [];

    if (sorters) {
        sorters.map((item) => {
            if (item.order) {
                _sort.push(`${item.field}:${item.order}`);
            }
        });
    }

    return _sort;
};

const generateFilter = (filters?: CrudFilters) => {
    let rawQuery = "";

    if (filters) {
        filters.map((filter) => {
            if (
                filter.operator !== "or" &&
                filter.operator !== "and" &&
                "field" in filter
            ) {
                const { field, operator, value } = filter;

                if (operator === "eq") {
                    rawQuery += `&${field}=${value}`;
                } else {
                    if (Array.isArray(value)) {
                        value.map((val) => {
                            rawQuery += `&[${field}_${operator}]=${val}`;
                        });
                    } else {
                        rawQuery += `&[${field}_${operator}]=${value}`;
                    }
                }
            } else {
                const value = filter.value as LogicalFilter[];

                value.map((item, index) => {
                    const { field, operator, value } = item;

                    rawQuery += `&_where[_or][${index}][${field}_${operator}]=${value}`;
                });
            }
        });
    }

    return rawQuery;
};

export const DataProvider = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
): Required<IDataProvider> => ({
    getList: async ({
        resource,
        hasPagination = true,
        pagination,
        filters,
        sort,
        sorters,
    }) => {
        const url = `${apiUrl}/${resource}`;

        // `pagination` has default values. However, it will be removed next major version
        const { current = 1, pageSize: _limit = 10, mode } = pagination ?? {};

        //`hasPagination` is deprecated with refine@4, refine will pass `pagination.mode` instead, however, we still support `hasPagination` for backward compatibility
        const hasPaginationString = hasPagination === false ? "off" : "server";
        const isServerPaginationEnabled =
            pickNotDeprecated(mode, hasPaginationString) === "server";

        //`sort` is deprecated with refine@4, refine will pass `sorters` instead, however, we still support `sort` for backward compatibility
        const _sort = generateSort(pickNotDeprecated(sorters, sort));
        const queryFilters = generateFilter(filters);

        const query = {
            ...(isServerPaginationEnabled
                ? {
                      _start: (current - 1) * _limit,
                      _limit,
                  }
                : {}),
            _sort: _sort.length > 0 ? _sort.join(",") : undefined,
        };

        const response = await Promise.all([
            httpClient.get(`${url}?${stringify(query)}&${queryFilters}`),
            httpClient.get(`${url}/count?${queryFilters}`),
        ]);

        return {
            data: response[0].data,
            total: response[1].data,
        };
    },

    getMany: async ({ resource, ids }) => {
        const url = `${apiUrl}/${resource}`;

        const query = ids.map((item: BaseKey) => `id_in=${item}`).join("&");

        const { data } = await httpClient.get(`${url}?${query}`);

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

        const { data } = await httpClient.put(url, variables);

        return {
            data,
        };
    },

    updateMany: async ({ resource, ids, variables }) => {
        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.put(
                    `${apiUrl}/${resource}/${id}`,
                    variables,
                );
                return data;
            }),
        );

        return { data: response };
    },

    createMany: async () => {
        throw new Error("createMany not implemented");
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
        filters,
        sort,
        sorters,
        payload,
        query,
        headers,
    }) => {
        let requestUrl = `${url}?`;

        if (sorters || sort) {
            //`sort` is deprecated with refine@4, refine will pass `sorters` instead, however, we still support `sort` for backward compatibility
            const sortQuery = generateSort(pickNotDeprecated(sorters, sort));
            if (sortQuery.length > 0) {
                requestUrl = `${requestUrl}&${stringify({
                    _sort: sortQuery.join(","),
                })}`;
            }
        }

        if (filters) {
            const filterQuery = generateFilter(filters);
            requestUrl = `${requestUrl}&${filterQuery}`;
        }

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
