import { Refine, AuthBindings, Authenticated } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";

import axios from "axios";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { Login } from "pages/login";
import { useKeycloak } from "@react-keycloak/web";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>;
    }

    const authProvider: AuthBindings = {
        login: async () => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const { to } = Object.fromEntries(urlSearchParams.entries());
            await keycloak.login({
                redirectUri: to ? `${window.location.origin}${to}` : undefined,
            });
            return {
                success: false,
                error: new Error("Login failed"),
            };
        },
        logout: async () => {
            try {
                await keycloak.logout({
                    redirectUri: window.location.origin,
                });
                return {
                    success: true,
                    redirectTo: "/login",
                };
            } catch (error) {
                return {
                    success: false,
                    error: new Error("Logout failed"),
                };
            }
        },
        onError: async () => ({}),
        check: async () => {
            try {
                const { token } = keycloak;
                if (token) {
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    return {
                        authenticated: true,
                    };
                } else {
                    return {
                        authenticated: false,
                        logout: true,
                        redirectTo: "/login",
                        error: new Error("Token not found"),
                    };
                }
            } catch (error) {
                return {
                    authenticated: false,
                    logout: true,
                    redirectTo: "/login",
                    error: new Error("Token not found"),
                };
            }
        },
        getPermissions: async () => null,
        getIdentity: async () => {
            if (keycloak?.tokenParsed) {
                return {
                    name: keycloak.tokenParsed.family_name,
                };
            }
            return null;
        },
    };

    return (
        <BrowserRouter>
            <Refine
                authProvider={authProvider}
                dataProvider={dataProvider(API_URL, axios)}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        show: "/posts/show/:id",
                        create: "/posts/create",
                        edit: "/posts/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route
                        element={
                            <Authenticated fallback={<Navigate to="/login" />}>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route
                            index
                            element={<NavigateToResource resource="posts" />}
                        />
                        <Route path="/posts" element={<PostList />} />
                        <Route path="/posts/show/:id" element={<PostShow />} />
                        <Route path="/posts/create" element={<PostCreate />} />
                        <Route path="/posts/edit/:id" element={<PostEdit />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <NavigateToResource resource="posts" />
                            </Authenticated>
                        }
                    >
                        <Route path="/login" element={<Login />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
