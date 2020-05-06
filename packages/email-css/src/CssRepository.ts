import { Dictionary, Set } from "typescript-collections";
import { CSSProperties } from "react";
import { CssClass } from "./CssClass";
import { CssTarget, CssAttribute, CssValue } from "./types";
import { camelize } from "./utils/camelize";
import { CssCollection } from "./utils/CssCollection";
import { CssClassCollection } from "./utils/CssClassCollection";
import { CssPropertyCollection } from "./utils/CssPropertyCollection";

export class CssRepository {
    public readonly classes2 = new CssClassCollection();
    public readonly properties = new CssPropertyCollection();
    public readonly classes = new CssCollection<string, CssClass>();

    public add = (cssClasses: CssCollection<string, CssClass> | undefined): void => {
        if (cssClasses) {
            cssClasses.forEach((key: string, value: CssClass) => {
                this.classes.add(key, value);
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

    public getInlinableStyles = (className: string): CssCollection<string, CssValue> => {
        let props = new CssCollection<string, CssValue>();
        if (className) {
            const item = this.classes.findIn("className", camelize(className)) as CssClass;

            if (item) {
                item.getCssProperties().forEach((key: string, value: CssValue) => {
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
