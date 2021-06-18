---
id: interfaceReferences
title: Interface References
---

## CrudFilters

[`CrudFilter[]`](#crudfilter)

### CrudFilter

| Key      | Type                              |
| -------- | --------------------------------- |
| field    | `string`                          |
| operator | [`CrudOperators`](#crudoperators) |
| value    | `any`                             |

#### CrudOperators

```ts
"eq" |
    "ne" |
    "lt" |
    "gt" |
    "lte" |
    "gte" |
    "in" |
    "nin" |
    "contains" |
    "ncontains" |
    "containss" |
    "ncontainss" |
    "null";
```

| Type           | Description                     |
| -------------- | ------------------------------- |
| `"eq"`         | Equal                           |
| `"ne"`         | Not equal                       |
| `"lt"`         | Less than                       |
| `"gt"`         | Greater than                    |
| `"lte"`        | Less than or equal to           |
| `"gte"`        | Greater than or equal to        |
| `"in"`         | Included in an array            |
| `"nin"`        | Not included in an array        |
| `"contains"`   | Contains                        |
| `"ncontains"`  | Doesn't contain                 |
| `"containss"`  | Contains, case sensitive        |
| `"ncontainss"` | Doesn't contain, case sensitive |
| `"null"`       | Is null or not null             |

## CrudSorting

[`CrudSort[]`](#crudsort)

### CrudSort

| Key   | Type                 |
| ----- | -------------------- |
| field | `string`             |
| order | `"asc"` \| ` "desc"` |

| `order` type | Description      |
| ------------ | ---------------- |
| `"asc"`      | Ascending order  |
| `"desc"`     | Descending order |

## Pagination

| Key      | Type     |
| -------- | -------- |
| current  | `number` |
| pageSize | `number` |

## BaseRecord

| Key             | Type                 |
| --------------- | -------------------- |
| id?             | `string` \| `number` |
| `[key: string]` | `any`                |

## HttpError

| Key        | Type     |
| ---------- | -------- |
| message    | `string` |
| statusCode | `number` |

## Delete Button Props

ButtonProps

| Key           | Type                                                     |
| ------------- | -------------------------------------------------------- |
| resourceName? | `string`                                                 |
| recordItemId? | `string` \|` number`                                     |
| onSuccess?    | `<TData = BaseRecord>(value: { data: TData; }) => void;` |
| mutationMode? | [`MutationMode`](#mutationmode)                          |

## MutationMode

```ts
"pessimistic" | "optimistic" | "undoable";
```

## UploadedFile

| Key     | Type                                                                 |
| ------- | -------------------------------------------------------------------- |
| uid     | `string`                                                             |
| name    | `string`                                                             |
| url     | `string`                                                             |
| type    | `string`                                                             |
| size    | `number`                                                             |
| percent | `number`                                                             |
| status  | `"error"` \| `"success"` \| `"done" `\| `"uploading"` \| `"removed"` |
