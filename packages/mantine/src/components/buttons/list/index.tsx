import React from "react";
import {
    useCan,
    useNavigation,
    useTranslate,
    userFriendlyResourceName,
    useResource,
    useRouterContext,
} from "@pankod/refine-core";
import {
    RefineButtonTestIds,
    RefineListButtonProps,
} from "@pankod/refine-ui-types";
import { Anchor, Button, ButtonProps } from "@mantine/core";
import { List, IconProps } from "tabler-icons-react";

export type ListButtonProps = RefineListButtonProps<
    ButtonProps,
    {
        svgIconProps?: IconProps;
    }
>;

/**
 * `<ListButton>` is using uses Mantine {@link https://mantine.dev/core/button/ `<Button> `} component.
 * It uses the  {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#list `list`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the list page route of resource}.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/mantine/components/buttons/list-button} for more details.
 **/
export const ListButton: React.FC<ListButtonProps> = ({
    resourceNameOrRouteName,
    hideText = false,
    ignoreAccessControlProvider = false,
    svgIconProps,
    children,
    onClick,
    ...rest
}) => {
    const { resource, resourceName } = useResource({
        resourceNameOrRouteName,
    });

    const { listUrl: generateListUrl } = useNavigation();
    const { Link } = useRouterContext();

    const translate = useTranslate();

    const { data } = useCan({
        resource: resourceName,
        action: "list",
        queryOptions: {
            enabled: !ignoreAccessControlProvider,
        },
        params: {
            resource,
        },
    });

    const disabledTitle = () => {
        if (data?.can) return "";
        else if (data?.reason) return data.reason;
        else
            return translate(
                "buttons.notAccessTitle",
                "You don't have permission to access",
            );
    };

    const listUrl = generateListUrl(resource.route!);

    return (
        <Anchor
            component={Link}
            to={listUrl}
            replace={false}
            onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
                if (onClick) {
                    e.preventDefault();
                    onClick(e);
                }
            }}
        >
            <Button
                variant="default"
                disabled={data?.can === false}
                leftIcon={!hideText && <List size={16} {...svgIconProps} />}
                title={disabledTitle()}
                data-testid={RefineButtonTestIds.ListButton}
                {...rest}
            >
                {hideText ? (
                    <List size={16} {...svgIconProps} />
                ) : (
                    children ??
                    translate(
                        `${resourceName}.titles.list`,
                        userFriendlyResourceName(
                            resource.label ?? resourceName,
                            "plural",
                        ),
                    )
                )}
            </Button>
        </Anchor>
    );
};
