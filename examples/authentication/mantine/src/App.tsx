import { AuthProvider, Refine } from "@pankod/refine-core";
import {
    AuthPage,
    MantineProvider,
    NotificationsProvider,
    Layout,
    ErrorComponent,
    ReadyPage,
    notificationProvider,
    LightTheme,
} from "@pankod/refine-mantine";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { BrandGoogle, BrandGithub } from "tabler-icons-react";

import { PostCreate, PostEdit, PostList } from "./pages";

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
            return Promise.resolve();
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
        forgotPassword: (params: any) => {
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
        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
            <NotificationsProvider position="top-right">
                <Refine
                    dataProvider={dataProvider(
                        "https://api.fake-rest.refine.dev",
                    )}
                    authProvider={authProvider}
                    routerProvider={{
                        ...routerProvider,
                        routes: [
                            {
                                path: "/register",
                                element: (
                                    <AuthPage
                                        type="register"
                                        providers={[
                                            {
                                                name: "google",
                                                label: "Sign in with Google",
                                                icon: <BrandGoogle />,
                                            },
                                            {
                                                name: "github",
                                                label: "Sign in with GitHub",
                                                icon: <BrandGithub />,
                                            },
                                        ]}
                                    />
                                ),
                            },
                            {
                                path: "/reset-password",
                                element: <AuthPage type="forgotPassword" />,
                            },
                            {
                                path: "/update-password",
                                element: <AuthPage type="updatePassword" />,
                            },
                        ],
                    }}
                    notificationProvider={notificationProvider}
                    LoginPage={() => (
                        <AuthPage
                            providers={[
                                {
                                    name: "google",
                                    label: "Sign in with Google",
                                    icon: <BrandGoogle />,
                                },
                                {
                                    name: "github",
                                    label: "Sign in with GitHub",
                                    icon: <BrandGithub />,
                                },
                            ]}
                        />
                    )}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    Layout={Layout}
                    resources={[
                        {
                            name: "posts",
                            list: PostList,
                            edit: PostEdit,
                            create: PostCreate,
                        },
                    ]}
                />
            </NotificationsProvider>
        </MantineProvider>
    );
};

export default App;
