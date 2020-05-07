import { defaultTheme, CssTheme } from "./theme/CssTheme";
import { CssDirtyStyles } from "./types";
import { CssStyle } from "./CssStyle";

export const css = (styles: CssDirtyStyles, theme: CssTheme = defaultTheme): CssStyle => {
    return new CssStyle(styles, theme);
};
