import { CssTarget, CssPropertyDefinition, CssClassDefinition, CssValue } from "./types";
import { camelize } from "./utils/camelize";
import { CssCollection } from "./CssCollection";
import { CssClassCollection } from "./CssClassCollection";
import { CssPropertyCollection } from "./CssPropertyCollection";

export class CssRepository {
    public readonly properties = new CssPropertyCollection();
    public readonly classes = new CssCollection<string, CssClassDefinition>();

    public addClasses = (cssClasses: CssClassCollection | undefined): void => {
        if (cssClasses) {
            cssClasses.forEach((key: string, value: CssClassDefinition) => {
                this.classes.add(key, value);
            });
        }
    };

    public addProperties = (properties: CssPropertyCollection | undefined): void => {
        if (properties) {
            properties.forEach((key: string, value: CssPropertyDefinition) => {
                this.properties.add(key, value);
            });
        }
    };

    public updateStyle = (className: string | undefined, styles: CssCollection<string, CssValue>) => {
        if (className) {
            const item: CssClassDefinition = this.classes.findIn(
                "className",
                camelize(className),
            ) as CssClassDefinition;

            // if (item) {
            //     item.updateProperties(styles);
            // }
        }
    };

    public getInlinableStyles = (className: string): CssPropertyCollection => {
        let props = new CssPropertyCollection();
        if (className) {
            const item = this.classes.findIn("className", camelize(className)) as CssClassDefinition;

            if (item) {
                item.getCssProperties().forEach((key: string, value: CssPropertyDefinition) => {
                    props.add(key as string, value);
                });
            }
        }

        return props;
    };

    public stylesheet = (type: CssTarget): string => {
        const css: string[] = [];

        this.classes.forEach((key, cssClass) => {
            if (cssClass.target === type) {
                css.push(cssClass.css);
            }
        });

        return css.join("");
    };
}
