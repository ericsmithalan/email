import { DirtyValue, CssValue, ParserProps } from "../types/css.types";
import _ from "underscore";

export const calculateValue = (
    value: DirtyValue & CssValue,
    args: ParserProps,
): DirtyValue | CssValue => {
    let calculated;

    if (_.isFunction(value)) {
        const fn = value as Function;
        calculated = fn({ theme: args.theme, props: args.props });
    } else {
        calculated = value;
    }

    return calculated;
};
