import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
    AuthPage,
} from "@refinedev/antd";
import { DataProvider } from "@refinedev/strapi-v4";
import routerProvider, {
    CatchAllNavigate,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";

import { StoreProvider } from "context/store";
import { CustomSider } from "components/sider";
import { ProductList } from "pages/product";
import { OrderList, OrderCreate, OrderEdit } from "pages/order";
import { API_URL } from "./constants";
import { authProvider, axiosInstance } from "./authProvider";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <StoreProvider>
                <Refine
                    authProvider={authProvider}
                    dataProvider={DataProvider(API_URL + "/api", axiosInstance)}
                    routerProvider={routerProvider}
                    resources={[
                        {
                            name: "products",
                            list: "/products",
                        },
                        {
                            name: "orders",
                            list: "/orders",
                            create: "/orders/create",
                            edit: "/orders/edit/:id",
                        },
                    ]}
                    notificationProvider={notificationProvider}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <Authenticated
                                    fallback={<CatchAllNavigate to="/login" />}
                                >
                                    <Layout Sider={CustomSider}>
                                        <Outlet />
                                    </Layout>
                                </Authenticated>
                            }
                        >
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="products" />
                                }
                            />

                            <Route path="products">
                                <Route index element={<ProductList />} />
                            </Route>

                            <Route path="orders">
                                <Route index element={<OrderList />} />
                                <Route
                                    path="create"
                                    element={<OrderCreate />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<OrderEdit />}
                                />
                            </Route>
                        </Route>

                        <Route
                            element={
                                <Authenticated fallback={<Outlet />}>
                                    <NavigateToResource resource="posts" />
                                </Authenticated>
                            }
                        >
                            <Route
                                path="/login"
                                element={<AuthPage type="login" />}
                            />
                        </Route>

                        <Route
                            element={
                                <Authenticated>
                                    <Layout Sider={CustomSider}>
                                        <Outlet />
                                    </Layout>
                                </Authenticated>
                            }
                        >
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    <UnsavedChangesNotifier />
                </Refine>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;
