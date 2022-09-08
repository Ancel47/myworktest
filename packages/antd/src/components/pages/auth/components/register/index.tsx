import React from "react";
import { RefineRegisterPageProps } from "@pankod/refine-ui-types";
import { Row, Col, Layout, Card, Typography, Form, Input, Button } from "antd";
import {
    useTranslate,
    useRouterContext,
    useRegister,
} from "@pankod/refine-core";

import { layoutStyles, containerStyles, titleStyles } from "../styles";

const { Text, Title } = Typography;

interface IRegisterForm {
    username?: string;
    email?: string;
    password?: string;
}

export const RegisterPage: React.FC<RefineRegisterPageProps> = ({
    submitButton,
    loginLink,
    renderContent,
}) => {
    const [form] = Form.useForm<IRegisterForm>();
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const { mutate: register, isLoading } = useRegister<IRegisterForm>();

    const CardTitle = (
        <Title level={3} style={titleStyles}>
            {translate("pages.register.title", "Sign up your account")}
        </Title>
    );

    const CardContent = (
        <Card
            title={CardTitle}
            headStyle={{ borderBottom: 0 }}
            style={containerStyles}
        >
            <Form<IRegisterForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                    register(values);
                }}
                requiredMark={false}
            >
                <Form.Item
                    name="email"
                    label={translate("pages.register.email", "Email")}
                    rules={[{ required: true }]}
                >
                    <Input
                        size="large"
                        placeholder={translate(
                            "pages.register.fields.email",
                            "Email",
                        )}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label={translate(
                        "pages.register.fields.password",
                        "Password",
                    )}
                    rules={[{ required: true }]}
                    style={{ marginBottom: "12px" }}
                >
                    <Input
                        type="password"
                        placeholder="●●●●●●●●"
                        size="large"
                    />
                </Form.Item>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                    }}
                >
                    {loginLink ?? (
                        <Text
                            style={{
                                fontSize: 12,
                                marginLeft: "auto",
                            }}
                        >
                            {translate(
                                "pages.login.buttons.haveAccount",
                                "Have an account? ",
                            )}{" "}
                            <Link
                                style={{
                                    fontWeight: "bold",
                                }}
                                to="/login"
                            >
                                {translate("pages.login.signin", "Sign in")}
                            </Link>
                        </Text>
                    )}
                </div>

                {submitButton ?? (
                    <Button
                        type="primary"
                        size="large"
                        htmlType="submit"
                        loading={isLoading}
                        block
                    >
                        {translate("pages.register.buttons.submit", "Sign up")}
                    </Button>
                )}
            </Form>
        </Card>
    );

    return (
        <Layout style={layoutStyles}>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    {renderContent ? renderContent(CardContent) : CardContent}
                </Col>
            </Row>
        </Layout>
    );
};
