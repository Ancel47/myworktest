import { Refine, AuthProvider } from "@pankod/refine-core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
    AuthPage,
} from "@pankod/refine-antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";

import "@pankod/refine-antd/dist/styles.min.css";

import { PostList, PostEdit, PostShow } from "pages/posts";
import { DashboardPage } from "pages/dashboard";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const authProvider: AuthProvider = {
        login: async ({ providerName, email }) => {
            if (providerName === "google") {
                window.location.href =
                    "https://accounts.google.com/o/oauth2/v2/auth";
                return Promise.resolve(false);
            }

            if (providerName === "github") {
                window.location.href =
                    "https://github.com/login/oauth/authorize";
                return Promise.resolve(false);
            }

            localStorage.setItem("email", email);
            return Promise.reject();
        },
        register: (params: any) => {
            if (params.email && params.password) {
                localStorage.setItem("email", params.email);
                return Promise.resolve();
            }
            return Promise.reject();
        },
        updatePassword: (params: any) => {
            if (params.newPassword) {
                //we can update password here
                return Promise.resolve();
            }
            return Promise.reject();
        },
        resetPassword: (params: any) => {
            if (params.email) {
                //we can send email with reset password link here
                return Promise.resolve();
            }
            return Promise.reject();
        },
        logout: () => {
            localStorage.removeItem("email");
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("email")
                ? Promise.resolve()
                : Promise.reject(),
        getPermissions: () => Promise.resolve(["admin"]),
        getUserIdentity: () =>
            Promise.resolve({
                id: 1,
                name: "Jane Doe",
                avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
            }),
    };

    return (
        <Refine
            authProvider={authProvider}
            dataProvider={dataProvider(API_URL)}
            routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        path: "/register",
                        element: <AuthPage type="register" />,
                    },
                    {
                        path: "/reset-password",
                        element: <AuthPage type="resetPassword" />,
                    },
                    {
                        path: "/update-password",
                        element: <AuthPage type="updatePassword" />,
                    },
                ],
            }}
            DashboardPage={DashboardPage}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
            notificationProvider={notificationProvider}
            LoginPage={() => (
                <AuthPage
                    providers={[
                        {
                            name: "google",
                            label: "Sign in with Google",
                            icon: <GoogleOutlined style={{ fontSize: 24 }} />,
                        },
                        {
                            name: "github",
                            label: "Sign in with GitHub",
                            icon: <GithubOutlined style={{ fontSize: 24 }} />,
                        },
                    ]}
                />
            )}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        />
    );
};

export default App;
