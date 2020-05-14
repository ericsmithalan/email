import React from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { Theme } from "src/lib/core/theme";

export const useTheme = (): Theme => {
    const context = React.useContext(EmailCssContext);
    return context.theme;
};
