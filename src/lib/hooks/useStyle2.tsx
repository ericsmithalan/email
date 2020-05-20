import React from "react";

import { EmailCssContext } from "../EmailCssProvider";
import { ParseResults, Styleable } from "../types";
import { mergeClassNames } from "../utils/mergeClassNames";

export const useStyle2 = <T extends Styleable>(
    parser: ParseResults,
    props: T,
    defaultProps: Partial<T>
): T => {
    const { styleManager } = React.useContext(EmailCssContext);

    const mergedProps = Object.assign({}, defaultProps, props);

    parser.parse(styleManager.theme, mergedProps);

    styleManager.addStyle(parser.styles, "@default");

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = styleManager.addPropStyles(defaultProps);
    }

    const propStyles = styleManager.addPropStyles(props);

    console.log(props.className);

    const { uid, ...rest } = Object.assign({}, mergedProps, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles)
    });

    return rest as T;
};
