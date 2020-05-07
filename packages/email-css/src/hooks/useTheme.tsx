import React from "react";
import { CssStyleContext } from "../context/CssContext";
import { CssTheme } from "../theme/CssTheme";

export const useTheme = (): CssTheme => {
    return React.useContext(CssStyleContext).theme;
};
