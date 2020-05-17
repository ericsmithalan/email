import { style } from "src/lib/css-js/style";
import { Prop } from "src/lib/types";

export default style({
    signature: {
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    link: {
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    name: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        textTransform: "uppercase",
        fontWeight: 600,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    jobTitle: {
        fontFamily: (p: Prop) => p.t.fonts.headerFontFamily,
        textTransform: "uppercase",
        fontWeight: 600,
        color: (p: Prop) => p.t.colors.orangeColor,
    },
    address: {
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    email: {
        color: (p: Prop) => p.t.colors.darkFontColor,
        textTransform: "lowercase",
    },
    phone: {
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    heading: {
        color: (p: Prop) => p.t.colors.orangeColor,
        fontWeight: 600,
        paddingRight: 5,
    },
    margin1: {
        paddingRight: 10,
    },
});
