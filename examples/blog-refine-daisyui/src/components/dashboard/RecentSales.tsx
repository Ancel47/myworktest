import React, { useMemo } from "react";
import { getDefaultFilter } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { IOrder, IOrderStatus } from "../../interfaces";
import { AscIcon, DescIcon, FilterIcon } from "../icons";

export const RecentSales = () => {
    const columns = useMemo<ColumnDef<any>[]>(
        () => [
            {
                id: "id",
                accessorKey: "id",
                header: "Id",
            },
            {
                id: "amount",
                accessorKey: "amount",
                header: "Amount",
                cell: function render({ getValue }) {
                    const amountCur = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(getValue() as number);

                    return <div>{amountCur}</div>;
                },
            },
            {
                id: "orderedBy",
                accessorKey: "user.fullName",
                header: "Ordered By",
            },
            {
                id: "gender",
                accessorKey: "user.gender",
                header: "Gender",
            },
            {
                id: "tel",
                accessorKey: "user.gsm",
                enableSorting: false,
                header: "Tel",
            },
            {
                id: "deliveryAddress",
                accessorKey: "adress.text",
                header: "Delivery Address",
            },
            {
                id: "deliveryStatus",
                accessorKey: "status.text",
                header: "Delivery Status",
                cell: function render({ getValue }) {
                    type TSaleStatusStyleMap = {
                        [key: string]: string;
                    };

                    const saleStatusStyleMap: TSaleStatusStyleMap = {
                        Cancelled: "error",
                        Ready: "primary",
                        "On The Way": "info",
                        Pending: "warning",
                        Delivered: "success",
                    };

                    const status = getValue() as string;
                    const daisyClasses =
                        "badge badge-" + saleStatusStyleMap[status];

                    return <div className={daisyClasses}>{status}</div>;
                },
            },
            {
                id: "createdAt",
                accessorKey: "createdAt",
                header: "Created At",
                cell: function render({ getValue }) {
                    const date = new Intl.DateTimeFormat("en-US", {
                        dateStyle: "short",
                        timeStyle: "short",
                    }).format(new Date(getValue() as string));

                    return <div>{date}</div>;
                },
            },
        ],
        [],
    );

    const {
        refineCore: {
            tableQueryResult: { data: ordersData },
            filters,
            setCurrent,
            setFilters,
        },
        getHeaderGroups,
        getRowModel,
    } = useTable({
        refineCoreProps: {
            resource: "orders",
            pagination: {
                pageSize: 5,
            },
        },
        columns,
    });

    const header = (
        <div className="container">
            <div className="">
                <h1 className="page-title">Recent Sales</h1>
            </div>
            <div className="overflow-x-auto bg-slate-50 border">
                <div className="flex justify-between items-center m-4">
                    <button
                        className="btn btn-outline btn-primary btn-sm normal-case font-light"
                        onClick={() => {
                            setCurrent(1);
                            setFilters([], "replace");
                        }}
                    >
                        <FilterIcon />
                        Clear
                    </button>
                    <div className="flex justify-end items-center">
                        <input
                            className="input input-bordered input-sm"
                            type="search"
                            value={getDefaultFilter("q", filters)}
                            onChange={(e) => {
                                setCurrent(1);
                                setFilters([
                                    {
                                        field: "q",
                                        value: e.target.value,
                                        operator: "contains",
                                    },
                                ]);
                            }}
                            placeholder="Search with keywords"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container my-8">
            {header}
            <div className="overflow-x-auto bg-slate-50 border">
                <table className="table table-zebra border-t">
                    <thead className="bg-slate-200">
                        {getHeaderGroups()?.map((headerGroup) => (
                            <tr key={headerGroup?.id}>
                                {headerGroup?.headers?.map((header) => (
                                    <th
                                        className="text-center"
                                        key={header?.id}
                                        onClick={header?.column?.getToggleSortingHandler()}
                                    >
                                        <div className="flex justify-center items-center">
                                            {!header?.isPlaceholder &&
                                                flexRender(
                                                    header?.column?.columnDef
                                                        ?.header,
                                                    header?.getContext(),
                                                )}
                                            {{
                                                asc: <AscIcon />,
                                                desc: <DescIcon />,
                                            }[
                                                header?.column?.getIsSorted() as string
                                            ] ?? null}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel()?.rows?.map((row) => (
                            <tr key={row?.id}>
                                {row?.getVisibleCells()?.map((cell) => (
                                    <td key={cell?.id}>
                                        {flexRender(
                                            cell?.column?.columnDef?.cell,
                                            cell?.getContext(),
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
