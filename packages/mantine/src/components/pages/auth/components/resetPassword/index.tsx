import React from "react";
import {
    RefineResetPasswordPageProps,
    RefineResetPasswordFormTypes,
} from "@pankod/refine-ui-types";
import { useLogin, useTranslate, useRouterContext } from "@pankod/refine-core";
import {
    Box,
    Card,
    Space,
    TextInput,
    Title,
    Anchor,
    Button,
    Text,
    BoxProps,
    CardProps,
    Group,
} from "@mantine/core";

import { useForm } from "@hooks/form";
import { layoutStyles, cardStyles, titleStyles } from "../styles";

type ResetPassworProps = RefineResetPasswordPageProps<
    BoxProps,
    CardProps,
    React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    >
>;

/**
 * **refine** has reset password page form which is served on `/reset-password` route when the `authProvider` configuration is provided.
 *
 */
export const ResetPasswordPage: React.FC<ResetPassworProps> = ({
    loginLink,
    contentProps,
    wrapperProps,
    onSubmit,
    renderContent,
    formProps,
}) => {
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const { getInputProps, onSubmit: onFormSubmit } = useForm({
        initialValues: {
            email: "",
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value)
                    ? null
                    : translate(
                          "pages.resetPassword.errors.validEmail",
                          "Invalid email address",
                      ),
        },
    });

    const { mutate: login, isLoading } =
        useLogin<RefineResetPasswordFormTypes>();

    const CardContent = (
        <Card style={cardStyles} {...(contentProps ?? {})}>
            <Title style={titleStyles}>
                {translate(
                    "pages.resetPassword.title",
                    "Forgot your password?",
                )}
            </Title>
            <Space h="lg" />
            <form
                onSubmit={onFormSubmit((values) => (onSubmit ?? login)(values))}
                {...formProps}
            >
                <TextInput
                    label={translate(
                        "pages.resetPassword.fields.email",
                        "Email",
                    )}
                    placeholder={translate(
                        "pages.resetPassword.fields.email",
                        "Email",
                    )}
                    {...getInputProps("email")}
                />

                {loginLink ?? (
                    <Group mt="md" position={loginLink ? "left" : "right"}>
                        <Text size="xs">
                            {translate(
                                "pages.login.resetPassword.haveAccount",
                                "Have an account? ",
                            )}{" "}
                            <Anchor component={Link} to="/login" weight={700}>
                                {translate(
                                    "pages.resetPassword.signin",
                                    "Sign in",
                                )}
                            </Anchor>
                        </Text>
                    </Group>
                )}
                <Button
                    mt="lg"
                    fullWidth
                    size="md"
                    type="submit"
                    loading={isLoading}
                >
                    {translate(
                        "pages.resetPassword.buttons.submit",
                        "Send reset instructions",
                    )}
                </Button>
            </form>
        </Card>
    );

    return (
        <Box style={layoutStyles} {...(wrapperProps ?? {})}>
            {renderContent ? renderContent(CardContent) : CardContent}
        </Box>
    );
};
