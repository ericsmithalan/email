import React, { CSSProperties } from "react";
import { CssContext } from "../context/CssContext";
import { CssRepositoryList, CssStyleableComponent } from "../types";
import { CssStyle } from "../CssStyle";
import { CssHelpers } from "../helpers/CssHelpers";

export const useCss = (
    css: CssStyle,
    props: CssStyleableComponent,
    defaultProps: CssStyleableComponent,
) => {
    const context = React.useContext(CssContext);
    css.parseCss(Object.assign({}, defaultProps || {}, props), context.theme);

    let defaultStyles = {};

    if (defaultProps) {
        defaultStyles = context.repository.registerPropStyles(defaultProps);
    }

    const propStyles = context.repository.registerPropStyles(props);

    const mergedProps = Object.assign({}, defaultProps, props, {
        className: CssHelpers.combineClassNames(defaultProps, props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
