"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles_1 = require("./styles");
const styles = css_1.css({
    ascTable: {
        ...styles_1.commonFonts,
    },
});
const TableElement = (props) => {
    return (react_1.default.createElement("table", Object.assign({}, props),
        react_1.default.createElement("tbody", null, props.children)));
};
TableElement.defaultProps = {
    className: styles.classNames.ascTable,
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%",
    border: 0,
};
const Table = css_1.withCss(styles)(TableElement);
exports.Table = Table;
//# sourceMappingURL=Table.js.map