import { Admin, AuthProvider, Resource } from "@pankod/refine";
import StrapiAuthHelper from "@pankod/refine-strapi-auth";
import DataProvider from "@pankod/refine-strapi";
import axios from "axios";
import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit } from "./components/pages/posts";
import { TOKEN_KEY } from "./constants";

export const API_URL = "https://refine-strapi.pankod.com";

const App = () => {
    const axiosInstance = axios.create();
    const strapiAuthHelper = StrapiAuthHelper(API_URL);

    const authProvider: AuthProvider = {
        login: async ({ username, password }) => {
            const { data, status } = await strapiAuthHelper.login(
                username,
                password,
            );
            if (status === 200) {
                localStorage.setItem(TOKEN_KEY, data.jwt);

                // set header axios instance
                axiosInstance.defaults.headers = {
                    Authorization: `Bearer ${data.jwt}`,
                };

                return Promise.resolve;
            }
            return Promise.reject;
        },
        logout: () => {
            localStorage.removeItem(TOKEN_KEY);
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () => {
            const token = localStorage.getItem(TOKEN_KEY);
            if (token) {
                axiosInstance.defaults.headers = {
                    Authorization: `Bearer ${token}`,
                };
                return Promise.resolve();
            }

            return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
            const token = localStorage.getItem(TOKEN_KEY);
            if (!token) {
                return Promise.reject();
            }

            const { data, status } = await strapiAuthHelper.me(token);
            if (status === 200) {
                const { id, username, email } = data;
                return Promise.resolve({
                    id,
                    username,
                    email,
                });
            }

            return Promise.reject();
        },
    };
    const dataProvider = DataProvider(API_URL, axiosInstance);

    return (
        <Admin authProvider={authProvider} dataProvider={dataProvider}>
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
            />
        </Admin>
    );
};

export default App;
