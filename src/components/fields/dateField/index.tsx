import React from "react";
import dayjs from "dayjs";

import LocalizedFormat from "dayjs/plugin/localizedFormat";
/* import "dayjs/locale/tr"; */

import { BaseFieldProps } from "@interfaces";
import { renderFieldRecord } from "@definitions";

dayjs.extend(LocalizedFormat);
/* dayjs.locale("tr"); */

type DateProps = {
    locales?: string;
    format?: string;
};

export type DateFieldProps = BaseFieldProps & DateProps;

export const DateField: React.FC<DateFieldProps> = ({
    value,
    record,
    renderRecordKey,
    format: dateFormat = "L",
}) => (
    <div>
        {dayjs(renderFieldRecord({ value, record, renderRecordKey })).format(
            dateFormat,
        )}
    </div>
);
