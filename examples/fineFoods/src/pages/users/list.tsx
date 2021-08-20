import {
    List,
    Table,
    Avatar,
    useTable,
    useTranslate,
    useNavigation,
    IResourceComponentsProps,
    DateField,
    BooleanField,
    Card,
    Input,
    Icons,
    Form,
    DatePicker,
    Button,
    CrudFilters,
    Select,
    FormProps,
    Row,
    Col,
    HttpError,
} from "@pankod/refine";

import { IUser, IUserFilterVariables } from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
    const { show } = useNavigation();
    const { tableProps, searchFormProps } = useTable<
        IUser,
        HttpError,
        IUserFilterVariables
    >({
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
        onSearch: (params) => {
            const filters: CrudFilters = [];
            const { q, status, createdAt, gender, isActive } = params;

            if (q) {
                filters.push({
                    field: "q",
                    operator: "eq",
                    value: q,
                });
            }

            if (createdAt) {
                filters.push(
                    {
                        field: "createdAt",
                        operator: "gte",
                        value: createdAt[0].toISOString(),
                    },
                    {
                        field: "createdAt",
                        operator: "lte",
                        value: createdAt[1].toISOString(),
                    },
                );
            }

            if (gender) {
                filters.push({
                    field: "gender",
                    operator: "eq",
                    value: gender,
                });
            }

            if (isActive) {
                filters.push({
                    field: "isActive",
                    operator: "eq",
                    value: isActive,
                });
            }

            if (status) {
                filters.push({
                    field: "status.text",
                    operator: "eq",
                    value: status,
                });
            }

            return filters;
        },
    });

    const t = useTranslate();

    return (
        <Row gutter={[16, 16]}>
            <Col xl={6} lg={24} xs={24}>
                <Card title={t("users.filter.title")}>
                    <Filter formProps={searchFormProps} />
                </Card>
            </Col>
            <Col xl={18} xs={24}>
                <List>
                    <Table
                        {...tableProps}
                        rowKey="id"
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    show("users", record.id);
                                },
                            };
                        }}
                    >
                        <Table.Column
                            key="gsm"
                            dataIndex="gsm"
                            title={t("users.fields.gsm")}
                        />
                        <Table.Column
                            align="center"
                            key="avatar"
                            dataIndex={["avatar"]}
                            title={t("users.fields.avatar.label")}
                            render={(value) => <Avatar src={value[0].url} />}
                        />
                        <Table.Column
                            key="firstName"
                            dataIndex="firstName"
                            title={t("users.fields.firstName")}
                        />
                        <Table.Column
                            key="lastName"
                            dataIndex="lastName"
                            title={t("users.fields.lastName")}
                        />
                        <Table.Column
                            key="gender"
                            dataIndex="gender"
                            title={t("users.fields.gender.label")}
                            render={(value) =>
                                t(`users.fields.gender.${value}`)
                            }
                        />
                        <Table.Column
                            key="isActive"
                            dataIndex="isActive"
                            title={t("users.fields.isActive")}
                            render={(value) => <BooleanField value={value} />}
                        />
                        <Table.Column
                            key="createdAt"
                            dataIndex="createdAt"
                            title={t("users.fields.createdAt")}
                            render={(value) => (
                                <DateField value={value} format="LLL" />
                            )}
                            sorter
                        />
                    </Table>
                </List>
            </Col>
        </Row>
    );
};

const Filter: React.FC<{ formProps: FormProps }> = (props) => {
    const t = useTranslate();

    const { RangePicker } = DatePicker;

    return (
        <Form layout="vertical" {...props.formProps}>
            <Row gutter={[10, 0]} align="bottom">
                <Col xs={24} xl={24} md={12}>
                    <Form.Item label={t("users.filter.search.label")} name="q">
                        <Input
                            placeholder={t("users.filter.search.placeholder")}
                            prefix={<Icons.SearchOutlined />}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} xl={24} md={12}>
                    <Form.Item
                        label={t("users.filter.createdAt.label")}
                        name="createdAt"
                    >
                        <RangePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24} xl={24} md={8}>
                    <Form.Item
                        label={t("users.filter.gender.label")}
                        name="gender"
                    >
                        <Select
                            allowClear
                            placeholder={t("users.filter.gender.placeholder")}
                            options={[
                                {
                                    label: t("users.filter.gender.male"),
                                    value: "Male",
                                },
                                {
                                    label: t("users.filter.gender.female"),
                                    value: "Female",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} xl={24} md={8}>
                    <Form.Item
                        label={t("users.filter.isActive.label")}
                        name="isActive"
                    >
                        <Select
                            allowClear
                            placeholder={t("users.filter.isActive.placeholder")}
                            options={[
                                {
                                    label: t("users.filter.isActive.true"),
                                    value: "true",
                                },
                                {
                                    label: t("users.filter.isActive.false"),
                                    value: "false",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} xl={24} md={8}>
                    <Form.Item>
                        <Button
                            style={{ width: "100%" }}
                            htmlType="submit"
                            type="primary"
                        >
                            {t("users.filter.submit")}
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
