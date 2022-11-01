import React from "react";
import { RefineLayoutLayoutProps } from "@pankod/refine-ui-types";
import { Box } from "@chakra-ui/react";

import { Sider as DefaultSider } from "./sider";
import { Header as DefaultHeader } from "./header";

export const Layout: React.FC<RefineLayoutLayoutProps> = ({
    Sider,
    Header,
    Footer,
    OffLayoutArea,
    children,
}) => {
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;

    return (
        <Box sx={{ display: "flex" }}>
            <SiderToRender />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                }}
            >
                <HeaderToRender />
                <Box as="main" minH="100vh">
                    {children}
                </Box>
                {Footer && <Footer />}
            </Box>
            {OffLayoutArea && <OffLayoutArea />}
        </Box>
    );
};
