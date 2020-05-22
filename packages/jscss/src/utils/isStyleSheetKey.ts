import { ValidStyleKeys } from "../enums";
import { hasValue } from "./hasValue";

export const isStyleSheetKey = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value in ValidStyleKeys) {
        return true;
    }

    return false;
};
