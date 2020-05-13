import React from "react";
import { Theme } from "../types";
import { defaultTheme } from "../defaultTheme";
import { StyleSheets } from "../StyleSheets";

export type StylesContextProps = {
    repository: StyleSheets;
    theme: Theme;
};

export const StylesContext = React.createContext<StylesContextProps>({
    repository: new StyleSheets(),
    theme: defaultTheme,
});
