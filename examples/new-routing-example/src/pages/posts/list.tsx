import {
    IResourceComponentsProps,
    useMany,
    getDefaultFilter,
} from "@refinedev/core";

import {
    List,
    TextField,
    EditButton,
    ShowButton,
    FilterDropdown,
    TagField,
    useTable,
    useSelect,
} from "@refinedev/antd";

import { Table, Space, Select, Radio } from "antd";

import { IPost, ICategory } from "interfaces";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, filters } = useTable<IPost>({
        /**
         * This will make our table sync with the URL.
         *
         * Syncing includes, sorters, filters and pagination. (Extra parameters are kept in the URL)
         */
        syncWithLocation: true,
    });

    const categoryIds =
        tableProps?.dataSource?.map((item) => item.category.id) ?? [];
    const { data, isLoading } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        optionLabel: "title",
        optionValue: "id",
        defaultValue: getDefaultFilter("category.id", filters, "in"),
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column
                    dataIndex={["category", "id"]}
                    title="Category"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return (
                            <TextField
                                value={
                                    data?.data.find((item) => item.id === value)
                                        ?.title
                                }
                            />
                        );
                    }}
                    filterDropdown={(props) => (
                        <FilterDropdown
                            {...props}
                            mapValue={(selectedKeys) =>
                                selectedKeys.map(Number)
                            }
                        >
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                    defaultFilteredValue={getDefaultFilter(
                        "category.id",
                        filters,
                        "in",
                    )}
                />
                <Table.Column
                    dataIndex="status"
                    title="Status"
                    render={(value: string) => <TagField value={value} />}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Radio.Group>
                                <Radio value="published">Published</Radio>
                                <Radio value="draft">Draft</Radio>
                                <Radio value="rejected">Rejected</Radio>
                            </Radio.Group>
                        </FilterDropdown>
                    )}
                />
                <Table.Column<IPost>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                                /**
                                 * Passing `authorId` in `meta`.
                                 * Because `authorId` field is used as a parameter in `show` action of `posts` resource.
                                 *
                                 * We can pass parameters in `meta` fields to use them in route calculations.
                                 * Additionally, existing parameters will be used in route calculations,
                                 * If we had `authorId` in existing parameters, we don't need to pass it in `meta`.
                                 */
                                meta={{
                                    authorId: "123",
                                }}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
