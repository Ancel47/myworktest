import {
    List,
    Table,
    useTable,
    useModal,
    Modal,
    Button,
    IResourceComponentsProps,
} from "@pankod/refine";

import { IPost } from "interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable<IPost>();
    const { modalProps, show, close } = useModal();

    return (
        <>
            <List
                pageHeaderProps={{
                    extra: (
                        <Button
                            onClick={() => {
                                show();

                                setTimeout(close, 1000);
                            }}
                        >
                            Show Dummy Modal
                        </Button>
                    ),
                }}
            >
                <Table {...tableProps} rowKey="id">
                    <Table.Column dataIndex="id" title="ID" />
                    <Table.Column dataIndex="title" title="Title" />
                    <Table.Column dataIndex="content" title="Content" />
                </Table>
            </List>
            <Modal {...modalProps}>Dummy Modal Content</Modal>
        </>
    );
};
