import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import {
    Refine,
    DataProvider,
    IResourceItem,
    I18nProvider,
} from "@refinedev/core";

import { MockJSONServer, mockRouterBindings } from "./dataMocks";
import "@testing-library/jest-dom/extend-expect";

interface ITestWrapperProps {
    dataProvider?: DataProvider;
    resources?: IResourceItem[];
    routerInitialEntries?: string[];
    i18nProvider?: I18nProvider;
}

export const TestWrapper: (
    props: ITestWrapperProps,
) => React.FC<{ children: ReactNode }> = ({
    dataProvider,
    resources,
    routerInitialEntries,
    i18nProvider,
}) => {
    // eslint-disable-next-line react/display-name
    return ({ children }): React.ReactElement => {
        return (
            <MemoryRouter initialEntries={routerInitialEntries}>
                <Refine
                    i18nProvider={i18nProvider}
                    dataProvider={dataProvider ?? MockJSONServer}
                    routerProvider={mockRouterBindings()}
                    resources={resources ?? [{ name: "posts" }]}
                    options={{
                        reactQuery: {
                            clientConfig: {
                                defaultOptions: {
                                    queries: {
                                        retry: false,
                                    },
                                },
                            },
                        },
                        disableTelemetry: true,
                    }}
                >
                    {children}
                </Refine>
            </MemoryRouter>
        );
    };
};
export { MockJSONServer, MockRouterProvider } from "./dataMocks";

// re-export everything
export * from "@testing-library/react";
