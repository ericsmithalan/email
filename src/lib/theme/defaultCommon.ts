import { CssStyle, Prop, CommonCss } from "../types";
import { styleable } from "../css-js/styleable";

const defaultCommon = styleable({
    defaultText: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    fullWidth: {
        width: "100%",
    },
    bold: {
        fontWeight: 600,
    },
    italic: {
        fontStyle: "italic",
    },
    underline: {
        textDecoration: "underline",
    },
    caps: {
        textTransform: "uppercase",
    },
});

export { defaultCommon };
