/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
    title: "refine",
    tagline:
        "A React-based framework for building data-intensive applications in no time.",
    url: "https://refine.dev",
    baseUrl: "/",
    projectName: "refine",
    organizationName: "pankod",
    trailingSlash: true,
    favicon: "img/refine_favicon.png",
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    path: "./docs",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/pankod/refine/tree/master/documentation",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    blogTitle: "refine blog!",
                    blogDescription: "A Docusaurus powered blog!",
                    postsPerPage: "ALL",
                    blogSidebarTitle: "All posts",
                    blogSidebarCount: "ALL",
                    feedOptions: {
                        type: "all",
                        copyright: `Copyright © ${new Date().getFullYear()} refine.`,
                    },
                },
                theme: {
                    customCss: [
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/split-pane.css"),
                        require.resolve("./src/css/demo-page.css"),
                    ],
                },
            },
        ],
    ],
    themeConfig: {
        image: "img/refine_social.png",
        algolia: {
            apiKey: "fbebca5afe7376dbef2995691670b708",
            indexName: "refine",
            contextualSearch: true,
        },
        announcementBar: {
            id: "support",
            backgroundColor: "#0B82F0",
            textColor: "#fff",
            isCloseable: false,
            content:
                '⭐️ &nbsp; If you like refine, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/pankod/refine">GitHub</a>! ⭐️',
        },
        navbar: {
            logo: {
                alt: "refine",
                src: "img/refine_logo.png",
            },
            items: [
                {
                    to: "docs/getting-started/overview",
                    label: "Quickstart",
                    position: "left",
                    className: "header-first-nav-item",
                },
                { to: "docs", label: "Tutorial", position: "left" },
                {
                    to: "/demo",
                    label: "Demo",
                    position: "left",
                },
                {
                    to: "/docs/api-references/providers/data-provider",
                    label: "API",
                    position: "left",
                },
                {
                    to: "docs/guides-and-concepts/ssr-nextjs",
                    label: "Guides",
                    position: "left",
                },
                {
                    to: "docs/examples/tutorial",
                    label: "Example",
                    position: "left",
                },
                { to: "blog", label: "Blog", position: "left" },
                {
                    to: "/enterprise",
                    label: "Enterprise",
                    position: "left",
                },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: "https://github.com/pankod/refine",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
                {
                    href: "https://discord.gg/UuU3XCc3J5",
                    position: "right",
                    className: "header-icon-link header-discord-link",
                },
                {
                    href: "https://twitter.com/refine_dev",
                    position: "right",
                    className:
                        "header-icon-link header-twitter-link header-last-nav-item",
                },
            ],
        },
        gtag: {
            // You can also use your "G-" Measurement ID here.
            trackingID: "G-27Z1WY952H",
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        },
        // footer: {
        //     style: "dark",
        //     links: [
        //         {
        //             title: "Docs",
        //             items: [],
        //         },
        //         {
        //             title: "Community",
        //             items: [
        //                 {
        //                     label: "Twitter",
        //                     href: "https://twitter.com/refine_dev",
        //                 },
        //             ],
        //         },
        //         {
        //             title: "More",
        //             items: [
        //                 {
        //                     label: "GitHub",
        //                     href: "https://github.com/pankod/refine",
        //                 },
        //                 {
        //                     html: `
        //           <a href="https://github.com/pankod/refine" target="_blank" rel="noreferrer noopener" aria-label="Star this project on GitHub">
        //             <img src="https://img.shields.io/github/stars/pankod/refine?logo=reverbnation&logoColor=white" alt="github-stars" />
        //           </a>
        //         `,
        //                 },
        //             ],
        //         },
        //     ],
        //     logo: {
        //         alt: "Pankod Logo",
        //         src: "img/pankod_footer_logo.png",
        //         href: "https://github.com/pankod",
        //     },
        //     copyright: `Copyright © ${new Date().getFullYear()} Pankod, Inc.`,
        // },
    },
};

module.exports = siteConfig;
