import React from "react";
import humanizeString from "humanize-string";

import { useResource, useRouterContext } from "@hooks";
import { ResourceRouterParams } from "src/interfaces";

export type BreadcrumbsType = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
};

type UseBreadcrumbReturnType = {
    breadcrumbs: BreadcrumbsType[];
};

export const useBreadcrumb = (): UseBreadcrumbReturnType => {
    const { useParams } = useRouterContext();
    const { resources, resource } = useResource();

    const { action } = useParams<ResourceRouterParams>();

    const breadcrumbs: BreadcrumbsType[] = [];

    if (!resource?.name) {
        return { breadcrumbs };
    }

    const addBreadcrumb = (parentName: string) => {
        const parentResource = resources.find(
            (resource) => resource.name === parentName,
        );

        if (parentResource) {
            if (parentResource.parentName) {
                addBreadcrumb(parentResource.parentName);
            }

            breadcrumbs.push({
                label:
                    parentResource.label ?? humanizeString(parentResource.name),
                href: !!parentResource.list
                    ? `/${parentResource.route}`
                    : undefined,
                icon: parentResource.icon,
            });
        }
    };

    if (resource.parentName) {
        addBreadcrumb(resource.parentName);
    }

    breadcrumbs.push({
        label: resource.label ?? humanizeString(resource.name),
        href: !!resource.list ? `/${resource.route}` : undefined,
        icon: resource.icon,
    });

    if (action) {
        breadcrumbs.push({ label: humanizeString(action) });
    }

    return {
        breadcrumbs,
    };
};
