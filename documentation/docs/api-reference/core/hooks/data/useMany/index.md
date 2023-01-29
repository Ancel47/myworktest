---
title: useMany
siderbar_label: useMany
---

import BasicUsageLivePreview from "./basic-usage-live-preview.md";

`useMany` is a extended version of `react-query`'s [`useQuery`](https://tanstack.com/query/v4/docs/react/reference/useQuery). It support all the features of `useQuery` and adds some extra features.

-   It uses the `getMany` method as the **query function** from the [`dataProvider`](/api-reference/core/providers/data-provider.md) which is passed to `<Refine>`.

-   It uses query key to cache the data. The **query key** is generated from the provided properties. You can see the query key by using the `react-query` devtools.

It is useful when you want to fetch multiple records from the API. It will return the data and some functions to control the query.

:::caution
If your data provider does not have a `getMany` method, `useMany` will use the `getOne` method instead. It is not recommended, because it will make requests one by one for each id. It is better to implement the `getMany` method in the data provider.
:::

## Basic Usage

`useMany` hook expects a `resource` and `ids` property. It will be passed to the `getMany` method from the `dataProvider` as parameter.

When these properties are changed, `useMany` hook will trigger a new request.

<BasicUsageLivePreview />

## Realtime Updates

> This feature is only available if you use a [Live Provider](/docs/api-reference/core/providers/live-provider).

When `useMany` hook is mounted, it will call the `subscribe` method from the `liveProvider` with some parameters such as `channel`, `resource` etc. It is useful when you want to subscribe to the live updates.

[Refer to the `liveProvider` documentation for more information &#8594](/docs/api-reference/core/providers/live-provider)

## Properties

### `resource` <PropTag required />

It will be passed to the `getMany` method from the `dataProvider` as parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the `resource` in the `getMany` method. See the [creating a data provider](/docs/api-reference/core/providers/data-provider#creating-a-data-provider) section for an example of how resource are handled.

```tsx
useMany({
    resource: "categories",
});
```

### `ids` <PropTag required />

It will be passed to the `getMany` method from the `dataProvider` as parameter. It is used to determine which records to fetch.

```tsx
useMany({
    ids: [1, 2, 3],
});
```

### `dataProviderName`

If there is more than one `dataProvider`, you can specify which one to use by passing the `dataProviderName` prop. It is useful when you have a different data provider for different resources.

```tsx
useMany({
    dataProviderName: "second-data-provider",
});
```

### `queryOptions`

`queryOptions` is used to pass additional options to the `useQuery` hook. It is useful when you want to pass additional options to the `useQuery` hook.

[Refer to the `useQuery` documentation for more information &#8594](https://tanstack.com/query/v4/docs/react/reference/useQuery)

```tsx
useMany({
    queryOptions: {
        retry: 3,
        enabled: false,
    },
});
```

### `metaData`

[`metaData`](/docs/api-reference/general-concepts/#metadata) is used following two purposes:

-   To pass additional information to data provider methods.
-   Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer [GraphQL](/docs/advanced-tutorials/data-provider/graphql/#edit-page) for more information.

In the following example, we pass the `headers` property in the `metaData` object to the `create` method. With similar logic, you can pass any properties to specifically handle the data provider methods.

```tsx
import { stringify } from "query-string";

useMany({
    // highlight-start
    metaData: {
        headers: { "x-meta-data": "true" },
    },
    // highlight-end
});

const myDataProvider = {
    //...
    getMany: async ({
        resource,
        ids,
        // highlight-next-line
        metaData,
    }) => {
        // highlight-next-line
        const headers = metaData?.headers ?? {};
        const url = `${apiUrl}/${resource}?${stringify({ id: ids })}`;

        //...
        //...

        // highlight-next-line
        const { data } = await httpClient.get(`${url}`, { headers });

        return {
            data,
        };
    },
    //...
};
```

### `successNotification`

> [`NotificationProvider`](/docs/api-reference/core/providers/notification-provider/) is required for this prop to work.

After data is fetched successfully, `useMany` can call `open` function from `NotificationProvider` to show a success notification. With this prop, you can customize the success notification.

```tsx
useMany({
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

> [`NotificationProvider`](/docs/api-reference/core/providers/notification-provider/) is required for this prop to work.

After data fetching is failed, `useMany` will call `open` function from `NotificationProvider` to show a error notification. With this prop, you can customize the error notification.

```tsx
useMany({
    errorNotification: (data, values, resource) => {
        return {
            message: `Something went wrong when getting ${data.id}`,
            description: "Error",
            type: "error",
        };
    },
});
```

### `liveMode`

> [`LiveProvider`](/docs/api-reference/core/providers/live-provider/) is required for this prop to work.

Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.
For more information about live mode, please check [Live / Realtime](/docs/api-reference/core/providers/live-provider/#livemode) page.

```tsx
useMany({
    liveMode: "auto",
});
```

### `onLiveEvent`

> [`LiveProvider`](/docs/api-reference/core/providers/live-provider/) is required for this prop to work.

The callback function that is executed when new events from a subscription are arrived.

```tsx
useMany({
    onLiveEvent: (event) => {
        console.log(event);
    },
});
```

### `liveParams`

> [`LiveProvider`](/docs/api-reference/core/providers/live-provider/) is required for this prop to work.

Params to pass to liveProvider's [subscribe](/docs/api-reference/core/providers/live-provider/#subscribe) method.

## Return Values

Returns an object with react-query's `useQuery` return values.

[Refer to the `useQuery` documentation for more information &#8594](https://tanstack.com/query/v4/docs/react/reference/useQuery)

## API

### Properties

<PropsTable module="@pankod/refine-core/useMany" 
successNotification-default='`false`'
errorNotification-default='"Error (status code: `statusCode`)"'
/>

### Type Parameters

| Property | Desription                                                                                     | Type                                                         | Default                                                      |
| -------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| TData    | Result data of the query. Extends [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) | [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) | [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) |
| TError   | Custom error object that extends [`HttpError`](/api-reference/core/interfaces.md#httperror)    | [`HttpError`](/api-reference/core/interfaces.md#httperror)   | [`HttpError`](/api-reference/core/interfaces.md#httperror)   |

### Return values

| Description                              | Type                                                                                                     |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Result of the `react-query`'s `useQuery` | [`QueryObserverResult<{ data: TData[]; }>`](https://tanstack.com/query/v4/docs/react/reference/useQuery) |
