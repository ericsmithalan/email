import { decamelize } from "./utils/camelize";
import { CssTargetKind } from "./enums/CssTarget";
import { CssValidValueKind } from "./enums/CssValidValue";
import _ from "underscore";
import { CssClass } from "./CssClass";
import { CssClassProperty } from "./CssClassProperty";
import { CssPseudoKind } from "./enums/CssPseudos";
export class CssFragment {
    constructor(_dirtyStyles, _theme, classNames = {}, styles = []) {
        this._dirtyStyles = _dirtyStyles;
        this._theme = _theme;
        this.classNames = classNames;
        this.styles = styles;
        // matches unhashed id with hashed id
        this.parseClassName = (unhashedId) => {
            return _.invert(this.classNames)[unhashedId];
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
            const cssClassName = decamelize(`${key}`);
            this.classNames[key] = cssClassName;
        }
        parseCss(parseArgs);
    }
}
const parseCss = (args) => {
    const properties = [];
    for (const key in args.value) {
        if (args.value.hasOwnProperty(key)) {
            let value = args.value[key];
            let calculated = calculate(value, args.theme);
            if (typeof calculated in CssValidValueKind) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    propertyKey: key,
                });
                properties.push(createProperty(newArgs));
                continue;
            }
            if (key in CssTargetKind) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    target: key,
                });
                args.classes.push(createClass(key, newArgs));
                continue;
            }
            if (key in CssPseudoKind) {
                const newArgs = updateArgs(args, {
                    value: calculated,
                    pseudo: key,
                });
                args.classes.push(createClass(key, newArgs));
                continue;
            }
            if (_.isObject(calculated)) {
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
    return new CssClass({
        key: key,
        target: args.target,
        isPseudo: args.pseudo != undefined,
        className: args.classKey || "",
        properties: parseCss(args),
        css: "",
    });
};
export const createProperty = (args) => {
    return new CssClassProperty({
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
export const calculate = (value, theme) => {
    let calculated = value;
    if (_.isArray(calculated)) {
        const arrayValue = calculated;
        if (arrayValue.length <= 2) {
            calculated = arrayValue.join("!");
        }
        if (arrayValue.length > 2) {
            calculated = arrayValue.join(",");
        }
    }
    if (_.isFunction(calculated)) {
        const fn = value;
        calculated = fn(theme);
    }
    return calculated;
};
//# sourceMappingURL=CssFragment.js.map