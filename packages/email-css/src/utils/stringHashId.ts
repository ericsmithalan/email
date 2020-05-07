export const stringHashId = (...str: string[]): string => {
    let value = 5381;
    let len = str.join("").length;
    while (len--) value = (value * 33) ^ str.join("").charCodeAt(len);
    return (value >>> 0).toString(36);
};
