"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles_1 = require("./styles");
const styles = css_1.css({
    ascTd: {
        ...styles_1.commonFonts,
    },
});
const TdElement = (props) => {
    return react_1.default.createElement("td", Object.assign({}, props));
};
TdElement.defaultProps = {
    className: styles.classNames.ascTd,
    align: "left",
};
const Td = css_1.withCss(styles)(TdElement);
exports.Td = Td;
//# sourceMappingURL=Td.js.map