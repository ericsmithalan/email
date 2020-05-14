import { ParserProps } from "../types/css.types";

export const updateProps = (
    oldArgs: Partial<ParserProps>,
    newArgs: Partial<ParserProps>,
): ParserProps => {
    return Object.assign({}, oldArgs, newArgs) as ParserProps;
};
