"use client";

import { useNotificationProvider } from "@refinedev/antd";
import { AuthBindings, GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router/app";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

import { ColorModeContextProvider } from "@contexts/color-mode";
import { dataProvider } from "@providers/data-provider";
import "@refinedev/antd/dist/reset.css";

export const App = (props: React.PropsWithChildren) => {
    return (
        <SessionProvider>
            <MyApp {...props} />
        </SessionProvider>
    );
};

const MyApp = (props: React.PropsWithChildren) => {
    const { data, status } = useSession();
    const to = usePathname();

    if (status === "loading") {
        return <span>loading...</span>;
    }

    const authProvider: AuthBindings = {
        login: async ({ providerName, email, password }) => {
            if (providerName) {
                signIn(providerName, {
                    callbackUrl: to ? to.toString() : "/",
                    redirect: true,
                });

                return {
                    success: true,
                };
            }

            const signUpResponse = await signIn("CredentialsSignUp", {
                email,
                password,
                callbackUrl: to ? to.toString() : "/",
                redirect: false,
            });

            if (!signUpResponse) {
                return {
                    success: false,
                };
            }

            const { ok, error } = signUpResponse;

            if (ok) {
                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
                error: new Error(error?.toString()),
            };
        },
        logout: async () => {
            signOut({
                redirect: true,
                callbackUrl: "/login",
            });

            return {
                success: true,
            };
        },
        onError: async (error) => {
            console.log("onError", error);
            if (error.response?.status === 401) {
                return {
                    logout: true,
                };
            }

            return {
                error,
            };
        },
        check: async () => {
            if (status === "unauthenticated") {
                return {
                    authenticated: false,
                    redirectTo: "/login",
                };
            }

            return {
                authenticated: true,
            };
        },
        getPermissions: async () => {
            return null;
        },
        getIdentity: async () => {
            if (data?.user) {
                const { user } = data;
                return {
                    name: user.name,
                    avatar: user.image,
                };
            }

            return null;
        },
    };

    return (
        <>
            <GitHubBanner />
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider}
                        notificationProvider={useNotificationProvider}
                        authProvider={authProvider}
                        resources={[
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                                show: "/blog-posts/show/:id",
                                meta: {
                                    canDelete: true,
                                },
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
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                            useNewQueryKeys: true,
                        }}
                    >
                        {props.children}
                        <RefineKbar />
                    </Refine>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </>
    );
};
