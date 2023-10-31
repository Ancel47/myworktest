import clsx from "clsx";
import React, { SVGProps } from "react";
// import { RefineLogoShinyCyan } from "./icons/refine-logo-shiny-cyan";
import { useHistory } from "@docusaurus/router";
import { TR100 } from "./icons/tr-100";
import { useUserCountry } from "../context/UserCountry";

type AnnouncementType = "refine" | "tr";

export const TopAnnouncement = () => {
    const { country } = useUserCountry();
    const announcementType: AnnouncementType =
        country === "tr" ? "tr" : "refine";

    if (announcementType === "tr") {
        return (
            <div
                className={clsx(
                    "w-full h-12",
                    "relative",
                    "not-prose",
                    "font-inter",
                    "bg-[#A81818]",
                    "bg-top-announcement-bg-tr",
                    "bg-cover xl:bg-contain",
                    "bg-center",
                    "bg-no-repeat",
                    "flex",
                    "items-center",
                    "justify-center",
                )}
            >
                <img
                    src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/ataturk.png"
                    alt="Atatürk"
                    className={clsx(
                        "mix-blend-screen",
                        "w-[40px] h-[48px]",
                        "object-cover",
                        "py-[2px]",
                    )}
                />
                <TR100 />
                <h2
                    className={clsx(
                        "ml-4",
                        "text-white",
                        "font-inter",
                        "text-base",
                    )}
                >
                    Cumhuriyet <span className={clsx("font-bold")}>100</span>{" "}
                    yaşında!
                </h2>
            </div>
        );
    }

    return (
        <div
            className={clsx(
                "w-full h-12",
                "relative",
                "bg-top-announcement",
                "not-prose",
                "font-inter",
            )}
        >
            <div
                className={clsx(
                    "hidden lg:flex",
                    "w-full h-full",
                    "border-b border-solid border-[#47ebeb26]",
                    "top-announcement-mask",
                )}
            >
                <div
                    className={clsx(
                        "w-[1280px] h-full",
                        "mx-auto",
                        "flex",
                        "justify-between",
                    )}
                >
                    <div
                        className={clsx(
                            "w-[calc(50%-300px)] h-full",
                            "relative",
                        )}
                    >
                        <GlowSmall
                            style={{
                                animationDelay: "1.5s",
                            }}
                            className={clsx(
                                "absolute",
                                "top-[2px]",
                                "right-[220px]",
                            )}
                            id={"1"}
                        />
                        <GlowSmall
                            style={{
                                animationDelay: "1s",
                            }}
                            className={clsx(
                                "absolute",
                                "rotate-180",
                                "top-[8px] right-[100px]",
                            )}
                            id={"2"}
                        />
                        <GlowBig
                            className={clsx("absolute", "right-[10px]")}
                            id={"3"}
                        />
                    </div>

                    <div
                        className={clsx(
                            "w-[calc(50%-300px)] h-full",
                            "relative",
                        )}
                    >
                        <GlowSmall
                            style={{
                                animationDelay: "2s",
                            }}
                            className={clsx(
                                "absolute",
                                "rotate-180",
                                "top-[6px] right-[180px]",
                            )}
                            id={"4"}
                        />
                        <GlowSmall
                            style={{
                                animationDelay: "0.5s",
                            }}
                            className={clsx(
                                "delay-[1300]",
                                "absolute",
                                "top-[2px]",
                                "right-[40px]",
                            )}
                            id={"5"}
                        />

                        <GlowBig
                            className={clsx("absolute", "right-[-70px]")}
                            id={"6"}
                        />
                    </div>
                </div>
            </div>
            <Text />
        </div>
    );
};

const Text = () => {
    const { replace } = useHistory();
    return (
        <button
            onClick={() => {
                replace({
                    search: "?15k_modal=1",
                });
            }}
            className={clsx(
                "relative lg:absolute",
                "px-2 lg:px-0",
                "top-0",
                "left-[50%]",
                "translate-x-[-50%]",
                "bg-top-announcement-text",
                "h-full w-full lg:w-[780px]",
                "flex items-center justify-center",
                "text-white",
                "text-xs sm:text-sm",
                "text-center",
                "no-underline",
                "hover:no-underline",
                "hover:text-white",
                "not-prose",
            )}
        >
            {/* <RefineLogoShinyCyan className="flex-shrink-0" /> */}
            <div className={clsx("ml-2", "not-prose")}>
                <span className={clsx("font-semibold")}>
                    {`🌟 We've reached 15K GitHub stars! Thank you 🌟`}
                </span>
            </div>
        </button>
    );
};

const GlowSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={40}
        fill="none"
        {...props}
        className={clsx(
            "animate-top-announcement-glow",
            "opacity-1",
            props.className,
        )}
    >
        <circle cx={40} r={40} fill={`url(#${props.id}-a)`} fillOpacity={0.5} />
        <defs>
            <radialGradient
                id={`${props.id}-a`}
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(0 40 -40 0 40 0)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#47EBEB" />
                <stop offset={1} stopColor="#47EBEB" stopOpacity={0} />
            </radialGradient>
        </defs>
    </svg>
);

const GlowBig = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={120}
        height={48}
        fill="none"
        {...props}
        className={clsx(
            "animate-top-announcement-glow",
            "opacity-1",
            props.className,
        )}
    >
        <circle
            cx={60}
            cy={24}
            r={60}
            fill={`url(#${props.id}-a)`}
            fillOpacity={0.5}
        />
        <defs>
            <radialGradient
                id={`${props.id}-a`}
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(0 60 -60 0 60 24)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#47EBEB" />
                <stop offset={1} stopColor="#47EBEB" stopOpacity={0} />
            </radialGradient>
        </defs>
    </svg>
);
