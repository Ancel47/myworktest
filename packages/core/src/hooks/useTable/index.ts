import React, { useState, useEffect } from "react";
import { QueryObserverResult, UseQueryOptions } from "@tanstack/react-query";
import qs from "qs";
import differenceWith from "lodash/differenceWith";
import isEqual from "lodash/isEqual";

import {
    useRouterContext,
    useSyncWithLocation,
    useNavigation,
    useResourceWithRoute,
    useList,
    useLiveMode,
} from "@hooks";
import {
    stringifyTableParams,
    parseTableParams,
    unionFilters,
    setInitialFilters,
    setInitialSorters,
    unionSorters,
} from "@definitions/table";
import { pickNotDeprecated } from "@definitions/helpers";

import {
    ResourceRouterParams,
    BaseRecord,
    CrudFilters,
    CrudSorting,
    GetListResponse,
    SuccessErrorNotification,
    HttpError,
    MetaQuery,
    LiveModeProps,
    Pagination,
} from "../../interfaces";

type SetFilterBehavior = "merge" | "replace";

export type useTableProps<TData, TError> = {
    /**
     * Resource name for API data interactions
     * @default Resource name that it reads from route
     */
    resource?: string;
    /**
     * Configuration for pagination
     */
    pagination?: Pagination;
    /**
     * Initial page index
     * @default 1
     * @deprecated `initialCurrent` property is deprecated. Use `pagination.current` instead.
     */
    initialCurrent?: number;
    /**
     * Initial number of items per page
     * @default 10
     * @deprecated `initialPageSize` property is deprecated. Use `pagination.pageSize` instead.
     */
    initialPageSize?: number;
    /**
     * Sort configs
     */
    sorters?: {
        /**
         * Initial sorter state
         */
        initial?: CrudSorting;
        /**
         * Default and unchangeable sorter state
         *  @default `[]`
         */
        permanent?: CrudSorting;
    };
    initialSorter?: CrudSorting;
    /**
     * Default and unchangeable sorter state
     *  @default `[]`
     */
    permanentSorter?: CrudSorting;
    /**
     * Filter configs
     */
    filters?: {
        /**
         * Initial filter state
         */
        initial?: CrudFilters;
        /**
         * Default and unchangeable filter state
         *  @default `[]`
         */
        permanent?: CrudFilters;
        /**
         *Default behavior of the `setFilters` function
         * @default `"merge"`
         */
        defaultBehavior?: SetFilterBehavior;
    };
    initialFilter?: CrudFilters;
    /**
     * Default and unchangeable filter state
     * @default `[]`
     */
    permanentFilter?: CrudFilters;
    /**
     *Default behavior of the `setFilters` function
     * @default `"merge"`
     */
    defaultSetFilterBehavior?: SetFilterBehavior;
    /**
     * Whether to use server side pagination or not.
     * @default `true`
     * @deprecated `hasPagination` property is deprecated. Use `pagination.mode` instead.
     */
    hasPagination?: boolean;
    /**
     * Sortings, filters, page index and records shown per page are tracked by browser history
     * @default Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`
     */
    syncWithLocation?: boolean;
    /**
     * react-query's [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options
     */
    queryOptions?: UseQueryOptions<GetListResponse<TData>, TError>;
    /**
     * Metadata query for dataProvider
     */
    meta?: MetaQuery;
    /**
     * Metadata query for dataProvider
     * @deprecated `metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility.
     */
    metaData?: MetaQuery;
    /**
     * If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.
     */
    dataProviderName?: string;
} & SuccessErrorNotification &
    LiveModeProps;

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

type SyncWithLocationParams = {
    pagination: { current?: number; pageSize?: number };
    /**
     * @deprecated `sorter` is deprecated. Use `sorters` instead.
     */
    sorter?: CrudSorting;
    sorters: CrudSorting;
    filters: CrudFilters;
};

