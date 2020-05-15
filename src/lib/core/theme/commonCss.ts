import { CssStyle, Theme } from "../types/theme.types";

const commonCss: CssStyle = {
    defaultText: {
        fontFamily: (t: Theme) => t.fonts.fontFamily,
        fontSize: (t: Theme) => t.fonts.fontDefaultSize,
        color: (t: Theme) => t.colors.darkFontColor,
    },
    fullWidth: {
        width: "100%",
    },
};

export { commonCss };
