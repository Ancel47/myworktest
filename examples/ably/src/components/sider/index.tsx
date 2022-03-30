import React, { useState } from "react";
import {
    useTitle,
    useNavigation,
    useSubscription,
    CanAccess,
    ITreeMenu,
} from "@pankod/refine-core";
import {
    AntdLayout,
    Menu,
    useMenu,
    Grid,
    Icons,
    Badge,
} from "@pankod/refine-antd";
import { antLayoutSider, antLayoutSiderMobile } from "./styles";

export const CustomSider: React.FC = () => {
    const [subscriptionCount, setSubscriptionCount] = useState(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const Title = useTitle();
    const { SubMenu } = Menu;

    const { menuItems, selectedKey } = useMenu();
    const breakpoint = Grid.useBreakpoint();
    const { push } = useNavigation();

    const isMobile = !breakpoint.lg;

    useSubscription({
        channel: "resources/posts",
        types: ["created", "updated"],
        onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),
    });

    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
        return tree.map((item: ITreeMenu) => {
            const { icon, label, route, name, children, parentName } = item;

            if (children.length > 0) {
                return (
                    <SubMenu
                        key={name}
                        icon={icon ?? <Icons.UnorderedListOutlined />}
                        title={label}
                    >
                        {renderTreeView(children, selectedKey)}
                    </SubMenu>
                );
            }
            const isSelected = route === selectedKey;
            const isRoute = !(parentName && children.length === 0);
            return (
                <CanAccess
                    key={route}
                    resource={name.toLowerCase()}
                    action="list"
                >
                    <Menu.Item
                        key={selectedKey}
                        onClick={() => {
                            push(route);
                        }}
                        style={{
                            fontWeight: isSelected ? "bold" : "normal",
                        }}
                        icon={
                            icon ?? (isRoute && <Icons.UnorderedListOutlined />)
                        }
                    >
                        {label}
                        {label === "Posts" && (
                            <Badge
                                size="small"
                                count={subscriptionCount}
                                offset={[2, -15]}
                            />
                        )}
                        {!collapsed && isSelected && (
                            <div className="ant-menu-tree-arrow" />
                        )}
                    </Menu.Item>
                </CanAccess>
            );
        });
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

            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                onClick={({ key }) => {
                    if (!breakpoint.lg) {
                        setCollapsed(true);
                    }

                    if (key === "/posts") {
                        setSubscriptionCount(0);
                    }

                    push(key as string);
                }}
            >
                {renderTreeView(menuItems, selectedKey)}
            </Menu>
        </AntdLayout.Sider>
    );
};
