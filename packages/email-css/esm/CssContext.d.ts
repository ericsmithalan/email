import React from "react";
import { CssTheme } from "./CssTheme";
import { CssRepository } from "./CssRepository";
export declare const defaultStyleContext: {
    repository: CssRepository;
    theme: CssTheme;
};
export declare type CssContextProperties = {
    repository: CssRepository;
    theme: CssTheme;
};
export declare const useCssContext: () => CssContextProperties;
export declare const CssStyleContext: React.Context<CssContextProperties>;
export declare const CssStyleProvider: React.Provider<CssContextProperties>;
//# sourceMappingURL=CssContext.d.ts.map