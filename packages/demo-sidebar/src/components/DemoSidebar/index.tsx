import React, { useState } from "react";

import {
    Drawer,
    Icons,
    Switch,
    AntdList as List,
    Select,
    Input,
    MutationMode,
    Form,
} from "readmin";

import { Group } from "..";

const handlerStyles: React.CSSProperties = {
    position: "absolute",
    top: "240px",
    right: "390px",
    zIndex: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    fontSize: "16px",
    textAlign: "center",
    background: "var(--antd-wave-shadow-color)",
    borderRadius: "4px 0 0 4px",
    cursor: "pointer",
};

interface SettingItemProps {
    title: string;
    action: React.ReactElement;
}

export interface DemoSidebarProps {
    title: string;
    mutationMode: MutationMode;
    syncWithLocation: boolean;
    warnWhenUnsavedChanges: boolean;
    onTitleChange: React.Dispatch<React.SetStateAction<string>>;
    onMutationModeChange: React.Dispatch<React.SetStateAction<MutationMode>>;
    onSyncWithLocationChange: React.Dispatch<React.SetStateAction<boolean>>;
    onWarnWhenUnsavedChangesChange: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

export const DemoSidebar: React.FC<DemoSidebarProps> = ({
    title,
    mutationMode,
    syncWithLocation,
    warnWhenUnsavedChanges,
    onTitleChange,
    onMutationModeChange,
    onSyncWithLocationChange,
    onWarnWhenUnsavedChangesChange,
}) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Drawer
            visible={show}
            width={390}
            onClose={() => setShow(false)}
            placement="right"
            handler={
                <div
                    style={handlerStyles}
                    className="ant-drawer-handle"
                    onClick={() => setShow(!show)}
                >
                    {show ? (
                        <Icons.CloseOutlined
                            style={{
                                color: "#fff",
                                fontSize: 20,
                            }}
                        />
                    ) : (
                        <Icons.SettingOutlined
                            style={{
                                color: "#fff",
                                fontSize: 20,
                            }}
                        />
                    )}
                </div>
            }
            style={{
                zIndex: 999,
            }}
        >
            <div className="ant-drawer-content">
                <Group title="Settings">
                    <Form
                        labelCol={{
                            flex: 1,
                            style: {
                                overflow: "visible",
                                whiteSpace: "pre-wrap",
                                textAlign: "left",
                            },
                        }}
                        wrapperCol={{
                            flex: 1,
                            style: {
                                marginRight: 5,
                                alignItems: "flex-end",
                            },
                        }}
                    >
                        <Form.Item label="Title">
                            <Input
                                size="small"
                                placeholder="Readmin"
                                value={title}
                                onChange={(e) => onTitleChange(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Mutation mode">
                            <Select<MutationMode>
                                size="small"
                                value={mutationMode}
                                onChange={onMutationModeChange}
                            >
                                <Select.Option value="pessimistic">
                                    Pessimistic
                                </Select.Option>
                                <Select.Option value="optimistic">
                                    Optimistic
                                </Select.Option>
                                <Select.Option value="undoable">
                                    Undoable
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Sync with location">
                            <Switch
                                size="small"
                                checked={syncWithLocation}
                                onChange={onSyncWithLocationChange}
                            />
                        </Form.Item>
                        <Form.Item label="Warn when there are unsaved changes">
                            <Switch
                                size="small"
                                checked={warnWhenUnsavedChanges}
                                onChange={onWarnWhenUnsavedChangesChange}
                            />
                        </Form.Item>
                    </Form>
                </Group>
            </div>
        </Drawer>
    );
};

export default DemoSidebar;
