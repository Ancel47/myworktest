---
id: multipart-upload
title: Multipart Upload
---

import create from '@site/static/img/guides-and-concepts/multipart-upload/create.jpg';
import uploadedFile from '@site/static/img/guides-and-concepts/multipart-upload/uploaded.jpg';
import edit from '@site/static/img/guides-and-concepts/multipart-upload/edit.jpg';

We will show you how to multipart upload with **refine**.

Let's start with the `creation form` first.

### Create Form

Let's add the image field to the post `creation form`.

```tsx title="pages/posts/create.tsx"
import { 
    // highlight-start
    Upload
    getValueFromEvent,
    // highlight-end
    Create,
    Form,
    Input,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IPost>();

    // highlight-next-line
    const apiUrl = useApiUrl();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
                // highlight-start
                <Form.Item label="Image">
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                    >
                        <Upload.Dragger
                            name="file"
                            action={`${apiUrl}/media/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                // highlight-end
            </Form>
        </Create>
    );
};
```

```ts title="interfaces/index.d.ts"
export interface IPost {
    id: string;
    title: string;
    image: [
        {
            uid: string;
            name: string;
            url: string;
            status: "error" | "success" | "done" | "uploading" | "removed";
        },
    ];
}
```

<br />

:::tip
We can reach the API URL by using the `useApiUrl` hook.
:::

It will look like this.

<>

<div style={{textAlign: "center"}}>
<img src={create} />
</div>
<br/>
</>

What we need now is an upload end-point that accepts multipart uploads. We write this address in the `action` property of the `Upload` component.

```json title="[POST] https://api.fake-rest.refine.dev/media/upload"
{
    "file": "binary"
}
```

:::important
This end-point should be `Content-type: multipart/form-data` and `Form Data: file: binary`?.
:::

This end-point should respond similarly.

```json title="[POST] https://api.fake-rest.refine.dev/media/upload"
{
    "url": "https://example.com/uploaded-file.jpeg"
}
```

<div style={{textAlign: "center"}}>
    <img src={uploadedFile} />
</div>
<br/>

:::important
We have to use the `getValueFromEvent` method to convert the uploaded files to [Antd UploadFile](https://ant.design/components/upload/#UploadFile) object.
:::

This data is sent to the API when form submitted.

```json title="[POST] https://api.fake-rest.refine.dev/posts"
{
    "title": "Test",
    "image": [
        {
            "uid": "rc-upload-1620630541327-7",
            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",
            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",
            "type": "image/jpeg",
            "size": 70922,
            "percent": 100,
            "status": "done"
        }
    ]
}
```

:::important
The following data are required for the [Antd Upload](https://ant.design/components/upload) component and all should be saved.
:::

| Property | Description                              |
| -------- | ---------------------------------------- |
| uid      | Unique id                                |
| name     | File Name                                |
| url      | Download URL                             |
| status   | error, success, done, uploading, removed |

### Edit Form

Let's add the image field to the post editing form.

```tsx title="pages/posts/edit.tsx"
import { 
    // highlight-start
    Upload
    getValueFromEvent,
    // highlight-end
    Edit,
    Form,
    Input,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IPost>();

    // highlight-next-line
    const apiUrl = useApiUrl();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
                // highlight-start
                <Form.Item label="Image">
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                    >
                        <Upload.Dragger
                            name="file"
                            action={`${apiUrl}/media/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                // highlight-end
            </Form>
        </Edit>
    );
};
```

<div style={{textAlign: "center"}}>
<img src={edit} />
</div>
<br/>

A request, like the one below, is sent for edit form.

```json title="[GET] https://api.fake-rest.refine.dev/posts/1"
{
    "id": 1,
    "title": "Test",
    "image": [
        {
            "uid": "rc-upload-1620630541327-7",
            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",
            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",
            "type": "image/jpeg",
            "size": 70922,
            "percent": 100,
            "status": "done"
        }
    ]
}
```

This data is sent to the API when form is submitted.

```json title="[PUT] https://api.fake-rest.refine.dev/posts/1"
{
    "title": "Test",
    "image": [
        {
            "uid": "rc-upload-1620630541327-7",
            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",
            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",
            "type": "image/jpeg",
            "size": 70922,
            "percent": 100,
            "status": "done"
        }
    ]
}
```

### Uploading State

You may want to disable the "Save" button in the form while the upload is going on. To do this, you can use the `useFileUploadState` hook.

```tsx title="pages/posts/create.tsx"
import {
    Upload
    getValueFromEvent,
    // highlight-next-line
    useFileUploadState,
    Create,
    Form,
    Input,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IPost>();

    // highlight-start
    const { isLoading, onChange } = useFileUploadState();
    // highlight-end

    const apiUrl = useApiUrl();

    return (
        // highlight-start
        <Create
            saveButtonProps={{
                ...saveButtonProps,
                disabled: isLoading,
            }}
        >
            // highlight-end
            <Form {...formProps} layout="vertical">
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
                <Form.Item label="Image">
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                    >
                        <Upload.Dragger
                            name="file"
                            action={`${apiUrl}/media/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                            // highlight-start
                            onChange={onChange}
                            // highlight-end
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Create>
    );
};
```

## Live Codesandbox Example

<iframe src="https://codesandbox.io/embed/refine-multipart-upload-example-ke4vr?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Fedit.tsx&theme=dark&view=preview"
     style={{width: "100%", height:"80vh", border: "0px", borderRadius: "8px", overflow:"hidden"}}
     title="refine-multipart-upload-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
