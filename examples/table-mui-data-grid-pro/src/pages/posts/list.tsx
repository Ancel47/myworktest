import React from "react";
import { Option, useSelect } from "@refinedev/core";
import { useDataGrid, List } from "@refinedev/mui";
import { GridValueFormatterParams } from "@mui/x-data-grid";
import { DataGridPro, GridColumns } from "@mui/x-data-grid-pro";

import { ICategory, IPost } from "interfaces";

export const PostsList: React.FC = () => {
    const { dataGridProps } = useDataGrid<IPost>({
        syncWithLocation: true,

        pagination: {
            current: 2,
            pageSize: 10,
        },

        filters: {
            initial: [
                {
                    field: "status",
                    operator: "eq",
                    value: "draft",
                },
                {
                    field: "title",
                    operator: "contains",
                    value: "A",
                },
            ],
        },

        sorters: {
            initial: [
                {
                    field: "title",
                    order: "asc",
                },
                {
                    field: "id",
                    order: "asc",
                },
            ],
        },
    });

    const {
        options,
        queryResult: { isLoading },
    } = useSelect<ICategory>({
        resource: "categories",

        pagination: {
            mode: "off",
        },
    });

    const columns = React.useMemo<GridColumns<IPost>>(
        () => [
            {
                field: "id",
                headerName: "ID",
                type: "number",
            },
            { field: "title", headerName: "Title", minWidth: 400, flex: 1 },
            {
                field: "category.id",
                headerName: "Category",
                type: "singleSelect",
                headerAlign: "left",
                align: "left",
                minWidth: 250,
                flex: 0.5,
                valueOptions: options,
                valueFormatter: (params: GridValueFormatterParams<Option>) => {
                    return params.value;
                },
                renderCell: function render({ row }) {
                    if (isLoading) {
                        return "Loading...";
                    }

                    const category = options.find(
                        (item) =>
                            item.value.toString() ===
                            row.category.id.toString(),
                    );
                    return category?.label;
                },
            },
            {
                field: "status",
                headerName: "Status",
                minWidth: 120,
                flex: 0.3,
                type: "singleSelect",
                valueOptions: ["draft", "published", "rejected"],
            },
        ],
        [options, isLoading],
    );

    return (
        <List>
            <DataGridPro
                {...dataGridProps}
                columns={columns}
                autoHeight
                rowsPerPageOptions={[10, 20, 30, 50, 100]}
            />
        </List>
    );
};
