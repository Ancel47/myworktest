import * as React from "react";
import {
    List,
    Column,
    Create,
    Edit,
    Show,
    Form,
    Reference,
    ReferenceField,
    TextField,
    TagField,
    FilterDropdown,
    Select,
    Radio,
    Input,
    Upload,
    ShowSimple,
    MarkdownField,
    normalizeFile,
    useApiUrl,
    useFileUploadState,
    useTranslate,
    Table,
    useForm,
    useEditableTable,
    Space,
    EditButton,
    DeleteButton,
    ShowButton,
    Button,
} from "readmin";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { ShowAside } from "../show";

export const PostList = (props: any) => {
    const translate = useTranslate();

    const {tableProps, formProps, form, editId, setEditId} = useEditableTable({
        mutationModeProp: "undoable",
    })

    return (
        <List {...props}>
            <Form {...formProps}>
                <Table
                    {...tableProps}
                    rowKey="id"
                    pagination={{
                        ...tableProps.pagination,
                        position: ["bottomCenter"],
                        size: "small",
                    }}
                >
                    <Column
                        dataIndex="id"
                        title={translate("common:resources.posts.fields.id")}
                        key="id"
                        sorter={{
                            multiple: 3,
                        }}
                        defaultSortOrder="descend"
                    />
                    <Column
                        dataIndex="title"
                        title={translate("common:resources.posts.fields.title")}
                        key="title"
                        render={(value, record) => {
                            if (record.id === editId) {
                                return (
                                    <Form.Item
                                        name="title"
                                        style={{ margin: 0 }}
                                    >
                                        <Input />
                                    </Form.Item>
                                );
                            }
                            return <TextField value={value} />;
                        }}
                        sorter={{
                            multiple: 1,
                        }}
                    />
                    <Column
                        dataIndex="slug"
                        title={translate("common:resources.posts.fields.slug")}
                        key="slug"
                        render={(value, record) => {
                            if (record.id === editId) {
                                return (
                                    <Form.Item
                                        name="slug"
                                        style={{ margin: 0 }}
                                    >
                                        <Input />
                                    </Form.Item>
                                );
                            }
                            return <TextField value={value} />;
                        }}
                        sorter={{
                            multiple: 2,
                        }}
                    />
                    <Column
                        dataIndex="categoryId"
                        title={translate(
                            "common:resources.posts.fields.category",
                        )}
                        key="categoryId"
                        render={(value, record) => {
                            if (record.id === editId) {
                                return (
                                    <Form.Item
                                        name="categoryId"
                                        style={{ margin: 0 }}
                                    >
                                        <Reference
                                            reference="categories"
                                            optionText="title"
                                            sort={{
                                                field: "title",
                                                order: "asc",
                                            }}
                                        >
                                            <Select showSearch />
                                        </Reference>
                                    </Form.Item>
                                );
                            }
                            return (
                                <ReferenceField
                                    resource="categories"
                                    value={value}
                                >
                                    <TextField renderRecordKey="title" />
                                </ReferenceField>
                            );
                        }}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Reference
                                    reference="categories"
                                    optionText="title"
                                    sort={{
                                        field: "title",
                                        order: "asc",
                                    }}
                                >
                                    <Select
                                        style={{ minWidth: 200 }}
                                        showSearch
                                        mode="multiple"
                                        placeholder="Select Category"
                                    />
                                </Reference>
                            </FilterDropdown>
                        )}
                    />
                    <Column
                        dataIndex="status"
                        title={translate(
                            "common:resources.posts.fields.status",
                        )}
                        key="status"
                        render={(value, record) => {
                            if (record.id === editId) {
                                return (
                                    <Form.Item
                                        name="status"
                                        style={{ margin: 0 }}
                                    >
                                        <Select
                                            defaultValue="active"
                                            options={[
                                                {
                                                    label: "Active",
                                                    value: "active",
                                                },
                                                {
                                                    label: "Draft",
                                                    value: "draft",
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                );
                            }
                            return <TagField value={value} />;
                        }}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Radio.Group>
                                    <Radio value="active">Active</Radio>
                                    <Radio value="draft">Draft</Radio>
                                </Radio.Group>
                            </FilterDropdown>
                        )}
                        defaultFilteredValue={["active"]}
                    />
                    <Column
                        title="Operation"
                        dataIndex="operation"
                        key="operation"
                        render={(_, record) => {
                            if (record.id === editId) {
                                return (
                                    <Space>
                                        <Button
                                            onClick={() => {
                                                form.submit();
                                            }}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            onClick={() => setEditId(undefined)}
                                        >
                                            Cancel
                                        </Button>
                                    </Space>
                                );
                            }
                            return (
                                <Button
                                    onClick={() => {
                                        setEditId(record.id);
                                    }}
                                >
                                    Edit
                                </Button>
                            );
                        }}
                    />
                    <Column
                        title={translate("common:table.actions", "Actions")}
                        dataIndex="actions"
                        key="actions"
                        render={(
                            _text: string | number,
                            record: {
                                id: string | number;
                            },
                        ): React.ReactNode => (
                            <Space>
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                />
                                <DeleteButton
                                    size="small"
                                    recordItemId={record.id}
                                />
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                />
                            </Space>
                        )}
                    />
                </Table>
            </Form>
        </List>
    );
};

