import { Style, Css } from "src/lib/css-js";
import { ContainerProps } from "./Container";

export default Style({
    container: {
        backgroundColor: "red",
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
        width: 30,
        "@tablet": {
            width: 15,
        },
        "@phone": {
            width: 8,
        },
    },
    containerGutterRight: {
        width: 30,
        "@tablet": {
            width: 15,
        },
        "@phone": {
            width: 8,
        },
    },
    containerGutterTop: {
        height: 30,
        "@tablet": {
            height: 15,
        },
        "@phone": {
            height: 8,
        },
    },
    containerGutterBottom: {
        height: 30,
        "@tablet": {
            height: 15,
        },
        "@phone": {
            height: 8,
        },
    },
    containerContent: {
        padding: 20,
    },
});
