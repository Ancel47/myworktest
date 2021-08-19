---
id: useEditableTable
title: useEditableTable
---

import editButton from '@site/static/img/hooks/useEditableTable/edit-button.gif';
import rowClickEdit from '@site/static/img/hooks/useEditableTable/row-click-edit.gif';

`useEditeableTable` allows you to implement edit feature on the table with ease, on top of all the features that [`useTable`][useTable] provides. 
`useEditableTable` return properties that can be used on Ant Desing's [`<Table>`][Table] and [`<Form>`][Form] components.

## Editing with buttons

Let's say that we want to make the `Post` data where we show the `id` and `title` values a listing page:
```tsx title="/interfaces/index.d.ts"
export interface IPost {
    id: string;
    title: string;
}
```

This time, to add the edit feature, we have to cover the `<Table>` component with a `<Form>`component and pass the properties coming from `useEditableTable` to the corresponding components:

```tsx title="/pages/posts/list.tsx"
import { List, Table, TextField, useTable } from "@pankod/refine";

import { IPost } from "interfaces";

export const PostList: React.FC = () => {
    //highlight-next-line
    const { tableProps, formProps } = useEditableTable<IPost>();

    return (
        <List>
            //highlight-start
            <Form {...formProps}>
                <Table {...tableProps} rowKey="id">
                    <Table.Column dataIndex="id" title="ID" />
                    <Table.Column dataIndex="title" title="Title" />
                </Table>
                //highlight-end
            </Form>
        </List>
    );
};
```

<br />

Now lets add a column for edit buttons:

```tsx title="/pages/posts/list.tsx"
import {
    List,
    Table,
    Form,
    //highlight-start
    Space,
    Button,
    SaveButton,
    EditButton,
    //highlight-end
    useEditableTable,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostList: React.FC = () => {
    const {
        tableProps,
        formProps,
        //highlight-start
        isEditing,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps,
        //highlight-end
    } = useEditableTable<IPost>();

    return (
        <List>
            <Form {...formProps}>
                <Table {...tableProps} rowKey="id">
                    <Table.Column key="id" dataIndex="id" title="ID" />
                    <Table.Column key="title" dataIndex="title" title="Title" />
                    //highlight-start
                    <Table.Column<IPost>
                        title="Actions"
                        dataIndex="actions"
                        key="actions"
                        render={(_text, record) => {
                            if (isEditing(record.id)) {
                                return (
                                    <Space>
                                        <SaveButton
                                            {...saveButtonProps}
                                            size="small"
                                        />
                                        <Button
                                            {...cancelButtonProps}
                                            size="small"
                                        >
                                            Cancel
                                        </Button>
                                    </Space>
                                );
                            }
                            return (
                                <Space>
                                    <EditButton
                                        {...editButtonProps(record.id)}
                                        size="small"
                                    />
                                </Space>
                            );
                        }}
                    />
                    //highlight-end
                </Table>
            </Form>
        </List>
    );
};
```

:::tip
`isEditing` function that returns from `useEditableTable` lets us check whether a line is currently in edit mode or not.
:::

<br />

For now, our post is not editable yet. If a post is being edited, we must show editable columns inside a `<Form.Item>` using conditional rendering:

