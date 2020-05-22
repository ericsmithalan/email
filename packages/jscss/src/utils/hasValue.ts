export const hasValue = (value: any): boolean => {
    if (!value || value.length === 0) {
        return false;
    }

    return true;
};
