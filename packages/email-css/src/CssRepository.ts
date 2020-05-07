import {
    CssTarget,
    CssPropertyDefinition,
    PropertyCollectionType,
    CssClassDefinition,
} from "./types";
import { GenericCollection } from "./collections/GenericCollection";
import { KeyArrayCollection } from "./collections/KeyArrayCollection";
import { CssPropertyCollection } from "./collections/CssPropertyCollection";
import {
    guardClassName,
    guardTarget,
    guardCssClassCollection,
    guardCssPropertyCollection,
} from "./utils/guards";

export class CssRepository {
    public readonly properties = new KeyArrayCollection<CssPropertyDefinition>();
    public readonly classes = new KeyArrayCollection<CssClassDefinition>();

    public addClasses = (cssClasses: KeyArrayCollection<CssClassDefinition>): void => {
        guardCssClassCollection(cssClasses);
        // cssClasses.forEach((key: string, value: CssClassDefinition) => {
        //     this.classes.add(value.target, value);
        // });
    };

    public addProperties = (properties: CssPropertyCollection): void => {
        guardCssPropertyCollection(properties);
        // if (properties) {
        //     properties.forEach((key: string, value: CssPropertyDefinition) => {
        //         this.properties.add(key, value);
        //     });
        // }
    };

    public updateStyle = (className: string | undefined, styles: PropertyCollectionType) => {
        guardClassName(className);

        if (className) {
            // const item: CssClassDefinition = this.classes(
            //     "className",
            //     camelize(className),
            // ) as CssClassDefinition;
            // if (item) {
            //     item.updateProperties(styles);
            // }
        }
    };

    public getInlinableStyles = (className: string): PropertyCollectionType => {
        guardClassName(className);

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
        guardTarget(type);

        const css: string[] = [];
        this.classes.forEach((key, cssClass) => {
            // if (cssClass.target === type) {
            //     css.push(cssClass.css);
            // }
        });

        return css.join("");
    };
}
