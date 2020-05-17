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
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
    jobTitle: {
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
    },
});
