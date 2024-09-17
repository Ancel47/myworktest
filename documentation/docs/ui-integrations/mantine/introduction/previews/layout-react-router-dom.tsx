import React from "react";
import { Sandpack } from "@site/src/components/sandpack";

export default function LayoutReactRouterDom() {
  return (
    <Sandpack
      showNavigator
      // hidePreview
      //   showFiles
      initialPercentage={35}
      dependencies={{
        "@refinedev/mantine": "^2.33.0",
        "@refinedev/core": "^4.54.1",
        "@refinedev/react-router-v6": "^4.5.4",
        "@refinedev/simple-rest": "^4.5.4",
        "@refinedev/react-table": "^5.6.4",
        "@tanstack/react-table": "^8.2.6",
        "@tabler/icons-react": "^3.1.0",
        "@mantine/core": "^7.5.1",
        "@mantine/hooks": "^7.5.1",
        "@mantine/form": "^7.5.1",
        "@mantine/notifications": "^7.5.1",
        "react-router": "latest",
        "react-router-dom": "^6.8.1",
      }}
      startRoute="/products"
      files={{
        "/App.tsx": {
          code: AppTsxCode,
          active: true,
        },
        "/pages/products/list.tsx": {
          code: ListTsxCode,
          hidden: true,
        },
      }}
    />
  );
}

const AppTsxCode = /* jsx */ `
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import {
    ErrorComponent,
    ThemedLayoutV2,
    RefineThemes,
    useNotificationProvider
} from "@refinedev/mantine";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";

import { ProductList } from "./pages/products/list";

export default function App() {
  return (
    <BrowserRouter>
        <MantineProvider
            theme={RefineThemes.Blue}
        >
            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={useNotificationProvider}
                resources={[
                    {
                        name: "products",
                        list: "/products",
                    }
                ]}
            >
                <Routes>
                    <Route
                        // The layout will wrap all the pages inside this route
                        element={
                        <ThemedLayoutV2>
                            <Outlet />
                        </ThemedLayoutV2>
                        }
                    >
                        <Route path="/products" element={<ProductList />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
            <Notifications />
        </MantineProvider>
    </BrowserRouter>
  );
};
`.trim();

const ListTsxCode = /* jsx */ `
import React from "react";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { List } from "@refinedev/mantine";

import { Box, Group, ScrollArea, Table, Pagination } from "@mantine/core";

export const ProductList = () => {
    const columns = React.useMemo(
        () => [
            {
                id: "id",
                header: "ID",
                accessorKey: "id",
            },
            {
                id: "name",
                header: "Name",
                accessorKey: "name",
                meta: {
                    filterOperator: "contains",
                },
            },
            {
              id: "material",
              header: "Material",
              accessorKey: "material",
            },
            {
                id: "price",
                header: "Price",
                accessorKey: "price",
            },
        ],
        [],
    );

    const {
        getHeaderGroups,
        getRowModel,
        setOptions,
        refineCore: {
            setCurrent,
            pageCount,
            current,
            tableQuery: { data: tableData },
        },
    } = useTable({
        columns,
        refineCoreProps: {
            initialSorter: [
                {
                    field: "id",
                    order: "desc",
                },
            ],
        },
    });

    return (
        <ScrollArea>
            <List>
                <Table highlightOnHover>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {flexRender(
                                            header.column.columnDef
                                                .header,
                                            header.getContext(),
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
                <Pagination
                    position="right"
                    total={pageCount}
                    page={current}
                    onChange={setCurrent}
                />
            </List>
        </ScrollArea>
    );
};
`.trim();
