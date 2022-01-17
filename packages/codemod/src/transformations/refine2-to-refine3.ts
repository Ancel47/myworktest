import {
    API,
    JSCodeshift,
    Collection,
    FileInfo,
    ImportSpecifier,
    JSXExpressionContainer,
    ObjectExpression,
    JSXOpeningElement,
    ObjectProperty,
    Identifier,
} from "jscodeshift";
import fs from "fs";
import path from "path";
import { install, remove } from "../helpers";
import checkPackageLock from "../helpers/checkPackageLock";

export const parser = "tsx";

const availableRefineAntdImports = [
    "Affix",
    "Anchor",
    "AutoComplete",
    "Alert",
    "Avatar",
    "BackTop",
    "Badge",
    "Breadcrumb",
    "Button",
    "Card",
    "Collapse",
    "Carousel",
    "Cascader",
    "Checkbox",
    "Col",
    "Comment",
    "ConfigProvider",
    "Descriptions",
    "Divider",
    "Dropdown",
    "Drawer",
    "Empty",
    "Form",
    "Grid",
    "Input",
    "Image",
    "InputNumber",
    "AntdLayout",
    "AntdList",
    "message",
    "Menu",
    "Mentions",
    "Modal",
    "Statistic",
    "notification",
    "PageHeader",
    "Pagination",
    "Popconfirm",
    "Popover",
    "Progress",
    "Radio",
    "Rate",
    "Result",
    "Row",
    "Select",
    "Skeleton",
    "Slider",
    "Space",
    "Spin",
    "Steps",
    "Switch",
    "Table",
    "Transfer",
    "Tree",
    "TreeSelect",
    "Tabs",
    "Tag",
    "Timeline",
    "Tooltip",
    "Typography",
    "Upload",
    "version",
    "Icons",
    "useTable",
    "useEditableTable",
    "useForm",
    "useSelect",
    "useCheckboxGroup",
    "useRadioGroup",
    "useImport",
    "List",
    "BooleanField",
    "SaveButton",
    "NumberField",
    "DateField",
    "TextField",
    "TagField",
    "EmailField",
    "ImageField",
    "DateField",
    "FileField",
    "UrlField",
    "NumberField",
    "MarkdownField",
    "getDefaultSortOrder",
    "getDefaultFilter",
    "useSimpleList",
    "CreateButton",
    "EditButton",
    "CreateButtonProps",
    "DeleteButton",
    "DeleteButtonProps",
    "RefreshButton",
    "ShowButton",
    "ListButton",
    "ExportButton",
    "SaveButton",
    "CloneButton",
    "ImportButton",
    "useDrawerForm",
    "useStepsForm",
    "useModalForm",
    "FormProps",
    "getValueFromEvent",
    "DatePicker",
    "InputProps",
    "Icon",
    "Edit",
    "Create",
    "Show",
    "DrawerProps",
    "ButtonProps",
    "ModalProps",
    "useModal",
];

function updateRefineImports(j: JSCodeshift, root: Collection<any>) {
    const refineCoreImports = root.find(j.ImportDeclaration, {
        source: {
            value: "@pankod/refine-core",
        },
    });

    if (refineCoreImports.length === 0) {
        const coreImports: ImportSpecifier[] = [];
        const antdImports: ImportSpecifier[] = [];
        // Import refine core
        const refineImport = root.find(j.ImportDeclaration, {
            source: {
                value: "@pankod/refine",
            },
        });

        refineImport.replaceWith((path) => {
            for (const item of path.node.specifiers) {
                if (!availableRefineAntdImports.includes(item.local.name)) {
                    coreImports.push(item as ImportSpecifier);
                } else {
                    antdImports.push(item as ImportSpecifier);
                }
            }

            path.node.specifiers = path.node.specifiers.filter(
                (p) => !antdImports.includes(p as ImportSpecifier),
            );

            path.node.source.value = "@pankod/refine-core";

            return path.node;
        });

        const configProviderJSXAttribute = root.find(j.JSXAttribute, {
            name: {
                name: "configProviderProps",
            },
        });

        if (configProviderJSXAttribute.length > 0) {
            antdImports.push(j.importSpecifier(j.identifier("ConfigProvider")));
        }

        root.find(j.ImportDeclaration, {
            source: {
                value: "@pankod/refine-core",
            },
        }).insertAfter(
            j.importDeclaration(antdImports, j.literal("@pankod/refine-antd")),
        );
    } else {
        console.log(
            "WARNING: A refine core package from @pankod/refine-core is already imported. This tool will not make any migration for refine core.",
        );
        return;
    }
}

