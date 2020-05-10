import { CssTarget, CssRepositoryList } from "./types";
import { CSSProperties } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import _ from "underscore";
import fs from "fs";
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

    public registerPropStyles = <P>(props: React.HTMLProps<P>): CSSProperties => {
        if (props && props.className) {
            const className = CssHelpers.camelize(props.className);

            this.registerElementProps(props, className);

            if (props.style) {
                this.set("@global", className, props.style);
            }

            return this.get("@global", className);
        }

        return undefined;
    };

    private registerElementProps = (props: React.HTMLProps<any>, className: string): void => {
        const results = {};
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (CssHelpers.isStyleableProperty(key)) {
                    const value = props[key];
                    results[key] = value;
                }
            }
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

    public stylesheet = (target: CssTarget) => {
        return "";
    };
}
