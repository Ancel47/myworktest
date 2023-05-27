#!/usr/bin/env node

const fs = require("fs");
const waitOn = require("wait-on");
const pidtree = require("pidtree");
const { join: pathJoin } = require("path");
const { promisify } = require("util");
const { exec, spawn, execSync } = require("child_process");

const KEY = process.env.KEY;
const CI_BUILD_ID = process.env.CI_BUILD_ID;

const EXAMPLES_DIR = "./examples";
const EXAMPLES = process.env.EXAMPLES ? process.env.EXAMPLES : [];

const execPromise = (command) => {
    let commandProcess;
    const promise = new Promise((resolve, reject) => {
        commandProcess = exec(command);

        commandProcess.stdout.on("data", console.log);
        commandProcess.stderr.on("data", console.error);

        commandProcess.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject();
            }
        });
    });

    return {
        promise,
        pid: commandProcess.pid,
        process: commandProcess,
    };
};

const getProjectPort = async (path) => {
    // read package.json
    const pkg = await promisify(fs.readFile)(
        pathJoin(path, "package.json"),
        "utf8",
    );

    // parse package.json
    const packageJson = JSON.parse(pkg);

    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});

    // check for vite
    if (dependencies.includes("vite") || devDependencies.includes("vite")) {
        return 5173;
    }

    return 3000;
};

/**
 * @returns {Promise<string[]>}
 */
const getProjectsWithE2E = async () => {
    return (
        await Promise.all(
            EXAMPLES.split(",").map(async (path) => {
                const dir = pathJoin(EXAMPLES_DIR, path);
                const isDirectory = (
                    await promisify(fs.stat)(dir)
                ).isDirectory();
                const isConfigExists = await promisify(fs.exists)(
                    pathJoin(dir, "cypress.config.ts"),
                );

                if (isDirectory && isConfigExists) {
                    return path;
                }
            }),
        )
    ).filter(Boolean);
};

const runTests = async () => {
    const examplesToRun = await getProjectsWithE2E();

    console.log(`|- Examples to run: , ${examplesToRun.join(", ")} \n\n`);

    for await (const path of examplesToRun) {
        const PORT = await getProjectPort(`${EXAMPLES_DIR}/${path}`);

        console.log(`|- Running project ${path} at port ${PORT}`);

        console.log("|-- Starting the dev server");

        let start;
        try {
            start = exec(
                `cd ${pathJoin(EXAMPLES_DIR, path)} && npm run start`,
            );

            start.stdout.on("data", console.log);
            start.stderr.on("data", console.error);
        } catch (error) {
            console.log(`|- Error occured on starting the dev server`, error);
            return { error, success: false };
        }

        try {
            console.log(`|- Waiting for the server to start at port ${PORT}`);

            await waitOn({
                resources:
                    PORT === 5173
                        ? [`tcp:${PORT}`]
                        : [`http://localhost:${PORT}`],
                timeout: 60000,
                log: true,
            });
        } catch (error) {
            console.log(
                `|- Error occured on waiting for the server to start`,
                error,
            );
            return { success: false, error };
        }

        try {
            const params = "" ?? `-- --record --key ${KEY} --ci-build-id=${CI_BUILD_ID}-${path} --group ${CI_BUILD_ID}-${path}`;
            const runner = `npm run lerna run cypress:run -- --scope ${path} ${params}`;

            const { promise } = execPromise(runner);

            await promise;
        } catch (error) {
            console.log(`|- Error occured on tests for ${path}`, error);
            return { success: false, error };
        } finally {
            console.log("|- Killing the dev server");
            try {
                if (start.pid) {
                    const pidsOfStart = await pidtree(start.pid, {
                        root: true,
                    });

                    pidsOfStart.forEach((pid) => {
                        process.kill(pid, "SIGINT");
                    });

                    await new Promise((resolve) => setTimeout(resolve, 500));

                    console.log("|- Done killing the dev server");
                }
            } catch (error) {
                console.log(
                    `|- Error occured on killing the dev server`,
                    error,
                );
                return { success: false, error };
            }
        }
    }

    return { success: true };
};

runTests()
    .then(({ error, success }) => {
        if (success) {
            console.log("|- All tests passed");
            process.exitCode = 0;
        } else {
            console.log("|- Errors occured", error);
            process.exitCode = 1;
        }
    })
    .catch((error) => {
        console.log("|- error", error);
        process.exitCode = 1;
    });
