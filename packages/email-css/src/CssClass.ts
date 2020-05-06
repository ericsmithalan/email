import { decamelize } from "./utils/camelize";
import { CssPseudoKind } from "./enums/CssPseudos";
import { CssClassProperty } from "./CssClassProperty";
import { CSSProperties } from "react";
import { CssValue, CssTarget, CssAttribute } from "./types";
import { stringHashId } from "./utils/stringHashId";
import { Set } from "typescript-collections";
import { CssCollection } from "./utils/CssCollection";
import { CssAttributesKind } from "./enums/CssAttributes";

export type CssClassProps = {
    key: string;
    className: string;
    properties: CssCollection<string, CssClassProperty>;
    target: CssTarget;
    css: string;
    isPseudo: boolean;
};

export class CssClass {
    _props: CssClassProps;
    _css: string = "";

    constructor(props: CssClassProps) {
        this._props = props;
    }

    get key(): string {
        return this._props.key;
    }

    get className(): string {
        return this._props.className;
    }

    get properties(): CssCollection<string, CssClassProperty> {
        return this._props.properties;
    }

    get css(): string {
        this._css = renderCss(this._props.className, this._props.key, this.properties);

        return this._css;
    }

    get isPseudo(): boolean {
        return this._props.isPseudo;
    }

    get target(): CssTarget {
        return this._props.target as CssTarget;
    }

    getCssProperties(): CssCollection<string, CssValue> {
        const properties = new CssCollection<string, CssValue>();

        if (!this.isPseudo && this.target === "@global") {
            this.properties.forEach((key: string, value: CssValue) => {
                properties[key] = value;
            });
        }

        return properties;
    }

    updateProperties(values: CssCollection<string, CssValue>) {
        values.forEach((key: string, value: CssValue) => {
            const attrKey = key;

            if (key in CssAttributesKind) {
                const property = new CssClassProperty({
                    key: attrKey,
                    className: this.className,
                    name: attrKey,
                    value: values[attrKey] as CssValue,
                    css: "",
                });

                this._props.properties.add(attrKey, property);
            } else {
                console.error(`CssClass > updateProperties > ${key} is not a CssAttribute`);
            }
        });

        this._css = renderCss(this._props.className, this._props.key, this.properties);
    }
}

const renderCss = (className: string, key: string, properties: CssCollection<string, CssClassProperty>): string => {
    const css: string[] = [];

    const clsName = classString(key, className);

    properties.forEach((key: string, value: CssClassProperty) => {
        css.push(value.css);
    });

    return classStringTemplate(clsName, css.join(""));
};

const classString = (key: string, className: string): string => {
    let name = key;

    if (key in CssPseudoKind) {
        if (className) {
            name = `${decamelize(className)}${decamelize(key)}`;
        }
    } else {
        name = `${decamelize(className)}`;
    }

    return name;
};

const classStringTemplate = (className: string, properties: string): string => {
    return `.${className}{${properties}}`;
};
