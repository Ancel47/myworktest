import * as React from "react";
import { SVGProps } from "react";

const SvgMui = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={64}
        height={56}
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.111 11.506c0 .685.301 1.198.902 1.538.602.336 1.197.328 1.79-.024l5.333-3.18c.576-.345.864-.848.864-1.517V1.84c-.001-.69-.301-1.199-.902-1.538-.6-.34-1.197-.329-1.79.024l-5.333 3.18c-.575.345-.863.848-.864 1.516v6.484ZM53.943 37.57c.593-.34.89-.848.893-1.527l.032-10.231c.002-.681.299-1.192.892-1.531l5.578-3.186c.275-.156.57-.235.888-.235a1.766 1.766 0 0 1 1.537.886c.158.271.237.566.237.882V41.23c0 .683-.297 1.194-.892 1.534L42.061 54.785c-.588.337-1.177.337-1.766 0l-16.519-9.392c-.597-.34-.896-.852-.896-1.537v-9.38c0-.01.012-.017.023-.01.01.004.021 0 .021-.013v-.01a.02.02 0 0 1 .011-.018l13.604-7.774c.011-.007.006-.027-.007-.027-.01 0-.015-.004-.015-.013l.027-9.197c.003-.682-.292-1.194-.887-1.537-.591-.34-1.186-.343-1.779 0L23.767 21.67c-.59.34-1.183.34-1.774 0L11.85 15.864a1.74 1.74 0 0 0-.888-.237 1.771 1.771 0 0 0-1.538.885 1.721 1.721 0 0 0-.239.883v16.62c0 .316-.078.607-.237.883a1.763 1.763 0 0 1-1.534.885 1.76 1.76 0 0 1-.888-.23L.896 32.355C.299 32.012 0 31.5 0 30.815l.05-29.05A1.778 1.778 0 0 1 2.713.235l19.282 11.014c.59.335 1.18.335 1.77 0L43.04.235a1.773 1.773 0 0 1 1.777.006c.275.157.49.374.65.644.158.275.236.57.236.886v29.057c0 .683-.297 1.191-.89 1.533l-10.095 5.783c-.595.339-.89.852-.89 1.533.002.683.3 1.194.898 1.53l5.569 3.154c.589.336 1.176.332 1.764 0l11.884-6.79v-.001Z"
            fill="#007FFF"
        />
    </svg>
);

export default SvgMui;
