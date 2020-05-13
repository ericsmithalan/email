import React from "react";
import { StylesContext } from "../context/StylesContext";
import { Theme } from "../types";

export const useTheme = (): Theme => {
    const context = React.useContext(StylesContext);
    return context.theme;
};
