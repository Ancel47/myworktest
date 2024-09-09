import type { Collection, JSCodeshift } from "jscodeshift";
import {
  CONFIG_FILE_NAME,
  CodemodConfig,
  separateImports,
} from "../../helpers";
import {
  exported,
  rename,
  other,
} from "../../definitions/separated-imports/mantine";

export const separateImportsMantine = (j: JSCodeshift, source: Collection) => {
  const config = new CodemodConfig(CONFIG_FILE_NAME);

  if (
    source.find(j.ImportDeclaration, {
      source: { value: "@pankod/refine-mantine" },
    }).length > 0
  ) {
    config.addPackage("@mantine/core", "^7.5.1");
    config.addPackage("@mantine/hooks", "^7.5.1");
    config.addPackage("@mantine/form", "^7.5.1");
    config.addPackage("@mantine/notifications", "^7.5.1");
    config.addPackage("@emotion/react", "^11.8.2");
  }

  separateImports({
    j,
    source,
    imports: exported,
    renameImports: rename,
    otherImports: other,
    currentLibName: "@pankod/refine-mantine",
    nextLibName: "@mantine/core",
  });
};
