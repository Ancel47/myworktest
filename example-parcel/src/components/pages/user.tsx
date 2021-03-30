import * as React from "react";

import {
    List,
    Edit,
    Create,
    Table,
    EmailField,
    TagField,
    BooleanField,
    DateField,
    Show,
    ShowTab,
    Tab,
    Form,
    Input,
    TextField,
    Tabs,
    DatePicker,
    useTranslate,
    useTable,
    EditButton,
    DeleteButton,
    ShowButton,
    Space,
    useForm,
    Upload,
    normalizeFile,
    useBase64Upload,
} from "readmin";

import { Aside } from "../aside";
import { useEffect } from "react";

export const UserList = (props: any) => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        initialPageSize: 20,
    });
    return (
        <List {...props} aside={Aside}>
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    position: ["bottomCenter"],
                    size: "small",
                }}
                scroll={{
                    x: true,
                }}
            >
                <Table.Column
                    key="id"
                    dataIndex="id"
                    title={translate("common:resources.users.fields.id")}
                />
                <Table.Column
                    key="firstName"
                    dataIndex="firstName"
                    title={translate("common:resources.users.fields.firstName")}
                />
                <Table.Column
                    key="lastName"
                    dataIndex="lastName"
                    title={translate("common:resources.users.fields.lastName")}
                />
                <Table.Column
                    dataIndex="status"
                    title={translate("common:resources.users.fields.status")}
                    key="status"
                    render={(value) => <TagField value={value} />}
                />
                <Table.Column
                    key="email"
                    dataIndex="email"
                    title={translate("common:resources.users.fields.email")}
                    render={(value) => <EmailField value={value} />}
                />
                <Table.Column
                    dataIndex="status"
                    title={translate("common:resources.users.fields.status")}
                    key="boolean"
                    render={(value) => <BooleanField value={value} />}
                />
                <Table.Column
                    key="birthday"
                    dataIndex="birthday"
                    title={translate("common:resources.users.fields.birthday")}
                    render={(value) => <DateField value={value} />}
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
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

export const UserEdit = (props: any) => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult, form } = useForm({
        warnWhenUnsavedChanges: true,
    });

    const { TabPane } = Tabs;

    const dateFormat = "DD/MM/YYYY";

    const [avatar, setAvatar] = React.useState<any[]>([]);

    React.useEffect(() => {
        if (queryResult && queryResult.data) {
            const { data } = queryResult;
            setAvatar(data.data.avatar);
        }
    }, [queryResult]);

    const { uploadedFiles, ...uploadProps } = useBase64Upload({
        formData: avatar,
        maxCount: 3,
    });
    useEffect(() => {
        form &&
            form.setFieldsValue({
                avatar: uploadedFiles,
            });
    }, [uploadedFiles]);

    return (
        <Edit {...props} saveButtonProps={saveButtonProps}>
            <Form {...formProps} wrapperCol={{ span: 14 }} layout="vertical">
                <Tabs>
                    <TabPane tab="Summary" key="summary">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.firstName",
                            )}
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.lastName",
                            )}
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Detail" key="detail">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.email",
                            )}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.birthday",
                            )}
                            name="birthday"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker format={dateFormat} />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.avatar",
                            )}
                        >
                            <Form.Item
                                name="avatar"
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
                                    listType="picture"
                                    multiple
                                    {...uploadProps}
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
                    </TabPane>
                </Tabs>
            </Form>
        </Edit>
    );
};

export const UserCreate = (props: any) => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, form } = useForm({
        warnWhenUnsavedChanges: true,
    });

    const { TabPane } = Tabs;

    const dateFormat = "DD/MM/YYYY";

    const { uploadedFiles, ...uploadProps } = useBase64Upload({
        maxCount: 3,
    });
    useEffect(() => {
        form &&
            form.setFieldsValue({
                avatar: uploadedFiles,
            });
    }, [uploadedFiles]);

    return (
        <Create
            {...props}
            saveButtonProps={saveButtonProps}
            submitOnEnter={false}
        >
            <Form {...formProps} wrapperCol={{ span: 14 }} layout="vertical">
                <Tabs>
                    <TabPane tab="Summary" key="summary">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.firstName",
                            )}
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.lastName",
                            )}
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Detail" key="detail">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.email",
                            )}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.birthday",
                            )}
                            name="birthday"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker format={dateFormat} />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.avatar",
                            )}
                        >
                            <Form.Item
                                name="avatar"
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
                                    listType="picture"
                                    multiple
                                    {...uploadProps}
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
                    </TabPane>
                </Tabs>
            </Form>
        </Create>
    );
};

export const UserShow = (props: any) => {
    return (
        <Show {...props}>
            <ShowTab>
                <Tab tab="Summary">
                    <TextField renderRecordKey="id" />
                    <TextField renderRecordKey="firstName" />
                    <TextField renderRecordKey="lastName" />
                </Tab>
                <Tab tab="Detail">
                    <EmailField renderRecordKey="email" />
                    <DateField renderRecordKey="birthday" />
                </Tab>
            </ShowTab>
        </Show>
    );
};
