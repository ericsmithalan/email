export const getCurrentClassName = (className: string) => {
    const classes = className.split(" ");

    if (classes.length > 1) {
        return classes[classes.length - 1];
    }

    return className;
};
