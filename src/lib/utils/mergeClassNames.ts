export const mergeClassNames = (defaultProps: any, props: any) => {
    const dirty: string[] = [];
    const clean: string[] = [];

    if (defaultProps && defaultProps.className) {
        if (defaultProps.className.split(" ").length > 1) {
            dirty.concat(defaultProps.className.split(" "));
        } else {
            dirty.push(defaultProps.className);
        }
    }

    if (props && props.className) {
        if (props.className.split(" ").length > 1) {
            dirty.concat(props.className.split(" "));
        } else {
            dirty.push(props.className);
        }
    }

    dirty.forEach((item) => {
        if (!clean.includes(item)) {
            clean.push(item);
        }
    });

    return clean.join(" ");
};
