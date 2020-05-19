import deepmerge from "deepmerge";
import { CssProperties, CssTarget, KeyValue, StyleRepository, Theme } from "../types";
import { camelize, decamelize } from "../utils/camelize";
import { isPseudo, isStyleableProperty, isTagName, isValidClassName } from "../utils/validation";
import { ClassType, Styleable } from "./types";

export class StyleManager {
    constructor(private readonly _theme: Theme) {}

    private _styleables = {};
    private _globals = {
        "@reset": {
            css: "",
        },
        "@common": {},
    };
    private _stylesheets: StyleRepository = {
        "@base": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };

    public get theme() {
        return this._theme;
    }

    public get stylesheets() {
        return this._stylesheets;
    }

    public get styleables() {
        return this._styleables;
    }

    public add = (styleSheet: StyleRepository | string, target: CssTarget) => {
        if (target) {
            if (target === "@reset") {
                this._globals["@reset"]["css"] = styleSheet as string;
            } else {
                const styles = this._stylesheets[target] as object;
                this._stylesheets = deepmerge.all([styles, styleSheet as StyleRepository]);
            }
        } else {
            this._stylesheets = deepmerge.all([this._stylesheets, styleSheet as object]);
        }
    };

    public addPropStyles = (props: Styleable): CssProperties => {
        if (props) {
            if (props.className) {
                // adds any element property that can be added to stylesheet

                // adds all styles under element style property
                if (props.style) {
                    const elementStyle = this._get("@default", camelize(props.className)) || {};

                    if (elementStyle) {
                        const combinedStyles = deepmerge.all([elementStyle, props.style]);

                        if (Object.keys(combinedStyles).length > 0) {
                            this._set("@default", camelize(props.className), combinedStyles);
                        } else {
                        }
                    }
                }

                this._setElementPropStyles(props, camelize(props.className));

                // return merged styles
                const styles = this._get("@default", camelize(props.className));

                // returns new styles
                return styles || {};
            }
        }

        return {};
    };

    public classNames(target: CssTarget): KeyValue {
        const classes = this._stylesheets[target];
        const classNames: KeyValue = {};

        if (classes) {
            for (const key in classes) {
                if (classes.hasOwnProperty(key)) {
                    if (isValidClassName(key)) {
                        classNames[key] = decamelize(key);
                    }
                }
            }
        }

        return classNames;
    }

    private _setElementPropStyles = (props: any, className: string): void => {
        const results: KeyValue = {};
        if (props && className) {
            for (const key in props) {
                if (props.hasOwnProperty(key)) {
                    if (isStyleableProperty(key)) {
                        results[key] = props[key];
                    }
                }
            }

            if (results) {
                const styles = this._get("@default", className);
                if (styles) {
                    const combinedStyles = deepmerge.all([styles, results]);

                    if (combinedStyles) {
                        this._set("@default", className, combinedStyles);
                    } else {
                    }
                }
            }
        }
    };

    private _get = (target: CssTarget, className: string): ClassType | undefined => {
        const targetResults = this._stylesheets[target];
        if (targetResults) {
            const item = targetResults[className] as ClassType;

            if (item) {
                return item;
            }
        }
        return undefined;
    };

    private _set = (target: CssTarget, className: string, styles: object): void => {
        if (target !== "@common" && target !== "@reset") {
            const targetResults = this._stylesheets[target];
            if (targetResults) {
                const item = targetResults[className];

                if (item) {
                    const merged = Object.assign({}, item, styles);
                }
            }
        } else {
            console.error(`_set tried setting wrong target ${target} ${className}`, styles);
        }
    };

    public fonts = () => {
        if (this._theme.fonts.googleFonts) {
            return this._theme.fonts.googleFonts;
        }
    };

    public css = (trg: CssTarget) => {
        if (trg === "@reset") {
            // reset is already a string
            const target = this._stylesheets["@reset"];
            if (target) {
                const css = target["css"];

                if (css) {
                    return css || "";
                }
            }
        } else {
            let important = false;

            const css: string[] = [];
            const target = this._stylesheets[trg];

            if (trg === "@phone") {
                css.push(
                    `@media only screen and (max-width: ${this._theme.breakpoints.phone}px) {`,
                );
                important = true;
            }

            if (trg === "@tablet") {
                css.push(
                    `@media only screen and (max-width: ${this._theme.breakpoints.tablet}px) {`,
                );
                important = true;
            }

            const rendered = render(target as ClassType, important);

            css.push(rendered);

            if (trg === "@tablet" || trg === "@phone") {
                css.push(`}`);
            }

            return css;
        }
    };
}

const render = (obj: any, isImportant: boolean): string => {
    const css: string[] = [];
    const pseudos: string[] = [];

    for (const clsKey in obj) {
        if (obj.hasOwnProperty(clsKey)) {
            const clsValue = obj[clsKey];
            let arr = css;
            let prefix = ".";

            if (isPseudo(clsKey)) {
                arr = pseudos;
            }

            // if html tag don't add period
            if (isTagName(clsKey)) {
                prefix = "";
            }

            arr.push(`${prefix}${decamelize(clsKey)}{`);
            for (const propertyKey in clsValue) {
                if (clsValue.hasOwnProperty(propertyKey)) {
                    const propValue = clsValue[propertyKey];

                    arr.push(
                        `${decamelize(propertyKey)}:${ensureUnit(propValue)}${
                            isImportant ? "!important" : ""
                        };`,
                    );
                }
            }
            arr.push(`}`);
        }
    }

    return `${css.join("").trim()}${pseudos.join("").trim()}`;
};

const ensureUnit = (value: string) => {
    let result = value.toString();
    if (result) {
        if (result === "0") {
            return result;
        }

        if (parseInt(value)) {
            const regex = /^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)$/;
            if (!result.match(regex)) {
                return `${result}px`;
            }
        }
    }

    return result;
};
