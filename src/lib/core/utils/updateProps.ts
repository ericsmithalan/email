import { ParseArgs } from "../css-js/Parser";

export const updateProps = (oldArgs: object, newArgs: object): ParseArgs => {
    return Object.assign({}, oldArgs, newArgs) as ParseArgs;
};
