import { decamelize } from "./utils/camelize";
import { CssValidValueKind } from "./enums/CssValidValue";
export class CssClassProperty {
    constructor(props) {
        this._props = props;
        this._css = propertyStringTemplate(props.name, props.value);
    }
    get key() {
        return this._props.key;
    }
    get className() {
        return this._props.className;
    }
    get value() {
        return this._props.value;
    }
    get name() {
        return this._props.name;
    }
    get css() {
        return this._css;
    }
}
const propertyStringTemplate = (name, value) => {
    return `${decamelize(name)}:${ensureUnit(value, "px")};`;
};
const ensureUnit = (value, unit) => {
    let newValue = value;
    if (value.toString() === "0") {
        return "0";
    }
    if (value && typeof value in CssValidValueKind) {
        if (typeof value === "number") {
            newValue = `${value}${unit}`;
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
                newValue = val.trim();
            }
            else if (parseInt(value)) {
                newValue = `${value}${unit}`;
            }
            return value;
        }
    }
    else {
        throw new Error(`Invalid value ${value} ${unit}`);
    }
    return newValue;
};
//# sourceMappingURL=CssClassProperty.js.map