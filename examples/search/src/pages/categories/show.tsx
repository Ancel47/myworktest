import {
    useShow,
    Show,
    Typography,
    IResourceComponentsProps,
} from "@pankod/refine";

import { ICategory } from "interfaces";

const { Title, Text } = Typography;

export const CategoryShow: React.FC<IResourceComponentsProps> = (props) => {
    const { queryResult } = useShow<ICategory>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show {...props} isLoading={isLoading}>
            {record && (
                <>
                    <Title level={5}>Id</Title>
                    <Text>{record.id}</Text>

                    <Title level={5}>Title</Title>
                    <Text>{record.title}</Text>
                </>
            )}
        </Show>
    );
};
