import { ContainerProps } from "./Container";
import { Prop } from "../../lib/types";
import { styleable } from "src/lib/css-js/styleable";

export default styleable({
    container: {
        backgroundColor: "#eaeaea",
        width: 800,
        "@tablet": {
            width: "100%",
            clear: "both",
        },
        "@phone": {
            width: "100%",
            clear: "both",
        },
    },
    containerGutterLeft: {
        backgroundColor: "#fafafa",
        width: (p: Prop) => p.p.columnGutter,
        verticalAlign: "top",
        "@tablet": {
            width: (p: Prop) => p.p.columnGutter / 2,
        },
        "@phone": {
            width: (p: Prop) => p.p.columnGutter / 4,
        },
    },
    containerGutterRight: {
        backgroundColor: "#fafafa",
        verticalAlign: "top",
        width: (p: Prop) => p.p.columnGutter,
        "@tablet": {
            width: (p: Prop) => p.p.columnGutter / 2,
        },
        "@phone": {
            width: (p: Prop) => p.p.columnGutter / 4,
        },
    },
    containerGutterTop: {
        width: (p: Prop) => p.p.rowGutter,
        "@tablet": {
            width: (p: Prop) => p.p.rowGutter / 2,
        },
        "@phone": {
            width: (p: Prop) => p.p.rowGutter / 4,
        },
    },
    containerGutterBottom: {
        width: (p: Prop) => p.p.rowGutter,
        "@tablet": {
            width: (p: Prop) => p.p.rowGutter / 2,
        },
        "@phone": {
            width: (p: Prop) => p.p.rowGutter / 4,
        },
    },
    containerContent: {
        padding: 20,
    },
});
