import { Argument, Command } from "commander";
import { server } from "@refinedev/devtools-server";
import { addDevtoolsComponent } from "@transformers/add-devtools-component";
import {
    getPackageJson,
    getPreferedPM,
    installPackagesSync,
    isDevtoolsInstalled,
} from "@utils/package";
import { getRefineCorePackage, hasDefaultScript } from "@utils/refine";
import boxen from "boxen";
import cardinal from "cardinal";
import dedent from "dedent";
import spinner from "@utils/spinner";
import semver from "semver";
import chalk from "chalk";

type DevtoolsCommand = "start" | "init";

const commands: DevtoolsCommand[] = ["start", "init"];
const defaultCommand: DevtoolsCommand = "start";

const minRefineCoreVersionForDevtools = "4.42.0";

const load = (program: Command) => {
    return program
        .command("devtools")
        .description(
            "Start or install refine's devtools server; it starts on port 5001.",
        )
        .addArgument(
            new Argument("[command]", "devtools related commands")
                .choices(commands)
                .default(defaultCommand),
        )
        .addHelpText(
            "after",
            `
Commands:
    start     Start refine's devtools server
    init      Install refine's devtools client and adds it to your project
`,
        )
        .action(action);
};

export const action = async (command: DevtoolsCommand) => {
    switch (command) {
        case "start":
            devtoolsRunner();
            return;
        case "init":
            devtoolsInstaller();
            return;
    }
};

const devtoolsInstaller = async () => {
    const corePackage = await getRefineCorePackage();
    if (!corePackage) {
        throw new Error("refine core package not found");
    }

    if (await isCorePackageDeprecated({ pckg: corePackage })) {
        return;
    }

    const isInstalledDevtools = await spinner(
        isDevtoolsInstalled,
        "Checking if devtools is installed...",
    );
    if (isInstalledDevtools) {
        console.log("🎉 refine devtools is already installed");
        return;
    }

    console.log("🌱 Installing refine devtools...");
    const installPackages = ["@refinedev/devtools@latest"];
    // we should update core package if it is lower than minRefineCoreVersionForDevtools
    if (isCorePackageUpToDate({ pckg: corePackage })) {
        installPackages.push("@refinedev/core@latest");
        console.log(`🌱 refine core package is updating for devtools...`);
    }
    await installPackagesSync(installPackages);

    // empty line
    console.log("");
    console.log("");

    console.log("🌱 Adding devtools component to your project....");
    await addDevtoolsComponent();
    console.log(
        "✅ refine devtools package and components added to your project",
    );
    // if core package is updated, we should show the updated version
    if (installPackages.includes("@refinedev/core@latest")) {
        const corePackageUpdated = await getRefineCorePackage();
        if (!corePackageUpdated) {
            throw new Error("refine core package not found");
        }
        console.log(
            `✅ refine core package updated from ${corePackage.version} to ${corePackageUpdated?.version}`,
        );
        console.log(
            `   Changelog: ${chalk.underline.blueBright(
                `https://c.refine.dev/core#${corePackage.version.replaceAll(
                    ".",
                    "",
                )}`,
            )}`,
        );
    }

    // empty line
    console.log("");

    const { dev } = hasDefaultScript();
    if (dev) {
        console.log(
            `🙌 You're good to go. "npm run dev" will automatically starts the devtools server.`,
        );
        console.log(
            `👉 You can also start the devtools server manually by running "refine devtools start"`,
        );
        return;
    }

    if (!dev) {
        const scriptDev = getPackageJson().scripts?.dev;

        console.log(
            `🚨 Your have modified the "dev" script in your package.json. Because of that, "npm run dev" will not start the devtools server automatically.`,
        );
        console.log(`👉 You can append "refine devtools" to "dev" script`);
        console.log(
            `👉 You can start the devtools server manually by running "refine devtools"`,
        );

        // empty line
        console.log("");
        console.log(
            boxen(
                cardinal.highlight(
                    dedent(`
                {
                    "scripts": {
                        "dev": "${scriptDev} & refine devtools",
                        "refine": "refine"
                    }
                }  
        `),
                ),
                {
                    padding: 1,
                    title: "package.json",
                    dimBorder: true,
                    borderColor: "blueBright",
                    borderStyle: "round",
                },
            ),
        );
    }
};

export const devtoolsRunner = async () => {
    const corePackage = await getRefineCorePackage();
    if (!corePackage) {
        throw new Error("refine core package not found");
    }

    if (await isCorePackageDeprecated({ pckg: corePackage })) {
        return;
    }

    if (isCorePackageUpToDate({ pckg: corePackage })) {
        console.log(
            `🚨 You're using an old version of refine(${corePackage.version}). refine version should be @4.42.0 or higher to use devtools.`,
        );
        const pm = await getPreferedPM();
        console.log(
            `👉 You can update @refinedev/core package by running "${pm.name} run refine refine update"`,
        );
        return;
    }

    server();
};

export const isCorePackageUpToDate = ({
    pckg,
}: {
    pckg: { name: string; version: string };
}) => {
    return semver.lt(pckg.version, minRefineCoreVersionForDevtools);
};

export const isCorePackageDeprecated = async ({
    pckg,
}: {
    pckg: { name: string; version: string };
}) => {
    if (
        pckg.name === "@pankod/refine-core" ||
        semver.lt(pckg.version, "4.0.0")
    ) {
        console.log(
            `🚨 You're using an old version of refine(${pckg.version}). refine version should be @4.42.0 or higher to use devtools.`,
        );
        console.log("You can follow migration guide to update refine.");
        console.log(
            chalk.blue("https://refine.dev/docs/migration-guide/3x-to-4x/"),
        );
        return true;
    }

    return false;
};

export default load;
