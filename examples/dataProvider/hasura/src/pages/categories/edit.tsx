import {
    Edit,
    Form,
    Input,
    IResourceComponentsProps,
    useForm,
} from "@pankod/refine";

import { ICategory } from "interfaces";

export const CategoriesEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<ICategory>({
        metaData: {
            fields: ["id", "title"],
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};
