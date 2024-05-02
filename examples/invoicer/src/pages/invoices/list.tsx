import { PropsWithChildren, useState } from "react";
import { getDefaultFilter, useGo } from "@refinedev/core";
import {
  CreateButton,
  DateField,
  DeleteButton,
  FilterDropdown,
  List,
  NumberField,
  ShowButton,
  getDefaultSortOrder,
  useSelect,
  useTable,
} from "@refinedev/antd";
import { Button, Flex, Input, Select, Table, Typography } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { CustomAvatar } from "../../components/avatar";
import { PaginationTotal } from "../../components/pagination-total";
import { InvoicePDFModal } from "../../components/invoice-pdf";
import { API_URL } from "../../utils/constants";
import { IInvoice } from "../../interfaces";

export const InvoicePageList = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<IInvoice | null>(null);

  const go = useGo();

  const { tableProps, filters, sorters } = useTable<IInvoice>({
    meta: {
      populate: ["client", "account.logo"],
    },
    sorters: {
      initial: [{ field: "date", order: "desc" }],
    },
  });

  const { selectProps: selectPropsAccounts } = useSelect({
    resource: "accounts",
    optionLabel: "company_name",
    optionValue: "company_name",
  });

  const { selectProps: selectPropsClients } = useSelect({
    resource: "clients",
    optionLabel: "name",
    optionValue: "name",
  });

  return (
    <>
      <List
        title="Invoices"
        headerButtons={() => {
          return (
            <CreateButton
              size="large"
              onClick={() =>
                go({
                  to: { resource: "invoices", action: "create" },
                  options: { keepQuery: true },
                })
              }
            >
              Add new invoice
            </CreateButton>
          );
        }}
      >
        <Table
          {...tableProps}
          rowKey={"id"}
          pagination={{
            ...tableProps.pagination,
            showSizeChanger: true,
            showTotal: (total) => (
              <PaginationTotal total={total} entityName="invoices" />
            ),
          }}
          scroll={{ x: 960 }}
        >
          <Table.Column
            title="ID"
            dataIndex="id"
            key="id"
            width={80}
            defaultFilteredValue={getDefaultFilter("id", filters)}
            filterIcon={<SearchOutlined />}
            filterDropdown={(props) => {
              return (
                <FilterDropdown {...props}>
                  <Input placeholder="Search ID" />
                </FilterDropdown>
              );
            }}
          />
          <Table.Column
            title="Account"
            dataIndex="account.company_name"
            key="account.company_name"
            defaultFilteredValue={getDefaultFilter(
              "account.company_name",
              filters,
              "in",
            )}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Select
                  mode="multiple"
                  placeholder="Search Account"
                  style={{ width: 220 }}
                  {...selectPropsAccounts}
                />
              </FilterDropdown>
            )}
            render={(_, record: IInvoice) => {
              const logoUrl = record?.account?.logo?.url;
              const src = logoUrl ? `${API_URL}${logoUrl}` : undefined;
              const name = record?.account?.company_name;

              return (
                <Flex align="center" gap={8}>
                  <CustomAvatar name={name} src={src} shape="square" />
                  <Typography.Text>{name}</Typography.Text>
                </Flex>
              );
            }}
          />
          <Table.Column
            title="Client"
            dataIndex="client.name"
            key="client.name"
            render={(_, record: IInvoice) => {
              return <Typography.Text>{record.client?.name}</Typography.Text>;
            }}
            defaultFilteredValue={getDefaultFilter(
              "company_name",
              filters,
              "in",
            )}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Select
                  mode="multiple"
                  placeholder="Search Company Name"
                  style={{ width: 220 }}
                  {...selectPropsClients}
                />
              </FilterDropdown>
            )}
          />
          <Table.Column
            title="Date"
            dataIndex="date"
            key="date"
            width={120}
            sorter
            defaultSortOrder={getDefaultSortOrder("date", sorters)}
            render={(date) => {
              return <DateField value={date} format="D MMM YYYY" />;
            }}
          />
          <Table.Column
            title="Total"
            dataIndex="total"
            key="total"
            width={132}
            sorter
            defaultSortOrder={getDefaultSortOrder("total", sorters)}
            render={(total) => {
              return (
                <NumberField
                  value={total}
                  options={{ style: "currency", currency: "USD" }}
                />
              );
            }}
          />
          <Table.Column
            title="Actions"
            key="actions"
            fixed="right"
            align="end"
            width={144}
            render={(_, record: IInvoice) => {
              return (
                <Flex align="center" gap={8}>
                  <Button
                    icon={<FilePdfOutlined />}
                    onClick={() => {
                      setSelectedInvoice(record);
                    }}
                  />
                  <ShowButton
                    hideText
                    recordItemId={record.id}
                    icon={<EyeOutlined />}
                  />
                  <DeleteButton hideText recordItemId={record.id} />
                </Flex>
              );
            }}
          />
        </Table>
      </List>
      {selectedInvoice && (
        <InvoicePDFModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}
    </>
  );
};
