import React from "react";

import { Refine } from "@pankod/refine-core";
import {
    notificationProvider,
    refineTheme,
    ReadyPage,
    ErrorComponent,
    Layout,
} from "@pankod/refine-chakra-ui";

import { ChakraProvider } from "@chakra-ui/react";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6/legacy";

function App() {
    return (
        <ChakraProvider theme={refineTheme}>
            <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider()}
                ReadyPage={ReadyPage}
                catchAll={<ErrorComponent />}
                Layout={Layout}
                legacyRouterProvider={routerProvider}
            />
        </ChakraProvider>
    );
}

export default App;
