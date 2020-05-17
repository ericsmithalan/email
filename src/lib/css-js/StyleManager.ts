import deepmerge from "deepmerge";
import { CssProperties, CssTarget, StyleRepository, Theme, ClassNameSelector } from "../types";

import { camelize, decamelize } from "../utils/camelize";
import { isStyleableProperty, isTagName, isValidClassName, isPseudo } from "../utils/validation";
import { Styleable } from "./types";
import fs from "fs";
import path from "path";

export class StyleManager {
    constructor(private readonly _theme: Theme) {}

    private _styleables = {};
    private _stylesheets: StyleRepository | {} = {
        "@reset": {
            css: "",
        },
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };

    public get stylesheets() {
        return this._stylesheets;
    }

    public get styleables() {
        return this._styleables;
    }

    public add = (styleSheet: StyleRepository | string, target: CssTarget = undefined) => {
        if (target) {
            if (target === "@reset") {
                this._stylesheets["@reset"]["css"] = styleSheet as string;
            } else {
                this._stylesheets = deepmerge.all([
                    this._stylesheets[target],
                    styleSheet as StyleRepository,
                ]);
            }
        } else {
            this._stylesheets = deepmerge.all([this._stylesheets, styleSheet]);
        }
    };

    public registerStyleable = (styleable: Styleable) => {
        this._styleables[styleable.uid] = styleable;
    };

    public addPropStyles = (props: Styleable): CssProperties => {
        if (props) {
            if (props.className) {
                // adds any element property that can be added to stylesheet
                this._setElementStyles(props, camelize(props.className));

                if (props.commoncss) {
                    props.commoncss.forEach((clsName: string) => {
                        if (clsName) {
                            const styles = this._get("@common", camelize(clsName));

                            // merge common with element css class
                            if (styles) {
                                this._set(
                                    "@default",
                                    camelize(props.className),
                                    deepmerge.all([
                                        this._get("@default", camelize(props.className)),
                                        styles,
                                    ]),
                                );
                            }
                        }
                    });
                }

                // adds all styles under element style property
                if (props.style) {
                    this._set(
                        "@default",
                        camelize(props.className),
                        deepmerge.all([
                            this._get("@default", camelize(props.className)),
                            props.style,
                        ]),
                    );
                }

                // return merged styles
                const styles = this._get("@default", camelize(props.className));

                // returns new styles
                return styles;
            }
        }

        return {};
    };

    public classNames(target: CssTarget): ClassNameSelector {
        const classes = this._stylesheets[target];
        const classNames = {};

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

    private _setElementStyles = (props: Styleable, className: string): void => {
        const results = {};
        if (props && className) {
            for (const key in props) {
                if (props.hasOwnProperty(key)) {
                    if (isStyleableProperty(key)) {
                        const value = props[key];
                        results[key] = value;
                    }
                }
            }

            this._set(
                "@default",
                className,
                deepmerge.all([this._get("@default", className), results]),
            );
        }
    };

    private _get = (target: CssTarget, className: string): CssProperties => {
        return this._stylesheets[target][className];
    };

    private _set = (target: CssTarget, className: string, styles: object): void => {
        const repClass = this._stylesheets[target][className];
        const merged = Object.assign({}, repClass, styles);

        this._stylesheets[target][className] = merged;
    };

    public fonts = () => {
        if (this._theme.fonts.googleFonts) {
            return `@import url(${this._theme.fonts.googleFonts});`;
        }
    };

    public css = (trg: CssTarget) => {
        if (trg === "@reset") {
            // reset is already a string
            const target = this._stylesheets["@reset"]["css"];
            return target || "";
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

            const rendered = render(target, important);

            css.push(rendered);

            if (trg === "@tablet" || trg === "@phone") {
                css.push(`}`);
            }

            return css;
        }
    };
}

const render = (obj: object, isImportant: boolean): string => {
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
