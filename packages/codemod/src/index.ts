#!/usr/bin/env node

/**
 * Copyright 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// Based on https://github.com/vercel/next.js/blob/canary/packages/next-codemod/bin/cli.ts
// and https://github.com/reactjs/react-codemod/blob/dd8671c9a470a2c342b221ec903c574cf31e9f57/bin/cli.js
// @pankod/refine-codemod name-of-transform optional/path/to/src [...options]

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

import globby from "globby";
import inquirer from "inquirer";
import meow from "meow";
import path from "path";
import execa from "execa";
import chalk from "chalk";
import isGitClean from "is-git-clean";

export const jscodeshiftExecutable = require.resolve(".bin/jscodeshift");
export const transformerDirectory = path.join(
    __dirname,
    "../",
    "dist/transformations",
);

const transformsWithPostTransform = [
    "refine1-to-refine2",
    "refine2-to-refine3",
    "separate-imports-antd",
];

export function checkGitStatus(force) {
    let clean = false;
    let errorMessage = "Unable to determine if git directory is clean";
    try {
        clean = isGitClean.sync(process.cwd());
        errorMessage = "Git directory is not clean";
    } catch (err) {
        if (
            err &&
            err.stderr &&
            err.stderr.indexOf("Not a git repository") >= 0
        ) {
            clean = true;
        }
    }

    if (!clean) {
        if (force) {
            console.log(`WARNING: ${errorMessage}. Forcibly continuing.`);
        } else {
            console.log("Thank you for using @pankod/refine-codemod!");
            console.log(
                chalk.yellow(
                    "\nBut before we continue, please stash or commit your git changes.",
                ),
            );
            console.log(
                "\nYou may use the --force flag to override this safety check.",
            );
            process.exit(1);
        }
    }
}

export function runTransform({ files, flags, transformer }) {
    const transformerPath = path.join(
        transformerDirectory,
        `${transformer}.js`,
    );

    let args = [];

    const { dry, print, runInBand } = flags;

    if (dry) {
        args.push("--dry");
    }
    if (print) {
        args.push("--print");
    }
    if (runInBand) {
        args.push("--run-in-band");
    }

    args.push("--verbose=2");

    args.push("--ignore-pattern=**/node_modules/**");
    args.push("--ignore-pattern=**/build/**");
    args.push("--ignore-pattern=**/.next/**");
    args.push("--ignore-pattern=**/dist/**");
    args.push("--ignore-pattern=**/.cache/**");

    args.push("--extensions=tsx,ts,jsx,js");
    args.push("--parser=tsx");

    args = args.concat(["--transform", transformerPath]);

    if (flags.jscodeshift) {
        args = args.concat(flags.jscodeshift);
    }

    args = args.concat(files);

    console.log(`Executing command: jscodeshift ${args.join(" ")}`);

    const result = execa.sync(jscodeshiftExecutable, args, {
        stdio: "inherit",
        stripFinalNewline: false,
    });

    if (result.failed) {
        throw new Error(`jscodeshift exited with code ${result.exitCode}`);
    }
}

const TRANSFORMER_INQUIRER_CHOICES = [
    {
        name: "fix-v4-deprecations: Fix deprecations with 4.x.x",
        value: "fix-v4-deprecations",
    },
    {
        name: "antd4-to-antd5: Transform from antd 4.x.x to at least 5.x.x",
        value: "antd4-to-antd5",
    },
    {
        name: "use-data-grid-columns: Transform `useDataGrid` `columns` usage",
        value: "use-data-grid-columns",
    },
    {
        name: "metadata-to-meta: Transform metaData to meta",
        value: "metadata-to-meta",
    },
    {
        name: "use-menu-to-core: Transform useMenu imports to core",
        value: "use-menu-to-core",
    },
    {
        name: "refine2-to-refine3: Transform from refine 2.x.x to at least 3.0.0",
        value: "refine2-to-refine3",
    },
    {
        name: "refine1-to-refine2: Transform from refine 1.x.x to at least 2.0.0",
        value: "refine1-to-refine2",
    },
    {
        name: "router-to-legacy-router: Transform existing router definitions to legacy router",
        value: "router-to-legacy-router",
    },
    {
        name: "move-deprecated-access-control: Move deprecated deprecated `ignoreAccessControlProvider` prop to new `accessControl`",
        value: "move-deprecated-access-control",
    },
    {
        name: "separate-imports-antd: Moves `antd` components exported by `refine` into `antd`",
        value: "separate-imports-antd",
    },
    {
        name: "separate-imports-mui: Moves `MUI` components exported by `refine` into `MUI`",
        value: "separate-imports-mui",
    },
];

function expandFilePathsIfNeeded(filesBeforeExpansion) {
    const shouldExpandFiles = filesBeforeExpansion.some((file) =>
        file.includes("*"),
    );
    return shouldExpandFiles
        ? globby.sync(filesBeforeExpansion)
        : filesBeforeExpansion;
}

export async function run(): Promise<void> {
    const cli = meow({
        description: "Codemods for updating refine apps.",
        help: `
    Usage
      $ npx @pankod/refine-codemod <transform> <path> <...options>
        path         Files or directory to transform. Can be a glob like pages/**.js
    Options
      --force            Bypass Git safety checks and forcibly run codemods
      --dry              Dry run (no changes are made to files)
      --print            Print transformed files to your terminal
      --jscodeshift  (Advanced) Pass options directly to jscodeshift
    `,
        flags: {
            boolean: ["force", "dry", "print", "help"],
            string: ["_"],
            alias: {
                h: "help",
            },
        },
    } as meow.Options<meow.AnyFlags>);

    if (!cli.flags.dry) {
        checkGitStatus(cli.flags.force);
    }

    if (
        cli.input[0] &&
        !TRANSFORMER_INQUIRER_CHOICES.find((x) => x.value === cli.input[0])
    ) {
        console.error("Invalid transform choice, pick one of:");
        console.error(
            TRANSFORMER_INQUIRER_CHOICES.map((x) => "- " + x.value).join("\n"),
        );
        process.exit(1);
    }

    const { files, transformer } = await inquirer.prompt([
        {
            type: "input",
            name: "files",
            message:
                "On which files or directory should the codemods be applied?",
            when: !cli.input[1],
            default: ".",
            filter: (files) => files.trim(),
        },
        {
            type: "list",
            name: "transformer",
            message: "Which transform would you like to apply?",
            when: !cli.input[0],
            pageSize: TRANSFORMER_INQUIRER_CHOICES.length,
            choices: TRANSFORMER_INQUIRER_CHOICES,
        },
    ]);

    const filesBeforeExpansion = cli.input[1] || files;
    const filesExpanded = expandFilePathsIfNeeded([filesBeforeExpansion]);

    const selectedTransformer = cli.input[0] || transformer;

    if (!filesExpanded.length) {
        console.log(
            `No files found matching ${filesBeforeExpansion.join(" ")}`,
        );
        return null;
    }

    await runTransform({
        files: filesExpanded,
        flags: cli.flags,
        transformer: selectedTransformer,
    });

    if (transformsWithPostTransform.includes(selectedTransformer)) {
        const transformerPath = path.join(
            transformerDirectory,
            `${selectedTransformer}.js`,
        );

        await require(transformerPath).postTransform(filesExpanded, cli.flags);
    }
}

run();
