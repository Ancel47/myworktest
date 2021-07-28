import React from "react";
import {
    Row,
    Col,
    Layout,
    Card,
    Typography,
    Form,
    Input,
    Button,
    Checkbox,
} from "antd";

import { layoutStyles, containerStyles, titleStyles } from "./styles";
import logo from "src/assets/images/refine-logo.svg";

import { useLogin, useTranslate } from "@hooks";

const { Text, Title } = Typography;
export interface ILoginForm {
    username: string;
    password: string;
    remember: boolean;
}

export const LoginPage: React.FC = () => {
    const [form] = Form.useForm<ILoginForm>();
    const translate = useTranslate();

    const { mutate: login } = useLogin<ILoginForm>();

    const CardTitle = (
        <Title level={3} style={titleStyles}>
            {translate("pages.login.title", "Sign in your account")}
        </Title>
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
                    <div style={containerStyles}>
                        <img src={logo} alt="Refine Logo" width="100%" />
                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                            <Form<ILoginForm>
                                layout="vertical"
                                form={form}
                                onFinish={(values) => {
                                    login(values);
                                }}
                                requiredMark={false}
                                initialValues={{
                                    remember: false,
                                }}
                            >
                                <Form.Item
                                    name="username"
                                    label={translate(
                                        "pages.login.username",
                                        "Username",
                                    )}
                                    rules={[{ required: true }]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label={translate(
                                        "pages.login.password",
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
                                <div style={{ marginBottom: "12px" }}>
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        noStyle
                                    >
                                        <Checkbox
                                            style={{
                                                fontSize: "12px",
                                            }}
                                        >
                                            {translate(
                                                "pages.login.remember",
                                                "Remember me",
                                            )}
                                        </Checkbox>
                                    </Form.Item>

                                    <a
                                        style={{
                                            float: "right",
                                            fontSize: "12px",
                                        }}
                                        href="#"
                                    >
                                        {translate(
                                            "pages.login.forgotPassword",
                                            "Forgot password?",
                                        )}
                                    </a>
                                </div>
                                <Button
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    block
                                >
                                    {translate("pages.login.signin", "Sign in")}
                                </Button>
                            </Form>
                            <div style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: 12 }}>
                                    {translate(
                                        "pages.login.noAccount",
                                        "Still no account? Please go to",
                                    )}{" "}
                                    <a href="#" style={{ fontWeight: "bold" }}>
                                        {translate(
                                            "pages.login.signup",
                                            "Sign up",
                                        )}
                                    </a>
                                </Text>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};
