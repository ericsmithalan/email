import { CssClass } from "./CssClass";
import { CssTarget, CssValue } from "./types";
import { camelize } from "./utils/camelize";
import { CssCollection } from "./utils/CssCollection";
import { CssClassCollection } from "./utils/CssClassCollection";
import { CssPropertyCollection } from "./utils/CssPropertyCollection";
import { CssClassProperty } from "./CssClassProperty";

export class CssRepository {
    public readonly properties = new CssPropertyCollection();
    public readonly classes = new CssCollection<string, CssClass>();

    public addClasses = (cssClasses: CssClassCollection | undefined): void => {
        if (cssClasses) {
            cssClasses.forEach((key: string, value: CssClass) => {
                this.classes.add(key, value);
            });
        }
    };

    public addProperties = (properties: CssPropertyCollection | undefined): void => {
        if (properties) {
            properties.forEach((key: string, value: CssClassProperty) => {
                this.properties.add(key, value);
            });
        }
    };

    public updateStyle = (className: string | undefined, styles: CssCollection<string, CssValue>) => {
        if (className) {
            const item: CssClass = this.classes.findIn("className", camelize(className)) as CssClass;

            // if (item) {
            //     item.updateProperties(styles);
            // }
        }
    };

    public getInlinableStyles = (className: string): CssPropertyCollection => {
        let props = new CssPropertyCollection();
        if (className) {
            const item = this.classes.findIn("className", camelize(className)) as CssClass;

            if (item) {
                item.getCssProperties().forEach((key: string, value: CssClassProperty) => {
                    props.add(key as string, value);
                });
            }
        }

        return props;
    };

    public stylesheet = (type: CssTarget): string => {
        const css: string[] = [];

        this.classes.forEach((cssClass) => {
            if (cssClass.target === type) {
                css.push(cssClass.css);
            }
        });

        return css.join("");
    };
}
