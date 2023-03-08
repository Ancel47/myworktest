import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { BikeWhiteIcon } from "components/icons/bike-white";

type TitleProps = {
    collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    return (
        <Link to="/">
            <Box
                sx={{
                    height: "72px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {collapsed ? (
                    <BikeWhiteIcon sx={{ color: "common.white" }} />
                ) : (
                    <img src="/images/fine-foods.svg" alt="Finefood" />
                )}
            </Box>
        </Link>
    );
};
