import {
    CssTarget,
    CssPropertyDefinition,
    CssClassDefinition,
    CssValue,
    CssClassRecord,
    CssRepositoryList,
} from "./types";
import { CSSProperties } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import _ from "underscore";
import fs from "fs";

export class CssRepository {
    private repository: CssRepositoryList | {} = {
        "@global": [],
        "@phone": [],
        "@tablet": [],
    };

    public registerStyles = (records: CssRepositoryList | {}): void => {
        for (const key in records) {
            const recordTarget = records[key];
            if (records.hasOwnProperty(key)) {
                recordTarget.forEach((record: CssClassDefinition) => {
                    const repositoryClass = this.getTarget(key as CssTarget);
                    const keys = this.classKeys(repositoryClass);

                    const recordClassKey = Object.keys(record)[0];

                    if (!keys.includes(recordClassKey)) {
                        if (Object.values(record)[0].length > 0) {
                            this.repository[key].push(record);
                        }
                    }
                });
            }
        }
    };

    public registerPropStyles = <P>(props: React.HTMLProps<P>): CSSProperties => {
        let results = {};

        if (props && props.className) {
            const elementStyles = this.extractElementStyles(props);
            this.registerExtractedStyles(props.className, elementStyles);

            results = this.getStylesFromRegistry(props.className);
        }

        return results;
    };

    private registerExtractedStyles = (className: string, elementStyles: CSSProperties) => {
        const repositoryTarget = this.getTarget("@global");
        const repositoryTargetKeys = this.classKeys(repositoryTarget);

        if (repositoryTargetKeys.includes(CssHelpers.camelize(className))) {
            const repositoryClassValue = this.getClass("@global", className);

            if (repositoryClassValue && repositoryClassValue.length > 0) {
                const merged = _.union(repositoryClassValue, _.toArray(elementStyles));
                this.repository["@global"][className] = merged;
            }
        }
    };

    private getStylesFromRegistry = (className: string): CSSProperties => {
        let results: CSSProperties = {};

        const repositoryClassValue = this.getClass("@global", className);

        if (repositoryClassValue) {
            for (const key in repositoryClassValue) {
                if (repositoryClassValue.hasOwnProperty(key)) {
                    const item = repositoryClassValue[key] as CssPropertyDefinition;
                    if (item) {
                        results[item.name] = item.value;
                    }
                }
            }
        }

        return results;
    };

    private extractElementStyles = (props: React.HTMLProps<any>): CSSProperties => {
        const styleableProps = CssHelpers.getStyleableProps(props);
        const elementStyle = CssHelpers.hasKey(props, "style") ? props["style"] : {};

        return Object.assign({}, styleableProps, elementStyle);
    };

    public writeFiles = () => {
        // fs.writeFileSync("test.json", JSON.stringify(this.repository));
    };
    public stylesheet = (target: CssTarget) => {
        return "";
    };

    private classKeys(obj: CssClassDefinition[]) {
        if (obj) {
            return obj.map((item) => Object.keys(item)[0]);
        }
    }

    private getClass(target: CssTarget, className: string): CssPropertyDefinition[] {
        return this.repository[target][CssHelpers.camelize(className)];
    }

    private getTarget(target: CssTarget): CssClassDefinition[] {
        return this.repository[target];
    }
}
