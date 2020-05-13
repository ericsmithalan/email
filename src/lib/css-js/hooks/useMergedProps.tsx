import React, { CSSProperties, Props } from "react";
import { StylesContext } from "../context/StylesContext";
import { StyleSheet } from "../types";
import { Parser } from "../Parser";
import { CssHelpers } from "../helpers/CssHelpers";

export const useMergedProps = (css: Parser, props: any, defaultProps: any) => {
    const context = React.useContext(StylesContext);

    css.parse(
        Object.assign({}, defaultProps, props, {
            className: CssHelpers.combineClassNames(defaultProps, props),
        }),
        context.theme,
    );

    context.repository.registerStyles(css.styles);

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
