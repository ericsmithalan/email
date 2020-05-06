import { CssValue } from "./types";
import { decamelize } from "./utils/camelize";
import { CssValidValueKind } from "./CssValidValue";

export type CssClassPropertyProps = {
    key: string;
    className: string | undefined;
    name: string;
    value: CssValue;
    css: string;
};
export class CssClassProperty {
    _props: CssClassPropertyProps;
    _css: string;
    constructor(props: CssClassPropertyProps) {
        this._props = props;
    }

    get key(): string {
        return this._props.key;
    }

    get className(): string | undefined {
        return this._props.className;
    }

    get value(): CssValue {
        return this._props.value;
    }

    get name(): string {
        return this._props.name;
    }

    get css(): string {
        return propertyStringTemplate(this.name, this.value);
    }
}

const propertyStringTemplate = (name: string, value: string): string => {
    return `${decamelize(name)}:${ensureUnit(value as CssValue, "px")};`;
};

const ensureUnit = (value: CssValue, unit: string): string => {
    let newValue = value;

    if (value.toString() === "0") {
        return "0";
    }

    if (value && typeof value in CssValidValueKind) {
        if (typeof value === "number") {
            newValue = `${value}${unit}` as CssValue;
        }
        if (typeof value === "string") {
            if (value.split(",").length > 0) {
                const values = value.split(",");
                let val = "";

                values.forEach((item) => {
                    if (parseInt(item) || item === "0") {
                        val += `${item}${unit} `;
                    }
                });

                newValue = val.trim() as CssValue;
            } else if (parseInt(value)) {
                newValue = `${value}${unit}` as CssValue;
            }

            return value;
        }
    } else {
        throw new Error(`Invalid value ${value} ${unit}`);
    }

    return newValue;
};
