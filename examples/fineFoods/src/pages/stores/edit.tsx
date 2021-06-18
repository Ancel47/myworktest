import {
    Edit,
    Form,
    Input,
    IResourceComponentsProps,
    useForm,
    useTranslate,
    Checkbox,
} from "@pankod/refine";

import { IStore } from "interfaces";

export const StoreEdit: React.FC<IResourceComponentsProps> = (props) => {
    const t = useTranslate();
    const { formProps, saveButtonProps } = useForm<IStore>();

    return (
        <Edit {...props} saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={t("stores:fields.name")}
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t("stores:fields.isActive")}
                    name="isActive"
                    valuePropName="checked"
                >
                    <Checkbox value={true}>
                        {t("stores:fields.isActive")}
                    </Checkbox>
                </Form.Item>
            </Form>
        </Edit>
    );
};
