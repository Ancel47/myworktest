import clsx from "clsx";
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { footerDescription, menuItems, socialLinks } from "./footer-data";
import { HeartOutlinedIcon } from "./icons/heart-outlined";
import { RefineLogoIcon } from "./icons/refine-logo";
import { ProductHuntLogo } from "./product-hunt-logo";

export const BlogFooter = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <div
                className={clsx(
                    "border-t",
                    "border-t-gray-100 dark:border-t-gray-700",
                    "bg-gray-50 dark:bg-gray-800",
                    "w-full",
                    "py-6",
                    "landing-sm:py-8",
                    "landing-md:py-11",
                    "px-4",
                    "landing-sm:px-8",
                    "landing-md:px-8",
                    "landing-lg:px-12",
                    "landing-xl:px-20",
                )}
            >
                <div
                    className={clsx(
                        "max-w-[1264px]",
                        "w-full",
                        "flex flex-col",
                        "gap-6",
                        "landing-sm:gap-4",
                        "landing-md:gap-9",
                        "mx-auto",
                    )}
                >
                    <div className={clsx("flex items-center justify-between")}>
                        <RefineLogoIcon className="text-gray-900 dark:text-gray-0" />
                        <ProductHuntLogo className="hidden landing-md:block" />
                    </div>
                    <div
                        className={clsx(
                            "flex",
                            "flex-col",
                            "landing-xl:flex-row",
                            "items-start",
                            "justify-between",
                            "landing-lg:gap-8",
                        )}
                    >
                        <div
                            className={clsx(
                                "text-xs",
                                "opacity-75",
                                "landing-lg:opacity-100",
                                "landing-lg:text-base",
                                "text-gray-500 dark:text-gray-500",
                                "w-full landing-md:max-w-[304px]",
                                "w-full",
                                "flex-shrink-0",
                                "mb-6",
                                "landing-xl:mb-0",
                            )}
                        >
                            {footerDescription}
                        </div>
                        <ProductHuntLogo
                            className={clsx(
                                "block landing-md:hidden",
                                "mx-auto mb-10",
                            )}
                        />
                        <div
                            className={clsx(
                                "w-full",
                                "landing-lg:w-auto",
                                "grid grid-cols-2 landing-md:grid-cols-3 landing-lg:grid-cols-5",
                                "gap-10 landing-md:gap-4",
                            )}
                        >
                            {menuItems.map((menu) => (
                                <div
                                    className={clsx(
                                        "flex flex-col gap-4 max-w-[304px]",
                                    )}
                                    key={menu.label}
                                >
                                    <div className="text-base font-semibold text-gray-900 dark:text-gray-0">
                                        {menu.label}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {menu.items.map((item) => (
                                            <a
                                                href={item.href}
                                                key={item.label}
                                                className={clsx(
                                                    "text-base",
                                                    "text-gray-700 dark:text-gray-400",
                                                    "opacity-75",
                                                    "no-underline hover:no-underline",
                                                    "hover:text-gray-700 hover:dark:text-gray-400",
                                                )}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div
                                className={clsx(
                                    "landing-md:col-span-3 landing-lg:col-span-2 max-w-[304px]",
                                )}
                            >
                                <div className={clsx("flex flex-col gap-4")}>
                                    <div className="text-base font-semibold text-gray-900 dark:text-gray-0">
                                        Contact
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-base",
                                            "text-gray-700 dark:text-gray-400",
                                        )}
                                    >
                                        <div className={clsx("opacity-75")}>
                                            refine Dev Corporation{" "}
                                            <br className="landing-md:hidden landing-xl:inline" />
                                            256 Chapman Road STE 105-4{" "}
                                            <br className="landing-md:hidden landing-xl:inline" />
                                            Newark, DE 19702
                                            <br className="landing-md:hidden landing-xl:inline" />
                                            <br className="landing-md:hidden landing-xl:inline" />
                                        </div>
                                        <a
                                            href="mailto:info@refine.dev"
                                            className={clsx(
                                                "text-gray-700 dark:text-gray-400",
                                                "no-underline hover:no-underline",
                                                "hover:text-gray-700 hover:dark:text-gray-400",
                                            )}
                                        >
                                            info@refine.dev
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    "border-t",
                    "border-t-gray-100 dark:border-t-gray-700",
                    "bg-gray-50 dark:bg-gray-800",
                    "w-full",
                    "px-4",
                    "landing-sm:px-8",
                    "landing-md:px-8",
                    "landing-lg:px-12",
                    "landing-xl:px-20",
                    "py-6",
                )}
            >
                <div
                    className={clsx(
                        "mx-auto",
                        "max-w-screen-landing-2xl",
                        "w-full",
                        "gap-6 landing-lg:gap-2",
                        "flex items-center justify-between",
                        "flex-col-reverse landing-lg:flex-row",
                    )}
                >
                    <div
                        className={clsx(
                            "text-base",
                            "text-gray-500 dark:text-gray-400",
                        )}
                    >
                        © 2023, refine from San Francisco to wherever
                        you&apos;re with{" "}
                        <HeartOutlinedIcon className="text-refine-red inline ml-2 leading-6" />
                    </div>
                    <div
                        className={clsx(
                            "flex items-center",
                            "gap-4",
                            "flex-col landing-lg:flex-row",
                            "max-w-[382px] landing-lg:max-w-none",
                        )}
                    >
                        <span
                            className={clsx(
                                "text-gray-500 dark:text-gray-400",
                                "opacity-75 text-center landing-lg:text-left",
                            )}
                        >
                            Join us on
                        </span>
                        <div
                            className={clsx(
                                "flex",
                                "flex-row",
                                "items-center",
                                "gap-4",
                                "justify-between",
                            )}
                        >
                            {socialLinks.map(({ href, icon: Icon }) => (
                                <a
                                    href={href}
                                    key={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "text-gray-500 dark:text-gray-400",
                                        "opacity-75",
                                        "no-underline",
                                        "hover:no-underline hover:text-gray-500 hover:dark:text-gray-400",
                                    )}
                                >
                                    <Icon className="w-9 h-9 landing-lg:w-6 landing-lg:h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
