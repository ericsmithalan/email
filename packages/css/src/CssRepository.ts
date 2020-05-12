import { CssTarget, CssRepositoryList } from "./types";
import { CSSProperties } from "react";
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

    public registerStyles = (records: CssRepositoryList | {}): void => {
        this._repository = merge.all([this.repository, records], {});
    };

    public registerPropStyles = <P>(props: any): CSSProperties => {
        if (props && props.className) {
            const className = CssHelpers.camelize(props.className);

            // adds any element property that can be added to stylesheet
            this.registerElementProps(props, className);

            // adds all styles under element style property
            if (props.style) {
                this.set("@global", className, props.style);
            }

            const styles = this.get("@global", className);

            console.log(styles);
            // returns new styles
            return styles;
        }

        return {};
    };

    private registerElementProps = (props: any, className: string): void => {
        const results = {};
        if (props) {
            for (const key in props) {
                if (props.hasOwnProperty(key)) {
                    if (CssHelpers.isStyleableProperty(key)) {
                        const value = props[key];
                        results[key] = value;
                    }
                }
            }

            this.set("@global", className, results);
        }
    };

    private get = (target: CssTarget, className: string): CSSProperties => {
        return this.repository[target][className];
    };

    private set = (target: CssTarget, className: string, styles: object): void => {
        const repClass = this.repository[target][className];
        const merged = Object.assign({}, repClass, styles);

        this.repository[target][className] = merged;
    };

    public toString = (target: CssTarget) => {
        const css: string[] = [];
        const results = this.repository[target];

        if (results) {
            for (const key in results) {
                if (results.hasOwnProperty(key)) {
                }
            }
        }
    };
}
