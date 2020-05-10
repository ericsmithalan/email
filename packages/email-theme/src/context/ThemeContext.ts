import React from "react";
import { Theme } from "../types";
import { defaultTheme } from "../defaultTheme";

export type CssContextProperties = {
    theme: Theme;
};

export const ThemeContext = React.createContext<CssContextProperties>({
    theme: defaultTheme,
});
