import {
    CssTarget,
    ClassCollectionTuple,
    PropertyCollection,
    CallbackFn,
    CssPropertyDefinition,
} from "./types";
import _ from "underscore";
import { CssCollection } from "./CssCollection";
import { camelize } from "./utils/camelize";
import { CssValue, CssUnit } from "./types";
import { decamelize } from "./utils/camelize";
import { CssValidValueKind } from "./CssValidValue";

export class CssPropertyCollection {
    private _items: ClassCollectionTuple<string, CssPropertyDefinition>[] = [];

    add(className: string, property: CssPropertyDefinition): void {
        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(camelizedName);

        if (!collection.containsKey(property.key)) {
            collection.add(property.key, property);
        } else {
            console.warn(
                `CssPropertyCollection > add > ${className} ${property.key} already exists`,
            );
        }
    }

    getPropertyCollection(className: string): PropertyCollection {
        if (this._items[className]) {
            return this._items[className][1];
        } else {
            this._items[className] = {
                1: new CssCollection<string, CssPropertyDefinition>(),
            };

            return this._items[className][1];
        }
    }

    getProperty(className: string): CssPropertyDefinition | null {
        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(className);
        if (collection.containsKey(camelizedName)) {
            collection.get(camelizedName);
        } else {
            console.warn(`CssPropertyCollection > getClass > ${className} was not found`);
            return null;
        }
    }

    update(target: CssTarget, property: CssPropertyDefinition): void {
        const collection = this.getPropertyCollection(target);

        //todo: figure out how to place it
        if (collection.containsKey(property.key)) {
            const location = collection.getIndex(property.key);
            collection.remove(property.key);
            collection.add(property.key, property);
        } else {
            console.warn(`CssPropertyCollection > add > ${target} ${property.key} already exists`);
        }
    }

    public forEach(callback: CallbackFn<string, any>): void {
        for (const key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                const pair = this._items[key];
                const ret = callback(key, pair);
                if (!ret) {
                    return;
                }
            }
        }
    }
}

// return propertyStringTemplate(this.name, this.value, this._defaultUnit);
const propertyStringTemplate = (name: string, value: string, unit: CssUnit): string => {
    return `${decamelize(name)}:${ensureUnit(value as CssValue, unit)};`;
};

const ensureUnit = (value: CssValue, unit: string): string => {
    let newValue = value;

    if (value.toString() === "0") {
        return "0";
    }

    if (value && typeof value in CssValidValueKind) {
        if (typeof value === "number") {
            newValue = `${value}${unit}` as CssValue;
        }
        if (typeof value === "string") {
            if (value.split(",").length > 0) {
                const values = value.split(",");
                let val = "";

                values.forEach((item) => {
                    if (parseInt(item) || item === "0") {
                        val += `${item}${unit} `;
                    }
                });

                newValue = val.trim() as CssValue;
            } else if (parseInt(value)) {
                newValue = `${value}${unit}` as CssValue;
            }

            return value;
        }
    } else {
        throw new Error(`Invalid value ${value} ${unit}`);
    }

    return newValue;
};
//[Symbol.toStringTag]: string;
// clear(): void {}

//     delete(key1: CssTarget): boolean {}

//     forEach(
//         callbackfn: (
//             value: CssCollection<string, CssClass>,
//             key: CssTarget,
//             map: Map<CssTarget, CssCollection<string, CssClass>>,
//         ) => void,
//         thisArg?: any,
//     ): void {}

//     get(key: "@global" | "@tablet" | "@phone"): CssCollection<string, CssClass> {
//         throw new Error("Method not implemented.");
//     }

//     has(key: "@global" | "@tablet" | "@phone"): boolean {
//         throw new Error("Method not implemented.");
//     }

//     set(key: "@global" | "@tablet" | "@phone", value: CssCollection<string, CssClass>): this {
//         throw new Error("Method not implemented.");
//     }

//     size: number;

//     [Symbol.iterator](): IterableIterator<["@global" | "@tablet" | "@phone", CssCollection<string, CssClass>]> {
//         throw new Error("Method not implemented.");
//     }

//     entries(): IterableIterator<["@global" | "@tablet" | "@phone", CssCollection<string, CssClass>]> {
//         throw new Error("Method not implemented.");
//     }

//     keys(): IterableIterator<"@global" | "@tablet" | "@phone"> {
//         throw new Error("Method not implemented.");
//     }

//     values(): IterableIterator<CssCollection<string, CssClass>> {
//         throw new Error("Method not implemented.");
//     }
