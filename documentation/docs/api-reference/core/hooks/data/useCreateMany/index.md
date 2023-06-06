---
title: useCreateMany
siderbar_label: useCreateMany
source: packages/core/src/hooks/data/useCreateMany.ts
---

`useCreateMany` is used for creating multiple records. It is an extended version of TanStack Query's [`useMutation`](https://tanstack.com/query/v4/docs/react/reference/useMutation) and not only supports all features of the mutation but also adds some extra features.

It uses the `createMany` method as the **mutation function** from the [`dataProvider`](/docs/api-reference/core/providers/data-provider/) which is passed to `<Refine>`.

:::caution
If your data provider does not have a `createMany` method, `useCreateMany` will use the `create` method instead. This is not recommended, since it will make requests one by one for each record.

It is better to implement the `createMany` method in the data provider.

:::

## Basic Usage

The `useCreateMany` hook returns many useful properties and methods. One of them is the `mutate` method which expects `values` and `resource` as parameters. These parameters will be passed to the `createMany` method from the `dataProvider` as parameters.

```tsx
import { useCreateMany } from "@refinedev/core";

const { mutate } = useCreateMany();

mutate({
    resource: "products",
    values: [
        {
            name: "Product 1",
            material: "Wood",
        },
        {
            name: "Product 2",
            material: "Metal",
        },
    ],
});
```

## Realtime Updates

:::caution
This feature is only available if you use a [Live Provider](/docs/api-reference/core/providers/live-provider).
:::

When the `useCreateMany` mutation runs successfully, it will call the `publish` method from `liveProvider` with some parameters such as `channel`, `type` etc. It is useful when you want to publish the changes to the subscribers on the client side.

