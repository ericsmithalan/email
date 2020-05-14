import { Style, Parser, Css } from "..";
import { CssStyle } from "../types";

const common: CssStyle = {
    defaultText: {
        fontFamily: (c: Css) => c.theme.fonts.fontFamily,
        fontSize: (c: Css) => c.theme.fonts.fontDefaultSize,
        color: (c: Css) => c.theme.colors.darkFontColor,
    },
    fullWidth: {
        width: "100%",
    },
};

export const commonCss: Parser = Style(common, "@common");
