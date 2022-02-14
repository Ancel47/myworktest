import { useRouter } from "next/router";
import Link from "next/link";

import qs from "qs";

import type { IRouterProvider } from "@pankod/refine-core";

import { Prompt } from "./prompt";

export const RouterProvider: IRouterProvider = {
    useHistory: () => {
        const router = useRouter();
        const { push, replace, back } = router;
        return {
            push,
            replace,
            goBack: back,
        };
    },
    useLocation: () => {
        const router = useRouter();
        const { query, asPath } = router;

        const queryParams = qs.stringify(query);

        return {
            pathname: asPath.split("?")[0],
            search: queryParams && `?${queryParams}`,
        };
    },
    useParams: <Params>() => {
        const router = useRouter();

        const { query } = router;
        return query as unknown as Params;
    },
    Prompt,
    Link,
};
