import React, { Props } from "react";
import { StylesContext } from "../context/StylesContext";
import { Parser } from "../Parser";
import { CssClassNames } from "../types";

export const useStyled = (css: Parser, props: object): CssClassNames => {
    const context = React.useContext(StylesContext);
    css.parse(props, context.theme);
    context.repository.registerStyles(css.styles);

    context.repository.registerPropStyles(props);

    return css.classes;
};
