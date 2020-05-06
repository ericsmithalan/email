export const camelize = (str) => {
    return str.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => {
        if (p2) {
            return p2.toUpperCase();
        }
        return p1.toLowerCase();
    });
};
export const decamelize = (str) => {
    const separator = "-";
    return str
        .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
        .toLowerCase();
};
//# sourceMappingURL=camelize.js.map