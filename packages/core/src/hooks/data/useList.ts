import { useContext } from "react";
import { QueryObserverResult, useQuery, UseQueryOptions } from "react-query";
import { ArgsProps } from "antd/lib/notification";

import { DataContext } from "@contexts/data";
import {
    GetListResponse,
    IDataContext,
    CrudFilters,
    Pagination,
    BaseRecord,
    HttpError,
    CrudSorting,
} from "../../interfaces";
import { useTranslate } from "@hooks/translate";
import { useCheckError } from "@hooks";
import { handleNotification } from "@definitions";

interface UseListConfig {
    pagination?: Pagination;
    sort?: CrudSorting;
    filters?: CrudFilters;
}

/**
 * `useList` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/guides/queries `useQuery`} used for retrieving items from a `resource` with pagination, sort, and filter configurations.
 *
 * It uses the `getList` method as the query function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/data/useList} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/api-references/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-references/interfaceReferences#httperror `HttpError`}
 *
 */
export const useList = <
    TData = BaseRecord,
    TError extends HttpError = HttpError,
>(
    resource: string,
    config?: UseListConfig,
    queryOptions?: UseQueryOptions<GetListResponse<TData>, TError>,
    successNotification?: ArgsProps | false,
    errorNotification?: ArgsProps | false,
): QueryObserverResult<GetListResponse<TData>, TError> => {
    const { getList } = useContext<IDataContext>(DataContext);
    const translate = useTranslate();
    const { mutate: checkError } = useCheckError();

    console.log("config", config);

    const queryResponse = useQuery<GetListResponse<TData>, TError>(
        [`resource/list/${resource}`, { ...config }],
        () => getList<TData>(resource, { ...config }),
        {
            ...queryOptions,
            onSuccess: (data) => {
                queryOptions?.onSuccess?.(data);
                handleNotification(successNotification);
            },
            onError: (err: TError) => {
                checkError(err);
                queryOptions?.onError?.(err);

                handleNotification(errorNotification, {
                    key: `${resource}-useList-notification`,
                    message: translate(
                        "common:notifications.error",
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
