import { CssHelpers } from "./CssHelpers";
import { isNullOrUndefined } from "util";

const on = false;

const target = (value: string, message: string = "", ...args: any[]) => {
    log(value, message, args);
};

const nullOrUndefined = (value: any, message: string = "", ...args: any[]) => {
    log(value, message, args);
};

const log = (value: any, message: string = "", ...args: any[]) => {
    if (on) {
        console.assert(isNullOrUndefined(value), `${message} : invalid ${value}`, args);
    }
};

export const Assert = { target, nullOrUndefined };
