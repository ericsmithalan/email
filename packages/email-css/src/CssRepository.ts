import {
    CssTarget,
    CssPropertyDefinition,
    CssClassDefinition,
    PropertyRepository,
    GenericRecord,
    ClassRepository,
    ClassRecord,
    PropertyRecord,
    CssValue,
} from "./types";
import { CSSProperties } from "react";
import { CssHelpers } from "./helpers/CssHelpers";

// 1. get styles from propertiesList to add to element style tag
// 2. extract styles from  element inline props (width, height, align...)
// 3. extract style property from element
// 4. add styles from propertyList to element style tag
// 5. add extracted styles to propertiesList
// 6. return styles to be added to element style tag

export class CssRepository {
    private readonly classIdMapper: GenericRecord<string> = {};

    private readonly propertiesList: PropertyRepository = {};
    private readonly classList: ClassRepository = {};

    public registerStyles = (cssClasses: ClassRecord, properties: PropertyRecord): void => {
        for (const key in cssClasses) {
            if (cssClasses.hasOwnProperty(key)) {
                const value = cssClasses[key] as CssClassDefinition;

                if (!this.classList[value.target]) {
                    this.classList[value.target] = [];
                }

                const collection = this.classList[value.target];

                if (!collection[value.id]) {
                    const newValue = {};
                    newValue[value.id] = value;

                    collection.push(newValue);
                    this.classIdMapper[value.className] = value.id;
                }
            }
        }

        for (const key in properties) {
            if (properties.hasOwnProperty(key)) {
                const value = properties[key] as CssPropertyDefinition;

                if (!this.propertiesList[value.classId]) {
                    this.propertiesList[value.classId] = [];
                }

                const collection = this.propertiesList[value.classId];

                if (!collection[value.id]) {
                    const newValue = {};
                    newValue[value.id] = value;

                    collection.push(newValue);
                }
            }
        }
    };

    public getInlineableStyles = <P>(props: React.HTMLProps<P>): CSSProperties => {
        let results = {};
        console.log(props);

        if (props) {
            const elementStyles = this.getElementStyles(props);
            const cssStyles = this.getCssStyles(props);
            if (props.className) {
                this.updateCssStyles(props.className, elementStyles);
            }

            results = Object.assign({}, cssStyles, elementStyles);
        }

        return results;
    };

    private updateCssStyles = (className: string, elementStyles: CSSProperties) => {
        const classId = this.getId(className);
        const cssStyles = this.propertiesList[classId];

        for (const key in elementStyles) {
            if (elementStyles.hasOwnProperty(key)) {
                const item = elementStyles[key];

                if (cssStyles[key]) {
                    if (item.value === cssStyles[key]) {
                        console.log("same value");
                    } else {
                        console.log("divverent value");
                    }
                } else {
                    cssStyles[key] = {
                        id: CssHelpers.stringHashId(classId, key),
                        classId: classId,
                        name: key,
                        value: item as CssValue,
                    };
                }
            }
        }
    };

    private getCssStyles = (props: React.HTMLProps<any>): CSSProperties => {
        let results: CSSProperties = {};

        const classId = this.getId(props.className);
        const cssStyles = this.propertiesList[classId];

        if (cssStyles) {
            cssStyles.forEach((record, index) => {
                const item = record[index] as CssPropertyDefinition;
                results[item.name] = item.value;
            });
        }

        return results;
    };

    private getElementStyles = (props: React.HTMLProps<any>): CSSProperties => {
        const styleableProps = CssHelpers.getStyleableProps(props);
        const elementStyle = CssHelpers.hasKey(props, "style") ? props["style"] : {};

        return Object.assign({}, styleableProps, elementStyle);
    };

    private getId(className: string): string {
        const id = this.classIdMapper[className];
        return id;
    }

    private registerClassIds() {
        const collection = this.classList["@global"];

        collection.forEach((record, index) => {
            const item = record[index];

            this.classIdMapper[item.className] = item.id;
        });
    }

    public writeFiles = () => {
        // console.log("classList", JSON.stringify(this.classList));
        // console.log("propertyList", JSON.stringify(this.propertiesList));
        // console.log("ids", JSON.stringify(this.ids));
        // fs.appendFile("classList.json", JSON.stringify(this.classList.values), () => {});
        // fs.appendFile("propertyList.json", JSON.stringify(this.propertiesList.values), () => {});
        // fs.appendFile("ids.json", JSON.stringify(this.ids.values), () => {});
    };
    public stylesheet = (target: CssTarget) => {
        return "";
    };
}
