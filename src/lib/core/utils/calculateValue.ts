import { ParserProps } from "../types/css.types";
import { isFunction } from "util";

export const calculateValue = (
    value: object | string | number,
    args: ParserProps,
): object | string | number => {
    let calculated;

    if (isFunction(value)) {
        const fn = value as Function;
        calculated = fn(args.theme, args.props);
    } else {
        calculated = value;
    }

    return calculated;
};
