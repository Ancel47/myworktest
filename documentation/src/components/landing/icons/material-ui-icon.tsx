import React from "react";

export const MaterialUIIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={48}
        height={42}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#mui-logo-a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.333 8.63c0 .514.226.898.677 1.153.45.252.898.246 1.343-.018l4-2.385c.431-.26.647-.636.647-1.138V1.38c-.001-.517-.226-.899-.677-1.153-.45-.255-.898-.247-1.341.018L41.98 2.629c-.43.26-.647.636-.648 1.137V8.63Zm-.875 19.547c.444-.254.667-.636.67-1.145l.023-7.673c.001-.511.224-.894.67-1.148l4.183-2.39c.206-.117.428-.176.665-.176a1.325 1.325 0 0 1 1.153.664c.119.204.178.425.178.662v13.952c0 .512-.223.895-.669 1.15l-15.786 9.016c-.44.253-.882.253-1.324 0l-12.389-7.044c-.448-.255-.672-.64-.672-1.153v-7.035c0-.008.01-.012.017-.008.007.003.016 0 .016-.01v-.007c0-.005.003-.01.008-.013l10.203-5.831c.009-.005.005-.02-.005-.02-.007 0-.011-.003-.011-.01l.02-6.897c.002-.512-.22-.896-.665-1.153-.444-.255-.89-.258-1.334 0l-7.584 4.345c-.443.254-.887.254-1.33 0l-7.607-4.355a1.33 1.33 0 0 0-1.998 1.148v12.466a1.3 1.3 0 0 1-.178.662 1.321 1.321 0 0 1-1.15.664 1.32 1.32 0 0 1-.667-.174L.672 24.267C.224 24.009 0 23.625 0 23.111L.038 1.324c0-.237.06-.455.179-.662A1.334 1.334 0 0 1 2.034.176l14.461 8.26c.442.252.885.252 1.328 0L32.28.177a1.33 1.33 0 0 1 1.333.005 1.308 1.308 0 0 1 .665 1.147v21.793c0 .512-.223.894-.668 1.15l-7.572 4.337c-.445.254-.668.639-.666 1.15 0 .512.224.895.672 1.148l4.177 2.364c.442.253.883.25 1.323 0l8.914-5.092Z"
                fill="#007FFF"
            />
        </g>
        <defs>
            <clipPath id="mui-logo-a">
                <path fill="#fff" d="M0 0h48v41.28H0z" />
            </clipPath>
        </defs>
    </svg>
);
