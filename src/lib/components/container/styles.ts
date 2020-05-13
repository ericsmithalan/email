import { Style, Css } from "src/lib/css-js";
import { ContainerProps } from "./Container";

export default Style({
    containerGutterLeft: {
        backgroundColor: "red",
        maxWidth: (args: Css<ContainerProps>) => args.props.gutter,
        minWidth: (args: Css<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minWidth: 0,
            maxWidth: 0,
        },
    },
    containerGutterRight: {
        backgroundColor: "red",
        maxWidth: (args: Css<ContainerProps>) => args.props.gutter,
        minWidth: (args: Css<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minWidth: 0,
            maxWidth: 0,
        },
    },
    containerGutterTop: {
        backgroundColor: "red",
        maxHeight: (args: Css<ContainerProps>) => args.props.gutter,
        minHeight: (args: Css<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minHeight: 0,
            maxHeight: 0,
        },
    },
    containerGutterBottom: {
        backgroundColor: "red",
        maxHeight: (args: Css<ContainerProps>) => args.props.gutter,
        minHeight: (args: Css<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minHeight: 0,
            maxHeight: 0,
        },
    },
    containerContent: {
        fontSize: 200,
        minWidth: "auto",
        "@tablet": {
            fontSize: 13,
        },
        "@phone": {
            fontSize: 9,
        },
        ":hover": {
            backgroundColor: "blue",
        },
    },
});
