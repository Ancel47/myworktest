import { ProjectTypes } from "@definitions/projectTypes";
import { getProjectType } from "@utils/project";
import { Command, Option } from "commander";
import { updateNotifier } from "src/update-notifier";
import { action as devtoolsRunner } from "src/commands/devtools";
import { projectScripts } from "../projectScripts";
import { runScript } from "../runScript";
import { getPlatformOptionDescription, getRunnerDescription } from "../utils";

const dev = (program: Command) => {
    return program
        .command("dev")
        .description(getRunnerDescription("dev"))
        .allowUnknownOption(true)
        .addOption(
            new Option(
                "-p, --platform <platform>",
                getPlatformOptionDescription(),
            ).choices(
                Object.values(ProjectTypes).filter(
                    (type) => type !== ProjectTypes.UNKNOWN,
                ),
            ),
        )
        .addOption(
            new Option(
                "-d, --devtools",
                "Start refine's devtools server",
            ).default(false),
        )
        .argument("[args...]")
        .action(action);
};

const action = async (
    args: string[],
    { platform, devtools }: { devtools: boolean; platform: ProjectTypes },
) => {
    const projectType = getProjectType(platform);

    const binPath = projectScripts[projectType].getBin("dev");
    const script = projectScripts[projectType].dev;
    const command = [...script, ...args];

    await updateNotifier();

    if (devtools) {
        devtoolsRunner();
    }

    runScript(binPath, command);
};

export default dev;
