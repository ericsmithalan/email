export const stringHashId = (str) => {
    let value = 5381;
    let len = str.length;
    while (len--)
        value = (value * 33) ^ str.charCodeAt(len);
    return (value >>> 0).toString(36);
};
//# sourceMappingURL=stringHashId.js.map