export const ensureUnit = (value: string) => {
    let result = value.toString();
    if (result) {
        if (result === "0") {
            return result;
        }

        if (parseInt(value)) {
            const regex = /^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)$/;
            if (!result.match(regex)) {
                return `${result}px`;
            }
        }
    }

    return result;
};
