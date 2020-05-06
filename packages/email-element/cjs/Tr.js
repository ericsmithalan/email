"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles = css_1.css({
    ascTr: {},
});
const TrElement = (props) => {
    return react_1.default.createElement("tr", Object.assign({}, props));
};
TrElement.defaultProps = {
    className: styles.classNames.ascTr,
};
const Tr = css_1.withCss(styles)(TrElement);
exports.Tr = Tr;
//# sourceMappingURL=Tr.js.map