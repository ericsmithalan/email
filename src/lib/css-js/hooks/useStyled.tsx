import React, { Props } from "react";
import { CssContext } from "../context/CssContext";
import { Parser } from "../Parser";
import { CssClassNames } from "../types";

export const useStyled = (css: Parser, props: object): CssClassNames => {
    const context = React.useContext(CssContext);
    css.parse(props, context.theme);
    context.repository.registerStyles(css.styles);

    context.repository.registerPropStyles(props);

    return css.classes;
};
