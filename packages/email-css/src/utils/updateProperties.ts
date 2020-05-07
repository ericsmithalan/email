import { CssPropertyCollection } from "../CssPropertyCollection";
import { CssValue } from "../types";
import { CssAttributesKind } from "../CssAttributesKind";
import { renderCssClass } from "./htmlStrings";

const updateProperties = (values: CssPropertyCollection) => {
    values.forEach((key: string, value: CssValue) => {
        const attrKey = key;

        if (key in CssAttributesKind) {
            const property = {
                key: attrKey,
                className: this.className,
                name: attrKey,
                value: values[attrKey] as CssValue,
                css: "",
            };

            this._props.properties.add(attrKey, property);
        } else {
            console.error(`CssClassDefinition > updateProperties > ${key} is not a CssAttribute`);
        }
    });

    renderCssClass(this._props.className, this._props.key, this.properties);
};
