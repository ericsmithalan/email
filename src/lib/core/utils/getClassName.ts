import { ParserProps } from "../types/css.types";
import { isValidClassName, isPseudo } from "./validation";
import { camelize } from "./camelize";

export const getClassName = (args: Partial<ParserProps>, key: string): string => {
    const className = isValidClassName(key) ? key : args.classKey;
    let pseudo = "";

    if (isPseudo(key)) {
        pseudo = key;
    }

    return camelize(`${className}${pseudo}`).trim();
};
