import React from "react";
import { CssContext } from "../context/CssContext";
import { CssTheme } from "../types";

export const useTheme = (): CssTheme => {
    const context = React.useContext(CssContext);
    return context.theme;
};
