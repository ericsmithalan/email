import { ensureUnit } from "./ensureUnit";
import { decamelize } from "./camelize";
import { isTagName } from "./validation";

export const render = (obj: object, isImportant: boolean): string => {
    const css: string[] = [];
    for (const clsKey in obj) {
        if (obj.hasOwnProperty(clsKey)) {
            const clsValue = obj[clsKey];

            let prefix = ".";
            if (isTagName(clsKey)) {
                prefix = "";
            }

            css.push(`${prefix}${decamelize(clsKey)}{`);
            for (const propertyKey in clsValue) {
                if (clsValue.hasOwnProperty(propertyKey)) {
                    const propValue = clsValue[propertyKey];
                    css.push(
                        `${decamelize(propertyKey)}:${ensureUnit(propValue)}${
                            isImportant ? "!important" : ""
                        };`,
                    );
                }
            }
            css.push(`}`);
        }
    }

    return css.join("").trim();
};
