import { Command } from "commander";
import {
    copySync,
    readdirSync,
    createFileSync,
    writeFileSync,
    unlinkSync,
    moveSync,
} from "fs-extra";
import temp from "temp";
import { plural } from "pluralize";

import { getProjectType } from "@utils/projectType";
import { compileDir } from "@utils/compile";

const defaultActions = ["list", "create", "edit", "show"];
const load = (program: Command) => {
    return program
        .command("generate:resource <name>")
        .description("Generate a new resource")
        .option(
            "-a, --actions [actions]",
            "Only generate the specified actions. (ex: list,create,edit,delete)",
            defaultActions,
        )
        .option(
            "-p, --path [path]",
            "Path to generate the resource",
            "./src/pages",
        )
        .action(action);
};

const action = async (resourceName: string, options: any) => {
    const customActions = options.actions
        ? options.actions.split(",")
        : undefined;

    // get the project type
    const projectType = getProjectType();

    const sourceDir = `${__dirname}/../templates/resource/${projectType}`;

    // create temp dir
    const tempDir = generateTempDir();

    // copy template files
    copySync(sourceDir, tempDir);

    // compile dir
    compileDir(tempDir, {
        resourceName,
        actions: customActions || defaultActions,
        projectType,
    });

    // delete ignored actions
    if (customActions) {
        defaultActions.forEach((action) => {
            if (!customActions.includes(action)) {
                unlinkSync(`${tempDir}/${action}.tsx`);
            }
        });
    }

    // copy to destination
    const resourceFolderName = plural(resourceName).toLowerCase();

    let moveSyncOptions = {};

    // empty dir override
    if (readdirSync(`${options.path}/${resourceFolderName}`).length === 0) {
        moveSyncOptions = { overwrite: true };
    }
    moveSync(tempDir, `${options.path}/${resourceFolderName}`, moveSyncOptions);

    // clear temp dir
    temp.cleanupSync();

    console.log(
        `Resource (${options.path}/${resourceFolderName}) generated successfully! 🎉`,
    );
};

const generateTempDir = (): string => {
    temp.track();
    return temp.mkdirSync("resource");
};

export default load;
