import { ValidCssValue } from "../enums";
import { hasValue } from "./hasValue";

export const isValidCssValue = (value: any): boolean => {
    if (hasValue(value)) {
        if (typeof value === "object") {
            return true;
        }

        if (typeof value in ValidCssValue) {
            return true;
        }

        return false;
    }

    return false;
};