export const PostCreate = (props: any) => {
    const apiUrl = useApiUrl();
    const translate = useTranslate();
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
        "write",
    );
    const { isLoading, onChange } = useFileUploadState();

    const { formProps, isLoading: isLoadingForm, saveButtonProps } = useForm(
        {},
    );

    return (
        <Create
            {...props}
            saveButtonProps={{
                ...saveButtonProps,
                disabled: isLoading || isLoadingForm,
            }}
        >
            <Form {...formProps} wrapperCol={{ span: 14 }} layout="vertical">
                <Form.Item
                    label={translate("common:resources.posts.fields.title")}
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
                    label={translate("common:resources.posts.fields.url")}
                    name="slug"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.content")}
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
                            Promise.resolve(<ReactMarkdown source={markdown} />)
                        }
                    />
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.status")}
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        defaultValue="active"
                        options={[
                            {
                                label: translate(
                                    "common:resources.posts.forms.active",
                                ),
                                value: "active",
                            },
                            {
                                label: translate(
                                    "common:resources.posts.forms.draft",
                                ),
                                value: "draft",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.category")}
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Reference
                        reference="categories"
                        optionText="title"
                        sort={{
                            field: "title",
                            order: "asc",
                        }}
                    >
                        <Select />
                    </Reference>
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.user")}
                    name="userId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    help={translate(
                        "common:resources.posts.forms.autocomplete",
                    )}
                >
                    <Reference
                        reference="users"
                        optionText="email"
                        sort={{
                            field: "email",
                            order: "asc",
                        }}
                    >
                        <Select showSearch />
                    </Reference>
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.tags")}
                    name="tags"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Reference reference="tags" optionText="title">
                        <Select mode="multiple" />
                    </Reference>
                </Form.Item>

                <Form.Item
                    label={translate("common:resources.posts.fields.image")}
                >
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={normalizeFile}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            name="file"
                            action={`${apiUrl}/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                            onChange={onChange}
                        >
                            <p className="ant-upload-text">
                                {translate(
                                    "common:resources.posts.forms.uploadText",
                                )}
                            </p>
                            <p className="ant-upload-hint">
                                {translate(
                                    "common:resources.posts.forms.uploadHintText",
                                )}
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Create>
    );
};

export const PostEdit = (props: any) => {
    const apiUrl = useApiUrl();
    const translate = useTranslate();
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
        "write",
    );
    const { isLoading, onChange } = useFileUploadState();

    const {
        formProps,
        isLoading: isLoadingFormData,
        saveButtonProps,
    } = useForm({});

    return (
        <Edit
            {...props}
            // mutationMode="optimistic"
            saveButtonProps={{
                ...saveButtonProps,
                disabled: isLoading || isLoadingFormData,
            }}
        >
            <Form {...formProps} wrapperCol={{ span: 14 }} layout="vertical">
                <Form.Item
                    label={translate("common:resources.posts.fields.title")}
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
                    label={translate("common:resources.posts.fields.url")}
                    name="slug"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.content")}
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
                            Promise.resolve(<ReactMarkdown source={markdown} />)
                        }
                    />
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.status")}
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        defaultValue="active"
                        options={[
                            {
                                label: "Active",
                                value: "active",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.category")}
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Reference
                        reference="categories"
                        optionText="title"
                        sort={{
                            field: "title",
                            order: "asc",
                        }}
                    >
                        <Select showSearch />
                    </Reference>
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.user")}
                    name="userId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    help="Autocomplete (search user email)"
                >
                    <Reference reference="users" optionText="email">
                        <Select showSearch />
                    </Reference>
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.tags")}
                    name="tags"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Reference reference="tags" optionText="title">
                        <Select mode="multiple" />
                    </Reference>
                </Form.Item>
                <Form.Item
                    label={translate("common:resources.posts.fields.image")}
                >
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={normalizeFile}
                        noStyle
                    >
                        <Upload.Dragger
                            name="file"
                            action={`${apiUrl}/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                            onChange={onChange}
                        >
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                                Support for a single upload.
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Edit>
    );
};

export const PostShow = (props: any) => {
    return (
        <Show {...props} aside={ShowAside}>
            <ShowSimple title="Post Title">
                <TextField renderRecordKey="id" />
                <TextField renderRecordKey="title" />
                <TextField renderRecordKey="userId" />
                <MarkdownField renderRecordKey="content" />
            </ShowSimple>
        </Show>
    );
};
