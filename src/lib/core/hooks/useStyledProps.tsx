import React from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { mergeClassNames } from "../utils/mergeClassNames";
import { ParseResults } from "../types/css.types";

export const useStyledProps = (parser: ParseResults, props: any, defaultProps: any) => {
    const context = React.useContext(EmailCssContext);

    parser.parse(
        context.theme,
        Object.assign({}, defaultProps, props, {
            className: mergeClassNames(defaultProps, props),
        }),
    );

    context.stylesheets.add(parser.styles);

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
