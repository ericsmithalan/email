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

    repository.addClasses(cssStyle.classes);
    repository.addProperties(cssStyle.properties);

    const defaultProps = WrappedComponent.defaultProps;

    // add stylesheet styles as inline styles
    const inlineables = repository.inspectProps(defaultProps);
    const innerInlineables = repository.inspectProps(props);

    console.log(inlineables, innerInlineables);

    const mergedProps = Object.assign({}, defaultProps, props, {
        style: Object.assign({}, inlineables, innerInlineables),
        className: getClassNames(defaultProps, props),
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
