import { ContainerProps } from "./Container";
import { Style } from "../../core/css-js";
import { Css } from "../../core/types/css.types";
import { Styles } from "../../core/types/index";
import { Theme } from "src/lib/core/types/theme.types";

const styles: Styles = {
    container: {
        "@tablet": {
            width: "100%",
            clear: "both",
            height: 20,
        },
        "@phone": {},
        ":hover": {},
    },
    containerGutterLeft: {
        width: (p: ContainerProps) => p.columnGutter,
        "@tablet": {
            width: (p: ContainerProps) => p.height,
        },
        "@phone": {
            width: (t: Theme) => t.fonts.fontSmallSize,
        },
    },

    containerContent: {},
};

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
