import React, { CSSProperties, Props } from "react";
import { StylesContext } from "../StylesProvider";
import { StyleSheet } from "../types";
import { Parser } from "../Parser";
import { CssHelpers } from "../helpers/CssHelpers";

export const useMergeStyles = (css: Parser, props: any, defaultProps: any) => {
    const context = React.useContext(StylesContext);

    css.parse(
        context.theme,
        Object.assign({}, defaultProps, props, {
            className: CssHelpers.combineClassNames(defaultProps, props),
        }),
    );

    context.stylesheets.registerStyles(css.styles);

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = context.stylesheets.registerPropStyles(defaultProps);
    }

    const propStyles = context.stylesheets.registerPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: CssHelpers.combineClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
