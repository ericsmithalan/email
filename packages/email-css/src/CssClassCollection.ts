import CSS from "csstype";
import { CssValue, CssAttribute, CssTarget } from "./types";
import { CssAttributesKind } from "./CssAttributes";
import { stringHashId } from "./utils/stringHashId";
import { CssClass } from "./CssClass";

import _ from "underscore";
import { CssCollection, ICssCollection } from "./CssCollection";
import { camelize } from "./utils/camelize";

interface ICallback<K extends string, CssClass> {
    (key: any, value: any): CssClass;
}

interface IClassCollectionTuple {
    0: CssTarget;
    1: ClassCollection;
}

type ClassCollection = CssCollection<string, CssClass>;

export class CssClassCollection {
    private _items: IClassCollectionTuple[] = [];

    add(target: CssTarget, cssClass: CssClass): void {
        const collection = this.getTargetCollection(target);

        if (!collection.containsKey(cssClass.key)) {
            collection.add(cssClass.key, cssClass);
        } else {
            console.warn(`CssClassCollection > add > ${target} ${cssClass.key} already exists`);
        }
    }

    getTargetCollection(target: CssTarget): ClassCollection {
        if (this._items[target]) {
            return this._items[target][1];
        } else {
            this._items[target] = {
                1: new CssCollection<string, CssClass>(),
            };

            return this._items[target][1];
        }
    }

    getClass(className: string, target: CssTarget): CssClass | null {
        const camelizedName = camelize(className);
        const collection = this.getTargetCollection(target);
        if (collection.containsKey(camelizedName)) {
            collection.get(camelizedName);
        } else {
            console.warn(`CssClassCollection > getClass > ${className} was not found`);
            return null;
        }
    }

    update(target: CssTarget, cssClass: CssClass): void {
        const collection = this.getTargetCollection(target);

        //todo: figure out how to place it
        if (collection.containsKey(cssClass.key)) {
            const location = collection.getIndex(cssClass.key);
            collection.remove(cssClass.key);
            collection.add(cssClass.key, cssClass);
        } else {
            console.warn(`CssClassCollection > add > ${target} ${cssClass} already exists`);
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
