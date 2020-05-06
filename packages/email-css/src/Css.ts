import { defaultTheme, CssTheme } from "./CssTheme";
import { CssDirtyStyles, CssClassNames } from "./types";
import { CssFragment } from "./CssFragment";

export type Css = (styles: CssDirtyStyles, theme: CssTheme) => CssClassNames;

export const css = (styles: CssDirtyStyles, theme: CssTheme = defaultTheme): CssFragment => {
    return new CssFragment(styles, theme);
};
