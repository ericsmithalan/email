import { Css } from "../types";
import { CssTheme } from "./CssTheme";

export const commonFonts: Css = {
    fontFamily: (theme: CssTheme) => theme.fonts.fontFamily,
    fontSize: (theme: CssTheme) => theme.fonts.fontDefaultSize,
    color: (theme: CssTheme) => theme.colors.darkFontColor,
};
