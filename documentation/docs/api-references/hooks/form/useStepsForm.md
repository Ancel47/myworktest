---
id: useStepsForm
title: useStepsForm
---

import useStepsFormExample from '@site/static/img/hooks/useStepsForm/example.gif';

`useStepsForm` hook allows you to split your form under an Ant Design based [Steps](https://ant.design/components/steps/) component and provides you with a few useful functionalities that will help you manage your form.

```tsx
const { stepsProps, formProps } = useStepsForm<IPost>();
```

All we have to do is to pass the props it returns to our `<Steps>` and `<Form>` components.

## Usage

We'll do two examples, one for creating and one for editing a post. Let's see how `useStepsForm` is used in both.

### Create

For the sake of simplicity, in this example we're going to build a `Post` create form that consists of only a `title` and a relational `category` field.

To split your form items under a `<Steps>` component, first import and use `useStepsForm` hook in your page:

```tsx title="pages/posts/create.tsx"
import { useStepsForm } from "@pankod/refine";

export const PostCreate: React.FC = () => {
    //highlight-start
    const {
        current,
        gotoStep,
        stepsProps,
        formProps,
        saveButtonProps,
        queryResult,
    } = useStepsForm<IPost>();
    //highlight-end
    ...
};
```

```ts title="src/interfaces.d.ts"
export interface ICategory {
    id: string;
    title: string;
}

export interface IPost {
    id: string;
    title: string;
    category: ICategory;
}
```

`useStepsForm` is generic over the type form data to help you type check your code.

This hook returns a set of useful values to render steps form. Given `current` value, you should have a way to render your form items conditionally with this index value. You can use an array to achieve this.

Here, each item of `formList` corresponds to one step in form:

```tsx title="pages/posts/create.tsx"
// highlight-next-line
import { useStepsForm, useSelect, Form, Input, Select } from "@pankod/refine";

export const PostCreate: React.FC = () => {
    const {
        current,
        gotoStep,
        stepsProps,
        formProps,
        saveButtonProps,
    } = useStepsForm<IPost>();

    //highlight-start
    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
    });
    //highlight-end

    //highlight-start
    const formList = [
        <>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </>,
        <>
            <Form.Item
                label="Category"
                name={["category", "id"]}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select {...categorySelectProps} />
            </Form.Item>
        </>,
    ];
    //highlight-end
    ...
};
```

:::tip
Since `category` is a relational data, we use `useSelect` to fetch its data.

[Refer to `useSelect` documentation for detailed usage. &#8594](../field/useSelect.md) (Burasi okunmuyor)

:::

<br />

You should use `stepsProps` on `<Steps>` component, `formProps` on the `<Form>` component respectively. And as the last step, you should render the `<Steps>` component besides the form like this:

```tsx title="pages/posts/create.tsx"
import {
    useStepsForm,
    useSelect,
    Form,
    Input,
    Select,
    //highlight-start
    Create,
    Steps,
    Form,
    //highlight-end
} from "@pankod/refine";

export const PostCreate: React.FC = () => {
    const {
        current,
        gotoStep,
        stepsProps,
        formProps,
        saveButtonProps,
        queryResult,
    } = useStepsForm<IPost>();

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    const formList = [
        <>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </>,
        <>
            <Form.Item
                label="Category"
                name={["category", "id"]}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select {...categorySelectProps} />
            </Form.Item>
        </>,
    ];

    return (
        //highlight-start
        <Create saveButtonProps={saveButtonProps}>
            <Steps {...stepsProps}>
                <Steps.Step title="First Step" />
                <Steps.Step title="Second Step" />
            </Steps>
            <Form {...formProps} layout="vertical">
                {formList[current]}
            </Form>
        </Create>
        //highlight-end
    );
};
```

:::danger Important
Make sure to add as much `<Steps.Step>` components as the number of steps in the `formList` array.
:::

<br />

To help users navigate between steps in the form, you can use action buttons. Your navigation buttons should use the `gotoStep` function that was previously returned from the the `useStepsForm` hook.

```tsx title="pages/posts/create.tsx"
import {
    useStepsForm,
    useSelect,
    Form,
    Input,
    Select,
    Create,
    Steps,
    Form,
    //highlight-start
    Button,
    SaveButton,
    //highlight-end
} from "@pankod/refine";

export const PostCreate: React.FC = () => {
    const {
        current,
        gotoStep,
        stepsProps,
        formProps,
        saveButtonProps,
        queryResult,
    } = useStepsForm<IPost>();

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    const formList = [
        <>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </>,
        <>
            <Form.Item
                label="Category"
                name={["category", "id"]}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select {...categorySelectProps} />
            </Form.Item>
        </>,
    ];

    return (
        <Create
            //highlight-start
            actionButtons={
                <>
                    {current > 0 && (
                        <Button
                            onClick={() => {
                                gotoStep(current - 1);
                            }}
                        >
                            Previous
                        </Button>
                    )}
                    {current < formList.length - 1 && (
                        <Button
                            onClick={() => {
                                gotoStep(current + 1);
                            }}
                        >
                            Next
                        </Button>
                    )}
                    {current === formList.length - 1 && (
                        <SaveButton
                            style={{ marginRight: 10 }}
                            onClick={() => submit()}
                            {...saveButtonProps}
                        />
                    )}
                </>
            }
            //highlight-end
        >
            <Steps {...stepsProps}>
                <Steps.Step title="First Step" />
                <Steps.Step title="Second Step" />
            </Steps>
            <Form {...formProps} layout="vertical">
                {formList[current]}
            </Form>
        </Create>
    );
};
```

<div style={{textAlign: "center"}}>
    <img src={useStepsFormExample} />
</div>

### Edit

In this example, we'll just look at what's different from the example above.

```tsx title="pages/posts/edit.tsx"
import {
    useStepsForm,
    useSelect,
    Form,
    Input,
    Select,
    Steps,
    Form,
    Button,
    SaveButton,
    // highlight-next-line
    Edit,
} from "@pankod/refine";

export const PostCreate: React.FC = () => {
    const {
        current,
        gotoStep,
        stepsProps,
        formProps,
        saveButtonProps,
        // highlight-next-line
        queryResult,
    } = useStepsForm<IPost>();

    // highlight-next-line
    const postData = queryResult?.data?.data;
    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        // highlight-next-line
        defaultValue: postData?.category.id,
    });

    const formList = [
        <>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </>,
        <>
            <Form.Item
                label="Category"
                name={["category", "id"]}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select {...categorySelectProps} />
            </Form.Item>
        </>,
    ];

    return (
        // highlight-next-line
        <Edit
            actionButtons={
                <>
                    {current > 0 && (
                        <Button
                            onClick={() => {
                                gotoStep(current - 1);
                            }}
                        >
                            Previous
                        </Button>
                    )}
                    {current < formList.length - 1 && (
                        <Button
                            onClick={() => {
                                gotoStep(current + 1);
                            }}
                        >
                            Next
                        </Button>
                    )}
                    {current === formList.length - 1 && (
                        <SaveButton
                            style={{ marginRight: 10 }}
                            onClick={() => submit()}
                            {...saveButtonProps}
                        />
                    )}
                </>
            }
        >
            <Steps {...stepsProps}>
                <Steps.Step title="First Step" />
                <Steps.Step title="Second Step" />
            </Steps>
            <Form {...formProps} layout="vertical">
                {formList[current]}
            </Form>
            // highlight-next-line
        </Edit>
    );
};
```

## API Reference

### Properties

| Key                                              | Description                                                                                                                                                                             | Type                                                                           | Default    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------- |
| action <div className=" required">Required</div> | Type of form mode                                                                                                                                                                       | `"edit"` \| `"create"`                                                         | `"create"` |
| defaultCurrent                                   | Default step, counting from 0                                                                                                                                                           | `number`                                                                       | `0`        |
| total                                            | Total count of steps steps                                                                                                                                                                | `number`                                                                       | `0`        |
| isBackValidate                                   | Should validate if went to the previous step step                                                                                                                                                      | `boolean`                                                                      | `true`     |
| form                                             | Ant Design form instance                                                                                                                                                                | [`FormInstance<TVariables>`](https://ant.design/components/form/#FormInstance) |            |
| mutationMode                                     | [Determines when mutations are executed](guides-and-concepts/mutation-mode.md). If not explicitly configured, it is read from the mutation mode config of the resource in current route | `"pessimistic"` \| `"optimistic"` \| `"undoable"`                              |            |
| onMutationError                                  | Called when a [mutation](https://react-query.tanstack.com/reference/useMutation) encounters an error                                                                                      | `(error: any, variables: any, context: any) => void`                           |            |
| onMutationSuccess                                | Called when a [mutation](https://react-query.tanstack.com/reference/useMutation) is successful                                                                                            | `(data: UpdateResponse<M>, variables: any, context: any) => void`              |            |
| redirect                                         | Page to redirect after a succesfull mutation                                                                                                                                              | `"show` \| `"edit` \| `"list"`\*\*                                             |            |
| submit                                           | Submit the form                                                                                                                                                                         | `(values?: TVariables) => Promise<TData>`                                      |            |
| submitOnEnter                                    | Listen `Enter` key press to submit form                                                                                                                                                 | `boolean`                                                                      | `false`    |
| undoableTimeout                                  | Duration to wait before executing mutations when `mutationMode = "undoable"`                                                                                                            | `number`                                                                       | `5000`\*   |
| warnWhenUnsavedChanges                           | Shows notification when unsaved changes exist                                                                                                                                           | `boolean`                                                                      | `false`\*  |
| successNotification                                 | Successful Mutation notification          | [`SuccessErrorNotification`](../../interfaces.md#successerrornotification) | "Successfully created `resource`" or "Successfully updated `resource`"                           |
| errorNotification                                   | Unsuccessful Mutation notification        | [`SuccessErrorNotification`](../../interfaces.md#successerrornotification) | "There was an error creating `resource` (status code: `statusCode`)" or "Error when updating `resource` (status code: `statusCode`)" |

> `*`: These props have default values in `RefineContext` and can also be set on **<[Refine](/api-references/components/refine-config.md)>** component. `useModalForm` will use what is passed to `<Refine>` as default but a local value will override it.

> `**`: If not explicitly configured, default value of `redirect` depends on which `action` used. If `action` is `create`, `redirect`s default value is `edit` (created resources edit page). if `action` is `edit` instead, `redirect`s default value is `list`.

### Return Values

| Key                      | Description                                                  | Type                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| stepsProps               | Ant Design steps props                                       | [`StepsProps`](https://ant.design/components/steps/#API)                                                                                                                             |
| current                  | Current step, counting from 0.                               | `number`                                                                                                                                                                             |
| gotoStep                 | Go to the target step                                        | `(step: number) => void`                                                                                                                                                             |
| formProps                | Ant Design form props                                        | [`FormProps`](https://ant.design/components/form/#Form)                                                                                                                              |
| form                     | Ant Design form instance                                     | [`FormInstance<TVariables>`](https://ant.design/components/form/#FormInstance)                                                                                                       |
| formLoading              | Loading status of form                                       | `boolean`                                                                                                                                                                            |
| defaultFormValuesLoading | DefaultFormValues loading status of form                     | `boolean`                                                                                                                                                                            |
| submit                   | Submit method, the parameter is the value of the form fields | `() => void`                                                                                                                                                                         |
| saveButtonProps          | Props for a submit button                                    | `{ disabled: boolean; onClick: () => void; loading: boolean; }`                                                                                                                      |
| queryResult              | Result of the query of a record                              | [`QueryObserverResult<{ data: TData }>`](https://react-query.tanstack.com/reference/useQuery)                                                                                        |
| mutationResult           | Result of the mutation triggered by submitting the form      | `UseMutationResult<`<br/>`{ data: TData },`<br/>`TError,`<br/>` { resource: string; values: TVariables; },`<br/>` unknown>`](https://react-query.tanstack.com/reference/useMutation) |
| editId                   | Record id for edit action                                    | `string`                                                                                                                                                                             |
| setEditId                | `editId` setter                                              | `Dispatch<SetStateAction<` `string` \| `undefined>>`                                                                                                                                 |
| cloneId                  | Record id for clone action                                   | `string`                                                                                                                                                                             |
| setCloneId               | `cloneId` setter                                             | `Dispatch<SetStateAction<` `string` \| `undefined>>`                                                                                                                                 |

## Live Codesandbox Example

<iframe src="https://codesandbox.io/embed/refine-use-steps-form-example-ok968?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Fedit.tsx&theme=dark&view=preview"
    style={{width: "100%", height:"80vh", border: "0px", borderRadius: "8px", overflow:"hidden"}}
    title="refine-use-steps-form-example"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
