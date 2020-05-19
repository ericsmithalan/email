import { style } from "../css-js/style";
import { Prop } from "../types";

const defaultCommon = style({
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
