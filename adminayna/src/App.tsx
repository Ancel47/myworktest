import { Admin, Resource, AuthProvider, ILoginForm } from "readmin";
import dataProvider from "readmin-nestjsx-crud";
import axios from "axios";

import { PrizesList, PrizesCreate, PrizeEdit } from "./components/pages/prizes";
import { UsersList, UsersEdit, UsersCreate } from "./components/pages/users";

const axiosInstance = axios.create();

const authProvider: AuthProvider = {
    login: async (params: ILoginForm) => {
        const result = await axios.post("/ayna-crud-api/auth/login", {
            username: params.username,
            password: params.password,
        });
        if (result.data.token) {
            localStorage.setItem("token", result.data.token);
            axiosInstance.defaults.headers = {
                Authorization: `Bearer ${result.data.token}`,
            };
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => {
        if (localStorage.getItem("token")) {
            axiosInstance.defaults.headers = {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            };
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    getPermissions: () => Promise.resolve(["admin"]),
    getUserIdentity: () =>
        Promise.resolve({
            id: 1,
            fullName: "Jane Doe",
            avatar:
                "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
        }),
};

function App() {
    return (
        <Admin
            authProvider={authProvider}
            dataProvider={dataProvider("/ayna-crud-api/admin", axiosInstance)}
        >
            <Resource
                name="prizes"
                list={PrizesList}
                edit={PrizeEdit}
                create={PrizesCreate}
                canDelete
            />
            <Resource
                name="users"
                list={UsersList}
                edit={UsersEdit}
                create={UsersCreate}
                canDelete
            />
        </Admin>
    );
}

export default App;
