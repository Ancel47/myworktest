import { Refine } from "@pankod/refine-core";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router";
import "@pankod/refine-core/dist/styles.min.css";

import { Layout, Header, Sider, Title } from "@pankod/refine-antd";
// import "./index.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                    canDelete: true,
                },
            ]}
            warnWhenUnsavedChanges={true}
            Layout={Layout}
            Header={Header}
            Title={Title}
            Sider={Sider}
        />
    );
};

export default App;
