import React from "react";

import {
  useMutationMode,
  useNavigation,
  useTranslate,
  useUserFriendlyName,
  useRefineContext,
  useToPath,
  useResource,
  useRouterType,
  useBack,
  useGo,
} from "@refinedev/core";

import Card from "@mui/material/Card/index.js";
import CardHeader from "@mui/material/CardHeader/index.js";
import IconButton from "@mui/material/IconButton/index.js";
import CardContent from "@mui/material/CardContent/index.js";
import CardActions from "@mui/material/CardActions/index.js";
import Typography from "@mui/material/Typography/index.js";
import Box from "@mui/material/Box/index.js";

import ArrowBackIcon from "@mui/icons-material/ArrowBack.js";

import {
  DeleteButton,
  RefreshButton,
  ListButton,
  SaveButton,
  Breadcrumb,
  ListButtonProps,
  RefreshButtonProps,
  DeleteButtonProps,
  SaveButtonProps,
  AutoSaveIndicator,
} from "@components";
import { EditProps } from "../types";
import { RefinePageHeaderClassNames } from "@refinedev/ui-types";

/**
 * `<Edit>` provides us a layout for displaying the page.
 * It does not contain any logic but adds extra functionalities like a refresh button.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/mui/components/basic-views/edit} for more details.
 */
export const Edit: React.FC<EditProps> = ({
  title,
  saveButtonProps: saveButtonPropsFromProps,
  mutationMode: mutationModeProp,
  recordItemId,
  children,
  deleteButtonProps: deleteButtonPropsFromProps,
  canDelete,
  resource: resourceFromProps,
  isLoading = false,
  breadcrumb: breadcrumbFromProps,
  dataProviderName,
  wrapperProps,
  headerProps,
  contentProps,
  headerButtonProps,
  headerButtons,
  footerButtonProps,
  footerButtons,
  goBack: goBackFromProps,
  autoSaveProps,
}) => {
  const translate = useTranslate();
  const {
    options: { breadcrumb: globalBreadcrumb } = {},
  } = useRefineContext();
  const { mutationMode: mutationModeContext } = useMutationMode();
  const mutationMode = mutationModeProp ?? mutationModeContext;

  const routerType = useRouterType();
  const back = useBack();
  const go = useGo();
  const { goBack, list: legacyGoList } = useNavigation();
  const getUserFriendlyName = useUserFriendlyName();

  const {
    resource,
    action,
    id: idFromParams,
    identifier,
  } = useResource(resourceFromProps);

  const goListPath = useToPath({
    resource,
    action: "list",
  });

  const id = recordItemId ?? idFromParams;

  const breadcrumb =
    typeof breadcrumbFromProps === "undefined"
      ? globalBreadcrumb
      : breadcrumbFromProps;

  const hasList = resource?.list && !recordItemId;
  const isDeleteButtonVisible =
    canDelete ??
    ((resource?.meta?.canDelete ?? resource?.canDelete) ||
      deleteButtonPropsFromProps);

  const breadcrumbComponent =
    typeof breadcrumb !== "undefined" ? (
      <>{breadcrumb}</> ?? undefined
    ) : (
      <Breadcrumb />
    );

  const listButtonProps: ListButtonProps | undefined = hasList
    ? {
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
      }
    : undefined;

  const refreshButtonProps: RefreshButtonProps = {
    ...(isLoading ? { disabled: true } : {}),
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id,
    dataProviderName,
  };

  const defaultHeaderButtons = (
    <Box display="flex" flexDirection="row" alignItems="center">
      {autoSaveProps && <AutoSaveIndicator {...autoSaveProps} />}
      {hasList && <ListButton {...listButtonProps} />}
      <RefreshButton {...refreshButtonProps} />
    </Box>
  );

  const deleteButtonProps: DeleteButtonProps | undefined = isDeleteButtonVisible
    ? ({
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
        mutationMode,
        variant: "outlined",
        onSuccess: () => {
          if (routerType === "legacy") {
            legacyGoList(resource?.route ?? resource?.name ?? "");
          } else {
            go({ to: goListPath });
          }
        },
        recordItemId: id,
        dataProviderName,
        ...deleteButtonPropsFromProps,
      } as const)
    : undefined;

  const saveButtonProps: SaveButtonProps = {
    ...(isLoading ? { disabled: true } : {}),
    ...saveButtonPropsFromProps,
  };

  const defaultFooterButtons = (
    <>
      {isDeleteButtonVisible && <DeleteButton {...deleteButtonProps} />}
      <SaveButton {...saveButtonProps} />
    </>
  );

  return (
    <Card {...(wrapperProps ?? {})}>
      {breadcrumbComponent}
      <CardHeader
        sx={{
          display: "flex",
          flexWrap: "wrap",
          ".MuiCardHeader-action": {
            margin: 0,
            alignSelf: "center",
          },
        }}
        title={
          title ?? (
            <Typography
              variant="h5"
              className={RefinePageHeaderClassNames.Title}
            >
              {translate(
                `${identifier}.titles.edit`,
                `Edit ${getUserFriendlyName(
                  resource?.meta?.label ??
                    resource?.options?.label ??
                    resource?.label ??
                    identifier,
                  "singular",
                )}`,
              )}
            </Typography>
          )
        }
        avatar={
          typeof goBackFromProps !== "undefined" ? (
            goBackFromProps
          ) : (
            <IconButton
              onClick={
                action !== "list" && typeof action !== "undefined"
                  ? routerType === "legacy"
                    ? goBack
                    : back
                  : undefined
              }
            >
              <ArrowBackIcon />
            </IconButton>
          )
        }
        action={
          <Box display="flex" gap="16px" {...(headerButtonProps ?? {})}>
            {headerButtons
              ? typeof headerButtons === "function"
                ? headerButtons({
                    defaultButtons: defaultHeaderButtons,
                    listButtonProps,
                    refreshButtonProps,
                  })
                : headerButtons
              : defaultHeaderButtons}
          </Box>
        }
        {...(headerProps ?? {})}
      />
      <CardContent {...(contentProps ?? {})}>{children}</CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "16px",
          padding: "16px",
        }}
        {...(footerButtonProps ?? {})}
      >
        {footerButtons
          ? typeof footerButtons === "function"
            ? footerButtons({
                defaultButtons: defaultFooterButtons,
                deleteButtonProps,
                saveButtonProps,
              })
            : footerButtons
          : defaultFooterButtons}
      </CardActions>
    </Card>
  );
};
