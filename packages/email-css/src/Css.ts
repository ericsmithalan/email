import { CssTheme } from "./theme/CssTheme";
import { defaultTheme } from "./theme/defaultTheme";
import { CssDirtyStyles, CssClassNames } from "./types";
import { CssStyle } from "./CssStyle";

export const css = (styles: CssDirtyStyles, theme: CssTheme = defaultTheme): CssStyle => {
    return new CssStyle(styles, theme);
};
