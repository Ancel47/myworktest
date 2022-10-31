import isInternalUrl from "@docusaurus/isInternalUrl";
/**
 * This function will generate rel attribute for links.
 * @param {string} URL to be dest for link
 */
export const getLinkRel = (URL?: string): string => {
    let rel = "noopener noreferrer nofollow";

    const isInternalURL = isInternalUrl(URL);

    if (URL?.includes("github.com/refinedev/refine")) {
        rel = "noopener";
    }

    if (isInternalURL) {
        rel = "noopener dofollow";
    }

    return rel;
};
