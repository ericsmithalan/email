import React from "react";

import { CssContext } from "../CssProvider";
import { ParseResults, Styleable } from "../types";
import { mergeClassNames } from "../utils/mergeClassNames";

export const useStyledProps = (parser: ParseResults, props: Styleable, defaultProps: Styleable) => {
    const { styleManager } = React.useContext(CssContext);

    parser.parse(
        styleManager.theme,
        Object.assign({}, defaultProps, props, {
            className: mergeClassNames(defaultProps, props)
        })
    );

    styleManager.addStyle(parser.styles);

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = styleManager.addPropStyles(defaultProps);
    }

    const propStyles = styleManager.addPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles)
    });

    return mergedProps;
};
