import React, { PropsWithChildren } from "react";
import {
  HttpError,
  useExport,
  useGo,
  useNavigation,
  useTranslate,
} from "@refinedev/core";
import { useLocation } from "react-router-dom";
import { DateField, ExportButton, useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { IUser, IUserFilterVariables } from "../../interfaces";
import { CustomTooltip, RefineListView } from "../../components";
import { CustomerStatus } from "../../components/customer";

export const CustomerList = ({ children }: PropsWithChildren) => {
  const go = useGo();
  const { pathname } = useLocation();
  const { showUrl } = useNavigation();
  const t = useTranslate();

  const { dataGridProps, filters, sorters } = useDataGrid<
    IUser,
    HttpError,
    IUserFilterVariables
  >({
    initialPageSize: 10,
  });

  const columns = React.useMemo<GridColDef<IUser>[]>(
    () => [
      {
        field: "orderNumber",
        headerName: "ID #",
        description: "ID #",
        width: 52,
        renderCell: function render({ row }) {
          return <Typography>#{row.id}</Typography>;
        },
      },
      {
        field: "avatar",
        headerName: t("users.fields.avatar.label"),
        renderCell: function render({ row }) {
          return (
            <Avatar
              sx={{
                width: 32,
                height: 32,
              }}
              src={row.avatar[0].url}
            />
          );
        },
        width: 64,
        align: "center",
        headerAlign: "center",
        sortable: false,
      },
      {
        field: "gsm",
        headerName: t("users.fields.gsm"),
        width: 120,
        sortable: false,
      },
      {
        field: "fullName",
        headerName: t("users.fields.name"),
        minWidth: 140,
      },
      {
        field: "address",
        headerName: t("users.addresses.address"),
        minWidth: 284,
        flex: 1,
        renderCell: function render({ row }) {
          const text = row.addresses[0].text;

          return (
            <CustomTooltip title={text}>
              <Typography
                sx={{
                  whiteSpace: "pre-wrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {row.addresses[0].text}
              </Typography>
            </CustomTooltip>
          );
        },
      },
      {
        field: "createdAt",
        width: 220,
        headerName: t("users.fields.createdAt"),
        renderCell: function render({ row }) {
          return <DateField value={row.createdAt} format="LL / hh:mm a" />;
        },
      },
      {
        field: "isActive",
        headerName: t("users.fields.isActive.label"),
        width: 120,
        renderCell: function render({ row }) {
          return <CustomerStatus value={row.isActive} />;
        },
      },
      {
        field: "actions",
        headerName: t("table.actions"),
        width: 80,
        align: "center",
        headerAlign: "center",
        renderCell: function render({ row }) {
          return (
            <IconButton
              sx={{
                color: "text.secondary",
              }}
              onClick={() => {
                return go({
                  to: `${showUrl("users", row.id)}`,
                  query: {
                    to: pathname,
                  },
                  options: {
                    keepQuery: true,
                  },
                  type: "replace",
                });
              }}
            >
              <VisibilityOutlined />
            </IconButton>
          );
        },
      },
    ],
    [t],
  );

  const { isLoading, triggerExport } = useExport<IUser>({
    sorters,
    filters,
    pageSize: 50,
    maxItemCount: 50,
    mapData: (item) => {
      return {
        id: item.id,
        fullName: item.fullName,
        gsm: item.gsm,
        isActive: item.isActive,
        createdAt: item.createdAt,
      };
    },
  });

  return (
    <>
      <RefineListView
        breadcrumb={false}
        headerButtons={
          <ExportButton
            variant="outlined"
            onClick={triggerExport}
            loading={isLoading}
            size="medium"
            sx={{ height: "40px" }}
          />
        }
      >
        <Paper>
          <DataGrid
            {...dataGridProps}
            sx={{}}
            columns={columns}
            autoHeight
            pageSizeOptions={[10, 20, 50, 100]}
          />
        </Paper>
      </RefineListView>
      {children}
    </>
  );
};
