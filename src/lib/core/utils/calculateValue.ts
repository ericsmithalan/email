import { isFunction } from "util";
import { Theme } from "../types/theme.types";

export const calculateValue = (
    value: object | string | number,
    args: { props: any; theme: Theme },
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
