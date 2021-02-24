import React from "react";

import "../../../i18n.js";

import { ITranslationContext, I18nProvider } from "@interfaces";

const defaultProvider: ITranslationContext = {
    i18nProvider: {
        translate: (x) => x,
        changeLocale: () => Promise.resolve(),
        getLocale: () => "en",
    },
};

export const TranslationContext = React.createContext<ITranslationContext>(
    defaultProvider,
);

interface TranslationProviderProps {
    i18nProvider: I18nProvider;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
    children,
    i18nProvider,
}) => {
    return (
        <TranslationContext.Provider
            value={{
                i18nProvider,
            }}
        >
            {children}
        </TranslationContext.Provider>
    );
};
