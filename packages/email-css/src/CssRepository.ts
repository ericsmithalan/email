import { Dictionary } from "typescript-collections";
import { CSSProperties } from "react";
import { CssClass } from "./CssClass";
import { CssTarget } from "./types";
import { camelize } from "./utils/camelize";

interface CssResource {
    index: number;
    target: CssTarget;
    className: string;
    css: string;
}

interface CssResource2 {
    target: string;
    className: string;
    css: string[];
}

export class CssRepository {
    public sheets: CssResource2[] = [];
    public readonly stylesheets: CssResource[] = [];

    public readonly classes = new Dictionary<string, CssClass>();

    public add = (cssClasses: CssClass[] | undefined): void => {
        if (cssClasses) {
            cssClasses.forEach((cssClass) => {
                this.classes.setValue(cssClass.id, cssClass);
            });
        }
    };

    public updateStyle = (className: string | undefined, styles: CSSProperties) => {
        if (className) {
            const item = this.classes.values().find((item) => item.className === camelize(className));

            if (item) {
                item.updateProperties(styles);
            }
        }
    };

    public getInlinableStyles = (className: string): CSSProperties => {
        let props = {};
        if (className) {
            const item = this.classes.values().find((item) => item.className === camelize(className));

            if (item) {
                props = item.getCssProperties();
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
