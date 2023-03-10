import { Refine } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import {
    CategoryList,
    CategoryCreate,
    CategoryEdit,
    CategoryShow,
} from "pages/categories";

import { Header } from "components";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider(API_URL)}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        show: "/posts/show/:id",
                        create: "/posts/create",
                        edit: "/posts/edit/:id",
                    },
                    {
                        name: "categories",
                        list: "/categories",
                        show: "/categories/show/:id",
                        create: "/categories/create",
                        edit: "/categories/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route
                        element={
                            <Layout Header={Header}>
                                <Outlet />
                            </Layout>
                        }
                    >
                        <Route
                            index
                            element={<NavigateToResource resource="posts" />}
                        />

                        <Route path="posts">
                            <Route index element={<PostList />} />
                            <Route path="show/:id" element={<PostShow />} />
                            <Route path="create" element={<PostCreate />} />
                            <Route path="edit/:id" element={<PostEdit />} />
                        </Route>

                        <Route path="categories">
                            <Route index element={<CategoryList />} />
                            <Route path="show/:id" element={<CategoryShow />} />
                            <Route path="create" element={<CategoryCreate />} />
                            <Route path="edit/:id" element={<CategoryEdit />} />
                        </Route>

                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
