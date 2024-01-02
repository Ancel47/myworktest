import * as React from "react";
import { SVGProps } from "react";

export const EmojiStarStructFace = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <g clipPath="url(#star-struct-face-a)">
                <path
                    fill="#FFCC4D"
                    d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
                />
                <path
                    fill="#664500"
                    d="M12 14c-2.415 0-4.018-.28-6-.666-.452-.087-1.333 0-1.333 1.333 0 2.667 3.063 6 7.333 6s7.334-3.333 7.334-6c0-1.333-.881-1.421-1.334-1.333-1.982.385-3.584.667-6 .667Z"
                />
                <path
                    fill="#fff"
                    d="M6 14.667s2 .667 6 .667 6-.667 6-.667-1.333 2.667-6 2.667-6-2.667-6-2.667Z"
                />
                <path
                    fill="#E95F28"
                    d="m10.454 2.943-3.027.534L5.867.64a.835.835 0 0 0-1.554.274l-.497 3.198-3.028.534a.834.834 0 0 0-.212 1.574L3.289 7.51l-.498 3.208a.835.835 0 0 0 1.417.713l2.341-2.373 3.012 1.43a.834.834 0 0 0 1.088-1.154L9.082 6.487l2.11-2.138a.834.834 0 0 0-.739-1.406Zm3.091 0 3.028.534L18.133.64a.835.835 0 0 1 1.553.274l.497 3.198 3.028.534a.834.834 0 0 1 .212 1.573L20.71 7.51l.498 3.207a.835.835 0 0 1-1.417.714L17.45 9.056l-3.012 1.43a.834.834 0 0 1-1.088-1.154l1.566-2.845-2.11-2.138a.834.834 0 0 1 .74-1.406Z"
                />
            </g>
            <defs>
                <clipPath id="star-struct-face-a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
