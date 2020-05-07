import { CssDirtyValue, CssValue } from "../types";
import { CssTheme } from "../CssTheme";
import _ from "underscore";

export const calculateValue = (
    value: CssDirtyValue & CssValue,
    theme: CssTheme,
): CssDirtyValue | CssValue => {
    let calculated;

    if (_.isArray(calculated)) {
        const arrayValue = calculated as string[];
        if (arrayValue.length <= 2) {
            calculated = arrayValue.join("!");
        }
        if (arrayValue.length > 2) {
            calculated = arrayValue.join(",");
        }
    }

    if (_.isFunction(calculated)) {
        const fn = value as Function;
        calculated = fn(theme);
    }

    if (!calculated) {
        calculated = value;
    }

    return calculated;
};
