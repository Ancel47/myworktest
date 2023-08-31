import React, { useState } from "react";
import { useList, useMany } from "@refinedev/core";
import { Badge, Popover, Button, Space, Divider, Spin } from "antd";
import { BellOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

import { NotificationMessage } from "./notification-message";
import { CustomAvatar } from "./custom-avatar";
import { Text } from "./text";
import { Audit, Task } from "../interfaces/graphql";

export const Notifications: React.FC = () => {
    const [open, setOpen] = useState(false);

    const { data, isLoading } = useList<Audit>({
        resource: "audits",
        pagination: {
            pageSize: 5,
        },
        sorters: [{ field: "createdAt", order: "desc" }],
        filters: [
            {
                field: "action",
                operator: "in",
                value: ["CREATE", "UPDATE"],
            },
            {
                field: "targetEntity",
                operator: "eq",
                value: "Task",
            },
        ],
        meta: {
            fields: [
                "id",
                "action",
                "targetEntity",
                "targetId",
                "createdAt",
                {
                    user: ["id", "name", "avatarUrl"],
                },
            ],
        },
        queryOptions: {
            enabled: open,
        },
    });

    const targetIds = data?.data?.map((audit) => audit.targetId);
    const { data: taskData } = useMany<Task>({
        resource: "tasks",
        ids: targetIds ?? [],
        meta: {
            fields: ["id", "title", { stage: ["id", "title"] }],
        },
        queryOptions: {
            enabled: Boolean(targetIds?.length),
        },
    });

    const getTask = (id: string | number) => {
        return taskData?.data?.find((task) => task.id == id);
    };

    const content = (
        <Space direction="vertical" split={<Divider style={{ margin: 0 }} />}>
            {data?.data?.map((audit) => (
                <Space key={audit.id}>
                    <CustomAvatar
                        size={48}
                        src={audit.user?.avatarUrl}
                        name={audit.user?.name}
                    />
                    <Space direction="vertical" size={0}>
                        <NotificationMessage
                            audit={audit}
                            task={getTask(audit.targetId)}
                        />
                        <Text size="xs" type="secondary">
                            {dayjs(audit?.createdAt).fromNow()}
                        </Text>
                    </Space>
                </Space>
            ))}
        </Space>
    );

    const loadingContent = (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 20,
            }}
        >
            <Spin />
        </div>
    );

    return (
        <Popover
            placement="bottomRight"
            content={isLoading ? loadingContent : content}
            trigger="click"
            onOpenChange={(newOpen) => setOpen(newOpen)}
            overlayStyle={{ width: 400 }}
        >
            <Badge dot>
                <Button
                    shape="circle"
                    icon={<BellOutlined />}
                    style={{ border: 0 }}
                />
            </Badge>
        </Popover>
    );
};
