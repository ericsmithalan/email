import React, { Props } from "react";
import { CssContext } from "../context/CssContext";
import { Parser } from "../Parser";
import { CssClassNames } from "../types";

export const useStyled = (css: Parser, props: object): CssClassNames => {
    const context = React.useContext(CssContext);
    css.parseCss(props, context.theme);
    context.repository.registerStyles(css.classes);

    context.repository.registerPropStyles(props);

    return css.classNames;
};
