import React from "react";
import { CssStyle } from "../CssStyle";
import { CssHelpers } from "../helpers/CssHelpers";
import { CssStyleableComponent } from "../types";
import { useCss } from "../hooks/useCss";

const withCss = (css: CssStyle) => <P extends CssStyleableComponent>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const component = <T extends P>(props: T) => {
        const context = useCss(css.classes);

        css.parseCss(Object.assign({}, WrappedComponent.defaultProps, props), context.theme);

        let outerStyles = {};
        let defaultProps = {};

        if (WrappedComponent && WrappedComponent.defaultProps) {
            defaultProps = WrappedComponent.defaultProps;
            outerStyles = context.repository.registerPropStyles(defaultProps);
        }

        const innerStyles = context.repository.registerPropStyles(props);

        return (
            <WrappedComponent
                {...Object.assign({}, defaultProps, props)}
                className={CssHelpers.combineClassNames(defaultProps, props)}
                style={Object.assign({}, outerStyles, innerStyles)}
            />
        );
    };

    return component;
};

export { withCss };
