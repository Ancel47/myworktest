import React from "react";
import { Link, Menu, useMenu, useTitle } from "@pankod/refine";

export const CustomMenu: React.FC = () => {
    const Title = useTitle();
    const { menuItems, selectedKey } = useMenu();

    return (
        <>
            <Title collapsed={false} />
            <Menu
                theme="dark"
                defaultSelectedKeys={["dashboard"]}
                selectedKeys={[selectedKey]}
                mode="horizontal"
            >
                {menuItems.map(({ icon, route, label }) => (
                    <Menu.Item key={route} icon={icon}>
                        <Link to={route}>{label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );
};
