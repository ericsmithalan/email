import { isFunction, isObject } from "util";
import { Theme } from "../types/theme.types";
import { Fn } from "../types/css.types";
import { Styleable, Prop } from "../types/css.types";

export const calculateValue = (
    value: object | string | number | Fn,
    args: { props: Styleable; theme: Theme },
): object | string | number => {
    if (!isObject(value)) {
        if (isFunction(value)) {
            const fn = value as Fn;
            return fn({ t: args.theme, p: args.props });
        }

        console.log(value);
    }

    return value;
};
