"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
exports.strEnum = strEnum;
//# sourceMappingURL=enums.js.map