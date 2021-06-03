import {
    useShow,
    Show,
    Typography,
    IResourceComponentsProps,
    useOne,
    MarkdownField,
    useTranslate,
} from "@pankod/refine";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = (props) => {
    const translate = useTranslate();
    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } =
        useOne<ICategory>("categories", record?.category.id || "", {
            enabled: !!record,
        });

    return (
        <Show {...props} isLoading={isLoading}>
            {record && (
                <>
                    <Title level={5}>Id</Title>
                    <Text>{record.id}</Text>

                    <Title level={5}>{translate("posts.fields.title")}</Title>
                    <Text>{record.title}</Text>

                    <Title level={5}>
                        {translate("posts.fields.category")}
                    </Title>
                    <Text>
                        {categoryIsLoading
                            ? "Loading..."
                            : categoryData?.data.title}
                    </Text>

                    <Title level={5}>{translate("posts.fields.content")}</Title>
                    <MarkdownField value={record.content} />
                </>
            )}
        </Show>
    );
};
