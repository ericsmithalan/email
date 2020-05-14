import React from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { Theme } from "../types/theme.types";

export const useTheme = (): Theme => {
    const context = React.useContext(EmailCssContext);
    return context.theme;
};
