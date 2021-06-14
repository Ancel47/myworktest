import { Admin, Resource, BackTop } from "@pankod/refine";
import dataProvider from "@pankod/refine-json-server";
import "@pankod/refine/dist/styles.min.css";

import { PostList } from "pages/posts";
import React from "react";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <Admin
            dataProvider={dataProvider(API_URL)}
            OffLayoutArea={() => (
                <>
                    <BackTop />
                </>
            )}
        >
            <Resource name="posts" list={PostList} />
        </Admin>
    );
};

export default App;
