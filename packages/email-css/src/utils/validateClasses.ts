import { KeyArrayCollection } from "../collections/KeyArrayCollection";
import { CssClassDefinition } from "../types";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssHelpers } from "../helpers/CssHelpers";
import { guardClassName } from "./guards";

export const validateCssClasses = (classes: KeyArrayCollection<CssClassDefinition>) => {
    classes.forEach((arr, key) => {
        if (!CssHelpers.isTarget(key)) {
            console.error(`validateCssClasses > ${key} is not a target`);
        }

        arr.forEach((item) => {
            if (!CssHelpers.isValidClassName(item.className)) {
                console.error(`validateCssClasses > invalid className ${item.className}`);
            }

            if (!CssHelpers.isTarget(item.target)) {
                console.error(`validateCssClasses > invalid target ${item.target}`);
            }
            if (!CssHelpers.isPseudo(item.psuedo)) {
                console.error(`validateCssClasses > invalid pseudo ${item.psuedo}`);
            }
        });
    });
};