> For more information, refer to the [`liveProvider` documentation &#8594](/docs/api-reference/core/providers/live-provider)

## Invalidating Queries

When the `useCreateMany` mutation runs successfully, it will invalidate the following queries from the current `resource`: `"list"` and `"many"` by default. Which means that, if you use `useList` or `useMany` hooks in the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing [`invalidates`](#invalidates) prop.

> For more information, refer to the [invalidation documentation &#8594](https://tanstack.com/query/v4/docs/react/guides/query-invalidation)

## Audit Logs

:::caution
This feature is only available if you use a [Audit Log Provider](/docs/api-reference/core/providers/audit-log-provider/).
:::

When the `useCreateMany` mutation runs successfully, it will call the `log` method from `auditLogProvider` with some parameters such as `resource`, `action`, `data` etc. It is useful when you want to log the changes to the database.

> For more information, refer to the [`auditLogProvider` documentation &#8594](/docs/api-reference/core/providers/audit-log-provider/)

## Properties

### `mutationOptions`

`mutationOptions` is used to pass options to the `useMutation` hook. It is useful when you want to pass additional options to the `useMutation` hook.

[Refer to the `useMutation` documentation for more information &#8594](https://tanstack.com/query/v4/docs/react/reference/useMutation)

```tsx
useCreateMany({
    mutationOptions: {
        retry: 3,
    },
});
```

:::tip

`mutationOptions` does not support `onSuccess` and `onError` props because they override the default `onSuccess` and `onError` functions. If you want to use these props, you can pass them to mutate functions like this:

```tsx
const { mutate } = useCreateMany();

mutate(
    {
        resource: "products",
        values: [
            {
                name: "Product 1",
                material: "Wood",
            },
            {
                name: "Product 2",
                material: "Metal",
            },
        ],
    },
    {
        onError: (error, variables, context) => {
            // An error occurred!
        },
        onSuccess: (data, variables, context) => {
            // Let's celebrate!
        },
    },
);
```

:::

## Mutation Parameters

### `resource` <PropTag required />

This parameter will be passed to the `create` method from the `dataProvider` as a parameter. It is usually used as an API endpoint path but it all depends on how you handle the `resource` in the `create` method.

```tsx
const { mutate } = useCreateMany();

mutate({
    resource: "categories",
});
```

> For more information, refer to the [creating a data provider tutorial &#8594](/docs/tutorial/understanding-dataprovider/create-dataprovider/)

### `values` <PropTag required />

This prop will be passed to the `create` method from the `dataProvider` as a parameter. It is usually used as the data to be created and contains the data that will be sent to the server.

```tsx
const { mutate } = useCreateMany();

mutate({
    values: [
        {
            name: "Product 1",
            material: "Wood",
        },
        {
            name: "Product 2",
            material: "Metal",
        },
    ],
});
```

### `successNotification`

:::caution
[`NotificationProvider`](/docs/api-reference/core/providers/notification-provider/) is required for this prop to work.
:::

This prop allows you to customize the success notification that shows up when the data is fetched successfully and `useCreateMany` calls the `open` function from `NotificationProvider`:

```tsx
const { mutate } = useCreateMany();

mutate({
    successNotification: (data, values, resource) => {
        return {
            message: `${data.title} Successfully fetched.`,
            description: "Success with no errors",
            type: "success",
        };
    },
});
```

### `errorNotification`

:::caution
[`NotificationProvider`](/docs/api-reference/core/providers/notification-provider/) is required for this prop to work.
:::

This prop allows you to customize the error notification that shows up when the data fetching fails and the `useCreateMany` calls the `open` function from `NotificationProvider`

```tsx
const { mutate } = useCreateMany();

mutate({
    errorNotification: (data, values, resource) => {
        return {
            message: `Something went wrong when getting ${data.id}`,
            description: "Error",
            type: "error",
        };
    },
});
```

### `meta`

`meta` is a special property that can be used to pass additional information to data provider methods for the following purposes:

-   Customizing the data provider methods for specific use cases.
-   Generating GraphQL queries using plain JavaScript Objects (JSON).

In the following example, we pass the `headers` property in the `meta` object to the `create` method. You can pass any properties to specifically handle the data provider methods with similar logic,.

```tsx
const { mutate } = useCreateMany();

mutate({
    // highlight-start
    meta: {
        headers: { "x-meta-data": "true" },
    },
    // highlight-end
});

const myDataProvider = {
    //...
    createMany: async ({
        resource,
        variables,
        // highlight-next-line
        meta,
    }) => {
        // highlight-next-line
        const headers = meta?.headers ?? {};
        const url = `${apiUrl}/${resource}`;

        //...
        //...

        // highlight-next-line
        const { data } = await httpClient.post(url, variables, { headers });

        return {
            data,
        };
    },
    //...
};
```

> For more information, refer to the [`meta` section of the General Concepts documentation&#8594](/docs/api-reference/general-concepts/#meta)

### `dataProviderName`

This prop allows you to specify which `dataProvider` if you have more than one. Just pass it like in the example:

```tsx
const { mutate } = useCreateMany();

mutate({
    dataProviderName: "second-data-provider",
});
```

### `invalidates`

`invalidates` is used to specify which queries should be invalidated after the mutation is completed.

By default, it invalidates the following queries from the current `resource`: `"list"` and `"many"`. That means, if you use `useList` or `useMany` hooks on the same page, they will refetch the data after the mutation is completed.

```tsx
const { mutate } = useCreateMany();

mutate({
    invalidates: ["list", "many"],
});
```

## Return Values

Returns an object with TanStack Query's `useMutation` return values.

> For more information, refer to the [`useMutation` documentation &#8594](https://tanstack.com/query/v4/docs/react/reference/useMutation)

## API

### Mutation Parameters

| Property                                                                                            | Description                                                                                        | Type                                                                                     | Default                                                              |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <div className="required-block"><div>resource</div> <div className=" required">Required</div></div> | Resource name for API data interactions                                                            | `string`                                                                                 |                                                                      |
| values <div className=" required">Required</div>                                                    | Values for mutation function                                                                       | `TVariables[]`                                                                           | [{}]                                                                 |
| successNotification                                                                                 | Successful Mutation notification                                                                   | [`SuccessErrorNotification`](/api-reference/core/interfaces.md#successerrornotification) | "Successfully created `resource`s"                                   |
| errorNotification                                                                                   | Unsuccessful Mutation notification                                                                 | [`SuccessErrorNotification`](/api-reference/core/interfaces.md#successerrornotification) | "There was an error creating `resource` (status code: `statusCode`)" |
| meta                                                                                                | Meta data query for `dataProvider`                                                                 | [`MetaDataQuery`](/api-reference/core/interfaces.md#metadataquery)                       | {}                                                                   |
| dataProviderName                                                                                    | If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use. | `string`                                                                                 | `default`                                                            |
| invalidates                                                                                         | You can use it to manage the invalidations that will occur at the end of the mutation.             | `all`, `resourceAll`, `list`, `many`, `detail`, `false`                                  | `["list", "many"]`                                                   |

### Type Parameters

| Property   | Desription                                                                                        | Type                                                         | Default                                                      |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| TData      | Result data of the mutation. Extends [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) | [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) | [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) |
| TError     | Custom error object that extends [`HttpError`](/api-reference/core/interfaces.md#httperror)       | [`HttpError`](/api-reference/core/interfaces.md#httperror)   | [`HttpError`](/api-reference/core/interfaces.md#httperror)   |
| TVariables | Values for mutation function                                                                      | `{}`                                                         | `{}`                                                         |

### Return value

| Description                                | Type                                                                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Result of the TanStack Query's useMutation | [`UseMutationResult<`<br/>`{ data: TData[]},`<br/>`TError,`<br/>` { resource: string; values: TVariables[]; },`<br/>` unknown>`](https://tanstack.com/query/v4/docs/react/reference/useMutation) |
