import { Style, Css } from "../..";
import { CssStyle } from "./types";

const commonCss: CssStyle = {
    defaultText: {
        fontFamily: (c: Css) => c.theme.fonts.fontFamily,
        fontSize: (c: Css) => c.theme.fonts.fontDefaultSize,
        color: (c: Css) => c.theme.colors.darkFontColor,
    },
    fullWidth: {
        width: "100%",
    },
};

export { commonCss };
