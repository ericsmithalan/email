import { ParseArgs } from "../css-js/parser";

export const updateProps = (oldArgs: object, newArgs: object): ParseArgs => {
    return Object.assign({}, oldArgs, newArgs) as ParseArgs;
};
