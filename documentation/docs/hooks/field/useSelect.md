---
id: useSelect
title: useSelect
---

import basicUsage from '@site/static/img/hooks/useSelect/basic-usage.png';
import search from '@site/static/img/hooks/useSelect/search.png';

`useSelect` hook allows you to manage an Ant Design [Select](https://ant.design/components/select/) component when records in a resource needs to be used as select options.

## Usage

We'll demonstrate how to get data at `/categories` endpoint from `https://api.fake-rest.refine.dev` REST API.

```ts title="https://api.fake-rest.refine.dev/categories"
{
    [
        {
            id: 1,
            title: "E-business",
        },
        {
            id: 2,
            title: "Virtual Invoice Avon",
        },
        {
            id: 3,
            title: "Unbranded",
        },
    ];
}
```

```tsx title="pages/posts/create.tsx"
import { Form, Select, useSelect } from "@pankod/refine";

import { ICategory } from "interfaces";

export const PostCreate = () => {
    //highlight-start
    const { selectProps } = useSelect<ICategory>({
        resource: "categories",
    });
    //highlight-end

    return (
        <Form>
            ...
            <Form.Item label="Categories" name="categories">
                //highlight-next-line
                <Select {...selectProps} />
            </Form.Item>
            ...
        <Form>
    );
};
```

```ts title="interfaces/index.d.ts"
export interface ICategory {
    id: string;
    title: string;
}
```

<div>
    <img src={basicUsage} />
</div>
<br/>

All we have to do is pass the `selectProps` it returns to the `<Select>` component.

<div>
    <img src={search} />
</div>
<br/>

:::caution attention
By default, refine does the search using the `useList` hook and passes it to the search parameter. If you get a problem you should check your `getList` function in your Data Provider. If you want to change this behavior to make client-side filtering, you can examine [this](https://ant.design/components/select/#components-select-demo-search-sort) example.
:::

`useSelect` uses the `useList` hook for fetching data. [Refer to `useList` hook for details. &#8594](../data/useList.md)

## Options

### `resource`

```tsx
const { selectProps } = useSelect({
    //highlight-next-line
    resource: "categories",
});
```

`resource` property determines API resource endpoint to fetch records from data provider. It returns properly configured `options` values for select options.

[Refer to Ant Design `Select` component documentation for detailed info for `options`. &#8594](https://ant.design/components/select)

### `defaultValue`

```tsx
const { selectProps } = useSelect({
    resource: "categories",
    //highlight-next-line
    defaultValue: "1",
});
```

Adds extra `options` to `<Select>` component. It uses `useMany` so `defaultValue` can be an array of strings like follows.

```ts
defaultValue: ["1", "2"],
```

[Refer to `useMany` documentation for detailed usage. &#8594](../data/useMany.md)

:::tip
Can use `defaultValue` property when edit a record in `<Edit>` component.
:::

### `optionLabel` and `optionValue`

```tsx
const { selectProps } = useSelect({
    resource: "categories",
    //highlight-start
    optionLabel: "title",
    optionValue: "id",
    //highlight-end
});
```

Allows you to change the values and appearance of your options. Default values are `optionLabel = "title"` and `optionValue = "id"`.

### `filters`

```tsx
const { selectProps } = useSelect({
    resource: "categories",
    //highlight-start
    filters: [
        {
            field: "isActive",
            operator: "eq",
            value: true,
        },
    ],
    //highlight-end
});
```

It allows us to add some filters while fetching the data. For example, if you want to list only active records.

### `sort`

```tsx
const { selectProps } = useSelect({
    resource: "categories",
    //highlight-start
    sort: [
        {
            field: "title",
            order: "asc",
        },
    ],
    //highlight-end
});
```

It allows us to sort the `options`. For example, if you want to sort your list according to `title` by ascending.

## API Reference

### Properties

| Property                                          | Description                               | Type                                       | Default   |
| ------------------------------------------------- | ----------------------------------------- | ------------------------------------------ | --------- |
| resource <div className="required">Required</div> | [`Resource`](#) for API data interactions | `string`                                   |           |
| defaultValue                                      | Adds extra `options`                      | `string` \| `Array<string>`                |           |
| optionValue                                       | Set the option's value                    | `string`                                   | `"id"`    |
| optionLabel                                       | Set the option's label value              | `string`                                   | `"title"` |
| filters                                           | Add filters while fetching the data       | [`CrudFilters`](interfaces.md#crudfilters) |           |
| sort                                              | Allow us to sort the options              | [`CrudSorting`](interfaces.md#crudsorting) |           |

### Return values

| Property                | Description                                    | Type                                                                                          |
| ----------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| selectProps             | Ant design Select props                        | [`Select`](https://ant.design/components/select/#API)                                         |
| queryResult             | Result of the query of a record                | [`QueryObserverResult<{ data: TData }>`](https://react-query.tanstack.com/reference/useQuery) |
| defaultValueQueryResult | Result of the query of a `defaultValue` record | [`QueryObserverResult<{ data: TData }>`](https://react-query.tanstack.com/reference/useQuery) |

## Live Codesandbox Example

<iframe src="https://codesandbox.io/embed/refine-use-select-example-dp34p?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Fedit.tsx&theme=dark&view=preview"
    style={{width: "100%", height:"80vh", border: "0px", borderRadius: "8px", overflow:"hidden"}}
    title="refine-use-select-example"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
