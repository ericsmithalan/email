import { Style, Parser, Css } from "../css-js";

export const commonCss: Parser = Style(
    {
        defaultText: {
            fontFamily: (c: Css) => c.theme.fonts.fontFamily,
            fontSize: (c: Css) => c.theme.fonts.fontDefaultSize,
            color: (c: Css) => c.theme.colors.darkFontColor,
        },
        fullWidth: {
            width: "100%",
        },
        largeFont: {
            fontSize: 70,
        },
    },
    "@common",
);
