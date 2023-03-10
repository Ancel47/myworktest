import { Refine } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import dataProvider from "@refinedev/simple-rest";
import { Layout } from "components/Layout";
import "index.css";
import { CategoryCreate } from "pages/category/create";
import { CategoryList } from "pages/category/list";

function App() {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                resources={[
                    {
                        name: "categories",
                        list: "/categories",
                        create: "/categories/create",
                    },
                ]}
            >
                <Routes>
                    <Route
                        element={
                            <Layout>
                                <Outlet />
                            </Layout>
                        }
                    >
                        <Route
                            index
                            element={
                                <NavigateToResource resource="categories" />
                            }
                        />
                        <Route path="/categories">
                            <Route index element={<CategoryList />} />
                            <Route path="create" element={<CategoryCreate />} />
                        </Route>
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
}

export default App;
