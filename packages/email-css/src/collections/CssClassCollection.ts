import {
    ClassCollectionTuple,
    ClassCollection,
    CallbackFn,
    CssClassDefinition,
    CssTarget,
} from "../types";
import _ from "underscore";
import { CssGenericCollection } from "./CssGenericCollection";
import { guardTarget, guardValue, guardCssClass, guardClassCollection } from "../utils/typeGuards";

export class CssClassCollection {
    private _ids = new Map<string, string>();
    //@ts-ignore
    private _items: ClassCollectionTuple<string, ClassCollection> = {};
    private _count: number = 0;

    public count(): number {
        return this._count;
    }

    add(target: CssTarget, cssClass: CssClassDefinition): void {
        guardTarget(target, "CssClassCollection > add");
        guardCssClass(cssClass, "CssClassCollection > add");

        const collection = this.getTargetCollection(target);
        guardClassCollection(collection, "CssClassCollection > add");

        this._ids.set(cssClass.className, cssClass.id);

        if (!collection.containsKey(cssClass.id)) {
            this._count++;
            collection.add(cssClass.id, cssClass);
        } else {
            console.warn(`CssClassCollection > add > ${target} ${cssClass.id} already exists`);
        }
    }

    getTargetCollection(target: CssTarget): CssGenericCollection<string, CssClassDefinition> {
        guardTarget(target);

        if (this._items[target]) {
            return this._items[target][1];
        } else {
            this._items[target] = {
                1: new CssGenericCollection<string, CssClassDefinition>(),
            };

            return this._items[target][1];
        }
    }

    getClass(className: string, target: CssTarget): CssClassDefinition | null {
        guardTarget(target, "CssClassCollection > getClass");
        guardValue(className, "CssClassCollection > getClass");

        const collection = this.getTargetCollection(target);
        guardClassCollection(collection, "CssClassCollection > getClass");

        const id = this._ids.get(className);

        if (collection.containsKey(id)) {
            collection.get(id);
        } else {
            console.warn(`CssClassCollection > getClass > ${id} was not found`);
            return null;
        }
    }

    update(target: CssTarget, cssClass: CssClassDefinition): void {
        guardTarget(target, "CssClassCollection > update");
        guardCssClass(cssClass, "CssClassCollection > update");

        const collection = this.getTargetCollection(target);
        guardClassCollection(collection, "CssClassCollection > update");

        //todo: figure out how to place it
        if (collection.containsKey(cssClass.key)) {
            const location = collection.getIndex(cssClass.key);
            collection.remove(cssClass.key);
            collection.add(cssClass.key, cssClass);
        } else {
            console.warn(`CssClassCollection > add > ${target} ${cssClass} already exists`);
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
