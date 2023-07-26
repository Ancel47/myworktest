---
id: graphql
title: GraphQL
sidebar_label: GraphQL
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```tsx live shared
import dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";
const API_URL = "https://api.strapi.refine.dev/graphql";
const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);
```

**refine** [graphql](https://github.com/refinedev/refine/tree/master/packages/graphql) and [strapi-graphql](https://github.com/refinedev/refine/tree/master/packages/strapi-graphql) data provider built with [gql-query-builder](https://github.com/atulmy/gql-query-builder) and [graphql-request](https://github.com/prisma-labs/graphql-request) is made for GraphQL implementation. It aims to create a query dynamically with [gql-query-builder](https://github.com/atulmy/gql-query-builder) and send requests with [graphql-request](https://github.com/prisma-labs/graphql-request).

## GraphQL Query Builder

[GraphQL Query Builder](https://github.com/atulmy/gql-query-builder) allows us to build queries and mutations. The `getList`, `getMany`, and, `getOne` methods in our [`dataProvider`][data-provider] generate a query to send a request. On the other hand, the `create`, `createMany`, `update`, `updateMany`, `deleteOne`, and, `deleteMany` methods generate a mutation to send a request.

In order to create a GraphQL query, our [`dataProvider`][data-provider] has to take some options, such as specifying which fields will come in response, we pass these options to our [`dataProvider`][data-provider] methods with `MetaDataQuery`.

[Refer to the `MetaDataQuery` properties for detailed usage. &#8594](https://github.com/atulmy/gql-query-builder#options)

Hooks and components that support `MetaDataQuery`:

| Supported data hooks                                                         | Supported other hooks                                                              | Supported components                                                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`useUpdate` &#8594](/docs/api-reference/core/hooks/data/useUpdate/)         | [`useForm` &#8594](/docs/api-reference/core/hooks/useForm)                         | [`DeleteButton` &#8594](/docs/api-reference/antd/components/buttons/delete-button)   |
| [`useUpdateMany` &#8594](/docs/api-reference/core/hooks/data/useUpdateMany/) | [`useModalForm` &#8594](/docs/api-reference/antd/hooks/form/useModalForm)          | [`RefreshButton` &#8594](/docs/api-reference/antd/components/buttons/refresh-button) |
| [`useDelete` &#8594](/docs/api-reference/core/hooks/data/useDelete/)         | [`useDrawerForm` &#8594](/docs/api-reference/antd/hooks/form/useDrawerForm)        |                                                                                      |
| [`useDeleteMany` &#8594](/docs/api-reference/core/hooks/data/useDeleteMany/) | [`useStepsForm` &#8594](/docs/api-reference/antd/hooks/form/useStepsForm)          |                                                                                      |
| [`useCreate` &#8594](/docs/api-reference/core/hooks/data/useCreate/)         | [`useTable` &#8594](/docs/api-reference/core/hooks/useTable)                       |                                                                                      |
| [`useCreateMany` &#8594](/docs/api-reference/core/hooks/data/useCreateMany/) | [`useEditableTable` &#8594](/docs/api-reference/antd/hooks/table/useEditableTable) |                                                                                      |
| [`useList` &#8594](/docs/api-reference/core/hooks/data/useList/)             | [`useSimpleList` &#8594](/docs/api-reference/antd/hooks/list/useSimpleList)        |                                                                                      |
| [`useOne` &#8594](/docs/api-reference/core/hooks/data/useOne/)               | [`useShow` &#8594](/docs/api-reference/core/hooks/show/useShow)                    |                                                                                      |
| [`useMany` &#8594](/docs/api-reference/core/hooks/data/useMany/)             | [`useExport` &#8594](/docs/api-reference/core/hooks/import-export/useExport)       |                                                                                      |
| [`useCustom` &#8594](/docs/api-reference/core/hooks/data/useCustom/)         | [`useCheckboxGroup` &#8594](/docs/api-reference/antd/hooks/field/useCheckboxGroup) |                                                                                      |
|                                                                              | [`useSelect` &#8594](/docs/api-reference/core/hooks/useSelect/)                    |                                                                                      |
|                                                                              | [`useRadioGroup` &#8594](/docs/api-reference/antd/hooks/field/useRadioGroup)       |                                                                                      |

## Setup

```bash
npm i @refinedev/core @refinedev/antd @refinedev/strapi-graphql
```

:::caution
To make this example more visual, we used the [`@refinedev/antd`](https://github.com/refinedev/refine/tree/master/packages/refine-antd) package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the [`@refinedev/antd`](https://github.com/refinedev/refine/tree/master/packages/refine-antd) package.
:::

:::info
We used [strapi-graphql](https://github.com/refinedev/refine/tree/master/packages/strapi-graphql) server for this guide. You can customize your data provider for your own GraphQL server.
:::

## Usage

To activate the data provider in `@refinedev/strapi-graphql`, we have to pass the API address with `GraphQLClient`.

```tsx title="src/App.tsx"
import { Refine } from "@refinedev/core";
import {
    Layout,
    ReadyPage,
    notificationProvider,
    ErrorComponent,
} from "@refinedev/antd";
import routerProvider from "@refinedev/react-router-v6";
// highlight-next-line
import dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const client = new GraphQLClient("API_URL");

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerProvider}
                // highlight-next-line
                dataProvider={dataProvider(client)}
                notificationProvider={notificationProvider}
            >
                {/* ... */}
            </Refine>
        </BrowserRouter>
    );
};
```

:::note
With `GraphQLClient` you can do things like add headers for authentication. On the other hand, you can send a request with your query.
:::

## Create Collections

We created two collections on [Strapi](https://strapi.io/) as `posts` and `categories` and added a relation between them. For detailed information on how to create a collection, you can check [here](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html).

You can see the fields of the collections we created as below.

```json title="post"
{
    "id": 1,
    "title": "Eius ea autem.",
    "content": "Explicabo nihil delectus. Nam aliquid sunt numquam...",
    "category": {
        "id": 24,
        "title": "Placeat fuga"
    }
}
```

## List Page

When sending the request, we must specify which fields will come, so we send `fields` in `meta` to hooks that we will fetch data from.

<Tabs
defaultValue="implementation"
values={[
{label: 'Implementation', value: 'implementation'},
{label: 'Output', value: 'output'}
]}>
<TabItem value="implementation">

```tsx live url=http://localhost:5173 previewHeight=450px
setInitialRoutes(["/posts"]);
import { Refine } from "@refinedev/core";
import { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";
import { ConfigProvider, Layout } from "antd";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// visible-block-start
// src/pages/posts/list.tsx

import {
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    useTable,
    useSelect,
    getDefaultSortOrder,
    FilterDropdown,
} from "@refinedev/antd";
import { Table, Space, Select } from "antd";

const PostList = () => {
    const { tableProps, sorter } = useTable<IPost>({
        sorters: {
            initial: [
                {
                    field: "id",
                    order: "asc",
                },
            ],
        },
        // highlight-start
        meta: {
            fields: [
                "id",
                "title",
                {
                    category: ["title"],
                },
            ],
        },
        // highlight-end
    });

    const { selectProps } = useSelect<ICategory>({
        resource: "categories",
        // highlight-start
        meta: {
            fields: ["id", "title"],
        },
        // highlight-end
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                    sorter={{ multiple: 2 }}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                />
                <Table.Column
                    key="title"
                    dataIndex="title"
                    title="Title"
                    sorter={{ multiple: 1 }}
                />
                <Table.Column<IPost>
                    dataIndex="category"
                    title="Category"
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...selectProps}
                            />
                        </FilterDropdown>
                    )}
                    render={(_, record) => {
                        if (record.category) {
                            return record.category.title;
                        }

                        return "-";
                    }}
                />
                <Table.Column<IPost>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
// visible-block-end

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={gqlDataProvider}
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                        },
                    ]}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet />
                                </ThemedLayoutV2>
                            }
                        >
                            <Route path="posts">
                                <Route index element={<PostList />} />
                            </Route>
                        </Route>
                    </Routes>
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

render(<App />);
```

</TabItem>
<TabItem value="output">

This will be the result GraphQL query:

```ts

query ($sort: String, $where: JSON, $start: Int, $limit: Int) {
    posts (sort: $sort, where: $where, start: $start, limit: $limit) {
        id,
        title,
        category {
            title
        }
    }
}
```

</TabItem>
</Tabs>

## Edit Page

On the edit page, `useForm` sends a request with the record id to fill the form. `fields` must be sent in `meta` to determine which fields will come in this request.

<Tabs
defaultValue="implementation"
values={[
{label: 'Implementation', value: 'implementation'},
{label: 'Output', value: 'output'}
]}>
<TabItem value="implementation">

```tsx live url=http://localhost:5173 previewHeight=450px
setInitialRoutes(["/posts/edit/2020"]);
import { Refine } from "@refinedev/core";
import { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";
import { ConfigProvider, Layout } from "antd";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// visible-block-start
// src/pages/posts/edit.tsx

import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Select, Form, Input } from "antd";
import { HttpError } from "@refinedev/core";

interface IPost {
    id: string;
    title: string;
    content: string;
    category: ICategory;
}

interface ICategory {
    id: string;
    title: string;
}

const PostEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<
        IPost,
        HttpError,
        IPost
    >({
        // highlight-start
        meta: {
            fields: [
                "id",
                "title",
                {
                    category: ["id", "title"],
                },
                "content",
            ],
        },
        // highlight-end
    });

    const postData = queryResult?.data?.data;
    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        defaultValue: postData?.category.id,
        // highlight-start
        meta: {
            fields: ["id", "title"],
        },
        // highlight-end
    });

    const { TextArea } = Input;

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form
                {...formProps}
                layout="vertical"
                onFinish={(values) =>
                    formProps.onFinish?.({
                        ...values,
                        category: values.category.id,
                    } as any)
                }
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextArea />
                </Form.Item>
            </Form>
        </Edit>
    );
};
// visible-block-end

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={gqlDataProvider}
                    resources={[
                        {
                            name: "posts",
                            edit: "/posts/edit/:id",
                        },
                    ]}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet />
                                </ThemedLayoutV2>
                            }
                        >
                            <Route path="posts">
                                <Route path="edit/:id" element={<PostEdit />} />
                            </Route>
                        </Route>
                    </Routes>
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

render(<App />);
```

:::info
The create page is largely the same as the edit page, there is no need to pass `meta` to [`useForm`](/docs/api-reference/core/hooks/useForm) on the create page. If you want to use the created record as a response after the request, you can pass the `fields` with `meta`.
:::

</TabItem>
<TabItem value="output">

This will be the result GraphQL query:

```ts
mutation ($input: updatePostInput) {
    updatePost (input: $input) {
        post  {
            id
        }
    }
}
```

</TabItem>
</Tabs>

## Show Page

`<Show>` component includes the [`<RefreshButton>`](/docs/api-reference/antd/components/buttons/refresh-button) by default. We can pass `refetch` method of `queryResult` to its `onClick`. This method repeats the last request made by the query. So it refreshes the data that is shown in page.

<Tabs
defaultValue="implementation"
values={[
{label: 'Implementation', value: 'implementation'},
{label: 'Output', value: 'output'}
]}>
<TabItem value="implementation">

```tsx live url=http://localhost:5173 previewHeight=450px
setInitialRoutes(["/posts/show/2020"]);
import { Refine } from "@refinedev/core";
import { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";
import { ConfigProvider, Layout } from "antd";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// visible-block-start
// src/pages/posts/edit.tsx

import { Show, RefreshButton } from "@refinedev/antd";
import { Select, Form, Input, Typography } from "antd";
import { useShow } from "@refinedev/core";

const PostShow: React.FC = () => {
    const { Title, Text } = Typography;

    const { queryResult } = useShow<IPost>({
        resource: "posts",
        // highlight-start
        meta: {
            fields: [
                "id",
                "title",
                {
                    category: ["title"],
                },
                "content",
            ],
        },
        // highlight-end
    });
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show
            isLoading={isLoading}
            // highlight-next-line
            headerProps={{
                extra: <RefreshButton onClick={() => queryResult.refetch()} />,
            }}
        >
            <Title level={5}>Id</Title>
            <Text>{record?.id}</Text>

            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>

            <Title level={5}>Category</Title>
            <Text>{record?.category.title}</Text>

            <Title level={5}>Content</Title>
            <Text value={record?.content} />
        </Show>
    );
};
// visible-block-end

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={gqlDataProvider}
                    resources={[
                        {
                            name: "posts",
                            show: "/posts/show/:id",
                        },
                    ]}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet />
                                </ThemedLayoutV2>
                            }
                        >
                            <Route path="posts">
                                <Route path="show/:id" element={<PostShow />} />
                            </Route>
                        </Route>
                    </Routes>
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

render(<App />);
```

</TabItem>
<TabItem value="output">

This will be the result GraphQL query:

```ts
mutation ($input: updatePostInput) {
    updatePost (input: $input) {
        post  {
            id
        }
    }
}
```

</TabItem>
</Tabs>

## Usage with Inferencer

You can also use `@refinedev/inferencer` package to generate sample codes for your views. Since the GraphQL data providers rely on `meta` fields, you'll need to provide some `meta` values beforehand and then Inferencer will use these values to infer the fields of the data provider's response, generate a code and a preview.

[Check out Inferencer docs for more information. &#8594](/docs/packages/documentation/inferencer/#usage-with-graphql-backends-and-meta-values)

## Example

<CodeSandboxExample path="data-provider-strapi-graphql" />

[data-provider]: /docs/api-reference/core/providers/data-provider/
