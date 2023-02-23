import React from "react";
import {
    useGetIdentity,
    useLogout,
    useMenu,
    useNavigation,
    useRouterContext,
} from "@pankod/refine-core";
import { useModalForm } from "@pankod/refine-antd";

import {
    PlusSquareOutlined,
    LogoutOutlined,
    LoginOutlined,
} from "@ant-design/icons";
import { Button, Image, Space } from "antd";

import { CreateCanvas } from "components/canvas";
import { Canvas } from "types";

export const Header: React.FC = () => {
    const { Link, useLocation } = useRouterContext();
    const { isError } = useGetIdentity({
        legacy: true,
    });
    const { mutate: mutateLogout } = useLogout({
        legacy: true,
    });
    const { push } = useNavigation();
    const { selectedKey } = useMenu();
    const { pathname } = useLocation();

    const { modalProps, formProps, show } = useModalForm<Canvas>({
        resource: "canvases",
        action: "create",
        redirect: "show",
    });

    const isLogin = !isError;

    const handleRedirect = () => {
        console.log({ pathname });
        if (pathname === "/") {
            push("/login");
            return;
        }

        push(`/login?to=${encodeURIComponent(pathname)}`);
    };

    return (
        <div className="container">
            <div className="layout-header">
                <Link to="/">
                    <Image
                        width="120px"
                        src="/pixels-logo.svg"
                        alt="Pixels Logo"
                        preview={false}
                    />
                </Link>
                <Space size="large">
                    <Link
                        to="/"
                        className={`nav-button ${
                            selectedKey === "/" ? "active" : ""
                        }`}
                    >
                        <span className="dot-icon" />
                        HOME
                    </Link>
                    <Link
                        to="/canvases"
                        className={`nav-button ${
                            selectedKey === "/canvases" ? "active" : ""
                        }`}
                    >
                        <span className="dot-icon" />
                        NEW
                    </Link>
                </Space>
                <Space>
                    <Button
                        icon={<PlusSquareOutlined />}
                        onClick={() => {
                            if (isLogin) {
                                show();
                            } else {
                                handleRedirect();
                            }
                        }}
                        title="Create a new canvas"
                    >
                        Create
                    </Button>
                    {isLogin ? (
                        <Button
                            type="primary"
                            danger
                            onClick={() => {
                                mutateLogout();
                            }}
                            icon={<LogoutOutlined />}
                            title="Logout"
                        />
                    ) : (
                        <Button
                            type="primary"
                            onClick={() => {
                                handleRedirect();
                            }}
                            icon={<LoginOutlined />}
                            title="Login"
                        >
                            Login
                        </Button>
                    )}
                </Space>
            </div>
            <CreateCanvas modalProps={modalProps} formProps={formProps} />
        </div>
    );
};
