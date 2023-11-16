---
id: live-provider
title: Live Provider
sidebar_label: Live Provider
---

## Overview

The `liveProvider` is a built-in provider in **refine** that enables real-time updates and interactions between the server and the client. **refine** being agnostic as always allows you to integrate any solution of your choice

A live provider must include following methods:

```ts
const liveProvider = {
    subscribe: ({ channel, params: { ids }, types, callback, meta }) => any,
    unsubscribe: (subscription) => void,
    publish?: ({ channel, type, payload, date, meta }) => void,
};
```

:::note
**refine** uses these methods in [`useSubscription`](/api-reference/core/hooks/live/useSubscription.md) and [`usePublish`](/api-reference/core/hooks/live/usePublish.md).
:::

---

:::tip
**refine** includes some out-of-the-box live providers to use in your projects such as:

-   **Ably** &#8594 [Source Code](https://github.com/refinedev/refine/blob/master/packages/ably/src/index.ts) - [Demo](https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/live-provider-ably/?view=preview&theme=dark&codemirror=1)
-   **Supabase** &#8594 [Source Code](https://github.com/refinedev/refine/blob/master/packages/supabase/src/index.ts#L187)
-   **Appwrite** &#8594 [Source Code](https://github.com/refinedev/refine/blob/master/packages/appwrite/src/index.ts#L252)
-   **Hasura** &#8594 [Source Code](https://github.com/refinedev/refine/blob/master/packages/hasura/src/liveProvider/index.ts#L16)
-   **Nhost** &#8594 [Source Code](https://github.com/refinedev/refine/blob/master/packages/nhost/src/liveProvider/index.ts#L16)

:::

## Creating a live provider with Ably

