import React from "react";
import { CssStyle } from "../CssStyle";
import { useRepository } from "../hooks/useRepository";
import { CssHelpers } from "../helpers/CssHelpers";

const withCss = (css: CssStyle) => <P extends object>(
    WrappedComponent: React.ComponentType<React.HTMLProps<P>>,
) => {
    const component = <T extends React.HTMLProps<P>>(props: T) => {
        const repository = useRepository(css.classes);

        const defaultProps = WrappedComponent?.defaultProps;

        const outerStyles = repository.registerPropStyles(defaultProps);
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
