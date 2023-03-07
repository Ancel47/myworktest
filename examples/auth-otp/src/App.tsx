import { AuthBindings, Authenticated, Refine } from "@refinedev/core";
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

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { Login } from "pages/login";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const authProvider: AuthBindings = {
        login: async ({ gsmNumber, code }) => {
            if (code === "1234") {
                localStorage.setItem("gsmNumber", gsmNumber);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
                error: new Error("Login code: 1234"),
            };
        },
        logout: async () => {
            localStorage.removeItem("gsmNumber");
            return {
                success: true,
                redirectTo: "/login",
            };
        },
        onError: async () => ({}),
        check: async () =>
            localStorage.getItem("gsmNumber")
                ? {
                      authenticated: true,
                  }
                : {
                      authenticated: false,
                      redirectTo: "/login",
                  },
        getPermissions: async () => ["admin"],
    };

    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider(API_URL)}
                authProvider={authProvider}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        show: "/posts/show/:id",
                        edit: "/posts/edit/:id",
                        create: "/posts/create",
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
