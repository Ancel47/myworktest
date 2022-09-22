import React, { PropsWithChildren } from "react";

export type IProvider = {
    name: string;
    icon?: React.ReactNode;
    label?: string;
};

export interface RefineLoginFormTypes {
    email?: string;
    password?: string;
    remember?: boolean;
    providerName?: string;
}

export interface RefineRegisterFormTypes {
    email?: string;
    password?: string;
    providerName?: string;
}

export interface RefineForgotPasswordFormTypes {
    email: string;
}

export interface RefineUpdatePasswordFormTypes {
    password?: string;
    confirmPassword?: string;
}

/**
 * This should be the base type for `AuthPage` component implementations in UI integrations.
 */
export type RefineAuthPageProps<
    TWrapperProps extends {} = Record<keyof any, unknown>,
    TContentProps extends {} = Record<keyof any, unknown>,
    TFormProps extends {} = Record<keyof any, unknown>,
> = (
    | PropsWithChildren<{
          /**
           * @default "login"
           * @description The type of the auth page.
           * @optional
           */
          type?: "login";
          /**
           * @description Providers array for login with third party auth services.
           * @optional
           */
          providers?: IProvider[];
          /**
           * @description Render a redirect to register page button node. If set to false, register button will not be rendered.
           * @optional
           */
          registerLink?: React.ReactNode;
          /**
           * @description Render a redirect to forgot password page button node. If set to false, forgot password button will not be rendered.
           * @optional
           */
          forgotPasswordLink?: React.ReactNode;
          /**
           * @description Render a remember me button node. If set to false, remember me button will not be rendered.
           * @optional
           */
          rememberMe?: React.ReactNode;
      }>
    | PropsWithChildren<{
          /**
           * @description The type of the auth page.
           * @optional
           */
          type: "register";
          /**
           * @description Render a redirect to login page button node. If set to false, login button will not be rendered.
           * @optional
           */
          loginLink?: React.ReactNode;
          /**
           * @description Providers array for login with third party auth services.
           * @optional
           */
          providers?: IProvider[];
      }>
    | PropsWithChildren<{
          /**
           * @description The type of the auth page.
           * @optional
           */
          type: "forgotPassword";
          /**
           * @description render a redirect to login page button node. If set to false, login button will not be rendered.
           * @optional
           */
          loginLink?: React.ReactNode;
      }>
    | PropsWithChildren<{
          /**
           * @description The type of the auth page.
           * @optional
           */
          type: "updatePassword";
      }>
) & {
    /**
     * @description The props that will be passed to the wrapper component.
     * @optional
     */
    wrapperProps?: TWrapperProps;
    /**
     * @description The props that will be passed to the content component.
     * @optional
     */
    contentProps?: TContentProps;
    /**
     * @description This method gives you the ability to render a custom content node.
     * @optional
     */
    renderContent?: (content: React.ReactNode) => React.ReactNode;
    /**
     * @description Can be used to pass additional properties for the `Form`
     * @optional
     */
    formProps?: TFormProps;
};

/**
 * This should be the base type for `AuthPage` `Login` component implementations in UI integrations.
 */
export type RefineLoginPageProps<
    TWrapperProps extends {} = Record<keyof any, unknown>,
    TContentProps extends {} = Record<keyof any, unknown>,
    TFormProps extends {} = Record<keyof any, unknown>,
> = PropsWithChildren<{
    providers?: IProvider[];
    registerLink?: React.ReactNode;
    forgotPasswordLink?: React.ReactNode;
    rememberMe?: React.ReactNode;
    wrapperProps?: TWrapperProps;
    renderContent?: (content: React.ReactNode) => React.ReactNode;
    contentProps?: TContentProps;
    formProps?: TFormProps;
}>;

/**
 * This should be the base type for `AuthPage` `Register` component implementations in UI integrations.
 */
export type RefineRegisterPageProps<
    TWrapperProps extends {} = Record<keyof any, unknown>,
    TContentProps extends {} = Record<keyof any, unknown>,
    TFormProps extends {} = Record<keyof any, unknown>,
> = PropsWithChildren<{
    providers?: IProvider[];
    loginLink?: React.ReactNode;
    wrapperProps?: TWrapperProps;
    renderContent?: (content: React.ReactNode) => React.ReactNode;
    contentProps?: TContentProps;
    formProps?: TFormProps;
}>;

/**
 * This should be the base type for `AuthPage` `Reset Password` component implementations in UI integrations.
 */
export type RefineForgotPasswordPageProps<
    TWrapperProps extends {} = Record<keyof any, unknown>,
    TContentProps extends {} = Record<keyof any, unknown>,
    TFormProps extends {} = Record<keyof any, unknown>,
> = PropsWithChildren<{
    loginLink?: React.ReactNode;
    wrapperProps?: TWrapperProps;
    renderContent?: (content: React.ReactNode) => React.ReactNode;
    contentProps?: TContentProps;
    formProps?: TFormProps;
}>;

/**
 * This should be the base type for `AuthPage` `Update Password` component implementations in UI integrations.
 */
export type RefineUpdatePasswordPageProps<
    TWrapperProps extends {} = Record<keyof any, unknown>,
    TContentProps extends {} = Record<keyof any, unknown>,
    TFormProps extends {} = Record<keyof any, unknown>,
> = PropsWithChildren<{
    wrapperProps?: TWrapperProps;
    renderContent?: (content: React.ReactNode) => React.ReactNode;
    contentProps?: TContentProps;
    formProps?: TFormProps;
}>;
