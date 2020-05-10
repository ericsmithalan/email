import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Theme } from "../types";

export const useTheme = (): Theme => {
    return React.useContext(ThemeContext).theme;
};
