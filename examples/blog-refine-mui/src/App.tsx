import { GitHubBanner, I18nProvider, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
    ErrorComponent,
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayoutV2,
    ThemedTitleV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
    CategoryShow,
} from "./pages/categories";

import { Dashboard } from "./pages/dashboard";
import {
    ProductCreate,
    ProductEdit,
    ProductList,
    ProductShow,
} from "./pages/products";

function App() {
    const { t, i18n } = useTranslation();

    const i18nProvider: I18nProvider = {
        translate: (key, params) => t(String(key), params),
        changeLocale: (lang) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    return (
        <BrowserRouter>
            <GitHubBanner />
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <CssBaseline />
                    <GlobalStyles
                        styles={{ html: { WebkitFontSmoothing: "auto" } }}
                    />
                    <RefineSnackbarProvider>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider(
                                    "https://api.finefoods.refine.dev",
                                )}
                                notificationProvider={notificationProvider}
                                i18nProvider={i18nProvider}
                                routerProvider={routerBindings}
                                resources={[
                                    {
                                        name: "dashboard",
                                        list: "/dashboard",
                                    },
                                    {
                                        name: "categories",
                                        list: "/categories",
                                        create: "/categories/create",
                                        edit: "/categories/edit/:id",
                                        show: "/categories/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                    {
                                        name: "products",
                                        list: "/products",
                                        create: "/products/create",
                                        edit: "/products/edit/:id",
                                        show: "/products/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    projectId: "RjAC3m-NeoqYc-bB545U",
                                }}
                            >
                                <Routes>
                                    <Route
                                        element={
                                            <ThemedLayoutV2
                                                Header={() => <Header sticky />}
                                                Title={({ collapsed }) => (
                                                    <ThemedTitleV2
                                                        collapsed={collapsed}
                                                        text="Fine-food Dashboard"
                                                        icon={<AppIcon />}
                                                    />
                                                )}
                                            >
                                                <Outlet />
                                            </ThemedLayoutV2>
                                        }
                                    >
                                        <Route
                                            index
                                            element={
                                                <NavigateToResource resource="dashboard" />
                                            }
                                        />
                                        <Route path="/dashboard">
                                            <Route
                                                index
                                                element={<Dashboard />}
                                            />
                                        </Route>
                                        <Route path="/categories">
                                            <Route
                                                index
                                                element={<CategoryList />}
                                            />
                                            <Route
                                                path="create"
                                                element={<CategoryCreate />}
                                            />
                                            <Route
                                                path="edit/:id"
                                                element={<CategoryEdit />}
                                            />
                                            <Route
                                                path="show/:id"
                                                element={<CategoryShow />}
                                            />
                                        </Route>
                                        <Route path="/products">
                                            <Route
                                                index
                                                element={<ProductList />}
                                            />
                                            <Route
                                                path="create"
                                                element={<ProductCreate />}
                                            />
                                            <Route
                                                path="edit/:id"
                                                element={<ProductEdit />}
                                            />
                                            <Route
                                                path="show/:id"
                                                element={<ProductShow />}
                                            />
                                        </Route>
                                        <Route
                                            path="*"
                                            element={<ErrorComponent />}
                                        />
                                    </Route>
                                </Routes>

                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                            <DevtoolsPanel />
                        </DevtoolsProvider>
                    </RefineSnackbarProvider>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
