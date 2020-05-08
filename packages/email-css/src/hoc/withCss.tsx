import React, { CSSProperties } from "react";
import { CssStyle } from "../CssStyle";
import { useRepository } from "../hooks/useRepository";
import { CssStyleablePropertiesKind } from "../enums/CssStyleablePropertiesKind";
import { CssHelpers } from "../helpers/CssHelpers";

export interface WithCssProps {
    classId: string;
}

const withCss = (cssStyle: CssStyle) => <P extends object>(
    WrappedComponent: React.ComponentType<React.HTMLProps<P>>,
) => <T extends React.HTMLProps<P>>(props: T) => {
    const repository = useRepository();
    const defaultProps = WrappedComponent.defaultProps;

    const combineProps = Object.assign({}, defaultProps, props, {
        className: getClassNames(defaultProps, props),
    });

    const inlineables = repository.register(cssStyle.classes, cssStyle.properties, combineProps);

    const mergedProps = Object.assign({}, combineProps, {
        style: inlineables,
    });

    return <WrappedComponent {...mergedProps} />;
};

const getClassNames = (
    defaultProps: React.HTMLProps<any> | undefined,
    props: React.HTMLProps<any> | undefined,
) => {
    const class1 = defaultProps?.className || "";
    const class2 = props.className || "";

    return `${class1} ${class2}`.trim();
};

export { withCss };
