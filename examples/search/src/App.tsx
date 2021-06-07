import { Admin, Resource } from "@pankod/refine";
import dataProvider from "@pankod/refine-json-server";
import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { UserList, UserShow } from "pages/users";

import { Header } from "components";

const API_URL = "https://refine-fake-rest.pankod.com";

const App: React.FC = () => {
    return (
        <Admin dataProvider={dataProvider(API_URL)} Header={Header}>
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
                show={PostShow}
            />
            <Resource name="users" list={UserList} show={UserShow} />
        </Admin>
    );
};

export default App;
