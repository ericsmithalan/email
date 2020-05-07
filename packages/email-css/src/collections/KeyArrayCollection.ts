import {
    ClassCollectionTuple,
    ClassCollectionType,
    CallbackFn,
    CssClassDefinition,
    CssTarget,
    Collectable,
} from "../types";
import _ from "underscore";
import { GenericCollection } from "./GenericCollection";
import { guardTarget, guardValue, guardCssClass, guardClassCollection } from "../utils/guards";

export class KeyArrayCollection<T extends Collectable> extends Map<string, GenericCollection<T>> {
    private readonly _ids = new GenericCollection<string>();
    //@ts-ignore
    private _count: number = 0;

    public count(): number {
        return this._count;
    }

    //@ts-ignore
    addCollection(key: string, value: T): this {
        this.mappId(value);

        const collection = this.getCollection(key) as GenericCollection<T>;

        if (collection) {
            if (!collection.has(value.id)) {
                this._count++;
                collection.set(value.id, value);
            } else {
                console.warn(
                    `KeyArrayCollection > add > ${value.id}/${value.className} already exists`,
                );
            }
        } else {
            console.warn(`KeyArrayCollection > add > ${collection} invalid`);
        }
        return this;
    }

    getCollection(key: string): GenericCollection<T> {
        if (!this.has(key)) {
            this.set(key, new GenericCollection<T>());
        }
        return this.get(key) as GenericCollection<T>;
    }

    private mappId(item: T) {
        if (!this._ids.has(item.className)) {
            this._ids.set(item.className, item.id);
        } else {
            console.warn(`CssClassCollection > add > className already exists ${item.className}`);
        }
    }

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
