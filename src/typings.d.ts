/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

// interface SvgrComponent
//     extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
    const svgUrl: string;
    const svgComponent: React.StatelessComponent<
        React.SVGAttributes<SVGElement>
    >;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}

import { FormItemProps, FormProps } from "antd/lib/form";

export { FormItemProps, FormProps };
