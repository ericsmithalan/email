import deepmerge from "deepmerge";

import { CssProperties, CssTarget, KeyValue, StyleRepository, Theme } from "../types";
import { camelize, decamelize } from "../utils/camelize";
import { Log } from "../utils/Logger";
import { isPseudo, isStyleableProperty, isTagName } from "../utils/validation";
import { ClassType, GlobalRepository, GlobalTarget, Styleable, TargetType } from "./types";

export class StyleManager {
    constructor(private readonly _theme: Theme) {}

    private _globals: GlobalRepository = {
        "@reset": {
            css: ""
        }
    };
    private _stylesheets: StyleRepository = {
        "@default": {},
        "@phone": {},
        "@tablet": {}
    };

    get theme() {
        return this._theme;
    }

    get stylesheets() {
        return this._stylesheets;
    }

    addStyle = (styleSheet: StyleRepository) => {
        if (styleSheet) {
            // const styles = this._getTarget(target);
            this._stylesheets = deepmerge.all([this._stylesheets, styleSheet]);
        } else {
            Log.error(`StyleManager > addStyle :`, styleSheet);
        }
    };

    addGlobal = (css: string, target: GlobalTarget) => {
        if (css && target) {
            this.setGlobal(css, "@reset");
        } else {
            Log.error(`StyleManager > addGlobal :`, css, target);
        }
    };

    addPropStyles = (props: Styleable): CssProperties => {
        if (props) {
            if (props.className) {
                // adds all styles under element style property
                if (props.style) {
                    const elementStyle =
                        this._getClass("@default", camelize(props.className)) || {};

                    if (elementStyle) {
                        const combinedStyles = deepmerge.all([elementStyle, props.style]);

                        if (Object.keys(combinedStyles).length > 0) {
                            this._setClass("@default", camelize(props.className), combinedStyles);
                        } else {
                        }
                    }
                }

                this._setElementPropStyles(props, camelize(props.className));

                // return merged styles
                const styles = this._getClass("@default", camelize(props.className));

                // returns new styles
                return styles || {};
            }
        } else {
            Log.warn(`StyleManager > addPropStyles :`, props);
        }

        return {};
    };

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
                const styles = this._getClass("@default", className);
                if (styles) {
                    const combinedStyles = deepmerge.all([styles, results]);

                    if (combinedStyles) {
                        this._setClass("@default", className, combinedStyles);
                    } else {
                    }
                }
            }
        }
    };

    private _getClass = (target: CssTarget, className: string): ClassType => {
        try {
            //@ts-ignore
            return this._stylesheets[target][className] as TargetType;
        } catch (e) {
            Log.throwError(e);
        }

        return {};
    };

    //@ts-ignore TargetType expecting a return even
    private _getTarget = (target: CssTarget): TargetType => {
        try {
            return this._stylesheets[target] as TargetType;
        } catch (e) {
            Log.throwError(e);
        }
    };

    //@ts-ignore TargetType expecting a return even
    getGlobal = (target: GlobalTarget): string => {
        try {
            //@ts-ignore
            return this._globals[target]["css"] as string;
        } catch (e) {
            Log.throwError(e);
        }
    };

    setGlobal = (css: string, target: GlobalTarget): void => {
        try {
            //@ts-ignore
            this._globals[target]["css"] = css;
        } catch (e) {
            Log.error(e);
        }
    };

    private _setClass = (target: CssTarget, className: string, styles: object): void => {
        try {
            //@ts-ignore
            const currentCls = this._stylesheets[target][className];
            const merged = deepmerge.all([currentCls, styles]);

            //@ts-ignore
            this._stylesheets[target][className] = merged;
        } catch (e) {
            Log.throwError(e);
        }
    };

    getFonts = () => {
        if (this._theme.fonts.googleFonts) {
            return this._theme.fonts.googleFonts;
        }
    };

    getCss = (trg: CssTarget): string => {
        try {
            let important = false;

            const css: string[] = [];
            const target = this._getTarget(trg);

            if (trg === "@phone") {
                css.push(
                    `@media only screen and (max-width: ${this._theme.breakpoints.phone}px) {`
                );
                important = true;
            }

            if (trg === "@tablet") {
                css.push(
                    `@media only screen and (max-width: ${this._theme.breakpoints.tablet}px) {`
                );
                important = true;
            }

            const rendered = render(target as ClassType, important);

            console.log("trg", target, rendered);

            css.push(rendered);

            if (trg === "@tablet" || trg === "@phone") {
                css.push(`}`);
            }

            return css.join("");
        } catch (e) {
            Log.throwError(e);
        }
        return "";
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
                        };`
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
