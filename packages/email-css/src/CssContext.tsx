import React from "react";
import { defaultTheme, CssTheme } from "./CssTheme";
import { CssRepository } from "./CssRepository";

export const defaultStyleContext = {
    repository: new CssRepository(),
    theme: defaultTheme,
};

export type CssContextProperties = {
    repository: CssRepository;
    theme: CssTheme;
};

export const useCssContext = () => {
    return React.useContext(CssStyleContext);
};

export const CssStyleContext = React.createContext<CssContextProperties>(defaultStyleContext);
export const CssStyleProvider = CssStyleContext.Provider;
