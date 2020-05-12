import React, { CSSProperties } from "react";
import { CssContext } from "../context/CssContext";
import { CssRepositoryList, CssStyleableComponent } from "../types";
import { CssStyle } from "../CssStyle";
import { CssHelpers } from "../helpers/CssHelpers";

export const useCss = (
    css: CssStyle,
    component: CssStyleableComponent,
    defaultComponent: CssStyleableComponent,
) => {
    const context = React.useContext(CssContext);
    css.parseCss(Object.assign({}, defaultComponent || {}, component.props), context.theme);

    let defaultStyles = {};

    if (defaultComponent) {
        defaultStyles = context.repository.registerPropStyles(defaultComponent);
    }

    const propStyles = context.repository.registerPropStyles(component);

    const mergedProps = Object.assign({}, defaultComponent, component.props, {
        className: CssHelpers.combineClassNames(defaultComponent, component.props),
        style: Object.assign({}, defaultStyles, propStyles),
    });

    return mergedProps;
};
