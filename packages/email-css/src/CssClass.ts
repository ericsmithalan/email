import { decamelize } from "./utils/camelize";
import { CssPseudoKind } from "./enums/CssPseudos";
import { CssClassProperty } from "./CssClassProperty";
import { CSSProperties } from "react";
import { CssValue, CssTarget } from "./types";
import { stringHashId } from "./utils/stringHashId";

export type CssClassType = "pseudo" | "target" | undefined;

export type CssClassProps = {
    key: string;
    className: string;
    properties: CssClassProperty[];
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

    getCssProperties(): CSSProperties {
        const properties: CSSProperties = {};
        if (!this.isPseudo && this.target === "@global") {
            this.properties.forEach((prop) => {
                properties[prop.key] = prop.value;
            });
        }

        return properties;
    }

    get key(): string {
        return this._props.key;
    }

    get className(): string {
        return this._props.className;
    }

    updateProperties(value: CSSProperties) {
        const combinedProperties = Object.assign({}, this.getCssProperties(), value);

        for (const key in combinedProperties) {
            if (combinedProperties.hasOwnProperty(key)) {
                const property = new CssClassProperty({
                    key: key,
                    className: this.className,
                    name: key,
                    value: combinedProperties[key] as CssValue,
                    css: "",
                });

                this._props.properties.push(property);
            }

            console.log(this._props.properties);
        }

        this._css = renderCss(this._props.className, this._props.key, this.properties);
    }

    get properties(): CssClassProperty[] {
        return this._props.properties;
    }

    get css(): string {
        if (!this._css) {
            this._css = renderCss(this._props.className, this._props.key, this.properties);
        }
        return this._css;
    }
    get id(): string {
        return stringHashId(this._props.target + this._props.key);
    }

    get isPseudo(): boolean {
        return this._props.isPseudo;
    }

    get target(): CssTarget {
        return this._props.target as CssTarget;
    }
}

const renderCss = (className: string, key: string, properties: CssClassProperty[]): string => {
    const css: string[] = [];

    const clsName = classString(key, className);

    properties.forEach((prop) => {
        css.push(prop.css);
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
