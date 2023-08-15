import { useNavigate } from "react-router-dom";
import { useGetToPath } from "@refinedev/core";
import { useModalForm } from "@refinedev/antd";
import { Form, Input, Modal } from "antd";

export const KanbanCreatePage = () => {
    const navigate = useNavigate();
    const getToPath = useGetToPath();
    const { formProps, modalProps, close } = useModalForm({
        action: "create",
        defaultVisible: true,
    });

    return (
        <Modal
            {...modalProps}
            onCancel={() => {
                //TODO: modalProps.onCancel expect an event so, I used close. Actually both of them are same.
                close();
                navigate(
                    getToPath({
                        action: "list",
                    }) ?? "",
                    {
                        replace: true,
                    },
                );
            }}
            title="Add new card"
            width={512}
        >
            <Form
                {...formProps}
                layout="vertical"
                onFinish={(values) => {
                    //TODO: It would not be undefined
                    formProps?.onFinish?.({
                        ...values,
                        stageId: 1,
                        userIds: [],
                    });
                }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
