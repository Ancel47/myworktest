import React from "react";
import { Button, Form, FormItemProps } from "antd";
import { useForm } from "@refinedev/antd";
import { EditOutlined } from "@ant-design/icons";

import { Text } from "../text";
import styles from "./index.module.css";

type SingleElementFormProps = {
    icon?: React.ReactNode;
    itemProps?: FormItemProps;
    view?: React.ReactNode;
    state?: "empty" | "form" | "view";
    onUpdate?: () => void;
    onClick?: () => void;
} & React.PropsWithChildren;

export const SingleElementForm: React.FC<SingleElementFormProps> = ({
    state = "view",
    view,
    icon,
    itemProps,
    onClick,
    onUpdate,
    children,
}) => {
    const { formProps, saveButtonProps } = useForm({
        action: "edit",
        redirect: false,
        autoSave: {
            enabled: false,
        },
        queryOptions: {
            enabled: false,
        },
        onMutationSuccess() {
            onUpdate?.();
        },
    });

    return (
        <Form layout="vertical" {...formProps}>
            <div className={styles.container}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.content}>
                    <div className={styles.input}>
                        <Text size="xs" className={styles.label}>
                            {itemProps?.label}
                        </Text>
                        {state === "form" && (
                            <Form.Item {...itemProps} noStyle>
                                {children}
                            </Form.Item>
                        )}
                        {state === "empty" && (
                            <Button
                                onClick={onClick}
                                type="link"
                                size="small"
                                style={{ padding: 0 }}
                            >
                                Add {itemProps?.label}
                            </Button>
                        )}
                        {state === "view" && view}
                    </div>

                    {state === "form" && (
                        <div className={styles.buttons}>
                            <Button onClick={() => onUpdate?.()}>Cancel</Button>
                            <Button type="primary" {...saveButtonProps}>
                                Save
                            </Button>
                        </div>
                    )}
                </div>

                {state === "view" && (
                    <div className={styles.actions}>
                        <Button onClick={onClick} icon={<EditOutlined />} />
                    </div>
                )}
            </div>
        </Form>
    );
};
