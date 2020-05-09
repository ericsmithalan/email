import React, { CSSProperties } from "react";
import { CssStyle } from "../CssStyle";
import { useRepository } from "../hooks/useRepository";
import { CssHelpers } from "../helpers/CssHelpers";

const withCss = (css: CssStyle) => <P extends object>(
    WrappedComponent: React.ComponentType<React.HTMLProps<P>>,
) => <T extends React.HTMLProps<P>>(props: T) => {
    const repository = useRepository();
    const defaultProps = WrappedComponent?.defaultProps;

    repository.registerStyles(css.classes, css.properties);

    const outerStyles = repository.getInlineableStyles(defaultProps);
    const innerStyles = repository.getInlineableStyles(props);

    return (
        <WrappedComponent
            {...Object.assign({}, defaultProps, props)}
            className={CssHelpers.combineClassNames(defaultProps, props)}
            style={{ ...Object.assign({}, outerStyles, innerStyles) }}
        />
    );
};

export { withCss };
