import * as React from "react";
import {
    RefineUpdatePasswordFormTypes,
    RefineUpdatePasswordPageProps,
} from "@pankod/refine-ui-types";
import { useForm } from "@pankod/refine-react-hook-form";
import {
    Button,
    TextField,
    Box,
    Typography,
    Container,
    Card,
    CardContent as MuiCardContent,
    BoxProps,
    CardContentProps,
} from "@mui/material";

import {
    BaseRecord,
    HttpError,
    useTranslate,
    useUpdatePassword,
} from "@pankod/refine-core";

import { layoutStyles, titleStyles } from "../styles";

type UpdatePasswordProps = RefineUpdatePasswordPageProps<
    BoxProps,
    CardContentProps
>;

export const UpdatePasswordPage: React.FC<UpdatePasswordProps> = ({
    onSubmit,
    wrapperProps,
    contentProps,
    renderContent,
}) => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<BaseRecord, HttpError, RefineUpdatePasswordFormTypes>();

    const { mutate: update, isLoading } =
        useUpdatePassword<RefineUpdatePasswordFormTypes>();
    const translate = useTranslate();

    const CardContent = (
        <Card {...(contentProps ?? {})}>
            <MuiCardContent sx={{ paddingX: "32px" }}>
                <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    style={titleStyles}
                >
                    {translate(
                        "pages.updatePassword.title",
                        "Set New Password",
                    )}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit((data) =>
                        (onSubmit ?? update)(data),
                    )}
                    gap="16px"
                >
                    <TextField
                        {...register("password", {
                            required: true,
                        })}
                        id="password"
                        size="small"
                        margin="normal"
                        fullWidth
                        name="password"
                        label={translate(
                            "pages.updatePassword.fields.password",
                            "New Password",
                        )}
                        helperText={errors?.password?.message}
                        error={!!errors?.password}
                        type="password"
                        placeholder="●●●●●●●●"
                        autoComplete="current-password"
                    />

                    <TextField
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value?: string) => {
                                if (watch("password") !== value) {
                                    return translate(
                                        "pages.updatePassword.errors.confirmPasswordNotMatch",
                                        "Passwords do not match",
                                    );
                                }
                                return true;
                            },
                        })}
                        id="confirmPassword"
                        size="small"
                        margin="normal"
                        fullWidth
                        name="confirmPassword"
                        label={translate(
                            "pages.updatePassword.fields.confirmPassword",
                            "Confirm New Password",
                        )}
                        helperText={errors?.confirmPassword?.message}
                        error={!!errors?.confirmPassword}
                        type="password"
                        placeholder="●●●●●●●●"
                        autoComplete="current-confirm-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            my: "8px",
                            color: "white",
                        }}
                        disabled={isLoading}
                    >
                        {translate(
                            "pages.updatePassword.buttons.submit",
                            "Update",
                        )}
                    </Button>
                </Box>
            </MuiCardContent>
        </Card>
    );

    return (
        <>
            <Box component="div" style={layoutStyles} {...(wrapperProps ?? {})}>
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    {renderContent ? renderContent(CardContent) : CardContent}
                </Container>
            </Box>
        </>
    );
};
