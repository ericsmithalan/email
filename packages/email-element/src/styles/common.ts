import { CssTheme, CssStyleFragment } from "@email/css";

export const commonFonts: CssStyleFragment = {
    fontFamily: (theme: CssTheme) => theme.fonts.fontFamily,
    fontSize: (theme: CssTheme) => theme.fonts.fontDefaultSize,
    color: (theme: CssTheme) => theme.colors.darkFontColor,
};
