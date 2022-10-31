import React from "react";
import {
    useBreadcrumb,
    useRefineContext,
    useRouterContext,
} from "@pankod/refine-core";
import { RefineBreadcrumbProps } from "@pankod/refine-ui-types";
import {
    Breadcrumb as ChakraBreadcrumb,
    BreadcrumbItem as ChakraBreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbProps as ChakraBreadcrumbProps,
} from "@chakra-ui/react";
import { IconHome } from "@tabler/icons";

export type BreadcrumbProps = RefineBreadcrumbProps<ChakraBreadcrumbProps>;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    breadcrumbProps,
    showHome = true,
    hideIcons = false,
}) => {
    const { breadcrumbs } = useBreadcrumb();
    const { Link } = useRouterContext();
    const { hasDashboard } = useRefineContext();

    if (breadcrumbs.length === 1) {
        return null;
    }

    return (
        <ChakraBreadcrumb mb="3" {...breadcrumbProps}>
            {showHome && hasDashboard && (
                <ChakraBreadcrumbItem>
                    <Link to="/">
                        <IconHome size={20} />
                    </Link>
                </ChakraBreadcrumbItem>
            )}
            {breadcrumbs.map(({ label, icon, href }) => {
                return (
                    <ChakraBreadcrumbItem key={label}>
                        {!hideIcons && icon}
                        {href ? (
                            <BreadcrumbLink ml={2} as={Link} to={href}>
                                {label}
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink ml={2}>{label}</BreadcrumbLink>
                        )}
                    </ChakraBreadcrumbItem>
                );
            })}
        </ChakraBreadcrumb>
    );
};
