"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles = css_1.css({
    ascSpan: {},
});
const SpanElement = (props) => {
    return react_1.default.createElement("span", Object.assign({}, props));
};
SpanElement.defaultProps = {
    className: styles.classNames.ascSpan,
};
const Span = css_1.withCss(styles)(SpanElement);
exports.Span = Span;
//# sourceMappingURL=Span.js.map