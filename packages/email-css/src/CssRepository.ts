import {
    CssTarget,
    CssPropertyDefinition,
    PropertyCollectionType,
    CssClassDefinition,
    CssValue,
} from "./types";
import { GenericCollection } from "./collections/GenericCollection";
import { CssCollection } from "./collections/CssCollection";
import { CSSProperties } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import { stringHashId } from "./utils/stringHashId";
import { decamelize } from "./utils/camelize";

export class CssRepository {
    private readonly ids = new Map<string, string>();
    private readonly dynamicPropertiesList = new CssCollection<CssPropertyDefinition>();
    private readonly propertiesList = new CssCollection<CssPropertyDefinition>();
    private readonly classList = new CssCollection<CssClassDefinition>();

    public register = (
        cssClasses: CssCollection<CssClassDefinition>,
        properties: CssCollection<CssPropertyDefinition>,
        props: React.HTMLProps<any>,
    ): CSSProperties => {
        this.classList.merge(cssClasses.values);
        this.propertiesList.merge(properties.values);
        this.updateIds(cssClasses.values);

        const newStyles = this.inspectProps(props);

        return newStyles;
    };

    private inspectProps = (props: object) => {
        let styleableProps = {};

        // 1. get styles from propertiesList to add to element style tag
        // 2. extract styles from of element inline props (width, height, align...)
        // 3. extract style property from element
        // 4. add styles from propertyList to element style tag
        // 5. add extracted styles to propertiesList
        // 6. return styles to be added to element style tag

        if (props) {
            const classNameProp = props["className"] as string;
            const styleProp = props["style"] as CSSProperties;

            if (classNameProp) {
                styleableProps = this.getStyleableProps(props);

                this.addDynamicProperties(classNameProp, styleableProps);

                if (styleProp) {
                    this.addDynamicProperties(classNameProp, styleProp);
                }

                const dynamicProperties = this.dynamicPropertiesList.get(this.getId(classNameProp));

                styleableProps = this.toCssProperties(dynamicProperties);
            }
        }

        console.log(styleableProps);
        return styleableProps as CSSProperties;
    };

    public getClassNames = () => {};

    private addDynamicProperties = (className: string, styleableProps: CSSProperties) => {
        this.updateDynamicProperties(className, styleableProps);
        // if (className.split(" ").length > 0) {
        //     className.split(" ").forEach((item) => {
        //         this.updateDynamicProperties(item, styleableProps);
        //     });
        // } else {
        //     this.updateDynamicProperties(className, styleableProps);
        // }
    };

    private getId(className: string) {
        return this.ids.get(className);
    }

    private updateDynamicProperties = (className: string, styleableProps: CSSProperties) => {
        const classId = this.getId(className);

        for (const key in styleableProps) {
            if (styleableProps.hasOwnProperty(key)) {
                const property: CssPropertyDefinition = {
                    id: key,
                    classId: classId,
                    key: key,
                    className: className,
                    name: decamelize(key),
                    value: styleableProps[key] as CssValue,
                    css: "",
                };

                this.dynamicPropertiesList.set(classId, property.id, property);
            } else {
                console.warn(`${key} already exists`);
            }
        }
    };

    private getStyleableProps = (props: object): CSSProperties => {
        const results = {};
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (CssHelpers.isStyleableProperty(key)) {
                    results[key as string] = props[key];
                }
            }
        }

        return results;
    };

    private toCssProperties = (properties: Map<string, CssPropertyDefinition>): CSSProperties => {
        const styleable: object = {};

        if (properties) {
            properties.forEach((value, key) => {
                if (!styleable[key]) {
                    styleable[key] = value.value;
                }
            });
        }

        return styleable as CSSProperties;
    };

    private updateIds(values: Map<string, Map<string, CssClassDefinition>>) {
        values.get("@global").forEach((value) => {
            this.addId(value.id, value.className);
        });
    }

    private addId(id: string, className: string) {
        if (!this.ids.has(id)) {
            this.ids.set(className, id);
        } else {
            console.warn(`${id} ${className} was skipped`);
        }
    }

    public stylesheet = (target: CssTarget) => {
        return "";
    };
}
