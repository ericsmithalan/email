"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const css_1 = require("@email/css");
const styles = css_1.css({
    ascImg: {},
});
const ImgElement = (props) => {
    // @ts-ignore
    return react_1.default.createElement("img", Object.assign({}, props));
};
ImgElement.defaultProps = {
    className: styles.classNames.ascImg,
};
const Img = css_1.withCss(styles)(ImgElement);
exports.Img = Img;
//# sourceMappingURL=Img.js.map