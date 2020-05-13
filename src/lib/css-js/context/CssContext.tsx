import React from "react";
import { Theme } from "../types";
import { defaultTheme } from "../defaultTheme";
import { StyleSheets } from "../StyleSheets";

export type CssContextProperties = {
    repository: StyleSheets;
    theme: Theme;
};

export const CssContext = React.createContext<CssContextProperties>({
    repository: new StyleSheets(defaultTheme),
    theme: defaultTheme,
});
