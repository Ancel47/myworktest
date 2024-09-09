import React from "react";
import { Tooltip } from "antd";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import type { BooleanFieldProps } from "../types";

/**
 * This field is used to display boolean values. It uses the {@link https://ant.design/components/tooltip/#header `<Tooltip>`} values from Ant Design.
 *
 * @see {@link https://refine.dev/docs/api-reference/antd/components/fields/boolean} for more details.
 */
export const BooleanField: React.FC<BooleanFieldProps> = ({
  value,
  valueLabelTrue = "true",
  valueLabelFalse = "false",
  // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
  trueIcon = <CheckOutlined />,
  // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
  falseIcon = <CloseOutlined />,
  ...rest
}) => {
  return (
    <Tooltip title={value ? valueLabelTrue : valueLabelFalse} {...rest}>
      {value ? <span>{trueIcon}</span> : <span>{falseIcon}</span>}
    </Tooltip>
  );
};
