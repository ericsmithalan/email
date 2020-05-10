import { defaultTheme } from "./defaultTheme";
import { CssDirtyStyles, CssTheme } from "./types";
import { CssStyle } from "./CssStyle";

export const css = (styles: CssDirtyStyles, theme: CssTheme = defaultTheme): CssStyle => {
    return new CssStyle(styles, theme);
};
