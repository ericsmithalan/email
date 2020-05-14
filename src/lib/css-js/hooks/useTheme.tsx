import React from "react";
import { StylesContext } from "../StylesProvider";
import { Theme } from "../types";

export const useTheme = (): Theme => {
    const context = React.useContext(StylesContext);
    return context.theme;
};
