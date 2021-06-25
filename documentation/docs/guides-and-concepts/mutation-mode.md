---
id: mutation-mode
title: Mutation Mode
---

import test from '@site/static/img/guides-and-concepts/mutation-mode/test.png';

## Overview
Mutation mode determines the mode with which the mutations run. Mutations can run under 3 different modes: `pessimistic`, `optimistic` and `undoable`.  
Each mode correspondes to a different type of user experience.

## Modes

We'll show usages of modes with editing a record examples.

### `pessimistic`
The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly.

<br />

<div>
    <img src={test} />
</div>

> When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.

<br />

### `optimistic`
The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation.

<br />

<div>
    <img src={test} />
</div>

> When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.

<br />

### `undoable`
The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly.

<br />

<div>
    <img src={test} />
</div>

> When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled locally applied edit is undone.

## Usage
Mutation mode can be set application-wide in [`<Refine>`](#) component. 

```tsx title="App.tsx"
<Refine mutationMode="optimistic">
    ...
</Refine>
```
>Its default value is `pessimistic`.

<br />

It can also be set in supported [data hooks](https://docs-mu-doc-refine.pankod.com/docs/api-references/hooks/data/useUpdate#mutation-mode) and [form hooks](https://docs-mu-doc-refine.pankod.com/docs/api-references/hooks/form/useForm#properties ) for fine-grained configuration. 

```tsx
const { mutate } = useUpdate();

mutate({
    resource: "categories",
    mutationMode: "optimistic",
});
```
> Mutation mode passed to `<Refine>` will be overriden by the mutation mode passed to a data hook.

### Supported data hooks

- [`useUpdate` &#8594](api-references/hooks/data/useUpdate.md)   
- [`useUpdateMany` &#8594](api-references/hooks/data/useUpdateMany.md)  
- [`useDelete` &#8594](api-references/hooks/data/useDelete.md)  
- [`useDeleteMany` &#8594](api-references/hooks/data/useDeleteMany.md)
### Supported form hooks

- [`useForm` &#8594](api-references/hooks/form/useForm.md)
- [`useModalForm` &#8594](api-references/hooks/form/useModalForm.md)
- [`useDrawerForm` &#8594](api-references/hooks/form/useDrawerForm.md)
- [`useStepsForm` &#8594](api-references/hooks/form/useStepsForm.md)


<br />

## Live Codesandbox Example

<iframe src="https://codesandbox.io/embed/refine-example-mutation-mode-yi9d6?autoresize=1&fontsize=14&module=%2Fsrc%2FApp.tsx&theme=dark&view=preview"
     style={{width: "100%", height:"80vh", border: "0px", borderRadius: "8px", overflow:"hidden"}}
     title="refine-example-mutation-mode"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>