const moveConfigProvider = (j: JSCodeshift, root: Collection<any>) => {
    const refineElement = root.find(j.JSXElement, {
        openingElement: {
            name: {
                name: "Refine",
            },
        },
    });

    console.log(refineElement.nodes()[0]);

    if (refineElement.length === 0) {
        return;
    }

    const configProviderJSXAttribute = root.find(j.JSXAttribute, {
        name: {
            name: "configProviderProps",
        },
    });

    if (configProviderJSXAttribute.length === 0) {
        return;
    }

    const configProviderValue = (
        (configProviderJSXAttribute.nodes()[0].value as JSXExpressionContainer)
            .expression as ObjectExpression
    ).properties;

    const newConfigProviderElement = j.jsxElement(
        j.jsxOpeningElement(
            j.jsxIdentifier("ConfigProvider"),
            configProviderValue.map((p: ObjectProperty) =>
                j.jsxAttribute(
                    j.jsxIdentifier((p.key as Identifier).name),
                    j.jsxExpressionContainer(p.value as any),
                ),
            ),
        ),
        j.jsxClosingElement(j.jsxIdentifier("ConfigProvider")),
        refineElement.nodes(),
    );

    refineElement.replaceWith(newConfigProviderElement);

    configProviderJSXAttribute.remove();
};

const updateSetEditIdToSetId = (j: JSCodeshift, root: Collection<any>) => {
    const updatedFormHooks = [
        "useEditableTable",
        "useModalForm",
        "useDrawerForm",
    ];

    for (const formHook of updatedFormHooks) {
        const useEditableTableHook = root.find(j.CallExpression, {
            callee: {
                name: formHook,
            },
        });

        useEditableTableHook.forEach((path) => {
            const setEditIdProperty = path.parentPath.node.id.properties.find(
                (p) => p.value.name === "setEditId",
            );

            if (setEditIdProperty) {
                setEditIdProperty.value.name = "setId: setEditId";
            }
        });
    }
};

const packagesToUpdate = [
    "@pankod/refine-airtable",
    "@pankod/refine-altogic",
    "@pankod/refine-graphql",
    "@pankod/refine-hasura",
    "@pankod/refine-nestjsx-crud",
    "@pankod/refine-nextjs-router",
    "@pankod/refine-react-router",
    "@pankod/refine-simple-rest",
    "@pankod/refine-strapi",
    "@pankod/refine-strapi-graphql",
    "@pankod/refine-supabase",
    "@pankod/refine-appwrite",
    "@pankod/refine-ably",
    "@pankod/@pankod/refine-strapi-v4",
];

export async function postTransform(files: any, flags: any) {
    const rootDir = path.join(process.cwd(), files[0]);
    const packageJsonPath = path.join(rootDir, "package.json");
    const useYarn = checkPackageLock(rootDir) === "yarn.lock";
    let packageJsonData;

    try {
        packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    } catch (err) {
        console.error(
            `Error: failed to load package.json from ${packageJsonPath}, ensure provided directory is root.`,
        );
    }

    const dependenciesToInstall: Array<{
        name: string;
        version: string;
    }> = [
        {
            name: "@pankod/refine-core",
            version: "3.x.x",
        },
        {
            name: "@pankod/refine-antd",
            version: "3.x.x",
        },
    ];

    for (const key of Object.keys(packageJsonData.dependencies)) {
        if (packagesToUpdate.includes(key)) {
            dependenciesToInstall.push({
                name: key,
                version: "3.x.x",
            });
        }
    }

    if (!flags.dry) {
        await install(
            rootDir,
            dependenciesToInstall.map((dep) => `${dep.name}@${dep.version}`),
            {
                useYarn,
                isOnline: true,
            },
        );

        await remove(rootDir, ["@pankod/refine"], {
            useYarn,
        });
    }
}

export default function transformer(file: FileInfo, api: API): string {
    const j = api.jscodeshift;
    const source = j(file.source);

    const refineImports = source.find(j.ImportDeclaration, {
        source: {
            value: "@pankod/refine",
        },
    });

    if (refineImports.length === 0) {
        return;
    }

    updateRefineImports(j, source);
    moveConfigProvider(j, source);
    updateSetEditIdToSetId(j, source);

    return source.toSource();
}
