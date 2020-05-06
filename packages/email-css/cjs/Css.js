"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CssTheme_1 = require("./CssTheme");
const CssFragment_1 = require("./CssFragment");
exports.css = (styles, theme = CssTheme_1.defaultTheme) => {
    return new CssFragment_1.CssFragment(styles, theme);
};
//# sourceMappingURL=Css.js.map