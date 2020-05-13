import React from "react";
import { CssContext } from "../context/CssContext";
import { Theme } from "../types";

export const useTheme = (): Theme => {
    const context = React.useContext(CssContext);
    return context.theme;
};
