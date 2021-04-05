import * as React from "react";

import {
    List,
    Create,
    Edit,
    Show,
    Form,
    Steps,
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
    Button,
    Table,
    useTable,
    Space,
    EditButton,
    DeleteButton,
    ShowButton,
    SaveButton,
    useStepsForm,
    CreateButton,
    ExportButton,
    CloneButton,
    getDefaultSortOrder,
} from "readmin";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { ShowAside } from "../show";

export const PostList = (props: any) => {
    const translate = useTranslate();
    const { tableProps, sorter, filters } = useTable({
        // permanentFilter: {
        //     categoryId: [50, 49],
        // },
        initialSorter: [
            {
                field: "id",
                order: "descend",
            },
        ],
        initialFilter: {
            status: ["active"],
        },
        syncWithLocation: true,
    });

    const actions = (
        <Space direction="horizontal">
            <ExportButton
                sorter={sorter}
                filters={filters}
                pageSize={100}
                maxItemCount={300}
                mapData={(item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        slug: item.slug,
                        content: item.content,
                        status: item.status,
                    };
                }}
            />
            <CreateButton />
        </Space>
    );

    return (
        <List {...props} actionButtons={actions}>
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    position: ["bottomCenter"],
                    size: "small",
                }}
            >
                <Table.Column
                    dataIndex="id"
                    title={translate("common:resources.posts.fields.id")}
                    key="id"
                    sorter={{
                        multiple: 3,
                    }}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                />
                <Table.Column
                    dataIndex="title"
                    title={translate("common:resources.posts.fields.title")}
                    key="title"
                    render={(value) => <TextField value={value} />}
                    sorter={{
                        multiple: 1,
                    }}
                    defaultSortOrder={getDefaultSortOrder("title", sorter)}
                />
                <Table.Column
                    dataIndex="slug"
                    title={translate("common:resources.posts.fields.slug")}
                    key="slug"
                    render={(value) => <TextField value={value} />}
                    sorter={{
                        multiple: 2,
                    }}
                    defaultSortOrder={getDefaultSortOrder("slug", sorter)}
                />
                <Table.Column
                    dataIndex="categoryId"
                    title={translate("common:resources.posts.fields.category")}
                    key="categoryId"
                    render={(value) => (
                        <ReferenceField resource="categories" value={value}>
                            <TextField renderRecordKey="title" />
                        </ReferenceField>
                    )}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Reference
                                reference="categories"
                                optionText="title"
                                sort={{
                                    field: "title",
                                    order: "ascend",
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
                <Table.Column
                    dataIndex="status"
                    title={translate(
                        "common:resources.posts.fields.status.title",
                    )}
                    key="status"
                    render={(value) => <TagField value={value} />}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Radio.Group>
                                <Radio value="active">
                                    {translate(
                                        "common:resources.posts.fields.status.active",
                                    )}
                                </Radio>
                                <Radio value="draft">
                                    {translate(
                                        "common:resources.posts.fields.status.draft",
                                    )}
                                </Radio>
                            </Radio.Group>
                        </FilterDropdown>
                    )}
                    defaultFilteredValue={["active"]}
                />
                <Table.Column
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
                            <EditButton size="small" recordItemId={record.id} />
                            <DeleteButton
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton size="small" recordItemId={record.id} />
                            <CloneButton
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

export const PostCreate = (props: any) => {
    const { Step } = Steps;

    const apiUrl = useApiUrl();
    const translate = useTranslate();

    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
        "write",
    );
    const { isLoading, onChange } = useFileUploadState();

    const {
        current,
        gotoStep,
        stepsProps,
        submit,
        formLoading,
        formProps,
    } = useStepsForm({
        warnWhenUnsavedChanges: true,
        defaultFormValues: () => {
            return {
                status: "active",
            };
        },
    });

    const formList = [
        <>
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
        </>,

        <>
            <Form.Item
                label={translate("common:resources.posts.fields.status.title")}
                name="status"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
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
                        order: "ascend",
                    }}
                >
                    <Select showSearch />
                </Reference>
            </Form.Item>
        </>,

        <>
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
        </>,

        <>
            <Form.Item label={translate("common:resources.posts.fields.image")}>
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
                            {translate("common:upload.title")}
                        </p>
                        <p className="ant-upload-hint">
                            {translate("common:upload.description")}
                        </p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </>,
    ];

    return (
        <Create
            {...props}
            actionButtons={
                <>
                    {current > 0 && (
                        <Button
                            onClick={() => {
                                gotoStep(current - 1);
                            }}
                        >
                            {translate(
                                "common:resources.posts.forms.prevButton",
                            )}
                        </Button>
                    )}
                    {current < formList.length - 1 && (
                        <Button
                            onClick={() => {
                                gotoStep(current + 1);
                            }}
                        >
                            {translate(
                                "common:resources.posts.forms.nextButton",
                            )}
                        </Button>
                    )}
                    {current === formList.length - 1 && (
                        <SaveButton
                            style={{ marginRight: 10 }}
                            loading={isLoading || formLoading}
                            onClick={() => submit()}
                        />
                    )}
                </>
            }
        >
            <Steps {...stepsProps}>
                <Step title="Description" />
                <Step title="Informations" />
                <Step title="Details" />
                <Step title="Image" />
            </Steps>

            <div style={{ marginTop: 60 }}>
                <Form
                    {...formProps}
                    wrapperCol={{ span: 14 }}
                    layout="vertical"
                >
                    {formList[current]}
                </Form>
            </div>
        </Create>
    );
};

export const PostEdit = (props: any) => {
    const { Step } = Steps;

    const apiUrl = useApiUrl();
    const translate = useTranslate();

    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
        "write",
    );
    const { onChange, isLoading } = useFileUploadState();

    const {
        current,
        gotoStep,
        stepsProps,
        submit,
        formLoading,
        formProps,
    } = useStepsForm({
        warnWhenUnsavedChanges: true,
        redirect: "show",
        mutationMode: "pessimistic",
    });

    const formList = [
        <>
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
        </>,

        <>
            <Form.Item
                label={translate("common:resources.posts.fields.status.title")}
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
                        order: "ascend",
                    }}
                >
                    <Select showSearch />
                </Reference>
            </Form.Item>
        </>,

        <>
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
        </>,

        <>
            <Form.Item label={translate("common:resources.posts.fields.image")}>
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
                            {translate("common:upload.title")}
                        </p>
                        <p className="ant-upload-hint">
                            {translate("common:upload.description")}
                        </p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </>,
    ];

    return (
        <Edit
            {...props}
            actionButtons={
                <>
                    {current > 0 && (
                        <Button onClick={() => gotoStep(current - 1)}>
                            {translate(
                                "common:resources.posts.forms.prevButton",
                            )}
                        </Button>
                    )}
                    {current < formList.length - 1 && (
                        <Button onClick={() => gotoStep(current + 1)}>
                            {translate(
                                "common:resources.posts.forms.nextButton",
                            )}
                        </Button>
                    )}
                    {current === formList.length - 1 && (
                        <SaveButton
                            style={{ marginRight: 10 }}
                            loading={isLoading || formLoading}
                            onClick={() => submit()}
                            disabled={formLoading}
                        />
                    )}
                </>
            }
        >
            <Steps {...stepsProps}>
                <Step title="Description" />
                <Step title="Informations" />
                <Step title="Details" />
                <Step title="Image" />
            </Steps>

            <div style={{ marginTop: 60 }}>
                <Form
                    {...formProps}
                    wrapperCol={{ span: 14 }}
                    layout="vertical"
                >
                    {formList[current]}
                </Form>
            </div>
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
