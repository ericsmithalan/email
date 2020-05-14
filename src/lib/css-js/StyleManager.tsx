import React from "react";
import { CssTarget, StyleSheet, CssClassNames, CssProperties } from "./types";
import { Props } from "react";
import deepmerge from "deepmerge";
import _ from "underscore";
import { Theme } from "../theme";
import { camelize, decamelize } from "../core/utils/camelize";
import { isValidClassName, isStyleableProperty, isTagName } from "../core/utils/validation";

export class StyleManager {
    constructor(private readonly _theme: Theme) {}

    private _stylesheets: StyleSheet | {} = {
        "@reset": {
            css: "",
        },
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };

    public get stylesheets(): StyleSheet | {} {
        return this._stylesheets;
    }

    public add = (styleSheet: StyleSheet | string, target: CssTarget) => {
        if (target === "@reset") {
            this.stylesheets["@reset"]["css"] = styleSheet as string;
        } else {
            this._stylesheets = deepmerge.all([this.stylesheets, styleSheet as StyleSheet]);
        }
    };

    public registerStyles = (records: StyleSheet): void => {
        if (records) {
            this._stylesheets = deepmerge.all([this.stylesheets, records]);
        }
    };

    public registerPropStyles = (props: any): CssProperties => {
        if (props && props.className) {
            // adds any element property that can be added to stylesheet
            this._registerElementProps(props, camelize(props.className));

            // adds all styles under element style property
            if (props.style) {
                this._set(
                    "@default",
                    camelize(props.className),
                    deepmerge.all([this._get("@default", camelize(props.className)), props.style]),
                );
            }

            if (props.mergeCss) {
                props.mergeCss.forEach((clsName: string) => {
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

            // return merged styles
            const styles = this._get("@default", camelize(props.className));

            // returns new styles
            return styles;
        }

        return {};
    };

    public getClassNames(target: CssTarget) {
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

    private _registerElementProps = (props: any, className: string): void => {
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
        return this.stylesheets[target][className];
    };

    private _set = (target: CssTarget, className: string, styles: object): void => {
        const repClass = this.stylesheets[target][className];
        const merged = Object.assign({}, repClass, styles);

        this.stylesheets[target][className] = merged;
    };

    private ensureUnit = (value: string) => {
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

    public css = (trg: CssTarget): string => {
        if (trg === "@reset") {
            const target = this.stylesheets["@reset"]["css"];
            return target || "";
        } else {
            const css: string[] = [];
            const target = this.stylesheets[trg];
            let important = "";

            if (trg === "@phone") {
                css.push(
                    `@media only screen and (max-width: ${this._theme.breakpoints.phone}px) {`,
                );
                important = "!important";
            }

            if (trg === "@tablet") {
                css.push(
                    `@media only screen and (max-width: ${this._theme.breakpoints.tablet}px) {`,
                );
                important = "!important";
            }

            if (target) {
                for (const clsKey in target) {
                    if (target.hasOwnProperty(clsKey)) {
                        const clsValue = target[clsKey];

                        let prefix = ".";
                        if (isTagName(clsKey)) {
                            prefix = "";
                        }

                        css.push(`${prefix}${decamelize(clsKey)}{`);
                        for (const propertyKey in clsValue) {
                            if (clsValue.hasOwnProperty(propertyKey)) {
                                const propValue = clsValue[propertyKey];
                                css.push(
                                    `${decamelize(propertyKey)}:${this.ensureUnit(
                                        propValue,
                                    )}${important};`,
                                );
                            }
                        }
                        css.push(`}`);
                    }
                }
            }

            if (trg === "@tablet" || trg === "@phone") {
                css.push(`}`);
            }

            return css.join("");
        }
    };
}
