import { hasValue } from "./hasValue";
import { isPseudo } from "./isPseudo";
import { isStyleSheetKey } from "./isStyleSheetKey";

export const maybeClassName = (value: any): boolean => {
    if (hasValue(value)) {
        if (typeof value === "string") {
            if (!isStyleSheetKey(value) || !isPseudo(value)) {
                return true;
            }

            return false;
        }

        return false;
    }

    return false;
};
