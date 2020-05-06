"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles_1 = require("./styles");
const styles = css_1.css({
    ascA: {
        ...styles_1.commonFonts,
        fontSize: 13,
    },
});
const AElement = (props) => {
    return react_1.default.createElement("a", Object.assign({}, props));
};
AElement.defaultProps = {
    className: styles.classNames.ascA,
};
const A = css_1.withCss(styles)(AElement);
exports.A = A;
//# sourceMappingURL=A.js.map