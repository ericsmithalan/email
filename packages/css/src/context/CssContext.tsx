import React from "react";
import { CssTheme } from "../types";
import { defaultTheme } from "../defaultTheme";
import { CssRepository } from "../CssRepository";

export type CssContextProperties = {
    repository: CssRepository;
    theme: CssTheme;
};

export const CssContext = React.createContext<CssContextProperties>({
    repository: new CssRepository(defaultTheme),
    theme: defaultTheme,
});
