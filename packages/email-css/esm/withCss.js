import React from "react";
import { useCssContext } from "./CssContext";
import { CssStyleablePropertiesKind } from "./enums/CssStyleableProperties";
const withCss = (cssFragment) => (WrappedComponent) => (props) => {
    var _a;
    const { repository } = useCssContext();
    if (cssFragment) {
        repository.add(cssFragment.styles);
    }
    const defaultClassName = ((_a = WrappedComponent.defaultProps) === null || _a === void 0 ? void 0 : _a.className) || undefined;
    const innerClassName = props.className || "";
    const defaultProps = WrappedComponent.defaultProps;
    const innerProps = props;
    // any properties that can be added to inline styles and stylesheet
    const defaultStyleableProps = getStyleableProps(WrappedComponent.defaultProps);
    const innerStyleableProps = getStyleableProps(props);
    // add stylable properties to stylesheets
    repository.updateStyle(defaultClassName, defaultStyleableProps);
    repository.updateStyle(innerClassName, innerStyleableProps);
    // add stylesheet styles as inline styles
    const defaultInlineables = getInlineStyles(defaultClassName, repository);
    const innerInlineables = getInlineStyles(innerClassName, repository);
    // combine styles and classNames
    const styles = Object.assign({}, defaultInlineables, innerInlineables, defaultStyleableProps, innerStyleableProps);
    const classNames = `${defaultClassName} ${innerClassName}`.trim();
    const mergedProps = Object.assign({}, defaultProps, innerProps, {
        style: styles,
        className: classNames,
    });
    return React.createElement(WrappedComponent, Object.assign({}, mergedProps));
};
const getInlineStyles = (className, repository) => {
    let inlinableStyles = {};
    if (className) {
        if (className) {
            inlinableStyles = repository.getInlinableStyles(className);
        }
    }
    return inlinableStyles;
};
const getStyleableProps = (props) => {
    const properties = {};
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
//# sourceMappingURL=withCss.js.map