import React, { Props } from "react";
import { EmailCssContext } from "../EmailCssProvider";
import { Parser } from "src/lib/core/css-js";
import { CssClassNames } from "../types/css.types";

export const useStyle = (
    css: Parser,
    props: object = {},
    defaultProps: object = {},
): CssClassNames => {
    const context = React.useContext(EmailCssContext);

    if (props && defaultProps) {
        css.parse(context.theme, Object.assign({}, defaultProps, props));
    }

    context.stylesheets.add(css.styles);

    let defaultStyles = {};
    let propStyles = {};

    if (defaultProps) {
        defaultStyles = context.stylesheets.addPropStyles(defaultProps);
    }

    if (props) {
        propStyles = context.stylesheets.addPropStyles(props);
    }

    return css.classes;
};
