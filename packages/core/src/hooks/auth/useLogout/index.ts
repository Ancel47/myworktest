import React from "react";

import { AuthContext } from "@contexts/auth";
import { IAuthContext } from "../../../interfaces";
import { useNavigation } from "@hooks/navigation";

export const useLogout = () => {
    const { push } = useNavigation();
    const authContext = React.useContext<IAuthContext>(AuthContext);

    const logout = React.useCallback(
        (redirectPath = "/login") =>
            authContext
                .logout()
                .then((data) => {
                    push(redirectPath);
                    Promise.resolve(data);
                })
                .catch((error) => Promise.reject(error)),
        [],
    );

    return logout;
};
