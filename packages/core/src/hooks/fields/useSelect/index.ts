import React from "react";
import uniqBy from "lodash/uniqBy";
import { SelectProps } from "antd/lib/select";
import { QueryObserverResult, UseQueryOptions } from "react-query";
import debounce from "lodash/debounce";

import { useList, useMany } from "@hooks";
import {
    CrudSorting,
    Option,
    BaseRecord,
    GetManyResponse,
    GetListResponse,
    CrudFilters,
    SuccessErrorNotification,
    HttpError,
} from "../../../interfaces";

export type UseSelectProps<TData, TError> = {
    resource: string;
    optionLabel?: string;
    optionValue?: string;
    sort?: CrudSorting;
    filters?: CrudFilters;
    defaultValue?: string | string[];
    debounce?: number;
    queryOptions?: UseQueryOptions<GetListResponse<TData>, TError>;
    defaultValueQueryOptions?: UseQueryOptions<GetManyResponse<TData>, TError>;
} & SuccessErrorNotification;

export type UseSelectReturnType<TData extends BaseRecord = BaseRecord> = {
    selectProps: SelectProps<{ value: string; label: string }>;
    queryResult: QueryObserverResult<GetListResponse<TData>>;
    defaultValueQueryResult: QueryObserverResult<GetManyResponse<TData>>;
    defaultQueryOnSuccess: (data: GetListResponse<TData>) => void;
    defaultValueQueryOnSuccess: (data: GetManyResponse<TData>) => void;
};

/**
 * `useSelect` hook allows you to manage an Ant Design {@link https://ant.design/components/select/ Select} component when records in a resource needs to be used as select options.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/field/useSelect} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/api-references/interfaceReferences#baserecord `BaseRecord`}
 *
 */
export const useSelect = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>(
    props: UseSelectProps<TData, TError>,
): UseSelectReturnType<TData> => {
    const [search, setSearch] = React.useState<CrudFilters>([]);
    const [options, setOptions] = React.useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

    let { defaultValue = [] } = props;

    const {
        resource,
        sort,
        filters = [],
        optionLabel = "title",
        optionValue = "id",
        debounce: debounceValue = 300,
        successNotification,
        errorNotification,
        defaultValueQueryOptions,
        queryOptions,
    } = props;

    if (!Array.isArray(defaultValue)) {
        defaultValue = [defaultValue];
    }

    const defaultValueQueryOnSuccess = (data: GetManyResponse<TData>) => {
        setSelectedOptions(
            data.data.map((item) => ({
                label: item[optionLabel],
                value: item[optionValue],
            })),
        );
    };

    const defaultValueQueryResult = useMany<TData, TError>(
        resource,
        defaultValue,
        {
            enabled: defaultValue.length > 0,
            onSuccess: (data) => {
                defaultValueQueryOnSuccess(data);
            },
            ...defaultValueQueryOptions,
        },
    );

    const defaultQueryOnSuccess = (data: GetListResponse<TData>) => {
        setOptions(
            data.data.map((item) => ({
                label: item[optionLabel],
                value: item[optionValue],
            })),
        );
    };

    const queryResult = useList<TData, TError>(
        resource,
        {
            sort,
            filters: filters.concat(search),
        },
        {
            enabled: false,
            onSuccess: (data) => {
                defaultQueryOnSuccess(data);
            },
            ...queryOptions,
        },
        successNotification,
        errorNotification,
    );
    const { refetch: refetchList } = queryResult;

    React.useEffect(() => {
        if (search) {
            refetchList();
        }
    }, [search]);

    const onSearch = (value: string) => {
        if (!value) {
            setSearch([]);
            return;
        }

        setSearch([
            {
                field: optionLabel,
                operator: "contains",
                value,
            },
        ]);
    };

    return {
        selectProps: {
            options: uniqBy([...options, ...selectedOptions], "value"),
            onSearch: debounce(onSearch, debounceValue),
            loading: defaultValueQueryResult.isFetching,
            showSearch: true,
            filterOption: false,
        },
        queryResult,
        defaultValueQueryResult,
        defaultQueryOnSuccess,
        defaultValueQueryOnSuccess,
    };
};
