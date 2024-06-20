import type { useTranslate } from "@hooks/i18n";

import type { IResourceItem } from "../../../contexts/resource/types";
import { safeTranslate } from "../safe-translate";
import { userFriendlyResourceName } from "../userFriendlyResourceName";

/**
 * Generates document title for the given resource and action.
 */
export function generateDefaultDocumentTitle(
  translate: ReturnType<typeof useTranslate>,
  resource?: IResourceItem,
  action?: string,
  id?: string,
  resourceName?: string,
) {
  const actionPrefixMatcher = {
    create: "Create new ",
    clone: `#${id ?? ""} Clone `,
    edit: `#${id ?? ""} Edit `,
    show: `#${id ?? ""} Show `,
    list: "",
  };

  const identifier = resource?.identifier ?? resource?.name;

  const resourceNameFallback =
    resource?.label ??
    resource?.meta?.label ??
    userFriendlyResourceName(
      identifier,
      action === "list" ? "plural" : "singular",
    );

  const resourceNameWithFallback = resourceName ?? resourceNameFallback;

  const defaultTitle = safeTranslate(
    translate,
    "documentTitle.default",
    "Refine",
  );
  const suffix = safeTranslate(translate, "documentTitle.suffix", " | Refine");
  let autoGeneratedTitle = defaultTitle;

  if (action && identifier) {
    autoGeneratedTitle = safeTranslate(
      translate,
      `documentTitle.${identifier}.${action}`,
      `${
        actionPrefixMatcher[action as keyof typeof actionPrefixMatcher] ?? ""
      }${resourceNameWithFallback}${suffix}`,
      { id },
    );
  }

  return autoGeneratedTitle;
}
