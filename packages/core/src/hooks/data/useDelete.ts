import { useContext } from "react";
import { useQueryClient, useMutation, UseMutationResult } from "react-query";

import {
    useMutationMode,
    useCancelNotification,
    useCacheQueries,
    useNotification,
    useTranslate,
} from "@hooks";
import { DataContext } from "@contexts/data";
import { ActionTypes } from "@contexts/notification";
import {
    DeleteOneResponse,
    IDataContext,
    MutationMode,
    GetListResponse,
    QueryResponse,
    Context as DeleteContext,
    BaseRecord,
    ContextQuery,
} from "../../interfaces";

type DeleteParams = {
    id: string | number;
};

type UseDeleteReturnType = UseMutationResult<
    DeleteOneResponse,
    unknown,
    DeleteParams,
    DeleteContext
>;

export const useDelete = (
    resource: string,
    mutationModeProp?: MutationMode,
    undoableTimeoutProp?: number,
    onCancel?: (cancelMutation: () => void) => void,
): UseDeleteReturnType => {
    const queryClient = useQueryClient();
    const { deleteOne } = useContext<IDataContext>(DataContext);
    const {
        mutationMode: mutationModeContext,
        undoableTimeout: undoableTimeoutContext,
    } = useMutationMode();

    const { notificationDispatch } = useCancelNotification();
    const notification = useNotification();
    const translate = useTranslate();

    const mutationMode = mutationModeProp ?? mutationModeContext;

    const undoableTimeout = undoableTimeoutProp ?? undoableTimeoutContext;

    if (!resource) {
        throw new Error("'resource' is required for useDelete hook.");
    }

    const cacheQueries = useCacheQueries();

    const mutation = useMutation<
        DeleteOneResponse,
        Error,
        DeleteParams,
        DeleteContext
    >(
        ({ id }) => {
            if (!(mutationMode === "undoable")) {
                return deleteOne(resource, id);
            }

            const updatePromise = new Promise<DeleteOneResponse>(
                (resolve, reject) => {
                    const updateTimeout = setTimeout(() => {
                        resolve(deleteOne(resource, id));
                    }, undoableTimeout);

                    const cancelMutation = () => {
                        clearTimeout(updateTimeout);
                        reject({ message: "mutationCancelled" });
                    };

                    if (onCancel) {
                        onCancel(cancelMutation);
                    } else {
                        notificationDispatch({
                            type: ActionTypes.ADD,
                            payload: {
                                id: id,
                                resource: resource,
                                cancelMutation: cancelMutation,
                                seconds: undoableTimeout,
                            },
                        });
                    }
                },
            );
            return updatePromise;
        },
        {
            onMutate: async (deleteParams) => {
                const previousQueries: ContextQuery[] = [];

                const allQueries = cacheQueries(
                    resource,
                    deleteParams.id.toString(),
                );

                for (const queryItem of allQueries) {
                    const { queryKey } = queryItem;
                    await queryClient.cancelQueries(queryKey);

                    const previousQuery = queryClient.getQueryData<QueryResponse>(
                        queryKey,
                    );

                    if (!(mutationMode === "pessimistic")) {
                        if (previousQuery) {
                            previousQueries.push({
                                query: previousQuery,
                                queryKey,
                            });

                            if (
                                queryKey.includes(`resource/list/${resource}`)
                            ) {
                                const {
                                    data,
                                    total,
                                } = previousQuery as GetListResponse;

                                queryClient.setQueryData(queryKey, {
                                    ...previousQuery,
                                    data: (data ?? []).filter(
                                        (record: BaseRecord) =>
                                            !(
                                                record.id!.toString() ===
                                                deleteParams.id.toString()
                                            ),
                                    ),
                                    total: total - 1,
                                });
                            } else {
                                queryClient.removeQueries(queryKey);
                            }
                        }
                    }
                }

                return {
                    previousQueries: previousQueries,
                };
            },
            onError: (err: Error, _variables, context) => {
                if (context) {
                    for (const query of context.previousQueries) {
                        queryClient.setQueryData(query.queryKey, query.query);
                    }
                }

                if (err.message !== "mutationCancelled") {
                    notification.error({
                        message: translate(
                            "common:notifications.error",
                            "Error",
                        ),
                        description: err.message,
                    });
                }
            },
            onSuccess: (_data, { id }, _context) => {
                const allQueries = cacheQueries(resource, id.toString());
                for (const query of allQueries) {
                    if (
                        query.queryKey.includes(`resource/getOne/${resource}`)
                    ) {
                        queryClient.removeQueries(query.queryKey);
                    }
                }

                notification.success({
                    key: `${id}-${resource}-notification`,
                    message: translate(
                        "common:notifications.deleteSuccess",
                        "Success",
                    ),
                    description: translate(
                        "common:notifications.deleteSuccess",
                        "Successfully deleted",
                    ),
                });
            },
            onSettled: (_data, _error, variables) => {
                const allQueries = cacheQueries(
                    resource,
                    variables.id.toString(),
                );
                for (const query of allQueries) {
                    if (
                        !query.queryKey.includes(`resource/getOne/${resource}`)
                    ) {
                        queryClient.invalidateQueries(query.queryKey);
                    }
                }
            },
        },
    );

    return mutation;
};
