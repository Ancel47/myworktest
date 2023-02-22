import React from "react";
import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
} from "@tanstack/react-query";
import qs from "qs";

import { AuthContext } from "@contexts/auth";
import {
    useNavigation,
    useRouterType,
    useGo,
    useParsed,
    useNotification,
    useRouterContext,
} from "@hooks";
import {
    IAuthContext,
    TUpdatePasswordData,
    UpdatePasswordFormTypes,
} from "../../../interfaces";

export type UseUpdatePasswordProps<TVariables extends UpdatePasswordFormTypes> =
    {
        mutationOptions?: Omit<
            UseMutationOptions<TUpdatePasswordData, Error, TVariables, unknown>,
            "mutationFn" | "onError" | "onSuccess"
        >;
    };

/**
 * `useUpdatePassword` calls `updatePassword` method from {@link https://refine.dev/docs/api-references/providers/auth-provider `authProvider`} under the hood.
 *
 * @see {@link https://refine.dev/docs/core/hooks/auth/useUpdatePassword} for more details.
 *
 * @typeParam TData - Result data of the query
 * @typeParam TVariables - Values for mutation function. default `{}`
 *
 */
export const useUpdatePassword = <
    TVariables extends UpdatePasswordFormTypes = {},
>({
    mutationOptions,
}: UseUpdatePasswordProps<TVariables> = {}): UseMutationResult<
    TUpdatePasswordData,
    Error,
    TVariables,
    unknown
> => {
    const routerType = useRouterType();

    const go = useGo();
    const { replace } = useNavigation();

    const { updatePassword: updatePasswordFromContext } =
        React.useContext<IAuthContext>(AuthContext);

    const { close, open } = useNotification();

    const parsed = useParsed();
    const { useLocation } = useRouterContext();
    const { search } = useLocation();

    const params = React.useMemo(() => {
        if (routerType === "legacy") {
            const queryStrings = qs.parse(search, {
                ignoreQueryPrefix: true,
            });
            return queryStrings ?? {};
        } else {
            return parsed.params ?? {};
        }
    }, [search, parsed, routerType]);

    const queryResponse = useMutation<
        TUpdatePasswordData,
        Error,
        TVariables,
        unknown
    >(
        ["useUpdatePassword"],
        async (variables) => {
            return updatePasswordFromContext?.({
                ...params,
                ...variables,
            });
        },
        {
            onSuccess: (redirectPathFromAuth) => {
                if (redirectPathFromAuth !== false) {
                    if (redirectPathFromAuth) {
                        replace(redirectPathFromAuth);
                    }
                }
                close?.("update-password-error");
            },
            onError: (error: any) => {
                open?.({
                    message: error?.name || "Update Password Error",
                    description:
                        error?.message || "Error while updating password",
                    key: "update-password-error",
                    type: "error",
                });
            },
            ...mutationOptions,
        },
    );

    return queryResponse;
};
