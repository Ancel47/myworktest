import { Sandpack } from "@site/src/components/sandpack";
import React from "react";

export function MantineAuth() {
    return (
        <Sandpack
            showNavigator
            previewOnly
            dependencies={{
                "@refinedev/mantine": "latest",
                "@refinedev/core": "latest",
                "@refinedev/simple-rest": "latest",
                "@refinedev/react-router-v6": "latest",
                "@refinedev/inferencer": "latest",
                "@refinedev/react-table": "latest",
                "react-router-dom": "latest",
                "react-router": "latest",
                "@tabler/icons": "^1.119.0",
                "@emotion/react": "^11.8.2",
                "@mantine/core": "^5.10.4",
                "@mantine/hooks": "^5.10.4",
                "@mantine/notifications": "^5.10.4",
            }}
            startRoute="/login"
            files={{
                "/App.tsx": {
                    code: AppTsxCode,
                },
            }}
        />
    );
}

const AppTsxCode = /* tsx */ `
import React from "react";

import { Global, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { Authenticated, Refine } from "@refinedev/core";
import {
  AuthPage,
  ErrorComponent,
  RefineThemes,
  ThemedLayoutV2,
} from "@refinedev/mantine";
import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";


export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider
        theme={RefineThemes.Blue}
        withNormalizeCSS
        withGlobalStyles
      >
        <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
        <NotificationsProvider position="top-right">
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            authProvider={{
              check: async () => ({
                authenticated: false,
                redirectTo: "/login",
              }),
              getIdentity: async () => ({
                id: 1,
                name: "John Doe",
                avatar: "https://i.pravatar.cc/300",
              }),
            }}
            resources={[
              {
                name: "dashboard",
                list: "/",
              },
            ]}
            options={{ syncWithLocation: true }}
          >
            <Routes>
              <Route
                element={
                  <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                    <ThemedLayoutV2>
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route index element={<div>Welcome</div>} />
              </Route>
              <Route
                element={
                  <Authenticated fallback={<Outlet />}>
                    <NavigateToResource resource="dashboard" />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<AuthPage type="login" />} />
                <Route
                  path="/register"
                  element={<AuthPage type="register" />}
                />
                <Route
                  path="/forgot-password"
                  element={<AuthPage type="forgotPassword" />}
                />
                <Route
                  path="/update-password"
                  element={<AuthPage type="updatePassword" />}
                />
              </Route>
              <Route
                element={
                  <Authenticated>
                    <ThemedLayoutV2>
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
          </Refine>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}
`.trim();
