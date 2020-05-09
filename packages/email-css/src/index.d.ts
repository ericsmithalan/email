import { ClassRecord2, CssTarget } from "./types";
import { CssTargetKind } from "./enums/CssTargetKind";

declare function addKeyValue2<T extends {}, K extends keyof any, V>(
    obj: T,
    key: K,
    value: V,
): { [P in keyof (T & Record<K, any>)]: P extends K ? V : P extends keyof T ? T[P] : never };

declare function addKeyValue<T extends {}, K extends keyof any, V>(
    obj: T,
    key: K,
    value: V,
): T & Record<K, V>;
