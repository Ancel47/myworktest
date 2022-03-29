---
title: How to Multipart File Upload Using FormData with React Hook Form
description: In this guide, I'm going to show you how to multipart files upload with using React Hook Form
slug: how-to-multipart-file-upload-with-react-hook-form
authors: melih
tags: [refine, react, react-hook-form, multipart-upload, form-data, file-upload]
image: https://refine.dev/img/refine_social.png
hide_table_of_contents: false
---

import server_start from '@site/static/img/blog/2022-03-29-react-hook-form-upload/server_start.gif';
import image_upload from '@site/static/img/blog/2022-03-29-react-hook-form-upload/image_upload.gif';

In this example, we will learn how to upload files with [React Hook Form](https://react-hook-form.com/), which is very preferred for managing forms with React. We will use [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) to upload a file and we will upload a file of type multipart/form-data.

<!--truncate-->

## Introduction

We will examine step by step how to use the Multipart file upload process, which is generally used to upload an image or file to a server, with React Hook Form. Let's first create a simple [express](https://expressjs.com/) server to upload the files. Then, let's upload our files to this server with the React Hook form. Let's start!

## Create Express Server

```bash
npm i express
```

Then, let's install the cors package necessary to allow file upload to the server, and the express-fileupload package to manage the paths of the downloaded files.

```bash
npm i cors express-fileupload
```

We have completed our installations to create a simple server. This server will indicate that the file has been uploaded successfully or failed, in response to a `POST` call to an endpoint that we have specified.

```jsx
import express from "express";
import fileupload from "express-fileupload";
import cors from "cors";

const app = express();

app.use(
    fileupload({
        createParentPath: true,
    }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload-file", async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: "failed",
                message: "No file uploaded",
            });
        } else {
            let file = req.files.file;

            console.log(req.files);

            file.mv("./uploads/" + file.name);

            res.send({
                status: "success",
                message: "File is uploaded",
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size,
                },
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
```

<div class="img-container">
    <div class="window">
        <div class="control red"></div>
        <div class="control orange"></div>
        <div class="control green"></div>
    </div>
    <img src={server_start} alt="Express Server" />
</div>
<br />

We created a server with Express. As you can see, we have successfully started our server, now we have an endpoint to handle requests to this port. Now let's create a React project and send our files to this server with React Hook Form.

## Create React Project

Let's create a react project with [Create React App](https://create-react-app.dev/) and then install the necessary packages for our project.

```bash
npx create-react-app react-hook-form-multipart-upload
```

After your project is ready, let's go to our project directory and install the React Hook Form package.

```bash
cd react-hook-form-multipart-upload
npm install react-hook-form

npm run start
```

## Multipart File Upload with React Hook Form

We created our React project and installed our react hook form package. Now let's create a form and manage it with the react hook form.

```jsx title="App.js"
import React from "react";
//highlight-next-line
import { useForm } from "react-hook-form";

function App() {
    //highlight-next-line
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {};

    return (
        //highlight-start
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
        //highlight-end
    );
}

export default App;
```

To manage our form and its elements, we defined the register and handleSubmit methods from the react hook form. Now, let's upload the file selected in our onSubmit method to our server by placing it in the formData.

```jsx title="App.js"
import React from "react";
import { useForm } from "react-hook-form";

function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        //highlight-start
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:5000/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
        //highlight-end
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
```

Our project is ready! With React Hook Form, we can now send the selected file to our server in `multipart/form-data` type. Let's test it!

<div class="img-container">
    <div class="window">
        <div class="control red"></div>
        <div class="control orange"></div>
        <div class="control green"></div>
    </div>
    <img src={image_upload} alt="multipart/form-data file upload" />
</div>
<br />

## Are You Looking React Web Framework?

A React-based framework for building internal tools, rapidly. **refine** offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards.

🔥 **Headless** : Works with any UI framework

⚙️ Zero-configuration: One-line setup with superplate. It takes less than a minute to start a project.

📦 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI.

🔌 Backend Agnostic : Connects to any custom backend. Built-in support for REST API, Strapi, NestJs CRUD, Hasura, Nhost, Airtable, Supabase, Appwrite and Altogic.

📝 Native Typescript Core : You can always opt-out for plain JavaScript.

🐜 Enterprise UI : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)

📝 Boilerplate-free Code : Keeps your codebase clean and readable.

[Refer to the **refine** documentation for more information. →](https://refine.dev/docs/getting-started/overview/)

## How to Multipart File Upload with Refine and React Hook Form?

It allows you to manage your forms and send data to your server with the [refine-react-hook-form adapter](/docs/packages/react-hook-form/) it publishes with its **refine** **headless** feature. With this adapter, you can use all the features of the React Hook Form in harmony with **refine**. You can also perform `Multipart File Upload(multipart/form-data)` operation very easily using this adapter.

[Refer to the refine-react-hook-form adapter documentation for detailed information. →](/docs/packages/react-hook/form/)

[View Source](https://github.com/pankod/refine/tree/master/examples/reactHookForm)

You can manage your form very easily with the `refine-react-hook-form adapter`. The data created in the form will be automatically saved to the database with the **refine** `onFinish` method.

```tsx title="src/pages/CreatePost"
import { useForm } from "@pankod/refine-react-hook-form";
import { useSelect } from "@pankod/refine-core";

export const PostCreate: React.FC = () => {
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { options } = useSelect({
        resource: "categories",
    });

    return (
        <form onSubmit={handleSubmit(onFinish)}>
            <label>Title: </label>
            <input {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}
            <br />
            <label>Status: </label>
            <select {...register("status")}>
                <option value="published">published</option>
                <option value="draft">draft</option>
                <option value="rejected">rejected</option>
            </select>
            <br />
            <label>Category: </label>
            <select
                defaultValue={""}
                {...register("category.id", { required: true })}
            >
                <option value={""} disabled>
                    Please select
                </option>
                {options?.map((category) => (
                    <option key={category.value} value={category.value}>
                        {category.label}
                    </option>
                ))}
            </select>
            {errors.category && <span>This field is required</span>}
            <br />
            <label>Content: </label>
            <br />
            <textarea
                {...register("content", { required: true })}
                rows={10}
                cols={50}
            />
            {errors.content && <span>This field is required</span>}
            <br />
            <input type="submit" value="Submit" />
            {formLoading && <p>Loading</p>}
        </form>
    );
};
```

## Refine Multipart Upload Live Codesandbox Example
