import {
    CssTarget,
    CssPropertyDefinition,
    PropertyCollectionType,
    CssClassDefinition,
    CssValue,
    GenericCollectionValues,
    ClassCollectionValues,
} from "./types";
import { CssCollection } from "./collections/CssCollection";
import { CSSProperties } from "react";
import { CssHelpers } from "./helpers/CssHelpers";
import { GenericCollection } from "./collections/GenericCollection";

export class CssRepository {
    private readonly ids = new GenericCollection<string>();
    private readonly propertiesList = new CssCollection<CssPropertyDefinition>();
    private readonly classList = new CssCollection<CssClassDefinition>();

    public register = (
        cssClasses: CssCollection<CssClassDefinition>,
        properties: CssCollection<CssPropertyDefinition>,
        ...props: React.HTMLProps<any>[]
    ): CSSProperties => {
        this.classList.merge(cssClasses.values);
        this.propertiesList.merge(properties.values);

        this.updateIds();

        let inlineStyles = new GenericCollection<CSSProperties>();

        if (props.length > 0) {
            props.forEach((prop) => {
                const propStyles = CssHelpers.toGenericCollection<CSSProperties>(
                    this.initElement(prop),
                );

                inlineStyles.merge(propStyles);
            });
        } else {
            const propStyles = CssHelpers.toGenericCollection<CSSProperties>(
                this.initElement(props),
            );
            inlineStyles.merge(propStyles);
        }

        return inlineStyles.values;
    };

    // 1. get styles from propertiesList to add to element style tag
    // 2. extract styles from  element inline props (width, height, align...)
    // 3. extract style property from element
    // 4. add styles from propertyList to element style tag
    // 5. add extracted styles to propertiesList
    // 6. return styles to be added to element style tag

    private initElement = (props: object): CSSProperties => {
        let results: CSSProperties = {};
        let className = undefined;

        if (props) {
            className = props["className"];
        }

        if (props && className) {
            const classId = this.getId(className);

            // 1 get CssStyles
            const registeredCssStyles = this.propertiesList.getItem("@global", classId);

            // 2 get Element props that can be styles
            const unregisteredPropStyles = CssHelpers.toGenericCollection<CSSProperties>(
                CssHelpers.findStyleableProps(props),
            );

            // 3 get Elment style
            const unregisteredElementStyle = CssHelpers.hasKey(props, "style")
                ? CssHelpers.toGenericCollection<CSSProperties>(props["style"])
                : {};

            const newDefinitions = CssHelpers.toCssPropertyDefinition(
                classId,
                className,
                unregisteredPropStyles,
                unregisteredElementStyle,
            );

            // // 2 extract styles from element
            // const unassignedStyles = CssHelpers.toCssPropertyDefinition(
            //     classId,
            //     className,
            //     styleables,
            //     styleProp,
            // ).values;

            // console.log(unassignedStyles, assignedStyles);

            // if (unassignedStyles.size > 0 && assignedStyles) {
            //     //this.dynamicPropertiesList.merge(newDefinitions.values);
            //     // console.log(this.dynamicPropertiesList);
            // }
        }

        return results;
    };

    private getId(className: string): string {
        const id = this.ids.get(CssHelpers.camelize(className));
        console.log(this.ids.values);
        return id;
    }

    private updateIds() {
        const collection = this.classList.get("@global");

        if (collection) {
            for (const key in collection) {
                if (collection.hasOwnProperty(key)) {
                    const value = collection[key];
                    this.ids.set(CssHelpers.camelize(value.className), value.id);
                }
            }
        }
    }

    public stylesheet = (target: CssTarget) => {
        return "";
    };
}
