---
"@refinedev/core": minor
---

fix: support multiple `resource` usage with the same name via the `identifier`

Previously, data hooks only worked with resource name. So if you had multiple `resource` usage with the same name, it would cause issues.

Now the following hooks and its derivatives support `identifier` to distinguish between the resources:

-   `useList`
-   `useInfiniteList`
-   `useOne`
-   `useMany`
-   `useCreate`
-   `useCreateMany`
-   `useUpdate`
-   `useUpdateMany`
-   `useDelete`
-   `useDeleteMany`

fix: generate correct `queryKey`'s for queries with `identifier`

Previously, the `queryKey` was generated using `name`. This caused issues when you had multiple `resource` usage with the same name. Now the `queryKey`'s are generated using `identifier` if it's present.
