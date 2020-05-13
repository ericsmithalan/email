import { Style, Css } from "src/lib/css-js";
import { ContainerProps } from "./Container";

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
        width: (c: Css<ContainerProps>) => c.props.columnGutter,
        "@tablet": {
            width: (c: Css<ContainerProps>) => c.props.columnGutter / 2,
        },
        "@phone": {
            width: (c: Css<ContainerProps>) => c.props.columnGutter / 4,
        },
    },
    containerGutterRight: {
        width: (c: Css<ContainerProps>) => c.props.columnGutter,
        "@tablet": {
            width: (c: Css<ContainerProps>) => c.props.columnGutter / 2,
        },
        "@phone": {
            width: (c: Css<ContainerProps>) => c.props.columnGutter / 4,
        },
    },
    containerGutterTop: {
        width: (c: Css<ContainerProps>) => c.props.rowGutter,
        "@tablet": {
            width: (c: Css<ContainerProps>) => c.props.rowGutter / 2,
        },
        "@phone": {
            width: (c: Css<ContainerProps>) => c.props.rowGutter / 4,
        },
    },
    containerGutterBottom: {
        width: (c: Css<ContainerProps>) => c.props.rowGutter,
        "@tablet": {
            width: (c: Css<ContainerProps>) => c.props.rowGutter / 2,
        },
        "@phone": {
            width: (c: Css<ContainerProps>) => c.props.rowGutter / 4,
        },
    },
    containerContent: {
        padding: 20,
    },
});
