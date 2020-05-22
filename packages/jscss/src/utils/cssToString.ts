import { ensureUnit } from "./ensureUnit";
import { isPseudo } from "./isPseudo";
import { toClassName } from "./toClassName";

export const cssToString = (obj: any, isImportant: boolean): string => {
    const css: string[] = [];
    const pseudos: string[] = [];

    for (const clsKey in obj) {
        if (obj.hasOwnProperty(clsKey)) {
            const clsValue = obj[clsKey];
            let arr = css;
            let prefix = ".";

            if (isPseudo(clsKey)) {
                arr = pseudos;
            }

            arr.push(`${prefix}${toClassName(clsKey)}{`);
            for (const propertyKey in clsValue) {
                if (clsValue.hasOwnProperty(propertyKey)) {
                    const propValue = clsValue[propertyKey];

                    arr.push(
                        `${toClassName(propertyKey)}:${ensureUnit(propValue)}${
                            isImportant ? "!important" : ""
                        };`
                    );
                }
            }
            arr.push(`}`);
        }
    }

    return `${css.join("").trim()}${pseudos.join("").trim()}`;
};
