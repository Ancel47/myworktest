import * as React from "react";
import {
    RefineLoginPageProps,
    RefineLoginFormTypes,
} from "@pankod/refine-ui-types";
import { useForm } from "@pankod/refine-react-hook-form";
import {
    Button,
    BoxProps,
    Box,
    Checkbox,
    Container,
    Card,
    CardContent as MuiCardContent,
    CardContentProps,
    FormControlLabel,
    TextField,
    Typography,
    Divider,
} from "@mui/material";

import {
    BaseRecord,
    HttpError,
    useLogin,
    useTranslate,
    useRouterContext,
} from "@pankod/refine-core";
import { layoutStyles, titleStyles } from "../styles";

type LoginProps = RefineLoginPageProps<BoxProps, CardContentProps>;

export const LoginPage: React.FC<LoginProps> = ({
    providers,
    registerLink,
    forgotPasswordLink,
    rememberMe,
    contentProps,
    wrapperProps,
    renderContent,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BaseRecord, HttpError, RefineLoginFormTypes>();

    const { mutate: login, isLoading } = useLogin<RefineLoginFormTypes>();
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const renderProviders = () => {
        if (providers) {
            return (
                <>
                    {providers.map((provider: any) => {
                        return (
                            <Button
                                key={provider.name}
                                fullWidth
                                variant="outlined"
                                sx={{
                                    my: "8px",
                                    textTransform: "none",
                                }}
                                onClick={() =>
                                    login({ providerName: provider.name })
                                }
                                startIcon={provider.icon}
                            >
                                {provider.label}
                            </Button>
                        );
                    })}
                    <Divider style={{ fontSize: 12 }}>
                        {translate("pages.login.divider", "or")}
                    </Divider>
                </>
            );
        }
        return null;
    };

    const CardContent = (
        <Card {...(contentProps ?? {})}>
            <MuiCardContent sx={{ paddingX: "32px" }}>
                <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    style={titleStyles}
                >
                    {translate("pages.login.title", "Sign in to your account")}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit((data) => login(data))}
                    gap="16px"
                >
                    {renderProviders()}
                    <TextField
                        {...register("email", {
                            required: true,
                        })}
                        id="email"
                        margin="normal"
                        size="small"
                        fullWidth
                        label={translate("pages.login.fields.email", "Email")}
                        error={!!errors.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                    />
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
                            "pages.login.fields.password",
                            "Password",
                        )}
                        helperText={errors?.password?.message}
                        error={!!errors.password}
                        type="password"
                        placeholder="●●●●●●●●"
                        autoComplete="current-password"
                    />

                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {rememberMe ?? (
                            <FormControlLabel
                                sx={{
                                    span: {
                                        fontSize: "12px",
                                        color: "text.secondary",
                                    },
                                }}
                                color="secondary"
                                control={
                                    <Checkbox
                                        size="small"
                                        id="remember"
                                        {...register("remember")}
                                    />
                                }
                                label={translate(
                                    "pages.login.buttons.rememberMe",
                                    "Remember me",
                                )}
                            />
                        )}
                        {forgotPasswordLink ?? (
                            <Link
                                to="/forgot-password"
                                sx={{
                                    fontSize: "12px",
                                    textDecoration: "none",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                    }}
                                >
                                    {translate(
                                        "pages.login.buttons.forgotPassword",
                                        "Forgot password?",
                                    )}
                                </Typography>
                            </Link>
                        )}
                    </Box>
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
                        {translate("pages.login.signin", "Sign in")}
                    </Button>
                    {registerLink ?? (
                        <Box style={{ marginTop: 8 }}>
                            <Typography variant="subtitle2">
                                {translate(
                                    "pages.login.buttons.noAccount",
                                    "Don’t have an account?",
                                )}{" "}
                                <Link
                                    underline="none"
                                    to="/register"
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    {translate("pages.login.signup", "Sign up")}
                                </Link>
                            </Typography>
                        </Box>
                    )}
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
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {renderContent
                            ? renderContent(CardContent)
                            : CardContent}
                    </Box>
                </Container>
            </Box>
        </>
    );
};
