import { defaultTheme } from "./CssTheme";
import { CssFragment } from "./CssFragment";
export const css = (styles, theme = defaultTheme) => {
    return new CssFragment(styles, theme);
};
//# sourceMappingURL=Css.js.map