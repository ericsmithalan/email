import { CssTarget, CssRepositoryList, CssStyleableComponent } from "./types";
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

    public registerPropStyles = <P>(component: CssStyleableComponent): CSSProperties => {
        if (component && component.className) {
            const className = CssHelpers.camelize(component.className);

            this.registerElementProps(component.props, className);

            if (component.style) {
                this.set("@global", className, component.style);
            }

            return this.get("@global", className);
        }

        return {};
    };

    private registerElementProps = (component: CssStyleableComponent, className: string): void => {
        const results = {};
        if (component && component.props) {
            for (const key in component.props) {
                if (component.props.hasOwnProperty(key)) {
                    console.log(key);
                    if (CssHelpers.isStyleableProperty(key)) {
                        const value = component.props[key];
                        results[key] = value;
                    }
                }
            }
        } else {
            throw new Error(`component and props are unassigned`);
        }

        this.set("@global", className, results);
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
