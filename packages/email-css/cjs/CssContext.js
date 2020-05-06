"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CssTheme_1 = require("./CssTheme");
const CssRepository_1 = require("./CssRepository");
exports.defaultStyleContext = {
    repository: new CssRepository_1.CssRepository(),
    theme: CssTheme_1.defaultTheme,
};
exports.useCssContext = () => {
    return react_1.default.useContext(exports.CssStyleContext);
};
exports.CssStyleContext = react_1.default.createContext(exports.defaultStyleContext);
exports.CssStyleProvider = exports.CssStyleContext.Provider;
//# sourceMappingURL=CssContext.js.map