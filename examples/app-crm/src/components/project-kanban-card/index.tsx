import { useDelete, useNavigation } from "@refinedev/core";
import { memo, useMemo } from "react";
import dayjs from "dayjs";
import {
    Avatar,
    Button,
    Card,
    ConfigProvider,
    Dropdown,
    Space,
    Tag,
    Tooltip,
    theme,
} from "antd";
import type { MenuProps } from "antd";
import {
    MoreOutlined,
    MessageOutlined,
    ClockCircleOutlined,
    CheckSquareOutlined,
    EyeOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { TextIcon } from "../icon";
import { Text } from "../text";
import {
    getDateColor,
    getNameInitials,
    getRandomColorFromString,
} from "../../utilities";
import { User } from "../../interfaces/graphql";

type ProjectCardProps = {
    id: string;
    title: string;
    comments: {
        totalCount: number;
    };
    dueDate?: string;
    users?: {
        id: string;
        name: string;
        avatarUrl?: User["avatarUrl"];
    }[];
    checkList?: {
        title: string;
        checked: boolean;
    }[];
};

export const ProjectCard = ({
    id,
    title,
    checkList,
    comments,
    dueDate,
    users,
}: ProjectCardProps) => {
    const { token } = theme.useToken();
    const { edit } = useNavigation();
    const { mutate } = useDelete();

    const dropdownItems = useMemo(() => {
        const dropdownItems: MenuProps["items"] = [
            {
                label: "View card",
                key: "1",
                icon: <EyeOutlined />,
                onClick: () => {
                    edit("tasks", id, "replace");
                },
            },
            {
                danger: true,
                label: "Delete card",
                key: "2",
                icon: <DeleteOutlined />,
                onClick: () => {
                    mutate({
                        resource: "tasks",
                        id,
                        meta: {
                            operation: "task",
                        },
                    });
                },
            },
        ];

        return dropdownItems;
    }, []);

    const dueDateOptions = useMemo(() => {
        if (!dueDate) return null;

        const date = dayjs(dueDate);

        return {
            color: getDateColor({ date: dueDate }) as string,
            text: date.format("MMM D"),
        };
    }, [dueDate]);

    const checkListCompletionCountOptions = useMemo(() => {
        const hasCheckList = checkList && checkList.length > 0;
        if (!hasCheckList) {
            return null;
        }

        const total = checkList.length;
        const checked = checkList?.filter((item) => item.checked).length;

        const defaulOptions = {
            color: "default",
            text: `${checked}/${total}`,
            allCompleted: false,
        };

        if (checked === total) {
            defaulOptions.color = "success";
            defaulOptions.allCompleted = true;
            return defaulOptions;
        }

        return defaulOptions;
    }, [checkList]);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Tag: {
                        colorText: token.colorTextSecondary,
                    },
                    Card: {
                        headerBg: "transparent",
                    },
                },
            }}
        >
            <Card
                size="small"
                title={<Text ellipsis={{ tooltip: title }}>{title}</Text>}
                onClick={() => {
                    edit("tasks", id, "replace");
                }}
                extra={
                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: dropdownItems,
                            onPointerDown: (e) => {
                                e.stopPropagation();
                            },
                            onClick: (e) => {
                                e.domEvent.stopPropagation();
                            },
                        }}
                        placement="bottom"
                        arrow={{ pointAtCenter: true }}
                    >
                        <Button
                            type="text"
                            shape="circle"
                            icon={
                                <MoreOutlined
                                    style={{
                                        transform: "rotate(90deg)",
                                    }}
                                />
                            }
                            onPointerDown={(e) => {
                                e.stopPropagation();
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        />
                    </Dropdown>
                }
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <TextIcon
                        style={{
                            marginRight: "4px",
                        }}
                    />
                    {!!comments?.totalCount && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                            }}
                        >
                            <MessageOutlined
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: "12px",
                                }}
                            />
                            <Text size="xs" type="secondary">
                                {comments.totalCount}
                            </Text>
                        </div>
                    )}
                    {dueDateOptions && (
                        <Tag
                            icon={
                                <ClockCircleOutlined
                                    style={{
                                        fontSize: "12px",
                                    }}
                                />
                            }
                            style={{
                                padding: "0 4px",
                                marginInlineEnd: "0",
                                backgroundColor:
                                    dueDateOptions.color === "default"
                                        ? "transparent"
                                        : "unset",
                            }}
                            color={dueDateOptions.color}
                            bordered={dueDateOptions.color !== "default"}
                        >
                            {dueDateOptions.text}
                        </Tag>
                    )}
                    {checkListCompletionCountOptions && (
                        <Tag
                            icon={
                                <CheckSquareOutlined
                                    style={{
                                        fontSize: "12px",
                                    }}
                                />
                            }
                            style={{
                                padding: "0 4px",
                                marginInlineEnd: "0",
                                backgroundColor:
                                    checkListCompletionCountOptions.color ===
                                    "default"
                                        ? "transparent"
                                        : "unset",
                            }}
                            color={checkListCompletionCountOptions.color}
                            bordered={
                                checkListCompletionCountOptions.color !==
                                "default"
                            }
                        >
                            {checkListCompletionCountOptions.text}
                        </Tag>
                    )}
                    {!!users?.length && (
                        <Space
                            size={4}
                            wrap
                            direction="horizontal"
                            align="center"
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginLeft: "auto",
                                marginRight: "0",
                            }}
                        >
                            {users.map((user) => {
                                return (
                                    <Tooltip key={user.id} title={user.name}>
                                        <Avatar
                                            key={user.id}
                                            alt={user.name}
                                            size="small"
                                            src={user.avatarUrl}
                                            style={{
                                                backgroundColor:
                                                    getRandomColorFromString(
                                                        user.name,
                                                    ),
                                                objectFit: "contain",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {getNameInitials({
                                                name: user.name,
                                            })}
                                        </Avatar>
                                    </Tooltip>
                                );
                            })}
                        </Space>
                    )}
                </div>
            </Card>
        </ConfigProvider>
    );
};

export const ProjectCardMemo = memo(ProjectCard, (prev, next) => {
    return (
        prev.id === next.id &&
        prev.title === next.title &&
        prev.dueDate === next.dueDate &&
        prev.comments.totalCount === next.comments.totalCount &&
        prev.checkList?.length === next.checkList?.length &&
        prev.users?.length === next.users?.length
    );
});
