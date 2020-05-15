import { ParserProps } from "../types/css.types";
import _ from "underscore";

export const calculateValue = (
    value: object | string | number,
    args: ParserProps,
): object | string | number => {
    let calculated;

    if (_.isFunction(value)) {
        const fn = value as Function;
        calculated = fn(args.theme, args.props);
    } else {
        calculated = value;
    }

    return calculated;
};
