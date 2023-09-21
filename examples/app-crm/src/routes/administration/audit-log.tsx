import { getDefaultFilter } from "@refinedev/core";
import {
    DateField,
    FilterDropdown,
    useTable,
    getDefaultSortOrder,
    List,
} from "@refinedev/antd";
import { DatePicker, Input, Radio, Space, Table, Tag, TagProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { ActionCell } from "./components";
import { CustomAvatar, Text, PaginationTotal } from "../../components";
import { Audit } from "@/interfaces";

const getActionColor = (action: string): TagProps["color"] => {
    switch (action) {
        case "CREATE":
            return "green";
        case "UPDATE":
            return "cyan";
        case "DELETE":
            return "red";
        default:
            return "default";
    }
};

export const AuditLogPage = () => {
    const { tableProps, filters, sorters } = useTable<Audit>({
        meta: {
            fields: [
                "id",
                { user: ["name", "avatarUrl"] },
                "action",
                "targetEntity",
                "targetId",
                { changes: ["field", "from", "to"] },
                "createdAt",
            ],
        },
        filters: {
            initial: [
                { field: "user.name", value: "", operator: "contains" },
                { field: "createdAt", value: [], operator: "between" },
            ],
        },
        sorters: {
            initial: [{ field: "createdAt", order: "desc" }],
        },
    });

    return (
        <div className="page-container">
            <List
                breadcrumb={false}
                contentProps={{ style: { marginTop: "1.6rem" } }}
                title={
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: "24px",
                            lineHeight: "24px",
                        }}
                    >
                        Audit Log
                    </Text>
                }
            >
                <Table
                    className="audit-log-table"
                    {...tableProps}
                    rowKey="id"
                    scroll={{ x: true }}
                    pagination={{
                        ...tableProps.pagination,
                        showTotal: (total) => (
                            <PaginationTotal
                                total={total}
                                entityName="audit logs"
                            />
                        ),
                    }}
                >
                    <Table.Column
                        dataIndex="user.name"
                        title="User"
                        width="15%"
                        filterIcon={<SearchOutlined />}
                        render={(_, record: Audit) => {
                            return (
                                <Space>
                                    <CustomAvatar
                                        src={record.user?.avatarUrl}
                                        name={record.user?.name}
                                    />
                                    {record.user?.name || "N/A"}
                                </Space>
                            );
                        }}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Input />
                            </FilterDropdown>
                        )}
                        defaultFilteredValue={getDefaultFilter(
                            "user.name",
                            filters,
                            "contains",
                        )}
                    />
                    <Table.Column
                        dataIndex="action"
                        title="Action"
                        render={(_, record: Audit) => {
                            return (
                                <Space>
                                    <Tag color={getActionColor(record.action)}>
                                        {record.action.charAt(0) +
                                            record.action
                                                .slice(1)
                                                .toLowerCase()}
                                    </Tag>
                                </Space>
                            );
                        }}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Radio.Group>
                                    <Radio value="CREATE">Created</Radio>
                                    <Radio value="UPDATE">Updated</Radio>
                                    <Radio value="DELETE">Deleted</Radio>
                                </Radio.Group>
                            </FilterDropdown>
                        )}
                        defaultFilteredValue={getDefaultFilter(
                            "action",
                            filters,
                            "eq",
                        )}
                    />
                    <Table.Column dataIndex="targetEntity" title="Entity" />
                    <Table.Column dataIndex="targetId" title="Entity ID" />
                    <Table.Column
                        dataIndex="changes"
                        title="Changes"
                        render={(_, record: Audit) => (
                            <ActionCell record={record} />
                        )}
                    />
                    <Table.Column
                        dataIndex="createdAt"
                        title="Date & Time"
                        width="15%"
                        render={(value) => (
                            <DateField
                                style={{ verticalAlign: "middle" }}
                                value={value}
                                format="MM.DD.YYYY - hh:mm"
                            />
                        )}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <DatePicker.RangePicker />
                            </FilterDropdown>
                        )}
                        sorter
                        defaultFilteredValue={getDefaultFilter(
                            "createdAt",
                            filters,
                            "between",
                        )}
                        defaultSortOrder={getDefaultSortOrder(
                            "createdAt",
                            sorters,
                        )}
                    />
                </Table>
            </List>
        </div>
    );
};
