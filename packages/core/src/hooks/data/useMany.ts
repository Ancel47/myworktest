import {
    QueryObserverResult,
    useQuery,
    UseQueryOptions,
} from "@tanstack/react-query";

import {
    BaseRecord,
    BaseKey,
    GetManyResponse,
    HttpError,
    LiveModeProps,
    SuccessErrorNotification,
    MetaQuery,
} from "../../interfaces";
import {
    useResource,
    useTranslate,
    useResourceSubscription,
    useHandleNotification,
    useDataProvider,
    useOnError,
} from "@hooks";
import {
    queryKeys,
    pickDataProvider,
    handleMultiple,
    pickNotDeprecated,
    useActiveAuthProvider,
} from "@definitions/helpers";

export type UseManyProps<TQueryFnData, TError, TData> = {
    /**
     * Resource name for API data interactions
     */
    resource: string;
    /**
     * ids of the item in the resource
     * @type [`BaseKey[]`](/docs/api-reference/core/interfaceReferences/#basekey)
     */
    ids: BaseKey[];
    /**
     * react-query's [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options
     */
    queryOptions?: UseQueryOptions<
        GetManyResponse<TQueryFnData>,
        TError,
        GetManyResponse<TData>
    >;
    /**
     * Metadata query for `dataProvider`,
     */
    meta?: MetaQuery;
    /**
     * Metadata query for `dataProvider`,
     * @deprecated `metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility.
     */
    metaData?: MetaQuery;
    /**
     * If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.
     * @default "default"
     */
    dataProviderName?: string;
} & SuccessErrorNotification<GetManyResponse<TData>, TError, BaseKey[]> &
    LiveModeProps;

/**
 * `useMany` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/guides/queries `useQuery`} used for retrieving multiple items from a `resource`.
 *
 * It uses `getMany` method as query function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/core/hooks/data/useMany} for more details.
 *
 * @typeParam TQueryFnData - Result data returned by the query function. Extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#httperror `HttpError`}
 * @typeParam TData - Result data returned by the `select` function. Extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#baserecord `BaseRecord`}. Defaults to `TQueryFnData`
 *
 */

export const useMany = <
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TData extends BaseRecord = TQueryFnData,
>({
    resource,
    ids,
    queryOptions,
    successNotification,
    errorNotification,
    meta,
    metaData,
    liveMode,
    onLiveEvent,
    liveParams,
    dataProviderName,
}: UseManyProps<TQueryFnData, TError, TData>): QueryObserverResult<
    GetManyResponse<TData>
> => {
    const { resources } = useResource();
    const dataProvider = useDataProvider();
    const queryKey = queryKeys(
        resource,
        pickDataProvider(resource, dataProviderName, resources),
        pickNotDeprecated(meta, metaData),
        pickNotDeprecated(meta, metaData),
    );

    const { getMany, getOne } = dataProvider(
        pickDataProvider(resource, dataProviderName, resources),
    );

    const translate = useTranslate();
    const authProvider = useActiveAuthProvider();
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
            ids: ids ?? [],
            meta: pickNotDeprecated(meta, metaData),
            metaData: pickNotDeprecated(meta, metaData),
            subscriptionType: "useMany",
            ...liveParams,
        },
        channel: `resources/${resource}`,
        enabled: isEnabled,
        liveMode,
        onLiveEvent,
    });

    const queryResponse = useQuery<
        GetManyResponse<TQueryFnData>,
        TError,
        GetManyResponse<TData>
    >(
        queryKey.many(ids),
        ({ queryKey, pageParam, signal }) => {
            if (getMany) {
                return getMany({
                    resource,
                    ids,
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
                });
            } else {
                return handleMultiple(
                    ids.map((id) =>
                        getOne<TQueryFnData>({
                            resource,
                            id,
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
                        }),
                    ),
                );
            }
        },
        {
            ...queryOptions,
            onSuccess: (data) => {
                queryOptions?.onSuccess?.(data);

                const notificationConfig =
                    typeof successNotification === "function"
                        ? successNotification(data, ids, resource)
                        : successNotification;

                handleNotification(notificationConfig);
            },
            onError: (err: TError) => {
                checkError(err);
                queryOptions?.onError?.(err);

                const notificationConfig =
                    typeof errorNotification === "function"
                        ? errorNotification(err, ids, resource)
                        : errorNotification;

                handleNotification(notificationConfig, {
                    key: `${ids[0]}-${resource}-getMany-notification`,
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
