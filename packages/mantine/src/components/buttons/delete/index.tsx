import React, { useState } from "react";
import {
    useDelete,
    useTranslate,
    useMutationMode,
    useCan,
    useResource,
} from "@pankod/refine-core";
import {
    RefineDeleteButtonProps,
    RefineButtonTestIds,
} from "@pankod/refine-ui-types";
import { Group, Text, Button, ButtonProps, Popover } from "@mantine/core";
import { Trash, IconProps } from "tabler-icons-react";

export type DeleteButtonProps = RefineDeleteButtonProps<
    ButtonProps,
    {
        svgIconProps?: IconProps;
    }
>;

/**
 * `<DeleteButton>` uses Mantine {@link https://mantine.dev/core/button/ `<Button>`} and {@link https://mantine.dev/core/modal/ `<Modal>`} components.
 * When you try to delete something, a dialog modal shows up and asks for confirmation. When confirmed it executes the `useDelete` method provided by your `dataProvider`.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/mantine/components/buttons/delete-button} for more details.
 */
export const DeleteButton: React.FC<DeleteButtonProps> = ({
    resourceNameOrRouteName,
    recordItemId,
    onSuccess,
    mutationMode: mutationModeProp,
    children,
    successNotification,
    errorNotification,
    hideText = false,
    ignoreAccessControlProvider = false,
    metaData,
    dataProviderName,
    confirmTitle,
    confirmOkText,
    confirmCancelText,
    svgIconProps,
    ...rest
}) => {
    const { resourceName, id, resource } = useResource({
        resourceNameOrRouteName,
        recordItemId,
    });

    const translate = useTranslate();

    const { mutationMode: mutationModeContext } = useMutationMode();

    const mutationMode = mutationModeProp ?? mutationModeContext;

    const { mutate, isLoading, variables } = useDelete();

    const { data } = useCan({
        resource: resourceName,
        action: "delete",
        params: { id, resource },
        queryOptions: {
            enabled: !ignoreAccessControlProvider,
        },
    });

    const [opened, setOpened] = useState(false);

    const onConfirm = () => {
        mutate(
            {
                id: id ?? "",
                resource: resourceName,
                mutationMode,
                successNotification,
                errorNotification,
                metaData,
                dataProviderName,
            },
            {
                onSuccess: (value) => {
                    onSuccess && onSuccess(value);
                },
                onSettled: () => {
                    setOpened(false);
                },
            },
        );
    };

    return (
        <Popover opened={opened} onChange={setOpened} withArrow>
            <Popover.Target>
                <Button
                    color="red"
                    variant="outline"
                    onClick={() => setOpened((o) => !o)}
                    disabled={isLoading || data?.can === false}
                    loading={id === variables?.id && isLoading}
                    leftIcon={!hideText && <Trash {...svgIconProps} />}
                    data-testid={RefineButtonTestIds.DeleteButton}
                    {...rest}
                >
                    {hideText ? (
                        <Trash fontSize="small" {...svgIconProps} />
                    ) : (
                        children ?? translate("buttons.delete", "Delete")
                    )}
                </Button>
            </Popover.Target>
            <Popover.Dropdown py="xs">
                <Text size="sm" weight="bold">
                    {confirmTitle ??
                        translate("buttons.confirm", "Are you sure?")}
                </Text>
                <Group position="center" noWrap spacing="xs" mt="xs">
                    <Button
                        onClick={() => setOpened(false)}
                        variant="default"
                        size="xs"
                    >
                        {confirmCancelText ??
                            translate("buttons.cancel", "Cancel")}
                    </Button>
                    <Button color="red" onClick={onConfirm} autoFocus size="xs">
                        {confirmOkText ?? translate("buttons.delete", "Delete")}
                    </Button>
                </Group>
            </Popover.Dropdown>
        </Popover>
    );
};
