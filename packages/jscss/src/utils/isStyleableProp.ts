import { ValidStyleableProps } from "../enums";
import { hasValue } from "./hasValue";

export const isStyleableProp = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value in ValidStyleableProps) {
        return true;
    }

    return false;
};
