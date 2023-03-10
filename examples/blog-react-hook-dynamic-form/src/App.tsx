import React from "react";

import { Refine } from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    Layout,
    LightTheme,
    ErrorComponent,
} from "@refinedev/mui";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";

import UserCreate from "pages/userCreate";
import UserEdit from "pages/userEdit";
import UserList from "pages/userList";

import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import dataProvider from "@refinedev/simple-rest";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={LightTheme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        notificationProvider={notificationProvider}
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        resources={[
                            {
                                name: "users",
                                list: "/users",
                                create: "/users/create",
                                edit: "/users/edit/:id",
                            },
                        ]}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Layout>
                                        <Outlet />
                                    </Layout>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="users" />
                                    }
                                />
                                <Route path="/users">
                                    <Route index element={<UserList />} />
                                    <Route
                                        path="create"
                                        element={<UserCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<UserEdit />}
                                    />
                                </Route>
                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                    </Refine>
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
