import { Styleable } from "../types";

export const mergeClassNames = <T extends Styleable>(defaultProps: T, props: T) => {
    const dirty: string[] = [];
    const clean: string[] = [];

    if (defaultProps && defaultProps.className) {
        defaultProps.className.split(" ").forEach((item: string) => {
            dirty.push(item);
        });
    }

    if (props && props.className) {
        props.className.split(" ").forEach((item: string) => {
            dirty.push(item);
        });
    }

    if (defaultProps && defaultProps.commoncss) {
        defaultProps.commoncss.forEach((item: string) => {
            dirty.push(item);
        });
    }

    if (props && props.commoncss) {
        props.commoncss.forEach((item: string) => {
            dirty.push(item);
        });
    }

    dirty.forEach((item) => {
        if (!clean.includes(item)) {
            clean.push(item);
        }
    });

    return clean.join(" ");
};
