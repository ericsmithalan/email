import React from "react";
import { StylesContext } from "../StylesProvider";
import { Theme } from "src/lib/theme";

export const useTheme = (): Theme => {
    const context = React.useContext(StylesContext);
    return context.theme;
};
