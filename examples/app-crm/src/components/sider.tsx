import React, { CSSProperties } from "react";
import {
    useTranslate,
    useLogout,
    CanAccess,
    ITreeMenu,
    useIsExistAuthentication,
    useMenu,
    useRefineContext,
    useLink,
    useActiveAuthProvider,
    pickNotDeprecated,
    useWarnAboutChange,
} from "@refinedev/core";
import { useThemedLayoutContext } from "@refinedev/antd";
import {
    DashboardOutlined,
    LogoutOutlined,
    UnorderedListOutlined,
    BarsOutlined,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Grid, Drawer, Button, theme } from "antd";

import { Title } from "./title";

const drawerButtonStyles: CSSProperties = {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    position: "fixed",
    top: 64,
    zIndex: 999,
};

const { SubMenu } = Menu;
const { useToken } = theme;

export const Sider: React.FC = () => {
    const { token } = useToken();
    const {
        siderCollapsed,
        setSiderCollapsed,
        mobileSiderOpen,
        setMobileSiderOpen,
    } = useThemedLayoutContext();

    const Link = useLink();
    const { warnWhen, setWarnWhen } = useWarnAboutChange();
    const translate = useTranslate();
    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
    const breakpoint = Grid.useBreakpoint();
    const { hasDashboard } = useRefineContext();
    const authProvider = useActiveAuthProvider();
    const { mutate: mutateLogout } = useLogout({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    const isMobile =
        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

    const renderTreeView = (tree: ITreeMenu[], selectedKey?: string) => {
        return tree.map((item: ITreeMenu) => {
            const {
                icon,
                label,
                route,
                key,
                name,
                children,
                parentName,
                meta,
                options,
            } = item;

            if (children.length > 0) {
                return (
                    <CanAccess
                        key={item.key}
                        resource={name.toLowerCase()}
                        action="list"
                        params={{
                            resource: item,
                        }}
                    >
                        <SubMenu
                            key={item.key}
                            icon={icon ?? <UnorderedListOutlined />}
                            title={label}
                        >
                            {renderTreeView(children, selectedKey)}
                        </SubMenu>
                    </CanAccess>
                );
            }
            const isSelected = key === selectedKey;
            const isRoute = !(
                pickNotDeprecated(meta?.parent, options?.parent, parentName) !==
                    undefined && children.length === 0
            );

            return (
                <CanAccess
                    key={item.key}
                    resource={name.toLowerCase()}
                    action="list"
                    params={{
                        resource: item,
                    }}
                >
                    <Menu.Item
                        key={item.key}
                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}
                    >
                        <Link to={route ?? ""}>{label}</Link>
                        {!siderCollapsed && isSelected && (
                            <div className="ant-menu-tree-arrow" />
                        )}
                    </Menu.Item>
                </CanAccess>
            );
        });
    };

    const handleLogout = () => {
        if (warnWhen) {
            const confirm = window.confirm(
                translate(
                    "warnWhenUnsavedChanges",
                    "Are you sure you want to leave? You have unsaved changes.",
                ),
            );

            if (confirm) {
                setWarnWhen(false);
                mutateLogout();
            }
        } else {
            mutateLogout();
        }
    };

    const logout = (
        <Menu.Item
            key="logout"
            onClick={() => handleLogout()}
            icon={<LogoutOutlined />}
        >
            {translate("buttons.logout", "Logout")}
        </Menu.Item>
    );

    const items = renderTreeView(menuItems, selectedKey);

    const renderSider = () => {
        return (
            <>
                {items}
                {logout}
            </>
        );
    };

    const renderMenu = () => {
        return (
            <Menu
                selectedKeys={selectedKey ? [selectedKey] : []}
                defaultOpenKeys={defaultOpenKeys}
                mode="inline"
                style={{
                    paddingTop: "8px",
                    border: "none",
                    overflow: "auto",
                    height: "calc(100% - 72px)",
                    background: "transparent",
                }}
                onClick={() => {
                    setMobileSiderOpen(false);
                }}
            >
                {renderSider()}
            </Menu>
        );
    };

    const renderDrawerSider = () => {
        return (
            <>
                <Drawer
                    open={mobileSiderOpen}
                    onClose={() => setMobileSiderOpen(false)}
                    placement="left"
                    closable={false}
                    width={256}
                    bodyStyle={{
                        padding: 0,
                    }}
                    maskClosable={true}
                >
                    <Layout>
                        <Layout.Sider
                            width={500}
                            style={{
                                height: "100vh",
                                backgroundColor: token.colorBgContainer,
                                borderRight: `1px solid ${token.colorBorderBg}`,
                            }}
                        >
                            <div
                                style={{
                                    width: "256px",
                                    padding: "0 16px",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    height: "64px",
                                    backgroundColor: token.colorBgElevated,
                                    borderBottom: "none",
                                }}
                            >
                                <Title collapsed={false} />
                            </div>
                            {renderMenu()}
                        </Layout.Sider>
                    </Layout>
                </Drawer>
                <Button
                    style={drawerButtonStyles}
                    size="large"
                    onClick={() => setMobileSiderOpen(true)}
                    icon={<BarsOutlined />}
                ></Button>
            </>
        );
    };

    if (isMobile) {
        return renderDrawerSider();
    }

    const siderStyles: React.CSSProperties = {
        backgroundColor: token.colorBgContainer,
        borderRight: `1px solid ${token.colorBorderBg}`,
        position: "fixed",
        top: 0,
        height: "100vh",
        zIndex: 999,
    };

    return (
        <>
            <div
                style={{
                    width: siderCollapsed ? "80px" : "256px",
                    transition: "all 0.2s",
                }}
            />
            <Layout.Sider
                style={siderStyles}
                width={256}
                collapsible
                collapsed={siderCollapsed}
                onCollapse={(collapsed, type) => {
                    if (type === "clickTrigger") {
                        setSiderCollapsed(collapsed);
                    }
                }}
                collapsedWidth={80}
                breakpoint="lg"
                trigger={
                    <Button
                        type="text"
                        style={{
                            borderRadius: 0,
                            height: "100%",
                            width: "100%",
                            backgroundColor: token.colorBgElevated,
                            borderRight: `1px solid ${token.colorBorderBg}`,
                        }}
                    >
                        {siderCollapsed ? (
                            <RightOutlined
                                style={{
                                    color: token.colorPrimary,
                                }}
                            />
                        ) : (
                            <LeftOutlined
                                style={{
                                    color: token.colorPrimary,
                                }}
                            />
                        )}
                    </Button>
                }
            >
                <div
                    style={{
                        width: siderCollapsed ? "80px" : "256px",
                        padding: siderCollapsed ? "0" : "0 16px",
                        display: "flex",
                        justifyContent: siderCollapsed
                            ? "center"
                            : "flex-start",
                        alignItems: "center",
                        height: "64px",
                        backgroundColor: token.colorBgElevated,
                        fontSize: "14px",
                    }}
                >
                    <Title collapsed={siderCollapsed} />
                </div>
                {renderMenu()}
            </Layout.Sider>
        </>
    );
};
