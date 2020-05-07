import { defaultTheme, CssTheme } from "./theme/CssTheme";
import { CssDirtyStyles } from "./types";
import { CssFragment } from "./CssFragment";

export const css = (styles: CssDirtyStyles, theme: CssTheme = defaultTheme): CssFragment => {
    return new CssFragment(styles, theme);
};
