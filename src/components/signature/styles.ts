import { style } from "src/lib/css-js/style";
import { Prop } from "src/lib/types";

export default style({
    signature: {},
    link: {},
    name: {
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
    },
    jobTitle: {
        textTransform: "uppercase",
        fontSize: 10,
        color: (p: Prop) => p.t.colors.orangeColor,
    },
    email: {
        textTransform: "lowercase",
        fontSize: 10,
    },
    phone: {
        fontSize: 10,
    },
    heading: {
        color: (p: Prop) => p.t.colors.orangeColor,
        fontWeight: 600,
        textTransform: "uppercase",
        fontSize: 10,
    },
});