```tsx title="/pages/posts/list.tsx"
import {
    List,
    Table,
    Form,
    Space,
    Button,
    SaveButton,
    EditButton,
    //highlight-start
    Input,
    TextField,
    //highlight-end
    useEditableTable,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostList: React.FC = () => {
    const {
        tableProps,
        formProps,
        isEditing,
        saveButtonProps,
        cancelButtonProps,
        editButtonProps,
    } = useEditableTable<IPost>();

    return (
        <List>
            <Form {...formProps}>
                <Table {...tableProps} rowKey="id">
                    <Table.Column key="id" dataIndex="id" title="ID" />
                    <Table.Column<IPost>
                        key="title"
                        dataIndex="title"
                        title="Title"
                        //highlight-start
                        render={(value, data: any) => {
                            if (isEditing(data.id)) {
                                return (
                                    <Form.Item
                                        name="title"
                                        style={{ margin: 0 }}
                                    >
                                        <Input />
                                    </Form.Item>
                                );
                            }
                            return <TextField value={value} />;
                        }}
                        //highlight-end
                    />
                    <Table.Column<IPost>
                        title="Actions"
                        dataIndex="actions"
                        key="actions"
                        render={(_text, record) => {
                            if (isEditing(record.id)) {
                                return (
                                    <Space>
                                        <SaveButton
                                            {...saveButtonProps}
                                            size="small"
                                        />
                                        <Button
                                            {...cancelButtonProps}
                                            size="small"
                                        >
                                            Cancel
                                        </Button>
                                    </Space>
                                );
                            }
                            return (
                                <Space>
                                    <EditButton
                                        {...editButtonProps(record.id)}
                                        size="small"
                                    />
                                </Space>
                            );
                        }}
                    />
                </Table>
            </Form>
        </List>
    );
};
```

With this, when a user clicks on the edit button, `isEditing(lineId)` will turn `true` for the relevant line. This will also cause `<TextInput>` to show up on the line thats being edited. When the editing is finished, new value can be saved by clicking `<SaveButton>`.

:::tip
By giving the `<Table.Column>` component a unique `render` property, you can render the value in that column however you want.
Refer to [`<Table.Column>`][Table.Column] documentation for more information.
:::

<div style={{textAlign: "center"}}>
    <img src={editButton} />
</div>

## Editing by clicking to row

A line with the `id` value can be put to edit mode programatically by using the `setEditId` function that returns from `useEditableTable`.

The `onRow` property of the `<Table>` component can be used to put a line to editing mode when its clicked on. Function given to the `onRow` property is called everytime one of these lines are clicked on, with the information of which line was clicked on.

We can use `setEditId` to put a line to edit mode whenever its clicked on.

```tsx title="/pages/posts/list.tsx"
import {
    List,
    Table,
    Form,
    Input,
    TextField,
    useEditableTable,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostList: React.FC = () => {
    const {
        tableProps,
        formProps,
        isEditing,
        //highlight-next-line
        setEditId,
    } = useEditableTable<IPost>();

    return (
        <List>
            <Form {...formProps}>
                <Table
                    {...tableProps}
                    key="id"
                    //highlight-start
                    onRow={(record) => ({
                        onClick: (event: any) => {
                            if (event.target.nodeName === "TD") {
                                setEditId && setEditId(record.id);
                            }
                        },
                    })}
                    //highlight-end
                >
                    <Table.Column key="id" dataIndex="id" title="ID" />
                    <Table.Column<IPost>
                        key="title"
                        dataIndex="title"
                        title="Title"
                        render={(value, data: any) => {
                            if (isEditing(data.id)) {
                                return (
                                    <Form.Item
                                        name="title"
                                        style={{ margin: 0 }}
                                    >
                                        <Input />
                                    </Form.Item>
                                );
                            }
                            return <TextField value={value} />;
                        }}
                    />
                </Table>
            </Form>
        </List>
    );
};
```

<div style={{textAlign: "center"}}>
    <img src={rowClickEdit} />
</div>

## API

| Key              | Description                                                                                                                                        | Type                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| permanentFilter  | Default and unchangeable filter.                                                                                                                   | [`CrudFilters`][CrudFilters]                                |
| initialCurrent   | Initial page index.                                                                                                                                | `number`                                                    |
| initialPageSize  | Number of records shown per initial number of   pages.                                                                                             | `number`                                                    |
| initialSorter    | Initial sorting.                                                                                                                                   | [`CrudSorting`][CrudSorting]                                |
| initialFilter    | Initial filtering.                                                                                                                                 | [`CrudFilters`][CrudFilters]                                |
| syncWithLocation | Sortings, filters, page index and records shown per page are tracked by browser history.                                                           | `boolean`                                                   |
| onSearch         | When the search form is submitted, it creates the 'CrudFilters' object. Refer to [search form][Table Search] to learn how to create a search form. | `Function`                                                  |
| queryOptions     | `react-query`'s `useQuery` options                                                                                                                 | ` UseQueryOptions<`<br/>`{ data: TData[]; },`<br/>`TError>` |

