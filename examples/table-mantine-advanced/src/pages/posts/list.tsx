import React, { useCallback } from "react";
import { GetManyResponse, useDeleteMany, useMany } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender, Row } from "@tanstack/react-table";
import {
    useForm,
    SaveButton,
    useSelect,
    DeleteButton,
    List,
    DateField,
    EditButton,
    Select,
} from "@refinedev/mantine";

import {
    Button,
    Table,
    Group,
    TextInput,
    ActionIcon,
    Checkbox,
    ScrollArea,
    Pagination,
    Space,
    Box,
} from "@mantine/core";

import MDEditor from "@uiw/react-md-editor";
import { IconChevronDown, IconChevronRight } from "@tabler/icons";

import { ColumnFilter, ColumnSorter } from "../../components/table";
import { IPost, ICategory } from "../../interfaces";

export const PostList: React.FC = () => {
    const {
        refineCore: { id, setId },
        getInputProps,
        saveButtonProps,
    } = useForm<IPost>({
        refineCoreProps: {
            redirect: false,
            action: "edit",
        },
        initialValues: {
            title: "",
            category: {
                id: "",
            },
            content: "",
        },
    });

    const { mutate } = useDeleteMany<IPost>();

    const deleteSelectedItems = (ids: number[]) => {
        mutate(
            {
                resource: "posts",
                ids,
            },
            {
                onSuccess: () => {
                    resetRowSelection();
                },
            },
        );
    };

    const { selectProps: filterSelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    const columns = React.useMemo<ColumnDef<IPost>[]>(
        () => [
            {
                id: "selection",
                accessorKey: "id",
                enableSorting: false,
                enableColumnFilter: false,
                header: function render({ table }) {
                    return (
                        <Group wrap="nowrap">
                            <Checkbox
                                checked={table.getIsAllRowsSelected()}
                                indeterminate={table.getIsSomeRowsSelected()}
                                onChange={table.getToggleAllRowsSelectedHandler()}
                            />

                            {table.getIsSomeRowsSelected() && (
                                <Button
                                    id="delete-selected"
                                    size="xs"
                                    color="red"
                                    variant="outline"
                                    onClick={() =>
                                        deleteSelectedItems(
                                            table
                                                .getSelectedRowModel()
                                                .flatRows.map(
                                                    ({ original }) =>
                                                        original.id,
                                                ),
                                        )
                                    }
                                >
                                    Delete
                                </Button>
                            )}
                        </Group>
                    );
                },
                cell: function render({ row }) {
                    return (
                        <Group wrap="nowrap">
                            <Checkbox
                                checked={row.getIsSelected()}
                                indeterminate={row.getIsSomeSelected()}
                                onChange={row.getToggleSelectedHandler()}
                            />
                            <ActionIcon
                                size="xs"
                                onClick={() => row.toggleExpanded()}
                            >
                                {row.getIsExpanded() ? (
                                    <IconChevronDown />
                                ) : (
                                    <IconChevronRight />
                                )}
                            </ActionIcon>
                        </Group>
                    );
                },
            },
            {
                id: "id",
                header: "ID",
                accessorKey: "id",
            },
            {
                id: "title",
                header: "Title",
                accessorKey: "title",
                meta: {
                    filterOperator: "contains",
                },
            },
            {
                id: "category.id",
                header: "Category",
                enableColumnFilter: false,
                accessorKey: "category.id",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        categoriesData: GetManyResponse<ICategory>;
                    };
                    const category = meta.categoriesData?.data.find(
                        (item) => item.id === getValue(),
                    );
                    return category?.title ?? "Loading...";
                },
            },
            {
                id: "createdAt",
                header: "Created At",
                accessorKey: "createdAt",
                cell: function render({ getValue }) {
                    return (
                        <DateField value={getValue() as string} format="LLL" />
                    );
                },
                enableColumnFilter: false,
            },
            {
                id: "actions",
                header: "Actions",
                accessorKey: "id",
                enableColumnFilter: false,
                enableSorting: false,
                cell: function render({ getValue }) {
                    return (
                        <Group gap="xs" wrap="nowrap">
                            <EditButton
                                hideText
                                onClick={() => {
                                    setId(getValue() as number);
                                }}
                            />
                            <DeleteButton
                                hideText
                                recordItemId={getValue() as number}
                            />
                        </Group>
                    );
                },
            },
        ],
        [filterSelectProps.data],
    );

    const {
        setOptions,
        getAllColumns,
        getHeaderGroups,
        getRowModel,
        resetRowSelection,
        refineCore: {
            tableQueryResult: { data: tableData },
            setCurrent,
            pageCount,
            current,
        },
    } = useTable<IPost>({
        columns,
        getRowId: (originalRow) => originalRow.id.toString(),
    });

    const categoryIds = tableData?.data?.map((item) => item.category.id) ?? [];
    const { data: categoriesData } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const { selectProps } = useSelect<ICategory>({
        resource: "categories",
        defaultValue: categoryIds,
    });

    setOptions((prev) => ({
        ...prev,
        meta: {
            ...prev.meta,
            categoriesData,
        },
    }));

    const renderEditRow = useCallback(
        (row: Row<IPost>) => {
            const { id } = row.original;

            return (
                <React.Fragment key={id}>
                    <tr>
                        <td>
                            <ActionIcon onClick={() => row.toggleExpanded()}>
                                {row.getIsExpanded() ? (
                                    <IconChevronDown />
                                ) : (
                                    <IconChevronRight />
                                )}
                            </ActionIcon>
                        </td>
                        <td>{id}</td>
                        <td>
                            <TextInput
                                id="title-input"
                                {...getInputProps("title")}
                            />
                        </td>
                        <td>
                            <Select
                                id="category-select"
                                {...getInputProps("category.id")}
                                {...selectProps}
                            />
                        </td>
                        <td>
                            <Group gap={4} wrap="nowrap">
                                <SaveButton size="xs" {...saveButtonProps} />
                                <Button
                                    size="xs"
                                    variant="default"
                                    onClick={() => setId(undefined)}
                                >
                                    Cancel
                                </Button>
                            </Group>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={getAllColumns().length}>
                            <MDEditor
                                data-color-mode="light"
                                {...getInputProps("content")}
                            />
                        </td>
                    </tr>
                </React.Fragment>
            );
        },
        [selectProps],
    );

    return (
        <ScrollArea>
            <List>
                <Table>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {!header.isPlaceholder && (
                                            <Group gap="xs" wrap="nowrap">
                                                <Box>
                                                    {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext(),
                                                    )}
                                                </Box>
                                                <Group gap="xs" wrap="nowrap">
                                                    <ColumnSorter
                                                        column={header.column}
                                                    />
                                                    <ColumnFilter
                                                        column={header.column}
                                                    />
                                                </Group>
                                            </Group>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => {
                            if (id === (row.original as IPost).id) {
                                return renderEditRow(row);
                            } else
                                return (
                                    <React.Fragment key={row.id}>
                                        <tr key={row.id}>
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => {
                                                    return (
                                                        <td key={cell.id}>
                                                            {flexRender(
                                                                cell.column
                                                                    .columnDef
                                                                    .cell,
                                                                cell.getContext(),
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                        </tr>

                                        {row.getIsExpanded() && (
                                            <tr id="expanded-row">
                                                <td
                                                    colSpan={
                                                        row.getVisibleCells()
                                                            .length
                                                    }
                                                >
                                                    <MDEditor
                                                        data-color-mode="light"
                                                        contentEditable={false}
                                                        preview="preview"
                                                        value={
                                                            row.original.content
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                );
                        })}
                    </tbody>
                </Table>
                <Space h={16} />
                <Group mt="md" justify="right">
                    <Pagination
                        total={pageCount}
                        value={current}
                        onChange={setCurrent}
                    />
                </Group>
            </List>
        </ScrollArea>
    );
};
