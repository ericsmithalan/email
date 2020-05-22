import { hasValue } from "./hasValue";

export const isFunction = (value: any): boolean => {
    if (hasValue(value)) {
        if (typeof value === "function") {
            return true;
        }

        return false;
    }

    return false;
};
