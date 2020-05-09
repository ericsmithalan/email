import { CssTheme, Css } from "@email/css";

export const commonFonts: Css = {
    fontFamily: (theme: CssTheme) => theme.fonts.fontFamily,
    fontSize: (theme: CssTheme) => theme.fonts.fontDefaultSize,
    color: (theme: CssTheme) => theme.colors.darkFontColor,
};
