import React, { Props } from "react";
import { StylesContext } from "../StylesProvider";
import { Parser, CssClassNames } from "src/lib/css-js";

export const useStyle = (
    css: Parser,
    props: object = {},
    defaultProps: object = {},
): CssClassNames => {
    const context = React.useContext(StylesContext);

    if (props && defaultProps) {
        css.parse(context.theme, Object.assign({}, defaultProps, props));
    }

    context.stylesheets.registerStyles(css.styles);

    let defaultStyles = {};
    let propStyles = {};

    if (defaultProps) {
        defaultStyles = context.stylesheets.registerPropStyles(defaultProps);
    }

    if (props) {
        propStyles = context.stylesheets.registerPropStyles(props);
    }

    return css.classes;
};
