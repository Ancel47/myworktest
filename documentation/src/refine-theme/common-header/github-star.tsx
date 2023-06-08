import React, { useMemo } from "react";
import clsx from "clsx";

import { useGithubContext } from "@site/src/context/GithubContext";
import { HeaderGithubIcon } from "../icons/header-github";

export const GitHubStar: React.FC = () => {
    const { starCount, loading } = useGithubContext();

    const formattedStarCount = useMemo(() => {
        if (loading || !starCount) return <div className="w-5 h-5" />;

        return new Intl.NumberFormat("en", {
            notation: "compact",
        }).format(starCount);
    }, [starCount, loading]);

    return (
        <div className="flex items-center">
            <HeaderGithubIcon className="text-gray-500 dark:gray-400" />
            <span
                className={clsx(
                    "ml-2",
                    "text-sm font-medium ",
                    "text-gray-500 dark:text-gray-400",
                )}
            >
                {formattedStarCount}
            </span>
        </div>
    );
};
