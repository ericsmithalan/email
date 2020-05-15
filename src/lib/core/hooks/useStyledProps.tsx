import React from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { Parser } from "src/lib/core/css-js";
import { mergeClassNames } from "../utils/mergeClassNames";

export const useStyledProps = (css: Parser, props: any, defaultProps: any) => {
    const context = React.useContext(EmailCssContext);

    css.parse(
        context.theme,
        Object.assign({}, defaultProps, props, {
            className: mergeClassNames(defaultProps, props),
        }),
    );

    context.stylesheets.add(css.styles);

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = context.stylesheets.addPropStyles(defaultProps);
    }

    const propStyles = context.stylesheets.addPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
