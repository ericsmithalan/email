import { CssTheme, Css } from "packages/email-element/src/primitives/node_modules/@email/css";

export const commonFonts: Css = {
    fontFamily: (theme: CssTheme) => theme.fonts.fontFamily,
    fontSize: (theme: CssTheme) => theme.fonts.fontDefaultSize,
    color: (theme: CssTheme) => theme.colors.darkFontColor,
};
