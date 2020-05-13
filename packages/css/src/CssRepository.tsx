import React from "react";
import { CssTarget, CssRepositoryList } from "./types";
import { CSSProperties, Props } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import _ from "underscore";
import merge from "deepmerge";

export class CssRepository {
    private _repository: CssRepositoryList | {} = {
        "@global": {},
        "@phone": {},
        "@tablet": {},
    };

    public get repository(): CssRepositoryList | {} {
        return this._repository;
    }

    public registerStyles = (records: CssRepositoryList): void => {
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
                this._set("@global", className, props.style);
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

            this._set("@global", className, results);
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

    public toString = (trg: CssTarget): string => {
        const css: string[] = [];
        const target = this.repository[trg];

        if (target) {
            for (const clsKey in target) {
                if (target.hasOwnProperty(clsKey)) {
                    const clsValue = target[clsKey];
                    css.push(`.${clsKey}{`);
                    for (const propertyKey in clsValue) {
                        if (clsValue.hasOwnProperty(propertyKey)) {
                            const propValue = clsValue[propertyKey];
                            css.push(`${propertyKey}:${propValue};`);
                        }
                    }
                    css.push(`}`);
                }
            }
        }

        return css.join("");
    };
}
