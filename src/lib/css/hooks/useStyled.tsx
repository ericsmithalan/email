import React, { Props } from "react";
import { CssContext } from "../context/CssContext";
import { CssStyle } from "../CssStyle";
import { CssClassNames } from "../types";

export const useStyled = (css: CssStyle, props: object): CssClassNames => {
    const context = React.useContext(CssContext);
    css.parseCss(props, context.theme);
    context.repository.registerStyles(css.classes);

    context.repository.registerPropStyles(props);

    return css.classNames;
};
