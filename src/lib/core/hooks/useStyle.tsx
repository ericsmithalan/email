import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { ClassNameSelector, ParseResults } from "../types/css.types";

export const useStyle = (
    parser: ParseResults,
    props: object = {},
    defaultProps: object = {},
): ClassNameSelector => {
    const context = React.useContext(EmailCssContext);

    if (props && defaultProps) {
        parser.parse(context.theme, Object.assign({}, defaultProps, props));
    }

    context.stylesheets.add(parser.styles);

    let defaultStyles = {};
    let propStyles = {};

    if (defaultProps) {
        defaultStyles = context.stylesheets.addPropStyles(defaultProps);
    }

    if (props) {
        propStyles = context.stylesheets.addPropStyles(props);
    }

    console.log(propStyles, defaultStyles);

    return parser.classNames;
};
