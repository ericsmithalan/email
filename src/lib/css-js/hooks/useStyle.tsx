import React, { Props } from "react";
import { StylesContext } from "../context/StylesContext";
import { Parser } from "../Parser";
import { CssClassNames } from "../types";

export const useStyle = (
    css: Parser,
    props: object = {},
    defaultProps: object = {},
): CssClassNames => {
    const context = React.useContext(StylesContext);

    if (props && defaultProps) {
        css.parse(context.theme, Object.assign({}, defaultProps, props));
    }

    context.repository.registerStyles(css.styles);

    let defaultStyles = {};
    let propStyles = {};

    if (defaultProps) {
        defaultStyles = context.repository.registerPropStyles(defaultProps);
    }

    if (props) {
        propStyles = context.repository.registerPropStyles(props);
    }

    return css.classes;
};
