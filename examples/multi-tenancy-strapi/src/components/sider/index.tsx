import React, { useState } from "react";
import {
    useTitle,
    useLogout,
    ITreeMenu,
    CanAccess,
    useMenu,
    useWarnAboutChange,
} from "@refinedev/core";

import {
    UnorderedListOutlined,
    AppstoreAddOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Layout as AntdLayout, Menu, Grid } from "antd";
import { Link } from "react-router-dom";
import { antLayoutSider, antLayoutSiderMobile } from "./styles";

import { StoreSelect } from "components/select";

export const CustomSider: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { warnWhen, setWarnWhen } = useWarnAboutChange();
    const { mutate: logout } = useLogout();
    const Title = useTitle();
    const { SubMenu } = Menu;
    const { menuItems, selectedKey } = useMenu();
    const breakpoint = Grid.useBreakpoint();

    const isMobile =
        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
        return tree.map((item: ITreeMenu) => {
            const { icon, label, route, name, children, parentName } = item;

            if (children.length > 0) {
                return (
                    <SubMenu
                        key={route}
                        icon={icon ?? <UnorderedListOutlined />}
                        title={label}
                    >
                        {renderTreeView(children, selectedKey)}
                    </SubMenu>
                );
            }
            const isSelected = route === selectedKey;
            const isRoute = !(
                parentName !== undefined && children.length === 0
            );
            return (
                <CanAccess
                    key={route}
                    resource={name.toLowerCase()}
                    action="list"
                    params={{ resource: item }}
                >
                    <Menu.Item
                        key={route}
                        style={{
                            fontWeight: isSelected ? "bold" : "normal",
                        }}
                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}
                    >
                        <Link to={route || "/"}>{label}</Link>
                        {!collapsed && isSelected && (
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
                "Are you sure you want to leave? You have unsaved changes.",
            );

            if (confirm) {
                setWarnWhen(false);
                logout();
            }
        } else {
            logout();
        }
    };

    return (
        <AntdLayout.Sider
            collapsible
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="lg"
            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
            style={isMobile ? antLayoutSiderMobile : antLayoutSider}
        >
            {Title && <Title collapsed={collapsed} />}
            <Menu selectedKeys={[selectedKey]} mode="inline">
                <Menu.Item key="store" icon={<AppstoreAddOutlined />}>
                    <StoreSelect
                        onSelect={() => {
                            setCollapsed(true);
                        }}
                    />
                </Menu.Item>
                {renderTreeView(menuItems, selectedKey)}
                <Menu.Item
                    key="logout"
                    onClick={handleLogout}
                    icon={<LogoutOutlined />}
                >
                    Logout
                </Menu.Item>
            </Menu>
        </AntdLayout.Sider>
    );
};
