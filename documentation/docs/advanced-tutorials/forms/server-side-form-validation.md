---
id: server-side-form-validation
title: Server-Side Form Validation
---

import MantineLivePreview from "./partials/\_mantine-server-side-form-validation.md";
import MaterialUILivePreview from "./partials/\_material-ui-server-side-form-validation.md";
import ChakraUILivePreview from "./partials/\_chakra-ui-server-side-form-validation.md";
import AntdLivePreview from "./partials/\_antd-server-side-form-validation.md";

Server-side form validation is a technique used to validate form data on the server before processing it. Unlike client-side validation, which is performed in the user's browser using JavaScript, server-side validation occurs on the server-side code, typically in the backend of the application.

## Why Server-Side Validation?

Client-side validation offers a responsive user experience by providing immediate feedback without server round trips. However, it should not be considered a substitute for server-side validation due to its vulnerability to bypassing. Server-side form validation is essential for ensuring data integrity, security, and consistency. It acts as an additional layer that complements client-side validation, preventing malicious or incorrect data from being processed. While client-side validation is valuable, it should not be relied upon exclusively, as server-side validation provides a more robust and reliable validation mechanism.

## Server-Side Validation with **refine**

**refine** supports server-side validation out-of-the-box for all supported UI frameworks (Ant Design, Material UI, Mantine, Chakra UI).

To handle server-side validation `errors`, you need to return a rejected promise with the following shape from the `dataProvider`:

```ts
import { HttpError } from "@refinedev/core";

const error: HttpError = {
    message: "An error occurred while updating the record.",
    statusCode: 400,
    // the errors field is required for server-side validation.
    // when the errors field is set, useForm will automatically display the error messages in the form with the corresponding fields.
    errors: {
        title: ["Title is required"],
        content: {
            key: "form.error.content",
            message: "Content is required.",
        },
        tags: true,
    },
};
```

> Refer to the `HttpError` type [here][http-error].

`errors` fields can be `string` or `string[]` or `boolean` or `{ key: string; message: string }`

-   `string` or `string[]`: If the field is an array, multiple error messages will be displayed. If the field is a string, only one error message will be displayed.
-   `boolean`: If the field is `true`, "This field is required." message will be displayed. If the field is `false`, no error message will be displayed.
-   `{ key: string; message: string }`: If the field is an object, the `key` field will be used as a translation key. If the `key` is not found in the translation, the `message` field will be displayed.

### How does it work?

When the `dataProvider` returns a rejected promise with [`errors`][http-error] field, `useForm` hook will assign [`errors`][http-error] to the respective form fields.

### How to disable it?

To disable server-side validation, you have two options:

