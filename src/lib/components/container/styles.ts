import { ContainerProps } from "./Container";
import { Style } from "../../core/css-js";
import { Css } from "../../core/types/css.types";

export default Style({
    container: {
        "@tablet": {
            align: "center",
            width: "100%",
            clear: "both",
        },
        "@phone": {
            align: "center",
            width: "100%",
            clear: "both",
        },
    },
    containerGutterLeft: {
        width: (c: Css<ContainerProps>) => c.props.columnGutter,
        verticalAlign: "top",
        "@tablet": {
            width: (c: Css<ContainerProps>) => c.props.columnGutter / 2,
        },
        "@phone": {
            width: (c: Css<ContainerProps>) => c.props.columnGutter / 4,
        },
    },
    containerGutterRight: {
        verticalAlign: "top",
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
    containerContent: {},
});
