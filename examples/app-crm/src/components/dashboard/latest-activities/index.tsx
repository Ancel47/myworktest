import React from "react";
import { Card, Skeleton as AntdSkeleton } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useList } from "@refinedev/core";
import dayjs from "dayjs";
import { Text } from "../../text";
import { Audit, Deal } from "../../../interfaces/graphql";
import { CustomAvatar } from "../../custom-avatar";

import styles from "./index.module.css";

export const DashboardLatestActivities: React.FC<{ limit?: number }> = ({
    limit = 5,
}) => {
    const { data: deals, isLoading: isLoadingDeals } = useList<Deal>({
        resource: "deals",
        pagination: {
            mode: "off",
        },
        meta: {
            fields: [
                "id",
                "title",
                {
                    stage: ["id", "title"],
                },
                {
                    company: ["id", "name", "avatarUrl"],
                },
            ],
        },
    });
    const {
        data: audit,
        isLoading: isLoadingAudit,
        isError,
        error,
    } = useList<Audit>({
        resource: "audits",
        pagination: {
            pageSize: limit,
        },
        sorters: [
            {
                field: "createdAt",
                order: "desc",
            },
        ],
        filters: [
            {
                field: "action",
                operator: "in",
                value: ["CREATE", "UPDATE"],
            },
            {
                field: "targetEntity",
                operator: "eq",
                value: "Deal",
            },
        ],
        meta: {
            fields: [
                "id",
                "action",
                "targetEntity",
                "targetId",
                {
                    changes: ["field", "from", "to"],
                },
                "createdAt",
                {
                    user: ["id", "name", "avatarUrl"],
                },
            ],
        },
    });

    if (isError) {
        console.error("Error fetching latest activities", error);
        return null;
    }

    const isLoading = isLoadingAudit || isLoadingDeals;

    return (
        <Card
            headStyle={{ padding: "16px" }}
            bodyStyle={{
                padding: "0 1rem",
            }}
            title={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <UnorderedListOutlined />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        Latest activities
                    </Text>
                </div>
            }
        >
            {isLoading &&
                Array.from({ length: limit }).map((_, index) => (
                    <Skeleton key={index} />
                ))}
            {!isLoading &&
                audit?.data.map(({ id, user, createdAt, action, targetId }) => {
                    const deal =
                        deals?.data.find((task) => task.id === `${targetId}`) ||
                        undefined;

                    return (
                        <div key={id} className={styles.item}>
                            <div className={styles.avatar}>
                                <CustomAvatar
                                    shape="square"
                                    size={48}
                                    src={deal?.company.avatarUrl}
                                    name={deal?.company.name}
                                />
                            </div>
                            <div className={styles.action}>
                                <Text type="secondary" size="xs">
                                    {dayjs(createdAt).fromNow()}
                                </Text>

                                <Text className={styles.detail}>
                                    <Text className={styles.name} strong>
                                        {user?.name}
                                    </Text>
                                    <Text>
                                        {action === "CREATE"
                                            ? "created"
                                            : "moved"}
                                    </Text>
                                    <Text strong>{deal?.title}</Text>
                                    <Text>deal</Text>
                                    <Text>
                                        {action === "CREATE" ? "in" : "to"}
                                    </Text>
                                    <Text strong>
                                        {deal?.stage?.title || "Unassigned"}.
                                    </Text>
                                </Text>
                            </div>
                        </div>
                    );
                })}
        </Card>
    );
};

const Skeleton = () => {
    return (
        <div className={styles.item}>
            <AntdSkeleton.Avatar
                active
                size={48}
                shape="square"
                style={{
                    borderRadius: "4px",
                    marginRight: "16px",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <AntdSkeleton.Button
                    active
                    style={{
                        height: "16px",
                    }}
                />
                <AntdSkeleton.Button
                    active
                    style={{
                        width: "300px",
                        height: "16px",
                    }}
                />
            </div>
        </div>
    );
};
