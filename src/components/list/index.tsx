import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Space, Row } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { PlusOutlined } from "@ant-design/icons";

import { DataContext } from "@contexts/data";
import { TableProps } from "@components/table";
import { GetListResponse, IDataContext } from "@interfaces";

export interface ListProps {
    resourceName: string;
    isCreate?: boolean;
    isEdit?: boolean;
}

export const List: React.FC<ListProps> = ({
    resourceName,
    isCreate,
    isEdit,
    children,
}) => {
    const { getList } = useContext<IDataContext>(DataContext);
    const queryParams = new URLSearchParams(useLocation().search);
    const history = useHistory();

    let current = 1;
    const queryParamCurrent = queryParams.get("current");
    if (queryParamCurrent) {
        current = +queryParamCurrent;
    }

    let pageSize = 10;
    const queryParamPageSize = queryParams.get("pageSize");
    if (queryParamPageSize) {
        pageSize = +queryParamPageSize;
    }

    const { data, isFetching } = useQuery<GetListResponse>(
        [`resource/list/${resourceName}`, current],
        () =>
            getList(resourceName, {
                pagination: {
                    current,
                    pageSize,
                },
            }),
        {
            keepPreviousData: true,
        },
    );

    const pagination: TablePaginationConfig = {
        total: data?.total,
        current,
        pageSize,
        defaultCurrent: 1,
        defaultPageSize: 10,
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement<TableProps>(child, {
                resourceName,
                dataSource: data?.data,
                loading: isFetching,
                pagination,
                isEdit,
            });
        }
        return child;
    });

    return (
        <section>
            <Row justify="end" style={{ marginBottom: 12 }}>
                <Space align="end" direction="horizontal">
                    {isCreate && (
                        <Button
                            onClick={() =>
                                history.push(
                                    `/resources/${resourceName}/create`,
                                )
                            }
                            type="primary"
                            shape="round"
                            icon={<PlusOutlined />}
                        >
                            Create
                        </Button>
                    )}
                </Space>
            </Row>
            <Row>{childrenWithProps}</Row>
        </section>
    );
};
