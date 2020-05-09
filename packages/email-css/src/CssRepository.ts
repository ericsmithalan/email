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
    private classes: CssRepositoryList | {} = {
        "@global": [],
        "@phone": [],
        "@tablet": [],
    };

    public registerStyles = (records: CssRepositoryList | {}): void => {
        for (const key in records) {
            if (records.hasOwnProperty(key)) {
                for (const key in records) {
                    const recordTarget = records[key];
                    const classRecord = this.classes[key];

                    recordTarget.forEach((record: CssClassDefinition) => {
                        const classKey = Object.keys(record)[0];

                        const keys = this.classKeys(classRecord);

                        console.log(record);
                        if (!keys.includes(classKey)) {
                            this.classes[key].push(record);
                        }
                    });
                }
            }
        }
    };

    classKeys(obj: CssClassDefinition[]) {
        return obj.map((item) => Object.keys(item)[0]);
    }

    propertyKeys(obj: CssPropertyDefinition[]) {
        return obj.map((item) => Object.keys(item)[0]);
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
        // const classId = this.getId(CssHelpers.camelize(className));
        // for (const key in elementStyles) {
        //     if (elementStyles.hasOwnProperty(key)) {
        //         const item = elementStyles[key];
        //         const matched = this.propertiesList[classId];
        //         if (matched && !matched[key]) {
        //             this.propertiesList[classId][key] = {
        //                 id: CssHelpers.stringHashId(classId, key),
        //                 classId: classId,
        //                 name: key,
        //                 value: item as CssValue,
        //             };
        //             console.log(this.propertiesList);
        //         }
        //     }
        // }
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
        fs.writeFileSync("test.json", JSON.stringify(this.classes));
    };
    public stylesheet = (target: CssTarget) => {
        return "";
    };
}
