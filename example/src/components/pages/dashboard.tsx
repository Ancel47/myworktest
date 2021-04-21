import * as React from "react";

import { useTranslate } from "@pankod/refine";

export const DashboardPage: React.FC = () => {
    const translate = useTranslate();

    return <div>{translate("common:resources.dashboard.title")}</div>;
};
