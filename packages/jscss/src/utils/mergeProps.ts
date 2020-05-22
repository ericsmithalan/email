import { UnionToIntersection } from "../types";
import { pushProp } from "./pushProps";

export const mergeProps = <T extends {}[]>(
    ...props: T
): {
    [K in keyof UnionToIntersection<T[number]>]: K extends "className"
        ? string
        : K extends "style"
        ? UnionToIntersection<T[number]>[K]
        : Extract<T[number], { [Q in K]: unknown }>[K];
} => {
    if (props.length === 1) {
        return props[0] as any;
    }

    return props.reduce((merged, ps: any) => {
        for (const key in ps) {
            pushProp(merged, key, ps[key]);
        }
        return merged;
    }, {}) as any;
};
