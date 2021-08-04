import {
    Edit,
    Form,
    Input,
    IResourceComponentsProps,
    useForm,
    useTranslate,
    Checkbox,
    Avatar,
    Row,
    Col,
    Typography,
    Space,
} from "@pankod/refine";

const { Text } = Typography;

import { IStore } from "interfaces";

export const StoreEdit: React.FC<IResourceComponentsProps> = () => {
    const t = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm<IStore>();

    return (
        <Edit
            isLoading={queryResult?.isFetching}
            saveButtonProps={saveButtonProps}
        >
            <Form
                {...formProps}
                layout="vertical"
                initialValues={{
                    isActive: true,
                }}
            >
                <Row justify="space-around" wrap>
                    <Col xs={24} lg={6}>
                        <Space
                            direction="vertical"
                            align="center"
                            style={{
                                width: "100%",
                                textAlign: "center",
                                marginBottom: "16px",
                            }}
                        >
                            <Avatar
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "256px",
                                }}
                                src="/images/default-store-img-lg.png"
                                alt="Store Location"
                            />
                            <Text
                                strong
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                Choose store location on the map
                            </Text>
                        </Space>
                    </Col>
                    <Col xs={24} lg={6}>
                        <Form.Item
                            label={t("stores:fields.title")}
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
                            label={t("stores:fields.isActive")}
                            name="isActive"
                            valuePropName="checked"
                        >
                            <Checkbox>{t("stores:fields.isActive")}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={6}>
                        <Form.Item
                            label={t("stores:fields.address")}
                            name={["address", "text"]}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Edit>
    );
};
