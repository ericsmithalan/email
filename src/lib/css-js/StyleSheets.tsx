import React from "react";
import { CssTarget, StyleSheet } from "./types";
import { CSSProperties, Props } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import merge from "deepmerge";

export class StyleSheets {
    constructor() {}

    private _stylesheets: StyleSheet | {} = {
        "@base": {},
        "@common": {},
        "@default": {},
        "@phone": {},
        "@tablet": {},
    };

    public get stylesheets(): StyleSheet | {} {
        return this._stylesheets;
    }

    public registerStyles = (records: StyleSheet): void => {
        if (records) {
            this._stylesheets = merge.all([this.stylesheets, records]);
        }
    };

    public registerPropStyles = (props: any): CSSProperties => {
        if (props && props.className) {
            const className = CssHelpers.camelize(props.className);

            // adds any element property that can be added to stylesheet
            this._registerElementProps(props, className);

            // console.log(props);
            // adds all styles under element style property
            if (props.style) {
                this._set(
                    "@default",
                    className,
                    merge.all([this._get("@default", className), props.style]),
                );
            }

            const styles = this._get("@default", className);

            // returns new styles
            return styles;
        }

        return {};
    };

    private _registerElementProps = (props: any, className: string): void => {
        const results = {};
        if (props && className) {
            for (const key in props) {
                if (props.hasOwnProperty(key)) {
                    if (CssHelpers.isStyleableProperty(key)) {
                        const value = props[key];
                        results[key] = value;
                    }
                }
            }

            this._set(
                "@default",
                className,
                merge.all([this._get("@default", className), results]),
            );
        }
    };

    private _get = (target: CssTarget, className: string): CSSProperties => {
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
        const css: string[] = [];
        const target = this.stylesheets[trg];
        let important = "";

        if (trg === "@phone") {
            css.push(`@media only screen and (max-width: 479px) {`);
            important = "!important";
        }

        if (trg === "@tablet") {
            css.push(`@media only screen and (max-width: 800px) {`);
            important = "!important";
        }

        if (target) {
            for (const clsKey in target) {
                if (target.hasOwnProperty(clsKey)) {
                    const clsValue = target[clsKey];

                    let prefix = ".";
                    if (CssHelpers.isTagName(clsKey)) {
                        prefix = "";
                    }

                    css.push(`${prefix}${CssHelpers.decamelize(clsKey)}{`);
                    for (const propertyKey in clsValue) {
                        if (clsValue.hasOwnProperty(propertyKey)) {
                            const propValue = clsValue[propertyKey];
                            css.push(
                                `${CssHelpers.decamelize(propertyKey)}:${this.ensureUnit(
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
    };
}
