import React from "react";
import { Admin, Resource, AuthProvider, JsonServer } from "readmin";

import { PostList } from "./post";
import { CategoryList } from "./category";
import { UserList } from "./user";

const App: React.FC = () => {
    const authProvider: AuthProvider = {
        login: (params: any) => {
            if (params.username === "admin") {
                localStorage.setItem("username", params.username);
                return Promise.resolve();
            }

            return Promise.reject();
        },
        logout: () => {
            localStorage.removeItem("username");
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("username")
                ? Promise.resolve()
                : Promise.reject(),
        // getPermissions: () => Promise.reject("Unknown method"),
        userIdentity: () =>
            Promise.resolve({
                id: 1,
                fullName: "Jane Doe",
                avatar:
                    "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
            }),
    };

    return (
        <Admin
            authProvider={authProvider}
            dataProvider={JsonServer("https://readmin-fake-rest.pankod.com")}
        >
            <Resource name="posts" list={PostList} />
            <Resource name="categories" list={CategoryList} />
            <Resource name="users" list={UserList} />
        </Admin>
    );
};

export default App;
