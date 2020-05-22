import { ValidPseudos } from "../enums";
import { hasValue } from "./hasValue";

export const isPseudo = (value: any): boolean => {
    if (!hasValue(value)) {
        return false;
    }

    if (value in ValidPseudos) {
        return true;
    }

    return false;
};
