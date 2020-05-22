export const toCamelCase = (str: string): string => {
    if (str) {
        const pattern = /-(\w|$)/g;

        const callback = (dashChar: string, char: string) => char.toUpperCase();

        if (str.startsWith("-ms-")) {
            return str.substr(1).replace(pattern, callback);
        } else {
            return str.replace(pattern, callback);
        }
    } else {
        throw new Error(`camelize could not parse str: ${str}`);
    }
};
