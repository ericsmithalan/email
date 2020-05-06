import { CssTheme, CssStyle } from "@email/css";

export const commonFonts: CssStyle = {
    fontFamily: (theme: CssTheme) => theme.fonts.fontFamily,
    fontSize: (theme: CssTheme) => theme.fonts.fontDefaultSize,
    color: (theme: CssTheme) => theme.colors.darkFontColor,
};
