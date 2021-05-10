import React, { useState } from "react";
import {
    Edit,
    Form,
    Input,
    IResourceComponentsProps,
    Select,
    useForm,
    useCheckboxGroup,
    Checkbox,
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost, ITag } from "interfaces";

export const PostEdit = (props: IResourceComponentsProps) => {
    const { formProps, saveButtonProps, queryResult } = useForm<IPost>();

    const postData = queryResult?.data?.data;
    const {
        checkboxGroupProps: tagsCheckboxGroupProps,
    } = useCheckboxGroup<ITag>({
        resource: "tags",
        defaultValue: postData?.tags,
    });

    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write",
    );

    return (
        <Edit {...props} saveButtonProps={saveButtonProps}>
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
                <Form.Item
                    label="Tags"
                    name={["tags"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox.Group {...tagsCheckboxGroupProps} />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReactMde
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(
                                <ReactMarkdown>{markdown}</ReactMarkdown>,
                            )
                        }
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};
