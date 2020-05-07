import { KeyArrayCollection } from "../collections/KeyArrayCollection";
import { CssClassDefinition, CssPropertyDefinition } from "../types";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssHelpers } from "../helpers/CssHelpers";
import { guardClassName } from "./guards";

export const validateCssProperties = (classes: KeyArrayCollection<CssPropertyDefinition>) => {
    classes.forEach((arr, key) => {
        if (!CssHelpers.isValidCssAttribute(key)) {
            console.error(`validateCssProperties > ${key} is not a valid css attribute`);
        }

        arr.forEach((item) => {
            if (!CssHelpers.isValidCssAttribute(item.key)) {
                console.error(`validateCssProperties > ${key} is not a valid css attribute`);
            }

            if (CssHelpers.isValidClassName(item.className)) {
                console.error(`validateCssProperties > class name invalid ${item.className}`);
            }

            if (!CssHelpers.isValueValid(item.value)) {
                console.error(`validateCssProperties > invalid value ${item.value}`);
            }

           
        });
    });
};
