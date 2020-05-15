import { CssStyle, Theme } from "../types/theme.types";
import { Prop } from "../types/css.types";

const commonCss: CssStyle = {
    defaultText: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    fullWidth: {
        width: "100%",
    },
};

export { commonCss };
