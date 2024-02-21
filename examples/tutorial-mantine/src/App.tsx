import { GitHubBanner, Refine } from "@refinedev/core";
import {
    useNotificationProvider,
    ThemedLayoutV2,
    RefineThemes,
    ErrorComponent,
} from "@refinedev/mantine";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlogPostList } from "./pages/blog-posts/list";
import { BlogPostCreate } from "./pages/blog-posts/create";
import { BlogPostEdit } from "./pages/blog-posts/edit";
import { BlogPostShow } from "./pages/blog-posts/show";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <MantineProvider
                theme={RefineThemes.Blue}
            >
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(
                        "https://api.fake-rest.refine.dev",
                    )}
                    notificationProvider={useNotificationProvider}
                    resources={[
                        {
                            name: "blog_posts",
                            list: "/blog-posts",
                            show: "/blog-posts/show/:id",
                            create: "/blog-posts/create",
                            edit: "/blog-posts/edit/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                    ]}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <ThemedLayoutV2>
                        <Routes>
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="blog_posts" />
                                }
                            />

                            <Route path="/blog-posts">
                                <Route index element={<BlogPostList />} />
                                <Route
                                    path="show/:id"
                                    element={<BlogPostShow />}
                                />
                                <Route
                                    path="create"
                                    element={<BlogPostCreate />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<BlogPostEdit />}
                                />
                            </Route>

                            <Route path="*" element={<ErrorComponent />} />
                        </Routes>
                    </ThemedLayoutV2>
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
                <Notifications />
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
