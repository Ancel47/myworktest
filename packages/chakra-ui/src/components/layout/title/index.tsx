import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <ChakraLink as={Link} to="/">
            {collapsed ? (
                <img
                    src="https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-collapsed.svg"
                    alt="Refine"
                />
            ) : (
                <img
                    src="https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg"
                    alt="Refine"
                    width="140px"
                />
            )}
        </ChakraLink>
    );
};
