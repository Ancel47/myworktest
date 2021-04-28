import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    FilterDropdown,
    Select,
    getDefaultFilter,
    useSelect,
    DateField,
} from "@pankod/refine";

export const PostList = (props: IResourceComponentsProps) => {
    const { tableProps, sorter, filters } = useTable({
        initialSorter: [
            {
                field: "id",
                order: "descend",
            },
        ],
    });

    const { selectProps } = useSelect({
        resource: "categories",
        optionLabel: "title",
        optionValue: "id",
        defaultValue: getDefaultFilter("category.id", filters),
    });

    return (
        <List {...props}>
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    position: ["bottomCenter"],
                    size: "small",
                }}
            >
                <Table.Column
                    key="id"
                    dataIndex="id"
                    title="ID"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter
                />
                <Table.Column
                    key="title"
                    dataIndex="title"
                    title="Title"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("title", sorter)}
                    sorter
                />
                <Table.Column
                    key="category.id"
                    dataIndex={["category", "title"]}
                    title="Category"
                    render={(value) => <TextField value={value} />}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                showSearch
                                mode="multiple"
                                placeholder="Select Category"
                                filterOption={false}
                                {...selectProps}
                            />
                        </FilterDropdown>
                    )}
                    defaultFilteredValue={getDefaultFilter(
                        "category.id",
                        filters,
                    )}
                />
                <Table.Column
                    key="created_at"
                    dataIndex="created_at"
                    title="Created At"
                    render={(value) => (
                        <DateField value={value} format="YYYY-MM-DD HH:mm:ss" />
                    )}
                    sorter
                />
            </Table>
        </List>
    );
};