export type useTableReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
> = {
    tableQueryResult: QueryObserverResult<GetListResponse<TData>, TError>;
    /**
     * @deprecated `sorter` is deprecated. Use `sorters` instead.
     */
    sorter: CrudSorting;
    sorters: CrudSorting;
    /**
     * @deprecated `setSorter` is deprecated. Use `setSorters` instead.
     */
    setSorter: (sorter: CrudSorting) => void;
    setSorters: (sorter: CrudSorting) => void;
    filters: CrudFilters;
    setFilters: ((filters: CrudFilters, behavior?: SetFilterBehavior) => void) &
        ((setter: (prevFilters: CrudFilters) => CrudFilters) => void);
    createLinkForSyncWithLocation: (params: SyncWithLocationParams) => string;
    current: number;
    setCurrent: ReactSetState<useTableReturnType["current"]>;
    pageSize: number;
    setPageSize: ReactSetState<useTableReturnType["pageSize"]>;
    pageCount: number;
};

/**
 * By using useTable, you are able to get properties that are compatible with
 * Ant Design {@link https://ant.design/components/table/ `<Table>`} component.
 * All features such as sorting, filtering and pagination comes as out of box.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/table/useTable} for more details.
 */

const defaultPermanentFilter: CrudFilters = [];
const defaultPermanentSorter: CrudSorting = [];

