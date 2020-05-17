import React, { Props, FunctionComponent } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { ClassNameSelector, ParseResults, Styleable } from "../types";
import { mergeClassNames } from "../utils/mergeClassNames";

export const useStyle2 = <T extends Styleable>(
    parser: ParseResults,
    props: T,
    defaultProps: Partial<T>,
): { classNames: ClassNameSelector; mergedProps: T } => {
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

    const { uid, ...rest } = Object.assign({}, defaultProps, props, {
        className: mergeClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return {
        classNames: parser.classNames,
        mergedProps: rest as T,
    };
};
