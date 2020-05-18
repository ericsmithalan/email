import React from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { mergeClassNames } from "../utils/mergeClassNames";
import { ParseResults } from "../types";
import { Styleable } from "../css-js/types";

export const useStyledProps = (parser: ParseResults, props: Styleable, defaultProps: Styleable) => {
    const { styleManager } = React.useContext(EmailCssContext);

    parser.parse(
        styleManager.theme,
        Object.assign({}, defaultProps, props, {
            className: mergeClassNames(defaultProps, props),
        }),
    );

    styleManager.add(parser.styles, "@default");

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = styleManager.addPropStyles(defaultProps);
    }

    const propStyles = styleManager.addPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
