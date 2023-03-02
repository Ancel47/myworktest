import { API, FileInfo } from "jscodeshift";
import fs from "fs";
import path from "path";
import { install } from "../../helpers";
import checkPackageLock from "../../helpers/checkPackageLock";
import separateImports from "../../helpers/separateImports";
import {
    exported,
    rename,
    other,
} from "../../definitions/separated-imports/mantine";

export const parser = "tsx";

export async function postTransform(files: any, flags: any) {
    const rootDir = path.join(process.cwd(), files[0]);
    const packageJsonPath = path.join(rootDir, "package.json");
    const useYarn = checkPackageLock(rootDir) === "yarn.lock";

    // Check root package.json exists
    try {
        JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    } catch (err) {
        console.error(
            `Error: failed to load package.json from ${packageJsonPath}, ensure provided directory is root.`,
        );
    }

    if (!flags.dry) {
        await install(
            rootDir,
            [
                "@emotion/react@^11.8.2",
                "@mantine/core@^5.5.6",
                "@mantine/hooks@^5.5.6",
                "@mantine/form@^5.5.6",
                "@mantine/notifications@^5.5.6",
            ],
            {
                useYarn,
                isOnline: true,
            },
        );
    }
}

export default function transformer(file: FileInfo, api: API): string {
    const j = api.jscodeshift;
    const source = j(file.source);

    separateImports({
        j,
        source,
        imports: exported,
        renameImports: rename,
        otherImports: other,
        currentLibName: "@pankod/refine-mantine",
        nextLibName: "@mantine/core",
    });

    return source.toSource();
}