-   disable it globally from the [**refine** options.](/docs/api-reference/core/components/refine-config/#disableserversidevalidation)

```tsx title="App.tsx"
import { Refine } from "@refinedev/core";

const App: React.FC = () => {
    return (
        <Refine
            // ...
            // highlight-start
            options={{
                disableServerSideValidation: true,
            }}
            // highlight-end
        >
            // ...
        </Refine>
    );
};
```

-   disable it for a specific form from the `useForm` hook.

```tsx
import { useForm } from "@refinedev/mantine";
OR;
import { useForm } from "@refinedev/react-hook-form";
OR;
import { useForm } from "@refinedev/antd";

useForm({
    // highlight-start
    disableServerSideValidation: true,
    // highlight-end
});
```

## Examples

In the following examples, we will use this mock `dataProvider` to demonstrate how to handle server-side validation.

```ts
import { HttpError, Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";

const App = () => {
    return (
        // ---
        <Refine
            // ---
            dataProvider={{
                ...dataProvider("https://api.fake-rest.refine.dev"),
                // highlight-start
                // this is demonstration of how you can handle errors from API
                update: async () => {
                    const error: HttpError = {
                        message: "An error occurred while updating the record.",
                        statusCode: 400,
                        errors: {
                            title: ["Title is required."],
                            "category.id": ["Category is required."],
                            status: ["Status is required."],
                            content: {
                                key: "form.error.content",
                                message: "Content is required.",
                            },
                            tags: ["Tags is required."],
                        },
                    };

                    return Promise.reject(error);
                },
                create: async () => {
                    // this is demonstration of how you can handle errors from API
                    const error: HttpError = {
                        message: "An error occurred while creating the record.",
                        statusCode: 400,
                        errors: {
                            title: ["Title is required."],
                            "category.id": ["Category is required."],
                            status: ["Status is required."],
                            content: {
                                key: "form.error.content",
                                message: "Content is required.",
                            },
                            tags: ["Tags is required."],
                        },
                    };
                    return Promise.reject(error);
                },
                // highlight-end
            }}
            // ---
        >
            // ---
        </Refine>
    );
};
```

### with Core useForm

> You can find more information about the `useForm` hook [here][core-use-form].

Due to the fact that [`useForm`][core-use-form] hook is framework agnostic, you need to render the `errors` returned from the `dataProvider` manually.

When `dataProvider` returns rejected promise with [`errors`][http-error] field, [`useForm`][core-use-form] hook will return `errors` state, which is an object with the following shape:

```ts
import { useForm } from "@refinedev/core";

const form = useForm({
    // ...
});

// you can access the errors state from the useForm hook
console.log(form.mutationResult.error?.errors);
```

### with React Hook Form

> You can find more information about the `useForm` hook [here][react-hook-form-use-form].

Due to the fact that [`useForm`][react-hook-form-use-form] hook is framework agnostic, you need to render the `errors` returned from the `dataProvider` manually.

When `dataProvider` returns rejected promise with [`errors`][http-error] field, [`useForm`][core-use-form] hook will return `errors` state, which is an object with the following shape:

```ts
import { useForm } from "@refinedev/core";

const form = useForm({
    // ...
});

// you can access the errors state from the useForm hook
console.log(form.formState.errors);
```

### with Ant Design

<AntdLivePreview />

> You can find more information about the `useForm` hook [here][antd-use-form].

For this example, we mock data provider to return rejected promise with `errors` field.
You can see full example [here](/docs/examples/form/antd/serverSideFormValidation/)

When `dataProvider` returns rejected promise with [`errors`][http-error] field, [`useForm`][antd-use-form] automatically set the `form.errors` state with the error messages returned from the `dataProvider`.

You can pass [`formProps`](/docs/api-reference/antd/hooks/form/useForm/#formprops) to the [`<Form>`](https://ant.design/components/form/) component to display the error messages. `<Form>` component will automatically display the error messages for the corresponding fields.

Here is an code of how you can display the error messages:

```tsx
import { useForm } from "@refinedev/antd";
import { Form } from "antd";

const Page = () => {
    const { formProps } = useForm();

    // ...

    return (
        // ...
        <Form {...formProps}>
            <Form.Item label="Title" name="title">
                <Input />
            </Form.Item>
        </Form>
    );
};
```

### with Mantine

<MantineLivePreview />

> You can find more information about the `useForm` hook [here][mantine-use-form].

For this example, we mock data provider to return rejected promise with `errors` field.
You can see full example [here](/docs/examples/form/mantine/serverSideFormValidation/)

When `dataProvider` returns rejected promise with [`errors`][http-error] field, [`useForm`][mantine-use-form] automatically set the `form.errors` state with the error messages returned from the `dataProvider`.

You can pass [`getInputProps(<field-name>)`](https://mantine.dev/form/use-form/#getinputprops) to the input component to display the error messages.

Here is an code of how you can display the error messages:

```tsx
import { useForm } from "@refinedev/mantine";
import { TextInput } from "@mantine/core";

const Page = () => {
    const { errors, getInputProps } = useForm();

    // ...

    return (
        // ...
        <TextInput
            id="title"
            label="Title"
            placeholder="Title"
            {...getInputProps("title")}
        />
    );
};
```

### with Material UI

<MaterialUILivePreview />

> You can find more information about the `useForm` hook [here][react-hook-form-use-form].

For this example, we mock data provider to return rejected promise with `errors` field.
You can see full example [here](/docs/examples/form/mui/serverSideFormValidation/)

When `dataProvider` returns rejected promise with [`errors`][http-error] field, [`useForm`][react-hook-form-use-form] automatically set the `formState.errors` state with the error messages returned from the `dataProvider`. You can pass [`formState.errors.status.message`](https://react-hook-form.com/docs/useform/formstate) to the input component to display the error messages.

Here is an code of how you can display the error messages:

```tsx
import TextField from "@mui/material/TextField";
import { useForm } from "@refinedev/react-hook-form";

const Page = () => {
    const {
        register,
        formState: { errors },
    } = useForm();

    // ...

    return (
        // ...
        <TextField
            {...register("title")}
            error={!!errors.status}
            helperText={errors.status?.message}
        />
    );
};
```

### with Chakra UI

<ChakraUILivePreview />

> You can find more information about the `useForm` hook [here][react-hook-form-use-form].

For this example, we mock data provider to return rejected promise with `errors` field.
You can see full example [here](/docs/examples/form/chakra-ui/serverSideFormValidation/)

When `dataProvider` returns rejected promise with [`errors`][http-error] field, [`useForm`][react-hook-form-use-form] automatically set the `formState.errors` state with the error messages returned from the `dataProvider`. You can pass [`formState.errors.status.message`](https://react-hook-form.com/docs/useform/formstate) to the input component to display the error messages.

Here is an code of how you can display the error messages:

```tsx
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useForm } from "@refinedev/react-hook-form";

const Page = () => {
    const {
        register,
        formState: { errors },
    } = useForm();

    // ...

    return (
        // ...
        <FormControl isInvalid={!!errors?.title}>
            <FormLabel>Title</FormLabel>
            <Input id="title" type="text" {...register("title")} />
            <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>
        </FormControl>
    );
};
```

[antd-use-form]: /docs/api-reference/antd/hooks/form/useForm/
[core-use-form]: /docs/api-reference/core/hooks/useForm/
[mantine-use-form]: /docs/api-reference/mantine/hooks/form/useForm/
[http-error]: /docs/api-reference/core/interfaceReferences/#httperror
[react-hook-form-use-form]: /docs/packages/documentation/react-hook-form/useForm/
[core-use-form]: /docs/api-reference/core/hooks/useForm/
[mantine-use-form]: /docs/api-reference/mantine/hooks/form/useForm/
[http-error]: /docs/api-reference/core/interfaceReferences/#httperror
