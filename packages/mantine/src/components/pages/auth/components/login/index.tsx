import React from "react";
import {
    RefineLoginPageProps,
    RefineLoginFormTypes,
} from "@pankod/refine-ui-types";
import { useLogin, useTranslate, useRouterContext } from "@pankod/refine-core";
import {
    Box,
    Card,
    Checkbox,
    PasswordInput,
    Space,
    TextInput,
    Title,
    Anchor,
    Button,
    Text,
    Divider,
    Stack,
    BoxProps,
    CardProps,
} from "@mantine/core";

import { useForm } from "@hooks/form";
import { layoutStyles, cardStyles, titleStyles } from "../styles";

type LoginProps = RefineLoginPageProps<
    BoxProps,
    CardProps,
    React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    >
>;

/**
 * **refine** has a default login page form which is served on `/login` route when the `authProvider` configuration is provided.
 *
 */
export const LoginPage: React.FC<LoginProps> = ({
    providers,
    registerLink,
    forgotPasswordLink,
    rememberMe,
    contentProps,
    wrapperProps,
    renderContent,
    formProps,
}) => {
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const { getInputProps, onSubmit } = useForm({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value)
                    ? null
                    : translate(
                          "pages.login.errors.validEmail",
                          "Invalid email address",
                      ),
            password: (value) => value === "",
        },
    });

    const { mutate: login, isLoading } = useLogin<RefineLoginFormTypes>();

    const renderProviders = () => {
        if (providers) {
            return (
                <>
                    <Stack spacing={8}>
                        {providers.map((provider) => {
                            return (
                                <Button
                                    key={provider.name}
                                    fullWidth
                                    leftIcon={provider.icon}
                                    onClick={() =>
                                        login({
                                            providerName: provider.name,
                                        })
                                    }
                                >
                                    {provider.label}
                                </Button>
                            );
                        })}
                    </Stack>
                    <Divider
                        my="md"
                        labelPosition="center"
                        label={translate("pages.login.divider", "or")}
                    />
                </>
            );
        }
        return null;
    };

    const CardContent = (
        <Card style={cardStyles} {...(contentProps ?? {})}>
            <Title style={titleStyles}>
                {translate("pages.login.title", "Sign in to your account")}
            </Title>
            <Space h="lg" />
            {renderProviders()}
            <form onSubmit={onSubmit((values) => login(values))} {...formProps}>
                <TextInput
                    label={translate("pages.login.fields.email", "Email")}
                    placeholder={translate("pages.login.fields.email", "Email")}
                    {...getInputProps("email")}
                />
                <PasswordInput
                    mt="md"
                    label={translate("pages.login.fields.password", "Password")}
                    placeholder="●●●●●●●●"
                    {...getInputProps("password")}
                />
                <Box
                    mt="md"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {rememberMe ?? (
                        <Checkbox
                            label={translate(
                                "pages.login.buttons.rememberMe",
                                "Remember me",
                            )}
                            size="xs"
                            {...getInputProps("remember", {
                                type: "checkbox",
                            })}
                        />
                    )}
                    {forgotPasswordLink ?? (
                        <Anchor component={Link} to="/reset-password" size="xs">
                            {translate(
                                "pages.login.buttons.resetPassword",
                                "Forgot password?",
                            )}
                        </Anchor>
                    )}
                </Box>
                <Button
                    mt="lg"
                    fullWidth
                    size="md"
                    type="submit"
                    loading={isLoading}
                >
                    {translate("pages.login.signin", "Sign in")}
                </Button>
            </form>
            {registerLink ?? (
                <Text mt="xs" size="xs">
                    {translate(
                        "pages.login.buttons.noAccount",
                        "Don’t have an account?",
                    )}{" "}
                    <Anchor component={Link} to="/register" weight={700}>
                        {translate("pages.login.signup", "Sign up")}
                    </Anchor>
                </Text>
            )}
        </Card>
    );

    return (
        <Box style={layoutStyles} {...(wrapperProps ?? {})}>
            {renderContent ? renderContent(CardContent) : CardContent}
        </Box>
    );
};
