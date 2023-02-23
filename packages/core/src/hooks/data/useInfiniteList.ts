import {
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import {
    CrudFilters,
    Pagination,
    BaseRecord,
    HttpError,
    CrudSorting,
    MetaQuery,
    SuccessErrorNotification,
    LiveModeProps,
    GetListResponse,
} from "../../interfaces";
import {
    useResource,
    useHandleNotification,
    useResourceSubscription,
    useTranslate,
    useDataProvider,
    useOnError,
} from "@hooks";
import {
    queryKeys,
    pickDataProvider,
    getNextPageParam,
    getPreviousPageParam,
    pickNotDeprecated,
    useProvidedAuthProvider,
} from "@definitions/helpers";

export interface UseInfiniteListConfig {
    pagination?: Pagination;
    hasPagination?: boolean;
    sort?: CrudSorting;
    filters?: CrudFilters;
}

export type UseInfiniteListProps<TData, TError> = {
    /**
     * Resource name for API data interactions
     */
    resource: string;
    /**
     * Configuration for pagination, sorting and filtering
     * @type [`useInfiniteListConfig`](/docs/api-reference/core/hooks/data/useInfiniteList/#config-parameters)
     * @deprecated `config` property is deprecated. Use `pagination`, `hasPagination`, `sorters` and `filters` instead.
     */
    config?: UseInfiniteListConfig;
    /**
     * Pagination properties
     */
    pagination?: Pagination;
    /**
     * Whether to use server-side pagination or not
     */
    hasPagination?: boolean;
    /**
     * Sorter parameters
     */
    sorters?: CrudSorting;
    /**
     * Filter parameters
     */
    filters?: CrudFilters;
    /**
     * Tanstack Query's [useInfiniteQuery](https://tanstack.com/query/v4/docs/react/reference/useInfiniteQuery) options
     */
    queryOptions?: UseInfiniteQueryOptions<GetListResponse<TData>, TError>;
    /**
     *  Metadata query for `dataProvider`
     */
    meta?: MetaQuery;
    /**
     *  Metadata query for `dataProvider`
     *  @deprecated `metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility.
     */
    metaData?: MetaQuery;
    /**
     * If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use
     */
    dataProviderName?: string;
} & SuccessErrorNotification &
    LiveModeProps;

/**
 * `useInfiniteList` is a modified version of `react-query`'s {@link https://tanstack.com/query/latest/docs/react/guides/infinite-queries `useInfiniteQuery`} used for retrieving items from a `resource` with pagination, sort, and filter configurations.
 *
 * It uses the `getList` method as the query function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/core/hooks/data/useInfiniteList} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/core/interfaceReferences#httperror `HttpError`}
 *
 */
export const useInfiniteList = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>({
    resource,
    config,
    filters,
    hasPagination,
    pagination,
    sorters,
    queryOptions,
    successNotification,
    errorNotification,
    meta,
    metaData,
    liveMode,
    onLiveEvent,
    liveParams,
    dataProviderName,
}: UseInfiniteListProps<TData, TError>): InfiniteQueryObserverResult<
    GetListResponse<TData>,
    TError
> => {
    const { resources } = useResource();
    const dataProvider = useDataProvider();
    const queryKey = queryKeys(
        resource,
        pickDataProvider(resource, dataProviderName, resources),
        pickNotDeprecated(meta, metaData),
        pickNotDeprecated(meta, metaData),
    );
    const { getList } = dataProvider(
        pickDataProvider(resource, dataProviderName, resources),
    );

    const translate = useTranslate();
    const authProvider = useProvidedAuthProvider();
    const { mutate: checkError } = useOnError({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });
    const handleNotification = useHandleNotification();

    const isEnabled =
        queryOptions?.enabled === undefined || queryOptions?.enabled === true;

    useResourceSubscription({
        resource,
        types: ["*"],
        params: {
            meta: pickNotDeprecated(meta, metaData),
            metaData: pickNotDeprecated(meta, metaData),
            pagination: pickNotDeprecated(pagination, config?.pagination),
            hasPagination: pickNotDeprecated(
                hasPagination,
                config?.hasPagination,
            ),
            sort: pickNotDeprecated(sorters, config?.sort),
            sorters: pickNotDeprecated(sorters, config?.sort),
            filters: pickNotDeprecated(filters, config?.filters),
            subscriptionType: "useList",
            ...liveParams,
        },
        channel: `resources/${resource}`,
        enabled: isEnabled,
        liveMode,
        onLiveEvent,
    });

    const queryResponse = useInfiniteQuery<GetListResponse<TData>, TError>(
        queryKey.list({
            filters: pickNotDeprecated(filters, config?.filters),
            hasPagination: pickNotDeprecated(
                hasPagination,
                config?.hasPagination,
            ),
            pagination: pickNotDeprecated(pagination, config?.pagination),
            ...(sorters && {
                sorters,
            }),
            ...(config?.sort && {
                sort: config?.sort,
            }),
        }),
        ({ queryKey, pageParam, signal }) => {
            const paginationProperties = {
                ...pickNotDeprecated(pagination, config?.pagination),
                current: pageParam,
            };

            return getList<TData>({
                resource,
                pagination: paginationProperties,
                hasPagination: pickNotDeprecated(
                    hasPagination,
                    config?.hasPagination,
                ),
                filters: pickNotDeprecated(filters, config?.filters),
                sort: pickNotDeprecated(sorters, config?.sort),
                sorters: pickNotDeprecated(sorters, config?.sort),
                meta: {
                    ...(pickNotDeprecated(meta, metaData) || {}),
                    queryContext: {
                        queryKey,
                        pageParam,
                        signal,
                    },
                },
                metaData: {
                    ...(pickNotDeprecated(meta, metaData) || {}),
                    queryContext: {
                        queryKey,
                        pageParam,
                        signal,
                    },
                },
            }).then(({ data, total, ...rest }) => {
                return {
                    data,
                    total,
                    pagination: paginationProperties,
                    ...rest,
                };
            });
        },
        {
            getNextPageParam: (lastPage) => getNextPageParam(lastPage),
            getPreviousPageParam: (lastPage) => getPreviousPageParam(lastPage),
            ...queryOptions,
            onSuccess: (data) => {
                queryOptions?.onSuccess?.(data);

                const notificationConfig =
                    typeof successNotification === "function"
                        ? successNotification(
                              data,
                              {
                                  meta: pickNotDeprecated(meta, metaData),
                                  metaData: pickNotDeprecated(meta, metaData),
                                  filters: pickNotDeprecated(
                                      filters,
                                      config?.filters,
                                  ),
                                  hasPagination: pickNotDeprecated(
                                      hasPagination,
                                      config?.hasPagination,
                                  ),
                                  pagination: pickNotDeprecated(
                                      pagination,
                                      config?.pagination,
                                  ),
                                  sorters: pickNotDeprecated(
                                      sorters,
                                      config?.sort,
                                  ),
                                  config: {
                                      ...config,
                                      sort: pickNotDeprecated(
                                          sorters,
                                          config?.sort,
                                      ),
                                  },
                              },
                              resource,
                          )
                        : successNotification;

                handleNotification(notificationConfig);
            },
            onError: (err: TError) => {
                checkError(err);
                queryOptions?.onError?.(err);

                const notificationConfig =
                    typeof errorNotification === "function"
                        ? errorNotification(
                              err,
                              {
                                  meta: pickNotDeprecated(meta, metaData),
                                  metaData: pickNotDeprecated(meta, metaData),
                                  filters: pickNotDeprecated(
                                      filters,
                                      config?.filters,
                                  ),
                                  hasPagination: pickNotDeprecated(
                                      hasPagination,
                                      config?.hasPagination,
                                  ),
                                  pagination: pickNotDeprecated(
                                      pagination,
                                      config?.pagination,
                                  ),
                                  sorters: pickNotDeprecated(
                                      sorters,
                                      config?.sort,
                                  ),
                                  config: {
                                      ...config,
                                      sort: pickNotDeprecated(
                                          sorters,
                                          config?.sort,
                                      ),
                                  },
                              },
                              resource,
                          )
                        : errorNotification;

                handleNotification(notificationConfig, {
                    key: `${resource}-useInfiniteList-notification`,
                    message: translate(
                        "notifications.error",
                        { statusCode: err.statusCode },
                        `Error (status code: ${err.statusCode})`,
                    ),
                    description: err.message,
                    type: "error",
                });
            },
        },
    );

    return queryResponse;
};
