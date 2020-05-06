"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles_1 = require("./styles");
const styles = css_1.css({
    ascDiv: Object.assign(Object.assign({}, styles_1.commonFonts), { fontSize: 13 }),
});
const DivElement = (props) => {
    return react_1.default.createElement("div", Object.assign({}, props));
};
DivElement.defaultProps = {
    className: styles.classNames.ascDiv,
};
const Div = css_1.withCss(styles)(DivElement);
exports.Div = Div;
//# sourceMappingURL=Div.js.map