export function useTable<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>({
    initialCurrent,
    initialPageSize,
    hasPagination = true,
    pagination,
    initialSorter,
    permanentSorter = defaultPermanentSorter,
    defaultSetFilterBehavior = "merge",
    initialFilter,
    permanentFilter = defaultPermanentFilter,
    syncWithLocation: syncWithLocationProp,
    resource: resourceFromProp,
    successNotification,
    errorNotification,
    queryOptions,
    liveMode: liveModeFromProp,
    onLiveEvent,
    liveParams,
    meta,
    metaData,
    dataProviderName,
}: useTableProps<TData, TError> = {}): useTableReturnType<TData, TError> {
    const { syncWithLocation: syncWithLocationContext } = useSyncWithLocation();
    const { useLocation, useParams } = useRouterContext();
    const { search, pathname } = useLocation();
    const liveMode = useLiveMode(liveModeFromProp);
    // We want to always parse the query string even when syncWithLocation is
    // deactivated, for hotlinking to work properly
    const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =
        parseTableParams(search);
    const { resource: routeResourceName } = useParams<ResourceRouterParams>();
    const { replace } = useNavigation();
    const resourceWithRoute = useResourceWithRoute();

    const resource = resourceWithRoute(resourceFromProp ?? routeResourceName);
    const syncWithLocation = syncWithLocationProp ?? syncWithLocationContext;
    const hasPaginationString = hasPagination === false ? "off" : "server";
    const isPaginationEnabled =
        (pagination?.mode ?? hasPaginationString) !== "off";
    const prefferedCurrent = pickNotDeprecated(
        pagination?.current,
        initialCurrent,
    );
    const prefferedPageSize = pickNotDeprecated(
        pagination?.pageSize,
        initialPageSize,
    );
    const preferredMeta = pickNotDeprecated(meta, metaData);

    let defaultCurrent: number;
    let defaultPageSize: number;
    let defaultSorter: CrudSorting | undefined;
    let defaultFilter: CrudFilters | undefined;

    if (syncWithLocation) {
        defaultCurrent = parsedCurrent || prefferedCurrent || 1;
        defaultPageSize = parsedPageSize || prefferedPageSize || 10;
        defaultSorter = parsedSorter.length ? parsedSorter : initialSorter;
        defaultFilter = parsedFilters.length ? parsedFilters : initialFilter;
    } else {
        defaultCurrent = prefferedCurrent || 1;
        defaultPageSize = prefferedPageSize || 10;
        defaultSorter = initialSorter;
        defaultFilter = initialFilter;
    }

    const [sorters, setSorters] = useState<CrudSorting>(
        setInitialSorters(permanentSorter, defaultSorter ?? []),
    );
    const [filters, setFilters] = useState<CrudFilters>(
        setInitialFilters(permanentFilter, defaultFilter ?? []),
    );
    const [current, setCurrent] = useState<number>(defaultCurrent);
    const [pageSize, setPageSize] = useState<number>(defaultPageSize);

    useEffect(() => {
        if (search === "") {
            setCurrent(defaultCurrent);
            setPageSize(defaultPageSize);
            setSorters(setInitialSorters(permanentSorter, defaultSorter ?? []));
            setFilters(setInitialFilters(permanentFilter, defaultFilter ?? []));
        }
    }, [search]);

    useEffect(() => {
        if (syncWithLocation) {
            const queryParams = currentQueryParams();
            const stringifyParams = stringifyTableParams({
                ...(isPaginationEnabled
                    ? {
                          pagination: {
                              pageSize,
                              current,
                          },
                      }
                    : {}),
                sorters: differenceWith(sorters, permanentSorter, isEqual),
                filters: differenceWith(filters, permanentFilter, isEqual),
                ...queryParams,
            });

            // Careful! This triggers render
            return replace(`${pathname}?${stringifyParams}`, undefined, {
                shallow: true,
            });
        }
    }, [syncWithLocation, current, pageSize, sorters, filters]);

    const queryResult = useList<TData, TError>({
        resource: resource.name,
        hasPagination,
        pagination: { current, pageSize, mode: pagination?.mode },
        filters: unionFilters(permanentFilter, filters),
        sorters: unionSorters(permanentSorter, sorters),
        queryOptions,
        successNotification,
        errorNotification,
        meta: preferredMeta,
        metaData: preferredMeta,
        liveMode,
        liveParams,
        onLiveEvent,
        dataProviderName,
    });

    const currentQueryParams = (): object => {
        // We get QueryString parameters that are uncontrolled by refine.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { sorter, filters, pageSize, current, ...rest } = qs.parse(
            search,
            {
                ignoreQueryPrefix: true,
            },
        );

        return rest;
    };

    const createLinkForSyncWithLocation = ({
        pagination: { current, pageSize },
        sorter,
        sorters,
        filters,
    }: SyncWithLocationParams) => {
        const currentQueryParams = qs.parse(search?.substring(1)); // remove first ? character

        const stringifyParams = stringifyTableParams({
            pagination: {
                pageSize,
                current,
            },
            sorters: sorters ?? sorter,
            filters,
            ...currentQueryParams,
        });
        return `${pathname}?${stringifyParams}`;
    };

    const setFiltersAsMerge = (newFilters: CrudFilters) => {
        setFilters((prevFilters) =>
            unionFilters(permanentFilter, newFilters, prevFilters),
        );
    };

    const setFiltersAsReplace = (newFilters: CrudFilters) => {
        setFilters(unionFilters(permanentFilter, newFilters));
    };

    const setFiltersWithSetter = (
        setter: (prevFilters: CrudFilters) => CrudFilters,
    ) => {
        setFilters((prev) => unionFilters(permanentFilter, setter(prev)));
    };

    const setFiltersFn: useTableReturnType<TData>["setFilters"] = (
        setterOrFilters,
        behavior: SetFilterBehavior = defaultSetFilterBehavior,
    ) => {
        if (typeof setterOrFilters === "function") {
            setFiltersWithSetter(setterOrFilters);
        } else {
            if (behavior === "replace") {
                setFiltersAsReplace(setterOrFilters);
            } else {
                setFiltersAsMerge(setterOrFilters);
            }
        }
    };

    const setSortWithUnion = (newSorter: CrudSorting) => {
        setSorters(() => unionSorters(permanentSorter, newSorter));
    };

    return {
        tableQueryResult: queryResult,
        sorters,
        setSorters: setSortWithUnion,
        sorter: sorters,
        setSorter: setSortWithUnion,
        filters,
        setFilters: setFiltersFn,
        current,
        setCurrent,
        pageSize,
        setPageSize,
        pageCount: pageSize
            ? Math.ceil((queryResult.data?.total ?? 0) / pageSize)
            : 1,
        createLinkForSyncWithLocation,
    };
}
