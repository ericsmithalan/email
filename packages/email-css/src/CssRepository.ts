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
    private readonly properties = new CssCollection<CssPropertyDefinition>();
    private readonly classes = new CssCollection<CssClassDefinition>();

    public addClasses = (cssClasses: CssCollection<CssClassDefinition>): void => {
        this.classes.merge(cssClasses.values);
        this.updateIds(cssClasses.values);
    };

    public addProperties = (properties: CssCollection<CssPropertyDefinition>): void => {
        this.properties.merge(properties.values);
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

    public inspectProps = (props: object) => {
        const styleable = {};
        let styleableProps = {};

        if (props) {
            const className = props["className"];

            for (const key in props) {
                if (props.hasOwnProperty(key)) {
                    if (CssHelpers.isStyleableProperty(key)) {
                        styleable[key as string] = props[key];
                    }
                }
            }

            if (className) {
                const id = this.ids.get(className);
                styleableProps = this.updateClassProperties(id, className, styleable);
            }
        }

        return Object.assign({}, styleable, styleableProps) as CSSProperties;
    };

    public updateClassProperties = (
        classId: string,
        className: string,
        styles: CSSProperties,
    ): CSSProperties => {
        const cssProperties = this.properties.get(classId);

        if (cssProperties) {
            for (const key in styles) {
                if (styles.hasOwnProperty(key)) {
                    if (!cssProperties.has(key)) {
                        const property: CssPropertyDefinition = {
                            id: key,
                            classId: classId,
                            key: key,
                            className: className,
                            name: decamelize(key),
                            value: styles[key] as CssValue,
                            css: "",
                        };

                        cssProperties.set(property.id, property);
                    }
                }
            }
        }

        return this.convertToCssProperties(cssProperties);

        // console.log("updateCssClass", cssClass, cssProperties);
    };

    private convertToCssProperties = (
        properties: Map<string, CssPropertyDefinition>,
    ): CSSProperties => {
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

    public getInlinableStyles = (className: string): PropertyCollectionType => {
        let props = new GenericCollection<CssPropertyDefinition>();
        if (className) {
            // const item = this.classes.findIn(
            //     "className",
            //     camelize(className),
            // ) as CssClassDefinition;
            // if (item) {
            //     getCssProperties(item).forEach((key: string, value: CssPropertyDefinition) => {
            //         props.add(key, value);
            //     });
            // }
        }

        return props;
    };

    public stylesheet = (type: CssTarget): string => {
        const css: string[] = [];
        // this.classes.forEach((key, cssClass) => {
        //     // if (cssClass.target === type) {
        //     //     css.push(cssClass.css);
        //     // }
        // });

        return css.join("");
    };
}
