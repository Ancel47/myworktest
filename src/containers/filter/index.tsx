import React, {
    ReactElement,
    ReactNode,
    Children,
    FC,
    isValidElement,
    cloneElement,
    useState,
    useEffect,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import {
    Form as AntdForm,
    Dropdown,
    Menu,
    Button,
    Row,
    Col,
    FormItemProps,
} from "antd";
import { FilterOutlined } from "@ant-design/icons";

export interface FilterProps {
    resourceName: string;
}

export const Filter: FC<FilterProps> = ({ resourceName, children }) => {
    const history = useHistory();
    const { search } = useLocation();
    const [form] = AntdForm.useForm();

    const childFilters: FormItemProps[] = [];
    Children.map(children, (filterForm) => {
        if (isValidElement(filterForm)) {
            filterForm.props.children.map((filterItem: ReactElement) => {
                const { name, label, hidden } = filterItem.props;
                childFilters.push({ name, label, hidden });
            });
        }
    });
    const [filters, setFilters] = useState(childFilters);

    const renderFilterForm = (form: ReactElement) => {
        const children = Children.map(
            form.props.children,
            (formItem): ReactNode => {
                const currentFormItem = filters.find(
                    (item) => item.name === formItem.props.name,
                );

                const hidden =
                    (currentFormItem && currentFormItem.hidden) || false;

                const props = {
                    hidden,
                };

                return cloneElement<FormItemProps>(formItem, props);
            },
        );

        return cloneElement(form, {
            children: children,
        });
    };

    const preQueries = qs.parse(search);

    form.setFieldsValue(preQueries);

    const onValuesChange = (_changedValues: object, values: object): void => {
        const newQueries = {
            ...preQueries,
            ...values,
            current: 1,
        };

        return history.push(
            `/resources/${resourceName}?${qs.stringify(newQueries)}`,
        );
    };

    const filterFormElement = Children.map(children, (filterForm) => {
        if (isValidElement(filterForm)) {
            return cloneElement(renderFilterForm(filterForm), {
                onValuesChange,
                form,
            });
        }

        return filterForm;
    });

    const menu = (
        <Menu
            onClick={({ key }) => {
                const newFilters = [...filters];
                const selectedItemIndex = newFilters.findIndex(
                    (item) => item.name === key,
                );

                const selectedItem = newFilters[selectedItemIndex];

                if (selectedItem) {
                    selectedItem.hidden = !selectedItem.hidden;
                }

                setFilters(newFilters);
            }}
        >
            {filters.map((item) => (
                <Menu.Item key={item.name as string}>{item.label}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Row align="middle" justify="space-between">
            <Col>{filterFormElement}</Col>
            <Col>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Button
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                    >
                        <FilterOutlined /> Filters
                    </Button>
                </Dropdown>
            </Col>
        </Row>
    );
};