### Type Parameters

| Property         | Desription                                                   | Type                       | Default                    |
| ---------------- | ------------------------------------------------------------ | -------------------------- | -------------------------- |
| TData            | Result data of the query. Extends [`BaseRecord`][BaseRecord] | [`BaseRecord`][BaseRecord] | [`BaseRecord`][BaseRecord] |
| TError           | Custom error object that extends [`HttpError`][HttpError]    | [`HttpError`][HttpError]   | [`HttpError`][HttpError]   |
| TVariables       | Values for params                                            |                            | `{}`                       |
| TSearchVariables | Values for search params                                     |                            | `{}`                       |

### Return values

| Property          | Description                                             | Type                                                                                              |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| searchFormProps   | Ant Design [`<Form>`][Form] props                       | [`FormProps<TSearchVariables>`][Form]                                                             |
| tableProps        | Ant Design [`<Table>`][Table] props                     | [`TableProps<TData>`][Table]                                                                      |
| tableQueryResult  | Result of the `react-query`'s `useQuery`                | [`QueryObserverResult<{`<br/>` data: TData[];`<br/>` total: number; },`<br/>` TError>`][useQuery] |
| sorter            | Current sorting state                                   | [`CrudSorting`][CrudSorting]                                                                      |
| filters           | Current filters state                                   | [`CrudFilters`][CrudFilters]                                                                      |
| form              | Ant Design [`<Form>`][Form] instance                    | [`FormInstance`][FormInstance]                                                                    |
| formProps         | Ant Design [`<Form>`][Form] props                       | [`FormProps`][Form]                                                                               |
| saveButtonProps   | Props for a submit button                               | `{ disabled: boolean; onClick: () => void; }`                                                     |
| cancelButtonProps | Props for a cancel button                               | `{ onClick: () => void; }`                                                                        |
| editButtonProps   | Props for an edit button                                | `{ onClick: () => void; }`                                                                        |
| queryResult       | Result of the query of a record                         | [`QueryObserverResult<T>`][useQuery]                                                              |
| mutationResult    | Result of the mutation triggered by submitting the form | [`UseMutationResult<T>`][useMutation]                                                             |
| formLoading       | Loading state of form request                           | `boolean`                                                                                         |
| cloneId           | Record id for clone action                              | `"string"` \| `"number"`                                                                          |
| setCloneId        | `cloneId` setter                                        | `Dispatch<SetStateAction<` `string` \| `number` \| `undefined>>`                                  |
| editId            | Record id for edit action                               | `"string"` \| `"number"`                                                                          |
| setEditId         | `editId` setter                                         | `Dispatch<SetStateAction<` `string` \| `number` \| `undefined>>`                                  |
| isEditing         | Check if is editing                                     | `(id: string) => boolean`                                                                         |

<br />

## Live Codesandbox Example

<iframe src="https://codesandbox.io/embed/refine-use-editable-table-example-id4g3?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Flist.tsx&theme=dark&view=preview"
     style={{width: "100%", height:"80vh", border: "0px", borderRadius: "8px", overflow:"hidden"}}
     title="refine-use-editable-table-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

[Table]: https://ant.design/components/table/#API
[Form]: https://ant.design/components/form/#API
[useTable]: /api-references/hooks/table/useTable.md
[useQuery]: https://react-query.tanstack.com/reference/useQuery
[useMutation]: https://react-query.tanstack.com/reference/useMutation
[BaseRecord]: /api-references/interfaces.md#baserecord
[CrudSorting]: /api-references/interfaces.md#crudsorting
[CrudFilters]: /api-references/interfaces.md#crudfilters
[HttpError]: /api-references/interfaces.md#httperror
[Table Search]: /guides-and-concepts/search/table-search.md
[Table.Column]: https://ant.design/components/table/#Column
[FormInstance]: https://ant.design/components/form/#FormInstance