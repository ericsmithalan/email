import React from "react";
import { defaultTheme } from "./CssTheme";
import { CssRepository } from "./CssRepository";
export const defaultStyleContext = {
    repository: new CssRepository(),
    theme: defaultTheme,
};
export const useCssContext = () => {
    return React.useContext(CssStyleContext);
};
export const CssStyleContext = React.createContext(defaultStyleContext);
export const CssStyleProvider = CssStyleContext.Provider;
//# sourceMappingURL=CssContext.js.map