import React from "react";
import { DashboardOutlined } from "@ant-design/icons";
import {
    useRefineContext,
    useTranslate,
    useResource,
    useRouterContext,
} from "..";
import { IMenuItem, ITreeMenu } from "../../interfaces";
import { userFriendlyResourceName, createTreeView } from "@definitions";

type useMenuReturnType = {
    defaultOpenKeys: string[];
    selectedKey: string;
    menuItems: ITreeMenu[];
};

/**
 * `useMenu` is used to get menu items of the default sidebar.
 * These items include a link to dashboard page (if it exists) and links to the user defined resources
 * (passed as children to {@link https://refine.dev/docs/core/components/refine-config `<Refine>`}).
 * This hook can also be used to build custom menus, which is also used by default sidebar to show menu items.
 *
 * @see {@link https://refine.dev/docs/core/hooks/useMenu/useMenu} for more details.
 */
export const useMenu: () => useMenuReturnType = () => {
    const { resources } = useResource();
    const translate = useTranslate();

    const { useLocation, useParams } = useRouterContext();
    const location = useLocation();
    const params = useParams<{ resource: string }>();

    const { hasDashboard } = useRefineContext();

    const selectedKey = React.useMemo(() => {
        let selectedResource = resources.find(
            (el) => location?.pathname === `/${el.route}`,
        );

        if (!selectedResource) {
            selectedResource = resources.find(
                (el) => params?.resource === (el.route as string),
            );
        }

        let _selectedKey: string;
        if (selectedResource?.route) {
            _selectedKey = `/${selectedResource?.route}`;
        } else if (location.pathname === "/") {
            _selectedKey = "/";
        } else {
            _selectedKey = location?.pathname;
        }
        return _selectedKey;
    }, [resources, location, params]);

    const treeMenuItems: IMenuItem[] = React.useMemo(
        () => [
            ...(hasDashboard
                ? [
                      {
                          name: "Dashboard",
                          icon: <DashboardOutlined />,
                          route: `/`,
                          key: "dashboard",
                          label: translate("dashboard.title", "Dashboard"),
                      },
                  ]
                : []),
            ...resources.map((resource) => {
                const route = `/${resource.route}`;

                return {
                    ...resource,
                    icon: resource.icon,
                    route: route,
                    key: resource.key ?? route,
                    label:
                        resource.label ??
                        translate(
                            `${resource.name}.${resource.name}`,
                            userFriendlyResourceName(resource.name, "plural"),
                        ),
                };
            }),
        ],
        [resources, hasDashboard],
    );
    const menuItems: ITreeMenu[] = React.useMemo(
        () => createTreeView(treeMenuItems),
        [treeMenuItems],
    );

    const defaultOpenKeys = React.useMemo(
        () => selectedKey.split("/").filter(Boolean),
        [selectedKey],
    );

    const values = React.useMemo(() => {
        return {
            defaultOpenKeys,
            selectedKey,
            menuItems,
        };
    }, [defaultOpenKeys, selectedKey, menuItems]);

    return values;
};
