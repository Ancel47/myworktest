import { GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    Layout,
    LightTheme,
    ErrorComponent,
} from "@refinedev/mui";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductList } from "pages/products/list";
import { ProductEdit } from "pages/products/edit";
import { ProductCreate } from "pages/products/create";
import { ProductShow } from "pages/products/show";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ThemeProvider theme={LightTheme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "products",
                                list: "/products",
                                show: "/products/show/:id",
                                create: "/products/create",
                                edit: "/products/edit/:id",
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <Layout>
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="products" />
                                    }
                                />

                                <Route path="/products">
                                    <Route index element={<ProductList />} />
                                    <Route
                                        path="/products/show/:id"
                                        element={<ProductShow />}
                                    />
                                    <Route
                                        path="/products/create"
                                        element={<ProductCreate />}
                                    />
                                    <Route
                                        path="/products/edit/:id"
                                        element={<ProductEdit />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Routes>
                        </Layout>
                        <UnsavedChangesNotifier />
                    </Refine>
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
