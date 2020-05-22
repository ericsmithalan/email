import { hasValue } from "./hasValue";

export const isObject = (value: any): boolean => {
    if (hasValue(value)) {
        if (typeof value === "object") {
            return true;
        }

        return false;
    }

    return false;
};
