import Link from "@docusaurus/Link";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment } from "react";

import { openFigma } from "@site/src/utils/open-figma";
import { CloseIcon } from "../icons/close";
import {
    DiscordIcon,
    GithubIcon,
    GithubStarIcon,
    TwitterIcon,
} from "../icons/popover";
import { RefineLogoIcon } from "../icons/refine-logo";
import { MENU_ITEMS, NavbarItemType } from "./constants";
import { MenuItem } from "./menu-item";
import { MobileNavItem } from "./mobile-nav-item";

type MobileMenuModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenuModal: React.FC<MobileMenuModalProps> = ({
    isModalOpen,
    setIsModalOpen,
}) => {
    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsModalOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-75"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className={clsx(
                            "fixed inset-0",
                            "bg-gray-100 dark:bg-gray-800",
                        )}
                    >
                        <div
                            className={clsx(
                                "flex items-center justify-between",
                                "px-4 py-3",
                                "landing-sm:px-6",
                                "landing-md:px-8",
                            )}
                        >
                            <RefineLogoIcon
                                className="dark:text-gray-0 text-gray-900"
                                onContextMenu={openFigma}
                            />
                            <button
                                type="button"
                                className={clsx(
                                    "rounded-lg",
                                    "hover:brightness-105",
                                    "active:scale-90",
                                    "transition-transform duration-75 ease-in-out",
                                )}
                            >
                                <CloseIcon
                                    className="text-gray-900 dark:text-gray-400"
                                    onClick={() => setIsModalOpen(false)}
                                />
                            </button>
                        </div>
                    </div>
                </Transition.Child>

                <div
                    className={clsx(
                        "fixed top-16 left-0 right-0",
                        "overflow-y-auto",
                    )}
                >
                    <div
                        className={clsx(
                            "flex items-start justify-center",
                            "min-h-full h-[calc(100vh-80px)]",
                            "p-4",
                            "text-center",
                            "overflow-auto",
                        )}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-75"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-75"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className={clsx(
                                    "w-full max-w-[336px] header-sm:max-w-[624px] max-h-full",
                                    "overflow-auto",
                                    "border border-gray-200 dark:border-gray-600 rounded-lg",
                                    "bg-white dark:bg-gray-900",
                                    "text-left",
                                    "align-middle",
                                    "flex flex-col header-sm:flex-row",
                                )}
                            >
                                <div className="flex-grow">
                                    {MENU_ITEMS.map((item) => {
                                        if (item.isPopover) {
                                            return (
                                                <Disclosure
                                                    key={`modal-${item.label}`}
                                                >
                                                    {({ open }) => (
                                                        <>
                                                            <MobileNavItem
                                                                component={
                                                                    Disclosure.Button
                                                                }
                                                                label={
                                                                    item.label
                                                                }
                                                                open={open}
                                                            />

                                                            <Disclosure.Panel>
                                                                {item.items.map(
                                                                    (
                                                                        subItem,
                                                                    ) => (
                                                                        <MenuItem
                                                                            key={
                                                                                subItem.label
                                                                            }
                                                                            item={
                                                                                subItem
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            );
                                        }

                                        return (
                                            <MobileNavItem
                                                key={`modal-${item.label}`}
                                                label={item.label}
                                                href={
                                                    (item as NavbarItemType)
                                                        .href
                                                }
                                            />
                                        );
                                    })}
                                </div>
                                <div
                                    className={clsx(
                                        "header-sm:w-[288px] max-h-[calc(100vh-97px)]",
                                        "header-sm:bg-gray-50 header-sm:dark:bg-gray-700",
                                        "header-sm:flex header-sm:flex-col header-sm:justify-between",
                                        "sticky top-0",
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "bg-white dark:bg-gray-700 header-sm:bg-inherit",
                                            "flex justify-between items-center",
                                            "header-sm:flex-col header-sm:gap-4",
                                            "header-sm:border-b border-gray-200 dark:border-gray-600",
                                            "py-3 px-4",
                                        )}
                                    >
                                        <p className="text-gray-500 dark:text-gray-300 font-semibold">
                                            Join the party!
                                        </p>
                                        <div className="flex gap-4">
                                            <Link to="https://github.com/refinedev/refine">
                                                <GithubIcon className="h-10 w-10" />
                                            </Link>
                                            <Link to="https://discord.com/invite/refine">
                                                <DiscordIcon className="h-10 w-10" />
                                            </Link>
                                            <Link to="https://twitter.com/refine_dev">
                                                <TwitterIcon className="h-10 w-10" />
                                            </Link>
                                        </div>
                                    </div>
                                    <Link
                                        to="https://github.com/refinedev/refine"
                                        className="no-underline"
                                    >
                                        <div
                                            className={clsx(
                                                "bg-gray-50 dark:bg-gray-700",
                                                "flex items-center",
                                                "p-4",
                                            )}
                                        >
                                            <GithubStarIcon className="shrink-0" />
                                            <p
                                                className={clsx(
                                                    "ml-4",
                                                    "text-gray-600 dark:text-gray-400 text-xs",
                                                )}
                                            >
                                                If you like refine, don’t forget
                                                to star us on GitHub!
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
