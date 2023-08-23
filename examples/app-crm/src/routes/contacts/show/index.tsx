import React from "react";
import { Avatar, Drawer, Input, Select, Spin, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetToPath, useShow, useUpdate } from "@refinedev/core";
import {
    MailOutlined,
    ShopOutlined,
    GlobalOutlined,
    PhoneOutlined,
    IdcardOutlined,
} from "@ant-design/icons";
import { useSelect } from "@refinedev/antd";

import { Text } from "../../../components/text";
import { SingleElementForm } from "../../../components/single-element-form";

import type { Contact } from "../../../interfaces/graphql";
import styles from "./index.module.css";

export const ContactShowPage = () => {
    const [activeForm, setActiveForm] = React.useState<
        "email" | "companyId" | "jobTitle" | "phone" | "timezone"
    >();
    const navigate = useNavigate();
    const getToPath = useGetToPath();
    const { mutate } = useUpdate<Contact>();
    const { queryResult } = useShow<Contact>({
        meta: {
            fields: [
                "id",
                "name",
                "email",
                {
                    company: ["id", "name"],
                },
                "jobTitle",
                "phone",
                "timezone",
                "status",
                "avatarUrl",
            ],
        },
    });
    const { selectProps: companySelectProps } = useSelect({
        resource: "companies",
        meta: {
            fields: ["id", "name"],
        },
        optionLabel: "name",
    });

    const { data, isLoading, isError } = queryResult;
    const renderContent = () => {
        if (isError) {
            return null;
        }

        if (isLoading) {
            return <Spin />;
        }

        const {
            id,
            name,
            email,
            jobTitle,
            phone,
            timezone,
            avatarUrl,
            company,
        } = data.data;
        return (
            <div className={styles.container}>
                <div className={styles.name}>
                    <Avatar
                        style={{ marginRight: "1rem" }}
                        size={96}
                        src={avatarUrl}
                    />
                    <Typography.Title
                        level={3}
                        style={{ padding: 0, margin: 0 }}
                        editable={{
                            onChange(value) {
                                mutate({
                                    resource: "contacts",
                                    id,
                                    values: {
                                        name: value,
                                    },
                                });
                            },
                        }}
                    >
                        {name}
                    </Typography.Title>
                </div>

                <div className={styles.form}>
                    <SingleElementForm
                        icon={<MailOutlined />}
                        state={
                            activeForm && activeForm === "email"
                                ? "form"
                                : email
                                ? "view"
                                : "empty"
                        }
                        itemProps={{
                            name: "email",
                            label: "Email",
                        }}
                        view={<Text>{email}</Text>}
                        onClick={() => setActiveForm("email")}
                        onUpdate={() => setActiveForm(undefined)}
                    >
                        <Input defaultValue={email} />
                    </SingleElementForm>

                    <SingleElementForm
                        icon={<ShopOutlined />}
                        state={
                            activeForm && activeForm === "companyId"
                                ? "form"
                                : company.id
                                ? "view"
                                : "empty"
                        }
                        itemProps={{
                            name: "companyId",
                            label: "Company",
                        }}
                        view={<Text>{company.name}</Text>}
                        onClick={() => setActiveForm("companyId")}
                        onUpdate={() => setActiveForm(undefined)}
                    >
                        <Select
                            style={{ width: "100%" }}
                            defaultValue={{
                                label: data.data.company.name,
                                value: data.data.company.id,
                            }}
                            {...companySelectProps}
                        />
                    </SingleElementForm>
                    <SingleElementForm
                        icon={<IdcardOutlined />}
                        state={
                            activeForm && activeForm === "jobTitle"
                                ? "form"
                                : jobTitle
                                ? "view"
                                : "empty"
                        }
                        itemProps={{
                            name: "jobTitle",
                            label: "Title",
                        }}
                        view={<Text>{jobTitle}</Text>}
                        onClick={() => setActiveForm("jobTitle")}
                        onUpdate={() => setActiveForm(undefined)}
                    >
                        <Input defaultValue={jobTitle || ""} />
                    </SingleElementForm>
                    <SingleElementForm
                        icon={<PhoneOutlined />}
                        state={
                            activeForm && activeForm === "phone"
                                ? "form"
                                : phone
                                ? "view"
                                : "empty"
                        }
                        itemProps={{
                            name: "phone",
                            label: "Phone",
                        }}
                        view={<Text>{phone}</Text>}
                        onClick={() => setActiveForm("phone")}
                        onUpdate={() => setActiveForm(undefined)}
                    >
                        <Input defaultValue={phone || ""} />
                    </SingleElementForm>
                    <SingleElementForm
                        icon={<GlobalOutlined />}
                        state={
                            activeForm && activeForm === "timezone"
                                ? "form"
                                : timezone
                                ? "view"
                                : "empty"
                        }
                        itemProps={{
                            name: "timezone",
                            label: "Timezone",
                        }}
                        view={<Text>{timezone}</Text>}
                        onClick={() => setActiveForm("timezone")}
                        onUpdate={() => setActiveForm(undefined)}
                    >
                        <Select
                            style={{ width: "100%" }}
                            options={[
                                {
                                    label: "UTC (Coordinated Universal Time)",
                                    value: "UTC (Coordinated Universal Time)",
                                },
                                {
                                    label: "GMT (Greenwich Mean Time)",
                                    value: "GMT (Greenwich Mean Time)",
                                },
                                {
                                    label: "EST (Eastern Standard Time)",
                                    value: "EST (Eastern Standard Time)",
                                },
                                {
                                    label: "CST (Central Standard Time)",
                                    value: "CST (Central Standard Time)",
                                },
                                {
                                    label: "MST (Mountain Standard Time)",
                                    value: "MST (Mountain Standard Time)",
                                },
                                {
                                    label: "PST (Pacific Standard Time)",
                                    value: "PST (Pacific Standard Time)",
                                },
                                {
                                    label: "CET (Central European Time)",
                                    value: "CET (Central European Time)",
                                },
                                {
                                    label: "IST (Indian Standard Time)",
                                    value: "IST (Indian Standard Time)",
                                },
                                {
                                    label: "JST (Japan Standard Time)",
                                    value: "JST (Japan Standard Time)",
                                },
                                {
                                    label: "AEST (Australian Eastern Standard Time)",
                                    value: "AEST (Australian Eastern Standard Time)",
                                },
                            ]}
                            defaultValue={data.data.timezone}
                        />
                    </SingleElementForm>
                </div>
            </div>
        );
    };

    return (
        <Drawer
            open
            onClose={() => {
                navigate(
                    getToPath({
                        action: "list",
                    }) ?? "",
                    {
                        replace: true,
                    },
                );
            }}
            width={756}
            bodyStyle={{
                background: "#f5f5f5",
            }}
        >
            {renderContent()}
        </Drawer>
    );
};
