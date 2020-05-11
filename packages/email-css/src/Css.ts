import { defaultTheme } from "./defaultTheme";
import { CssDirtyStyles, CssTheme, CssStyleableComponent } from "./types";
import { CssStyle } from "./CssStyle";

export const css = (styles: CssDirtyStyles): CssStyle => {
    return new CssStyle(styles);
};
