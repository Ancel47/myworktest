import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import { NavbarItemType } from "./constants";
import { TwoTonedCloudIcon } from "../icons/popover";

type NavbarItemProps = {
    item: NavbarItemType;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        setTheme(localStorage.getItem("theme") || null);
        window.addEventListener("storage", storageEventHandler, false);

        return () => {
            window.removeEventListener("storage", storageEventHandler, false);
        };
    }, []);

    const storageEventHandler = () => {
        setTheme(localStorage.getItem("theme") || null);
    };

    let Icon = item.icon;

    if (item.label === "Cloud") {
        Icon = theme === "light" ? TwoTonedCloudIcon : item.icon;
    }

    return (
        <Link
            key={item.label}
            to={item.href}
            className={clsx(
                "inline-flex items-center gap-2",
                "text-base font-medium text-gray-900 dark:text-white",
                "no-underline",
            )}
        >
            {item.icon && <Icon />}
            {item.label}
        </Link>
    );
};
