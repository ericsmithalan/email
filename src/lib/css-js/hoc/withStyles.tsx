import React, { CSSProperties, Props, FC } from "react";
import { CssContext } from "../context/CssContext";
import { StyleSheet, DirtyStyles } from "../types";
import { CssStyle } from "../CssStyle";
import { useMergedProps } from "../hooks/useMergedProps";

export const withStyles = (styles: DirtyStyles) => <P extends object>(Comp: FC<P>) => {
    const cssStyles = new CssStyle(styles);

    const withStyles = (props: P) => {
        const mergedProps = useMergedProps(cssStyles, props, Comp.defaultProps);

        return <Comp {...mergedProps} />;
    };
    return withStyles;
};
