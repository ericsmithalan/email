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
                    const repositoryClass = this.repository[key];
                    const keys = this.classKeys(repositoryClass);

                    const recordClassKey = Object.keys(record)[0];

                    if (!keys.includes(recordClassKey)) {
                        this.repository[key].push(record);
                    }
                });
            }
        }
    };

    classKeys(obj: CssClassDefinition[]) {
        if (obj) {
            return obj.map((item) => Object.keys(item)[0]);
        }
    }

    propertyKeys(obj: CssPropertyDefinition[]) {
        if (obj) {
            return obj.map((item) => Object.keys(item)[0]);
        }
    }

    get(name: string, arr: object[]) {
        if (arr && name) {
            const item = _.find(arr, (item) => _.has(item, name));
            // 0 removes array created from _.find
            return Object.values(item)[0];
        }
        return undefined;
    }

    public getInlineableStyles = <P>(props: React.HTMLProps<P>): CSSProperties => {
        let results = {};

        if (props) {
            const elementStyles = this.getElementStyles(props);

            if (props.className) {
                this.updateCssStyles(props.className, elementStyles);
            }

            return this.getCssStyles(props);
        }

        return results;
    };

    private updateCssStyles = (className: string, elementStyles: CSSProperties) => {
        const camelizedClass = CssHelpers.camelize(className);
        const repositoryTarget = this.repository["@global"] as CssClassDefinition[];
        const repositoryTargetKeys = this.classKeys(repositoryTarget);

        if (repositoryTargetKeys.includes(camelizedClass)) {
            const repositoryClassValue = this.get(camelizedClass, repositoryTarget);

            if (repositoryClassValue && repositoryClassValue.length > 0) {
                const repositoryPropertyKeys = this.propertyKeys(repositoryClassValue);
                const merged = _.union(repositoryClassValue, _.toArray(elementStyles));
                this.repository["@global"][className] = merged;

                // for (const key in elementStyles) {
                //     if (elementStyles.hasOwnProperty(key)) {
                //         if (!repositoryPropertyKeys.includes(key)) {
                //             const camelizedKey = CssHelpers.camelize(key);

                //             const newProp = {};

                //             const cssClass = this.get(camelizedClass, repositoryTarget);

                //             console.log(repositoryClassValue);
                //             newProp[key] = elementStyles[key];
                //             cssClass.push(newProp);
                //         }
                //     }
                // }

                console.log(this.get(camelizedClass, repositoryTarget));
            }
        }
    };

    private getCssStyles = (props: React.HTMLProps<any>): CSSProperties => {
        let results: CSSProperties = {};

        // const classId = this.getId(CssHelpers.camelize(props.className));
        // const cssStyles = this.propertiesList[classId];

        // if (cssStyles) {
        //     for (const key in cssStyles) {
        //         if (cssStyles.hasOwnProperty(key)) {
        //             const item = cssStyles[key] as CssPropertyDefinition;
        //             if (item) {
        //                 results[item.name] = item.value;
        //             }
        //         }
        //     }
        // }

        return results;
    };

    private getElementStyles = (props: React.HTMLProps<any>): CSSProperties => {
        const styleableProps = CssHelpers.getStyleableProps(props);
        const elementStyle = CssHelpers.hasKey(props, "style") ? props["style"] : {};

        return Object.assign({}, styleableProps, elementStyle);
    };

    public writeFiles = () => {
        fs.writeFileSync("test.json", JSON.stringify(this.repository));
    };
    public stylesheet = (target: CssTarget) => {
        return "";
    };
}
