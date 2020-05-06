"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CssContext_1 = require("./CssContext");
const CssStyleableProperties_1 = require("./enums/CssStyleableProperties");
const withCss = (cssFragment) => (WrappedComponent) => (props) => {
    var _a;
    const { repository } = CssContext_1.useCssContext();
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
    return react_1.default.createElement(WrappedComponent, Object.assign({}, mergedProps));
};
exports.withCss = withCss;
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
                if (key in CssStyleableProperties_1.CssStyleablePropertiesKind) {
                    properties[key] = props[key];
                }
            }
        }
    }
    return properties;
};
//# sourceMappingURL=withCss.js.map