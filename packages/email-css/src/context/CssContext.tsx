import React from "react";
import { CssTheme } from "../theme/CssTheme";
import { defaultTheme } from "../theme/defaultTheme";
import { CssRepository } from "../CssRepository";

export const defaultStyleContext = {
    repository: new CssRepository(),
    theme: defaultTheme,
};

export type CssContextProperties = {
    repository: CssRepository;
    theme: CssTheme;
};

export const CssStyleContext = React.createContext<CssContextProperties>(defaultStyleContext);
export const CssStyleProvider = CssStyleContext.Provider;
