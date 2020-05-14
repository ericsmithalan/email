import React from "react";
import { StylesContext } from "../StylesProvider";
import { Parser } from "src/lib/css-js";
import { mergeClassNames } from "../utils/mergeClassNames";

export const useMergeStyles = (css: Parser, props: any, defaultProps: any) => {
    const context = React.useContext(StylesContext);

    css.parse(
        context.theme,
        Object.assign({}, defaultProps, props, {
            className: mergeClassNames(defaultProps, props),
        }),
    );

    context.stylesheets.registerStyles(css.styles);

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = context.stylesheets.registerPropStyles(defaultProps);
    }

    const propStyles = context.stylesheets.registerPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
