import React, { CSSProperties, Props } from "react";
import { CssContext } from "../context/CssContext";
import { StyleSheet } from "../types";
import { Parser } from "../Parser";
import { CssHelpers } from "../helpers/CssHelpers";

export const useMergedProps = (css: Parser, props: any, defaultProps: any) => {
    const context = React.useContext(CssContext);

    css.parseCss(
        Object.assign({}, defaultProps, props, {
            className: CssHelpers.combineClassNames(defaultProps, props),
        }),
        context.theme,
    );

    context.repository.registerStyles(css.classes);

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = context.repository.registerPropStyles(defaultProps);
    }

    const propStyles = context.repository.registerPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: CssHelpers.combineClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
