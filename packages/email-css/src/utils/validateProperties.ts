import { CssCollection } from "../collections/CssCollection";
import { CssClassDefinition, CssPropertyDefinition } from "../types";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssHelpers } from "../helpers/CssHelpers";
import { camelize } from "./camelize";

export const validateCssProperties = (classes: CssCollection<CssPropertyDefinition>) => {
    // classes.get("@global").forEach((arr, key) => {
    //     arr.forEach((item) => {
    //         if (!CssHelpers.isValidCssAttribute(camelize(item.name))) {
    //             console.error(`validateCssProperties > ${item.name} is not a valid css attribute`);
    //         }
    //         if (!CssHelpers.isValidClassName(item.className)) {
    //             console.error(`validateCssProperties > class name invalid ${item.className}`);
    //         }
    //         if (!CssHelpers.isValueValid(item.value)) {
    //             console.error(`validateCssProperties > invalid value ${item.value}`);
    //         }
    //     });
    // });
};
