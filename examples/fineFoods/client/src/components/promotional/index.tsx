import { Button, Typography, Grid } from "@pankod/refine";

import { PlateIcon } from "@components/icons";

const { Text } = Typography;
const { useBreakpoint } = Grid;

require("./promotional.less");

export const Promotional = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.lg || screens.xs;

    return (
        <div className="promotional-wrapper">
            <div className="text-wrapper">
                <Text className="title">
                    Delight <br /> in every bite!
                </Text>
                <Text className="subtitle">Delivering happiness, on time.</Text>
                <Button className="explore-button">
                    <Text style={{ fontSize: 24, fontWeight: 700 }}>
                        Explore menu
                    </Text>
                </Button>
            </div>
            <PlateIcon height={isMobile ? 300 : 400} />
        </div>
    );
};
