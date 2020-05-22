import { isStyleableProp } from "./isStyleableProp";

export const pushProp = (target: { [key: string]: any }, key: string, value: any): void => {
    if (key === "className") {
        target.className = [target.className, value].join(" ").trim();
    } else if (key === "style") {
        target.style = { ...target.style, ...value };
    } else if (isStyleableProp(key)) {
        const newObj = {};
        newObj[key] = value;
        target.style = { ...target.style, ...newObj };
        target[key] = value;
    } else if (typeof value === "function") {
        const oldFn = target[key] as Function | undefined;
        target[key] = oldFn
            ? (...args: any[]) => {
                  oldFn(...args);
                  (value as Function)(...args);
              }
            : value;
    } else if (!(key in target)) {
        target[key] = value;
    } else {
        throw new Error(
            `Didn’t know how to merge prop '${key}'. ` +
                `Only 'className', 'StyleableProperties', 'style', and event handlers are supported`
        );
    }
};
