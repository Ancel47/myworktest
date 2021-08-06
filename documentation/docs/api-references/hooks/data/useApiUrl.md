---
id: useApiUrl
title: useApiUrl
---

`useApiUrl` lets you access the API URL of the `dataProvider` that was configured in [`<Refine>`][Refine] component.

This hook uses the `getApiUrl` method of the used [`dataProvider`][Data Provider].

## Usage

An example use case might be using it with [`useCustom` hook][useCustom].

```ts
import {
    useCustom,
    //highlight-next-line
    useApiUrl
} from "@pankod/refine";

interface PostUniqueCheckResponse {
    isAvailable: boolean;
}

//highlight-next-line
const apiUrl = useApiUrl();

const { data, isLoading } = useCustom<PostUniqueCheckResponse>(
    `${apiUrl}/posts-unique-check`,
    "get",
    {
        query: {
            title: "Foo bar",
        },
    },
);
```

## API

### Return value

| Description | Type     |
| ----------- | -------- |
| API URL     | `string` |

[Refine]: /api-references/components/refine-config.md
[Data Provider]: /api-references/providers/data-provider.md
[useCustom]: /api-references/hooks/data/useCustom.md