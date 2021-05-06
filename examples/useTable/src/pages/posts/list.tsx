import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostList = (props: IResourceComponentsProps) => {
    const { tableProps } = useTable<IPost>();

    return (
        <List {...props}>
            <Table {...tableProps} key="id">
                <Table.Column
                    key="id"
                    dataIndex="id"
                    title="ID"
                    render={(value) => <TextField value={value} />}
                />
                <Table.Column
                    key="title"
                    dataIndex="title"
                    title="Title"
                    render={(value) => <TextField value={value} />}
                />
            </Table>
        </List>
    );
};
