import { API, Collection, FileInfo, JSCodeshift } from "jscodeshift";

export const parser = "tsx";

const REFINE_CORE_PATH = "@pankod/refine-core";

const authProviderToLegacyAuthProvider = (
    j: JSCodeshift,
    root: Collection<any>,
) => {
    const refineCorePath = root
        .find(j.ImportDeclaration)
        .filter((path) => path.node.source.value === REFINE_CORE_PATH)
        .find(j.ImportSpecifier);

    const authProviderImport = refineCorePath.filter(
        (path) => path.node.imported.name === "AuthProvider",
    );

    // change AuthProvider to LegacyAuthProvider as AuthProvider
    authProviderImport.forEach((authProvider) => {
        j(authProvider).replaceWith(
            j.importSpecifier(
                j.identifier("LegacyAuthProvider as AuthProvider"),
            ),
        );
    });

    // find <Refine>
    root.findJSXElements("Refine").forEach((path) => {
        const attributes = path.node.openingElement.attributes;

        // find <Refine authProvider={}>
        const authProviderAttribute = attributes.find(
            (attribute) =>
                attribute.type === "JSXAttribute" &&
                attribute.name.name === "authProvider",
        );

        if (!authProviderAttribute) return;

        // change authProvider={} to legacyAuthProvider={}
        authProviderAttribute["name"]["name"] = "legacyAuthProvider";
    });
};

export default function transformer(file: FileInfo, api: API): string {
    const j = api.jscodeshift;
    const source = j(file.source);

    authProviderToLegacyAuthProvider(j, source);

    return source.toSource();
}
