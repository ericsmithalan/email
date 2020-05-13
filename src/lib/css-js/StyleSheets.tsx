import React from "react";
import { CssTarget, StyleSheet, Theme } from "./types";
import { CSSProperties, Props } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import _ from "underscore";
import merge from "deepmerge";

export class StyleSheets {
    constructor() {}

    private _repository: StyleSheet | {} = {
        "@base": {},
        "@global": {},
        "@phone": {},
        "@tablet": {},
    };

    public get repository(): StyleSheet | {} {
        return this._repository;
    }

    public registerStyles = (records: StyleSheet): void => {
        if (records) {
            this._repository = merge.all([this.repository, records]);
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
                    "@global",
                    className,
                    merge.all([this._get("@global", className), props.style]),
                );
            }

            const styles = this._get("@global", className);

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

            this._set("@global", className, merge.all([this._get("@global", className), results]));
        }
    };

    private _get = (target: CssTarget, className: string): CSSProperties => {
        return this.repository[target][className];
    };

    private _set = (target: CssTarget, className: string, styles: object): void => {
        const repClass = this.repository[target][className];
        const merged = Object.assign({}, repClass, styles);

        this.repository[target][className] = merged;
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

    public toString = (trg: CssTarget): string => {
        const css: string[] = [];
        const target = this.repository[trg];
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
