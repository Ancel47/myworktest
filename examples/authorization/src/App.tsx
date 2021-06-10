import { Admin, Resource, AuthProvider } from "@pankod/refine";
import dataProvider from "@pankod/refine-json-server";
import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const API_URL = "https://refine-fake-rest.pankod.com";

const mockUsers = [
    {
        username: "admin",
        roles: ["admin"],
    },
    {
        username: "editor",
        roles: ["editor"],
    },
];

const App: React.FC = () => {
    const authProvider: AuthProvider = {
        login: ({ username, password }) => {
            // Suppose we actually send a request to the back end here.
            const user = mockUsers.find((item) => item.username === username);

            if (user) {
                localStorage.setItem("auth", JSON.stringify(user));
                return Promise.resolve();
            }

            return Promise.reject();
        },
        logout: () => {
            localStorage.removeItem("auth");
            return Promise.resolve();
        },
        checkError: (error) => {
            if (error && error.statusCode === 401) {
                return Promise.reject();
            }

            return Promise.resolve();
        },
        checkAuth: () =>
            localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
        getPermissions: () => {
            const auth = localStorage.getItem("auth");
            if (auth) {
                const parsedUser = JSON.parse(auth);
                return Promise.resolve(parsedUser.roles);
            }
            return Promise.reject();
        },
        getUserIdentity: () => {
            const auth = localStorage.getItem("auth");
            if (auth) {
                const parsedUser = JSON.parse(auth);
                return Promise.resolve(parsedUser.username);
            }
            return Promise.reject();
        },
    };

    return (
        <Admin authProvider={authProvider} dataProvider={dataProvider(API_URL)}>
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
                show={PostShow}
            />
        </Admin>
    );
};

export default App;
