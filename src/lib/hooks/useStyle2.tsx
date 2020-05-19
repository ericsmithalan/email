import React from "react";

import { EmailCssContext } from "../EmailCssProvider";
import { KeyValue, ParseResults, Styleable } from "../types";
import { mergeClassNames } from "../utils/mergeClassNames";

export const useStyle2 = <T extends Styleable>(
    parser: ParseResults,
    props: T,
    defaultProps: Partial<T>,
): { classNames: KeyValue; mergedProps: T } => {
    const { styleManager } = React.useContext(EmailCssContext);

    parser.parse(
        styleManager.theme,
        Object.assign({}, defaultProps, props, {
            className: mergeClassNames(defaultProps, props),
        }),
    );

    styleManager.addStyle(parser.styles, "@default");

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = styleManager.addPropStyles(defaultProps);
    }

    const propStyles = styleManager.addPropStyles(props);

    const { uid, ...rest } = Object.assign({}, defaultProps, props, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return {
        classNames: parser.classNames,
        mergedProps: rest as T,
    };
};
