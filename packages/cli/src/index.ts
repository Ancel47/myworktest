#!/usr/bin/env node
import { Command } from "commander";

import checkUpdates from "@commands/check-updates";
import createResource from "@commands/create-resource";
import update from "@commands/update";
import { dev, build, start, run } from "@commands/runner";
import "@utils/env";
import { getPackageJson } from "@utils/package";

const bootstrap = () => {
    let packageJson;

    // check package json if exists
    try {
        packageJson = getPackageJson();
    } catch (e) {
        console.error(
            "The `package.json` file required to run could not be found.",
        );
        process.exit(1);
    }

    const program = new Command();

    program
        .version(
            packageJson.version,
            "-v, --version",
            "Output the current version.",
        )
        .usage("<command> [options]")
        .helpOption("-h, --help", "Output usage information.");

    // load commands
    createResource(program);
    checkUpdates(program);
    update(program);
    dev(program);
    build(program);
    start(program);
    run(program);

    program.parse(process.argv);

    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
};

bootstrap();
