export const toClassName = (str: string) => {
    if (str) {
        const separator = "-";
        return str
            .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
            .toLowerCase();
    } else {
        throw new Error(`camelize could not parse str: ${str}`);
    }
};
