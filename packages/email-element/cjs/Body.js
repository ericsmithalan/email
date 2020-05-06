"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles = css_1.css({
    ascBody: {
        fontSize: 13,
    },
});
const BodyElement = (props) => {
    return react_1.default.createElement("body", Object.assign({}, props));
};
BodyElement.defaultProps = {
    className: styles.classNames.ascBody,
};
const A = css_1.withCss(styles)(BodyElement);
exports.A = A;
//# sourceMappingURL=Body.js.map