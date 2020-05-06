import React, { CSSProperties } from "react";
import { CssFragment } from "./CssFragment";
import { useCssContext } from "./CssContext";
import { CssRepository } from "./CssRepository";
import { CssStyleablePropertiesKind } from "./CssStyleableProperties";
import { CssCollection } from "./CssCollection";
import { CssValue } from "./types";

const withCss = (cssFragment: CssFragment) => <P extends object>(
    WrappedComponent: React.ComponentType<React.HTMLProps<P>>,
) => <T extends React.HTMLProps<P>>(props: T) => {
    const { repository } = useCssContext();

    if (cssFragment) {
        repository.addClasses(cssFragment.classList);
        repository.addProperties(cssFragment.propertyList);
    }

    const defaultClassName = WrappedComponent.defaultProps?.className || undefined;
    const innerClassName = props.className || "";

    const defaultProps = WrappedComponent.defaultProps;
    const innerProps = props;

    // any properties that can be added to inline styles and stylesheet
    const styleableProps = getStyleableProps(WrappedComponent.defaultProps);
    const innerStyleableProps = getStyleableProps(props);

    // add stylable properties to stylesheets
    repository.updateStyle(defaultClassName, styleableProps);
    repository.updateStyle(innerClassName, innerStyleableProps);

    // add stylesheet styles as inline styles
    const inlineables = getInlineStyles(defaultClassName, repository);
    const innerInlineables = getInlineStyles(innerClassName, repository);

    // combine styles and classNames
    inlineables.merge(innerStyleableProps, styleableProps, innerInlineables);

    const classNames = `${defaultClassName} ${innerClassName}`.trim();

    const mergedProps = Object.assign({}, defaultProps, innerProps, {
        style: inlineables.items,
        className: classNames,
    });

    return <WrappedComponent {...mergedProps} />;
};

const getInlineStyles = (className: string | undefined, repository: CssRepository): CssCollection<string, CssValue> => {
    let inlinableStyles = new CssCollection<string, CssValue>();
    if (className) {
        if (className) {
            // repository.getInlinableStyles(className);
            // inlinableStyles.add();
        }
    }
    return inlinableStyles;
};

const getStyleableProps = (props: CSSProperties | undefined): CssCollection<string, CssValue> => {
    const properties = new CssCollection<string, CssValue>();

    if (props) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (key in CssStyleablePropertiesKind) {
                    properties[key] = props[key];
                }
            }
        }
    }

    return properties;
};

export { withCss };
