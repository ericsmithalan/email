export const hasValues = (value: any) => {
    if (value !== null || value !== undefined || value !== "") {
        if (typeof value === "object") {
            if (Object.keys(value).length > 0) {
                return true;
            }

            return false;
        }

        return true;
    }

    return false;
};
