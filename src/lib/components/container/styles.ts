import { ContainerProps } from "./Container";
import { Style } from "../../core/css-js";

export default Style({
    container: {
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
        width: (p: ContainerProps) => p.columnGutter,
        verticalAlign: "top",
        "@tablet": {
            width: (p: ContainerProps) => p.columnGutter / 2,
        },
        "@phone": {
            width: (p: ContainerProps) => p.columnGutter / 4,
        },
    },
    containerGutterRight: {
        verticalAlign: "top",
        width: (p: ContainerProps) => p.columnGutter,
        "@tablet": {
            width: (p: ContainerProps) => p.columnGutter / 2,
        },
        "@phone": {
            width: (p: ContainerProps) => p.columnGutter / 4,
        },
    },
    containerGutterTop: {
        width: (p: ContainerProps) => p.rowGutter,
        "@tablet": {
            width: (p: ContainerProps) => p.rowGutter / 2,
        },
        "@phone": {
            width: (p: ContainerProps) => p.rowGutter / 4,
        },
    },
    containerGutterBottom: {
        width: (p: ContainerProps) => p.rowGutter,
        "@tablet": {
            width: (p: ContainerProps) => p.rowGutter / 2,
        },
        "@phone": {
            width: (p: ContainerProps) => p.rowGutter / 4,
        },
    },
    containerContent: {},
});