We will build the **"Ably Live Provider"** of [`@refinedev/ably`](https://github.com/refinedev/refine/tree/master/packages/ably) from scratch to show the logic of how live provider methods interact with Ably.

### `subscribe`

This method is used to subscribe to a Realtime channel. **refine** subscribes to the related channels using subscribe method in supported hooks to be aware of the data changes.

```ts title="liveProvider.ts"
import { LiveProvider, LiveEvent } from "@refinedev/core";
import Ably from "ably/promises";
import { Types } from "ably";

interface MessageType extends Types.Message {
    data: LiveEvent;
}

const liveProvider = (client: Ably.Realtime): LiveProvider => {
    return {
        // highlight-start
        subscribe: ({ channel, types, params, callback, meta }) => {
            const channelInstance = client.channels.get(channel);

            const listener = function (message: MessageType) {
                if (types.includes("*") || types.includes(message.data.type)) {
                    if (
                        message.data.type !== "created" &&
                        params?.ids !== undefined &&
                        message.data?.payload?.ids !== undefined
                    ) {
                        if (
                            params.ids.filter((value) =>
                                message.data.payload.ids!.includes(value),
                            ).length > 0
                        ) {
                            callback(message.data as LiveEvent);
                        }
                    } else {
                        callback(message.data);
                    }
                }
            };
            channelInstance.subscribe(listener);

            return { channelInstance, listener };
        },
        // highlight-end
    };
};
```

#### Parameter Types

| Name     | Type                                                                  | Default |
| -------- | --------------------------------------------------------------------- | ------- |
| channel  | `string`                                                              |         |
| types    | `Array<"deleted"` \| `"updated"` \| `"created"` \| "`*`" \| `string`> | `["*"]` |
| params   | `{ids?: string[]; [key: string]: any;}`                               |         |
| callback | `(event: LiveEvent) => void;`                                         |         |
| meta     | `MetaQuery & { dataProviderName?: string }`                           |         |

> For more information, refer to [`LiveEvent`](/docs/api-reference/core/interfaceReferences/#liveevent)

> For more information, refer to [`MetaQuery`](/docs/api-reference/core/interfaceReferences/#metadataquery)

#### Return Type

| Type  |
| ----- |
| `any` |

<br/>

**refine** will use this subscribe method in the [`useSubscription`](/api-reference/core/hooks/live/useSubscription.md) hook.

```ts
import { useSubscription } from "@refinedev/core";

useSubscription({
    channel: "channel-name",
    onLiveEvent: (event) => {},
});
```

:::caution
The values returned from the `subscribe` method are passed to the `unsubscribe` method. Thus values needed for unsubscription must be returned from `subscribe` method.
:::

> For more information, refer to the [useSubscription documentation&#8594](/api-reference/core/hooks/live/useSubscription.md)

### `unsubscribe`

This method is used to unsubscribe from a channel. The values returned from the `subscribe` method are passed to the `unsubscribe` method.

```ts title="liveProvider.ts"
const liveProvider = (client: Ably.Realtime): LiveProvider => {
    return {
        // highlight-start
        unsubscribe: (payload: {
            channelInstance: Types.RealtimeChannelPromise;
            listener: () => void;
        }) => {
            const { channelInstance, listener } = payload;
            channelInstance.unsubscribe(listener);
        },
        // highlight-end
    };
};
```

:::caution
If you don't handle unsubscription, it could lead to memory leaks.
:::

#### Parameter Types

| Name         | Type  | Description                              |
| ------------ | ----- | ---------------------------------------- |
| subscription | `any` | The values returned from the `subscribe` |

#### Return Type

| Type   |
| ------ |
| `void` |

<br/>

### `publish`

This method is used to publish an event on client side. Beware that publishing events on client side is not recommended and the best practice is to publish events from server side. You can refer [Publish Events from API](#publish-events-from-api) to see which events must be published from the server.

This `publish` is used in [realated hooks](#publish-events-from-hooks). When `publish` is used, subscribers to these events are notified. You can also publish your custom events using [`usePublish`](/api-reference/core/hooks/live/usePublish.md).

```ts title="liveProvider.ts"
const liveProvider = (client: Ably.Realtime): LiveProvider => {
    return {
        // highlight-start
        publish: ({ channel, type, payload, date, meta }: LiveEvent) => {
            const channelInstance = client.channels.get(channel);

            channelInstance.publish(type, event);
        },
        // highlight-end
    };
};
```

:::caution
If `publish` is used on client side you must handle the security of it by yourself.
:::

#### Parameter Types

| Name  | Type        |
| ----- | ----------- |
| event | `LiveEvent` |

> For more information, refer to [`LiveEvent`](/docs/api-reference/core/interfaceReferences/#liveevent)

#### Return Type

| Type   |
| ------ |
| `void` |

<br/>

**refine** will provide this publish method via the [`usePublish`](/api-reference/core/hooks/live/usePublish.md) hook.

```ts
import { usePublish } from "@refinedev/core";

const publish = usePublish();
```

> For more information, refer to the [usePublish documentation&#8594](/api-reference/core/hooks/live/usePublish.md)

### Usage

Now that we have created our live provider, we can use it in our application like below:

```tsx title="App.tsx"
import { Refine } from "@refinedev/core";

import liveProvider from "./liveProvider";

const App: React.FC = () => {
    return <Refine ... liveProvider={liveProvider} />;
};
```

## Creating a live provider with GraphQL subscriptions

In this section, we will create a live provider for GraphQL subscriptions from scratch. We will use [Hasura](https://hasura.io/) as an example, but the same logic can be applied to any GraphQL subscription provider.

`@refinedev/hasura` has a built-in live provider for Hasura subscriptions, but we will create our own from scratch to learn how it works.

Before diving into the code, let's see the difference between GraphQL queries and subscriptions.

**GraphQL queries**

```ts
query GetPosts {
  posts {
    id
    title
    content
  }
}
```

**GraphQL subscriptions**

```ts
subscription GetPosts {
  posts {
    id
    title
    content
  }
}
```

As you can see, the only difference between queries and subscriptions is the `subscription` keyword. This means that we can use the same logic for both queries and subscriptions. We already have a data provider for creating GraphQL queries, so we will use the same logic for GraphQL subscriptions.

### `subscribe`

When you call the [`useList`](/docs/api-reference/core/hooks/data/useList/), [`useOne`](/docs/api-reference/core/hooks/data/useOne/) or [`useMany`](/docs/api-reference/core/hooks/data/useMany/) hooks, they will call the `subscribe` method of the live provider.

Thus, we will be able to create subscription queries using the parameters of these hooks. After creating the subscription query, we will listen it using the [`graphql-ws`](https://github.com/enisdenjo/graphql-ws) client and return the unsubscribe method to use in the `unsubscribe` method of the live provider.

```ts title="liveProvider.ts"
import { LiveProvider } from "@refinedev/core";
import { Client } from "graphql-ws";

import {
    genareteUseListSubscription,
    genareteUseManySubscription,
    genareteUseOneSubscription,
} from "../utils";

const subscriptions = {
    useList: genareteUseListSubscription,
    useOne: genareteUseOneSubscription,
    useMany: genareteUseManySubscription,
};

export const liveProvider = (client: Client): LiveProvider => {
    return {
        subscribe: ({ callback, params, meta }) => {
            const {
                resource,
                pagination,
                sorters,
                filters,
                subscriptionType,
                id,
                ids,
            } = params ?? {};

            if (!meta) {
                throw new Error(
                    "[useSubscription]: `meta` is required in `params` for graphql subscriptions",
                );
            }

            if (!subscriptionType) {
                throw new Error(
                    "[useSubscription]: `subscriptionType` is required in `params` for graphql subscriptions",
                );
            }

            if (!resource) {
                throw new Error(
                    "[useSubscription]: `resource` is required in `params` for graphql subscriptions",
                );
            }

            const genareteSubscription = subscriptions[subscriptionType];

            const { query, variables, operation } = genareteSubscription({
                ids,
                id,
                resource,
                filters,
                meta,
                pagination,
                sorters,
            });

            const onNext = (payload: { data: any }) => {
                callback(payload.data[operation]);
            };

            const unsubscribe = client.subscribe(
                {
                    query,
                    variables,
                },
                {
                    next: onNext,
                    error: () => null,
                    complete: () => null,
                },
            );

            return unsubscribe;
        },
    };
};
```

:::info

`genareteUseListSubscription`, `genareteUseOneSubscription` and `genareteUseManySubscription` are helper functions that generate subscription queries. They are same as the methods in the data provider of `@refinedev/hasura`. You can check them out [here](https://github.com/refinedev/refine/tree/master/packages/hasura/src/utils).

:::

**refine** will use this subscribe method in the [`useSubscription`](/api-reference/core/hooks/live/useSubscription.md) hook.

It will create a subscription query using the parameters of the `useSubscription` hook and listen to it. When a live event is received, it will call the `onLiveEvent` method of the `useSubscription` hook.

```ts
import { useSubscription } from "@refinedev/core";

useSubscription({
    channel: "posts",
    enabled: true,
    onLiveEvent: (event) => {
        // called when a live event is received
        console.log(event);
    },
    params: {
        resource: "posts",
        pagination: {
            current: 1,
            pageSize: 10,
        },
        subscriptionType: "useList",
    },
    meta: {
        fields: [
            "id",
            "title",
            {
                category: ["title"],
            },
            "content",
            "category_id",
            "created_at",
        ],
    },
});
```

:::caution
The values returned from the `subscribe` method are passed to the `unsubscribe` method. Thus values needed for unsubscription must be returned from `subscribe` method.
:::

> For more information, refer to the [useSubscription documentation&#8594](/api-reference/core/hooks/live/useSubscription.md)

### `unsubscribe`

We will call the `unsubscribe` method that we returned from the `subscribe` method to unsubscribe from the subscription query.

```ts title="liveProvider.ts"
import { LiveProvider } from "@refinedev/core";
import { Client } from "graphql-ws";

...

export const liveProvider = (client: Client): LiveProvider => {
    return {
        ...
        unsubscribe: (unsubscribe) => {
            unsubscribe();
        },
    };
};
```

### Usage

Now that we have created our live provider, we can use it in our application like below:

```tsx title="App.tsx"
import { Refine } from "@refinedev/core";
import { createClient } from "graphql-ws";

import { liveProvider } from "./liveProvider";

const gqlWebSocketClient = createClient({
    url: "YOUR_WS_URL",
});

const App: React.FC = () => {
    return <Refine ... liveProvider={liveProvider(gqlWebSocketClient)} />;
};
```

## `liveMode`

`liveMode` must be passed to `<Refine>` in `options` or [supported hooks](#supported-hooks) for `liveProvider` to work. If it's not provided live features won't be activated. Passing it to `<Refine>` in `options` configures it app wide and hooks will use this option. It can also be passed to hooks directly without passing to `<Refine>` for detailed configuration. If both are provided value passed to the hook will override the value at `<Refine>`.

#### Usage in `<Refine>`:

```tsx title="App.tsx"
// ...

const App: React.FC = () => {
    return (
        <Refine liveProvider={liveProvider} options={{ liveMode: "auto" }} />
    );
};
```

#### Usage in a hook:

```tsx
const { data } = useList({ liveMode: "auto" });
```

### `auto`

Queries of related resource are invalidated in Realtime as new events from subscription arrive.
For example data from a `useTable` hook will be automatically updated when data is changed.

### `manual`

Queries of related resource are **not invalidated** in Realtime, instead [`onLiveEvent`](#onliveevent) is run with the `event` as new events from subscription arrive.
For example while in an edit form, it would be undesirable for data shown to change. `manual` mode can be used to prevent data from changing.

### `off`

Disables live mode.
For example it can be used to disable some parts of the app if you have app wide live mode configuration in `<Refine>`.

## `onLiveEvent`

Callback that is run when new events from subscription arrive. It can be passed to both `<Refine>` and [supported hooks](#supported-hooks).

### `<Refine>`

`onLiveEvent` passed to `<Refine>` will run every time when a new event occurs if `liveMode` is not `off`. It can be used for actions that are generally applicable to all events from active subscriptions.

```tsx title="App.tsx"
// ...

const App: React.FC = () => {
    return (
        <Refine
            liveProvider={liveProvider}
            options={{ liveMode: "auto" }}
            onLiveEvent={(event) => {
                // Put your own logic based on event
            }}
        />
    );
};
```

### Hooks

`onLiveEvent` passed to hooks runs when `liveMode` is not `off`. It is run with the event for related channel.

```tsx
const { data } = useList({
    liveMode: "manual",
    onLiveEvent: (event) => {
        // Put your own logic based on event
    },
});
```

## Supported Hooks

| Supported data hooks                                             | Supported form hooks                                                      | Supported other hooks                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`useList` &#8594](/docs/api-reference/core/hooks/data/useList/) | [`useForm` &#8594](/api-reference/core/hooks/useForm.md)                  | [`useTable` &#8594](/docs/api-reference/core/hooks/useTable)                     |
| [`useOne` &#8594](/docs/api-reference/core/hooks/data/useOne/)   | [`useModalForm` &#8594](/api-reference/antd/hooks/form/useModalForm.md)   | [`useEditableTable` &#8594](/api-reference/antd/hooks/table/useEditableTable.md) |
| [`useMany` &#8594](/docs/api-reference/core/hooks/data/useMany/) | [`useDrawerForm` &#8594](/api-reference/antd/hooks/form/useDrawerForm.md) | [`useSimpleList` &#8594](/api-reference/antd/hooks/list/useSimpleList.md)        |
|                                                                  | [`useStepsForm` &#8594](/api-reference/antd/hooks/form/useStepsForm.md)   | [`useShow` &#8594](/api-reference/core/hooks/show/useShow.md)                    |
|                                                                  |                                                                           | [`useCheckboxGroup` &#8594](/api-reference/antd/hooks/field/useCheckboxGroup.md) |
|                                                                  |                                                                           | [`useSelect` &#8594](/docs/api-reference/core/hooks/useSelect/)                  |
|                                                                  |                                                                           | [`useRadioGroup` &#8594](/api-reference/antd/hooks/field/useRadioGroup.md)       |

## Supported Hooks Subscriptions

Supported hooks subscribe in the following way:

### `useList`

```ts
useList({ resource: "posts" });
```

```ts
{
    types: ["*"],
    channel: "resources/posts"
}
```

:::tip
Following hooks uses `useList` under the hood and subscribe to same event.

-   [`useTable`](/docs/api-reference/core/hooks/useTable)
-   [`useEditableTable`](/api-reference/antd/hooks/table/useEditableTable.md)
-   [`useSimpleList`](/api-reference/antd/hooks/list/useSimpleList.md)
-   [`useCheckboxGroup`](/api-reference/antd/hooks/field/useCheckboxGroup.md)
-   [`useSelect`](/docs/api-reference/core/hooks/useSelect/)
-   [`useRadioGroup`](/api-reference/antd/hooks/field/useRadioGroup.md)

:::

### `useOne`

```ts
useOne({ resource: "posts", id: "1" });
```

```ts
{
    types: ["*"],
    channel: "resources/posts",
    params: { ids: ["1"] }
}
```

:::tip
Following hooks uses `useOne` under the hood and subscribe to same event.

-   [`useForm`](/api-reference/core/hooks/useForm.md)
-   [`useModalForm`](/api-reference/antd/hooks/form/useModalForm.md)
-   [`useDrawerForm`](/api-reference/antd/hooks/form/useDrawerForm.md)
-   [`useStepsForm`](/api-reference/antd/hooks/form/useStepsForm.md)
-   [`useShow`](/api-reference/core/hooks/show/useShow.md)

:::

### `useMany`

```ts
useMany({ resource: "posts", ids: ["1", "2"] });
```

```ts
{
    types: ["*"],
    channel: "resources/posts"
    params: { ids: ["1", "2"] }
}
```

:::tip
Following hooks uses `useMany` under the hood and subscribe to same event.

-   [`useSelect`](/docs/api-reference/core/hooks/useSelect/)

:::

## Publish Events from Hooks

**refine** publishes these events in the hooks. Let's see usage of hooks and what kind of events are published:

### `useCreate`

```ts
const { mutate } = useCreate();

mutate({
    resource: "posts",
    values: {
        title: "New Post",
    },
});
```

```ts title="Published event"
{
    channel: `resources/posts`,
    type: "created",
    payload: {
        ids: ["id-of-created-post"]
    },
    date: new Date(),
}
```

### `useCreateMany`

```ts
const { mutate } = useCreateMany();

mutate({
    resource: "posts",
    values: [
        {
            title: "New Post",
        },
        {
            title: "Another New Post",
        },
    ],
});
```

```ts title="Published event"
{
    channel: `resources/posts`,
    type: "created",
    payload: {
        ids: ["id-of-new-post", "id-of-another-new-post"]
    },
    date: new Date(),
}
```

### `useDelete`

```ts
const { mutate } = useDelete();

mutate({
    resource: "posts",
    id: "1",
});
```

```ts title="Published event"
{
    channel: `resources/posts`,
    type: "deleted",
    payload: {
        ids: ["1"]
    },
    date: new Date(),
}
```

### `useDeleteMany`

```ts
const { mutate } = useDeleteMany();

mutate({
    resource: "posts",
    ids: ["1", "2"],
});
```

```ts title="Published event"
{
    channel: `resources/posts`,
    type: "deleted",
    payload: {
        ids: ["1", "2"]
    },
    date: new Date(),
}
```

### `useUpdate`

```ts
const { mutate } = useUpdate();

mutate({
    resource: "posts",
    id: "2",
    values: { title: "New Post Title" },
});
```

```ts title="Published event"
{
    channel: `resources/posts`,
    type: "updated",
    payload: {
        ids: ["1"]
    },
    date: new Date(),
}
```

### `useUpdateMany`

```ts
const { mutate } = useUpdateMany();

mutate({
    resource: "posts",
    ids: ["1", "2"],
    values: { title: "New Post Title" },
});
```

```ts title="Published event"
{
    channel: `resources/posts`,
    type: "updated",
    payload: {
        ids: ["1", "2"]
    },
    date: new Date(),
}
```

## Publish Events from API

Publishing in client side must be avoided generally. It's recommended to handle it in server side. Events published from the server must be in the following ways:

-   When creating a record:

```ts
{
    channel: `resources/${resource}`,
    type: "created",
    payload: {
        ids: [id]
    },
    date: new Date(),
}
```

-   When deleting a record:

```ts
{
    channel: `resources/${resource}`,
    type: "deleted",
    payload: {
        ids: [id]
    },
    date: new Date(),
}
```

-   When updating a record:

```ts
{
    channel: `resources/${resource}`,
    type: "updated",
    payload: {
        ids: [id]
    },
    date: new Date(),
}
```
