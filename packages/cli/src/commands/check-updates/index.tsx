import React from "react";
import { Command } from "commander";
import { render } from "ink";
import UpdateWarningTable from "@components/update-warning-table";
import { pmCommands } from "@utils/package";
import execa from "execa";
import spinner from "@utils/spinner";
import {
    NpmOutdatedResponse,
    RefinePackageInstalledVersionData,
} from "@definitions/package";

const load = (program: Command) => {
    return program
        .command("check-updates")
        .description("Check all installed `refine` packages are up to date")
        .action(action);
};

const action = async () => {
    const packages = await spinner(isRefineUptoDate, "Checking for updates...");
    if (!packages.length) {
        console.log("All `refine` packages are up to date 🎉\n");
        return;
    }
    render(<UpdateWarningTable data={packages} />);
};

/**
 *
 * @returns `refine` packages that have updates.
 * @returns `[]` if no refine package found.
 * @returns `[]` if all `refine` packages are up to date.
 */
export const isRefineUptoDate = async () => {
    const refinePackages = await getOutdatedRefinePackages();

    return refinePackages;
};

const getOutdatedRefinePackages = async () => {
    const packages = await getOutdatedPackageList();
    if (!packages) return [];

    const list: RefinePackageInstalledVersionData[] = [];

    Object.keys(packages).forEach((packageName) => {
        const dependency = packages[packageName];

        if (packageName.includes("@pankod/refine")) {
            list.push({
                name: packageName,
                current: dependency.current,
                wanted: dependency.wanted,
                latest: dependency.latest,
            });
        }
    });

    return list;
};

const getOutdatedPackageList = async () => {
    const pm = "npm";

    const { stdout, timedOut } = await execa(pm, pmCommands[pm].outdatedJson, {
        reject: false,
        timeout: 25 * 1000,
    });

    if (timedOut) {
        throw new Error("Timed out while checking for updates.");
    }

    if (!stdout) return null;

    return JSON.parse(stdout) as NpmOutdatedResponse | null;
};

export default load;
