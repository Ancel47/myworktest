import { Row, Col, Card, Space } from "@pankod/refine";

import {
    DeliveryMap,
    DeliverySchedule,
    OrdersChart,
    SalesChart,
} from "components";

export const DashbaordPage: React.FC = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col md={16}>
                <Card title="Delivery Map" style={{ marginBottom: 10 }}>
                    <Space
                        direction="vertical"
                        size="large"
                        style={{ width: "100%" }}
                    >
                        <DeliveryMap />
                        <DeliverySchedule />
                    </Space>
                </Card>

                <Card style={{ marginBottom: 10 }}>
                    <OrdersChart />
                </Card>

                <Card style={{ marginBottom: 10 }}>
                    <SalesChart />
                </Card>
            </Col>
            <Col md={8} xs={24}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Card>
                        <p>Total Order: 256</p>
                        <p>Total Delivery: 253</p>
                    </Card>
                    <Card>
                        <p>Daily Revune</p>
                    </Card>
                    <Card>...</Card>
                </Space>
            </Col>
        </Row>
    );
};
