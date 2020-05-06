import { CssValue, CssTarget } from "../types";
import _ from "underscore";
import { CssCollection } from "./CssCollection";
import { camelize } from "./camelize";
import { CssClassProperty } from "../CssClassProperty";

interface ICallback<K extends string, CssClass> {
    (key: any, value: any): CssClass;
}

interface IPropertyCollectionTuple {
    0: string;
    1: CssClassProperty;
}

export type CssPropertyType = {
    key: string;
    className: string;
    name: string;
    value: CssValue;
};

type PropertyCollection = CssCollection<string, CssClassProperty>;

export class CssPropertyCollection {
    private _items: IPropertyCollectionTuple[] = [];

    add(className: string, property: CssClassProperty): void {
        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(camelizedName);

        if (!collection.containsKey(property.key)) {
            collection.add(property.key, property);
        } else {
            console.warn(`CssPropertyCollection > add > ${className} ${property.key} already exists`);
        }
    }

    getPropertyCollection(className: string): PropertyCollection {
        if (this._items[className]) {
            return this._items[className][1];
        } else {
            this._items[className] = {
                1: new CssCollection<string, CssClassProperty>(),
            };

            return this._items[className][1];
        }
    }

    getProperty(className: string): CssClassProperty | null {
        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(className);
        if (collection.containsKey(camelizedName)) {
            collection.get(camelizedName);
        } else {
            console.warn(`CssPropertyCollection > getClass > ${className} was not found`);
            return null;
        }
    }

    update(target: CssTarget, property: CssClassProperty): void {
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

    public forEach(callback: ICallback<string, any>): void {
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
