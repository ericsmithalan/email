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
import { Assert } from "./helpers/Assert";

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
        this.initElement(props);

        const inlineStyles = {};

        return inlineStyles;
    };

    // 1. get styles from propertiesList to add to element style tag
    // 2. extract styles from  element inline props (width, height, align...)
    // 3. extract style property from element
    // 4. add styles from propertyList to element style tag
    // 5. add extracted styles to propertiesList
    // 6. return styles to be added to element style tag

    private initElement = (props: object) => {
        const className = props["className"] as string;
        const styleProp = props["style"] as CSSProperties;
        const classId = this.getId(className);
        let propertyDefinitions = null;

        // gets any property that is a style
        const styleables = CssHelpers.findStyleableProps(props);

        if (classId) {
            // convert CSSProperty to CssPropertyDefinition
            propertyDefinitions = CssHelpers.toCssPropertyDefinition(
                classId,
                className,
                styleables,
                styleProp,
            );
        }

        console.log(propertyDefinitions);
    };

    private getId(className: string) {
        return this.ids.get(className);
    }

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
