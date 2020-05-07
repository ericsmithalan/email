import { CssTarget, CssPropertyDefinition, CssClassDefinition, CssValue } from "./types";
import { camelize } from "./utils/camelize";
import { CssCollection } from "./CssCollection";
import { CssClassCollection } from "./CssClassCollection";
import { CssPropertyCollection } from "./CssPropertyCollection";
import { getCssProperties } from "./utils/getCssProperties";
import { guardClassName, guardTarget } from "./utils/typeGuards";

export class CssRepository {
    public readonly properties = new CssPropertyCollection();
    public readonly classes = new CssClassCollection();

    public addClasses = (cssClasses: CssClassCollection): void => {
        cssClasses.forEach((key: string, value: CssClassDefinition) => {
            this.classes.add(value.target, value);
        });
    };

    public addProperties = (properties: CssPropertyCollection): void => {
        if (properties) {
            properties.forEach((key: string, value: CssPropertyDefinition) => {
                this.properties.add(key, value);
            });
        }
    };

    public updateStyle = (
        className: string | undefined,
        styles: CssCollection<string, CssPropertyDefinition>,
    ) => {
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

    public getInlinableStyles = (className: string): CssPropertyCollection => {
        let props = new CssPropertyCollection();
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
            if (cssClass.target === type) {
                css.push(cssClass.css);
            }
        });

        return css.join("");
    };
}
