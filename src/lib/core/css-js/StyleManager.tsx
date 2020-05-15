import { CssTarget, StyleSheet, CssProperties } from "../types/css.types";
import deepmerge from "deepmerge";
import { Theme } from "../types/theme.types";
import { camelize, decamelize } from "../utils/camelize";
import { isValidClassName, isStyleableProperty } from "../utils/validation";
import { render } from "../utils/render";
import fs from "fs";

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

    public get stylesheets() {
        return this._stylesheets;
    }

    public add = (styleSheet: StyleSheet | string, target: CssTarget = undefined) => {
        if (target) {
            if (target === "@reset") {
                this._stylesheets["@reset"]["css"] = styleSheet as string;
            } else {
                this._stylesheets = deepmerge.all([
                    this._stylesheets[target],
                    styleSheet as StyleSheet,
                ]);
            }
        } else {
            this._stylesheets = deepmerge.all([this._stylesheets, styleSheet]);
        }
    };

    public addPropStyles = (props: any): CssProperties => {
        if (props && props.className) {
            // adds any element property that can be added to stylesheet
            this._setElementStyles(props, camelize(props.className));

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

    public classNames(target: CssTarget) {
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

    private _setElementStyles = (props: any, className: string): void => {
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
