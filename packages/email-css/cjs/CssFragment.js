"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelize_1 = require("./utils/camelize");
const CssTarget_1 = require("./enums/CssTarget");
const CssValidValue_1 = require("./enums/CssValidValue");
const underscore_1 = __importDefault(require("underscore"));
const CssClass_1 = require("./CssClass");
const CssClassProperty_1 = require("./CssClassProperty");
const CssPseudos_1 = require("./enums/CssPseudos");
class CssFragment {
    constructor(_dirtyStyles, _theme, classNames = {}, styles = []) {
        this._dirtyStyles = _dirtyStyles;
        this._theme = _theme;
        this.classNames = classNames;
        this.styles = styles;
        // matches unhashed id with hashed id
        this.parseClassName = (unhashedId) => {
            return underscore_1.default.invert(this.classNames)[unhashedId];
        };
        this._init();
    }
    _init() {
        const parseArgs = {
            value: this._dirtyStyles,
            target: "@global",
            theme: this._theme,
            classes: this.styles,
        };
        for (const key of Object.keys(this._dirtyStyles)) {
            // const hash = `${stringHashId(key)}`;
            const cssClassName = camelize_1.decamelize(`${key}`);
            this.classNames[key] = cssClassName;
        }
        parseCss(parseArgs);
    }
}
exports.CssFragment = CssFragment;
const parseCss = (args) => {
    const properties = [];
    for (const key in args.value) {
        if (args.value.hasOwnProperty(key)) {
            let value = args.value[key];
            let calculated = exports.calculate(value, args.theme);
            if (typeof calculated in CssValidValue_1.CssValidValueKind) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    propertyKey: key,
                });
                properties.push(exports.createProperty(newArgs));
                continue;
            }
            if (key in CssTarget_1.CssTargetKind) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    target: key,
                });
                args.classes.push(createClass(key, newArgs));
                continue;
            }
            if (key in CssPseudos_1.CssPseudoKind) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    pseudo: key,
                });
                args.classes.push(createClass(key, newArgs));
                continue;
            }
            if (underscore_1.default.isObject(calculated)) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    classKey: key,
                });
                args.classes.push(createClass(key, newArgs));
                continue;
            }
        }
    }
    return properties;
};
const createClass = (key, args) => {
    return new CssClass_1.CssClass({
        key: key,
        target: args.target,
        isPseudo: args.pseudo != undefined,
        className: args.classKey || "",
        properties: parseCss(args),
        css: "",
    });
};
exports.createProperty = (args) => {
    return new CssClassProperty_1.CssClassProperty({
        key: args.propertyKey || "",
        className: args.classKey,
        name: args.propertyKey || "",
        value: args.value,
        css: "",
    });
};
const updateArgs = (oldArgs, newArgs) => {
    return Object.assign({}, oldArgs, newArgs);
};
exports.calculate = (value, theme) => {
    let calculated = value;
    if (underscore_1.default.isArray(calculated)) {
        const arrayValue = calculated;
        if (arrayValue.length <= 2) {
            calculated = arrayValue.join("!");
        }
        if (arrayValue.length > 2) {
            calculated = arrayValue.join(",");
        }
    }
    if (underscore_1.default.isFunction(calculated)) {
        const fn = value;
        calculated = fn(theme);
    }
    return calculated;
};
//# sourceMappingURL=CssFragment.js.map