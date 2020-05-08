import { Collectable, CssClassDefinition, CollectionMap } from "../types";
import _ from "underscore";
import { CssHelpers } from "../helpers/CssHelpers";
import { Assert } from "../helpers/Assert";

export class CssCollection<T extends Collectable> {
    public values: CollectionMap<T> = new Map<string, Map<string, T>>();

    set(id: string, key: string, value: T) {
        const map = this._getMap(id);
        Assert.nullOrUndefined(map, "set()");
        if (!map.has(key)) {
            map.set(key, value);
        }
    }

    get(id: string): Map<string, T> {
        return this.values.get(id);
    }

    getItem(id: string, key: string): T {
        const map = this._getMap(id);
        console.log("map", map);
        return map.get(key);
    }

    merge(values: CollectionMap<T>) {
        Assert.nullOrUndefined(values, "merge()");
        if (!this.isEqualTo(values)) {
            this.values = new Map([
                ...Array.from(this.values.entries()),
                ...Array.from(values.entries()),
            ]);
        }
    }

    isEqualTo(map: Map<string, Map<string, T>>) {
        let testVal;
        if (this.values.size !== map.size) {
            return false;
        }
        for (var [key, val] of this.values) {
            testVal = map.get(key);
            if (testVal !== val || (testVal === undefined && !map.has(key))) {
                return false;
            }
        }
        return true;
    }

    private _getMap(id: string) {
        Assert.nullOrUndefined(id, "_getMap()");

        if (this.values.has(id)) {
            return this.values.get(id);
        } else {
            this.values.set(id, new Map<string, T>());
            return this.values.get(id);
        }
    }

    // private readonly _ids = new GenericCollection<string>();
    // public entities = Map<string, GenericCollection<T>>();
    // public count(): number {
    //     return this.entities.size;
    // }
    // get(key: string): GenericCollection<T> {
    //     return this.entities.get(key);
    // }
    // //@ts-ignore
    // set(key: string, value: T): Map<string, GenericCollection<T>> {
    //     this.mappId(value);
    //     const collection = this.getCollection(key) as GenericCollection<T>;
    //     console.log("collection", collection);
    //     if (collection) {
    //         if (!collection.has(value.id)) {
    //             collection.set(value.id, value);
    //         } else {
    //             console.warn(
    //                 `KeyArrayCollection > add > ${value.id}/${value.className} already exists`,
    //             );
    //         }
    //     } else {
    //         console.warn(`KeyArrayCollection > add > ${collection} invalid`);
    //     }
    //     return this.entities;
    // }
    // addCollection(
    //     items: KeyArrayCollection<CssClassDefinition>,
    // ): Map<string, GenericCollection<T>> {
    //     for (const key in items.entities) {
    //         if (items.entities.hasOwnProperty(key)) {
    //             const collection = this.getCollection(key);
    //             collection.forEach((item) => {
    //                 this.set(item.id, item);
    //             });
    //         }
    //     }
    //     return this.entities;
    // }
    // merge(collection: KeyArrayCollection<T>): Map<string, GenericCollection<T>> {
    //     this.entities.merge(collection.entities);
    //     return this.entities;
    // }
    // getCollection(key: string): GenericCollection<T> {
    //     if (!this.entities.has(key)) {
    //         this.entities.set(key, new GenericCollection<T>());
    //     }
    //     return this.entities.get(key) as GenericCollection<T>;
    // }
    // private mappId(item: T) {
    //     if (!this._ids.has(item.className)) {
    //         this._ids.set(item.className, item.id);
    //     } else {
    //         console.warn(`CssClassCollection > add > className already exists ${item.className}`);
    //     }
    // }
    // add(target: CssTarget, cssClass: CssClassDefinition): void {
    //     guardTarget(target, "CssClassCollection > add");
    //     guardCssClass(cssClass, "CssClassCollection > add");
    //     const collection = this.getTargetCollection(target);
    //     guardClassCollection(collection, cssClass);
    // }
    // getClass(className: string, target: CssTarget): CssClassDefinition | null {
    //     guardTarget(target, "CssClassCollection > getClass");
    //     guardValue(className, "CssClassCollection > getClass");
    //     const collection = this.getTargetCollection(target);
    //     guardClassCollection(collection, "CssClassCollection > getClass");
    //     const id = this._ids.get(className);
    //     if (collection.has(id)) {
    //         collection.get(id);
    //     } else {
    //         console.warn(`CssClassCollection > getClass > ${id} was not found`);
    //         return null;
    //     }
    // }
    // update(target: CssTarget, cssClass: CssClassDefinition): void {
    //     guardTarget(target, "CssClassCollection > update");
    //     guardCssClass(cssClass, "CssClassCollection > update");
    //     const collection = this.getTargetCollection(target);
    //     guardClassCollection(collection, "CssClassCollection > update");
    //     //todo: figure out how to place it
    //     if (collection.has(cssClass.key)) {
    //         const location = collection.getIndex(cssClass.key);
    //         collection.delete(cssClass.key);
    //         collection.set(cssClass.key, cssClass);
    //     } else {
    //         console.warn(`CssClassCollection > add > ${target} ${cssClass} already exists`);
    //     }
    // }
    // public forEach(callback: CallbackFn<string, any>): void {
    //     for (const key in this._items) {
    //         if (this._items.hasOwnProperty(key)) {
    //             const pair = this._items[key];
    //             const ret = callback(key, pair);
    //             if (!ret) {
    //                 return;
    //             }
    //         }
    //     }
    // }
}
