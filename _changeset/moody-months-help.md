---
"@refinedev/core": patch
---

feat: `meta` props added `liveProvider.subscribe` and `liveProvider.publish` methods.
From now on, you can use `meta` to distinguish between methods by `meta`.

`meta` type:

```ts
import { QueryFunctionContext } from "@tanstack/react-query";

type Fields = Array<string | object | NestedField>;

type VariableOptions =
    | {
          type?: string;
          name?: string;
          value: any;
          list?: boolean;
          required?: boolean;
      }
    | { [k: string]: any };

type Meta = {
    dataProviderName?: string;
    operation?: string;
    fields?: Fields;
    variables?: VariableOptions;
    queryContext?: QueryFunctionContext;
    [k: string]: any;
};
```

#### Usage

```ts
import { LiveProvider, LiveEvent } from "@refinedev/core";

export const liveProvider = (client: any): LiveProvider => {
    return {
        subscribe: ({ channel, types, params, callback, meta }) => {
            console.log({ meta });
        },

        publish: ({ channel, type, payload, date, meta }: LiveEvent) => {
            console.log({ meta });
        },
    };
};
```
