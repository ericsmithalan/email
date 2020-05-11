import React from "react";
import { CssStyle } from "../CssStyle";
import { useRepository } from "../hooks/useRepository";
import { CssHelpers } from "../helpers/CssHelpers";
import { CssStyleableComponent } from "../types";

const withCss = (css: CssStyle) => <P extends CssStyleableComponent>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const component = <T extends P>(props: T) => {
        const repository = useRepository(css.classes);
        let outerStyles = {};
        let defaultProps = {};

        if (WrappedComponent && WrappedComponent.defaultProps) {
            defaultProps = WrappedComponent.defaultProps;
            outerStyles = repository.registerPropStyles(defaultProps);
        }

        const innerStyles = repository.registerPropStyles(props);

        return (
            <WrappedComponent
                {...Object.assign({}, defaultProps, props)}
                className={CssHelpers.combineClassNames(defaultProps, props)}
                style={{ ...outerStyles, ...innerStyles }}
            />
        );
    };

    return component;
};

export { withCss };
