import {
    ClassCollectionTuple,
    ClassCollection,
    CallbackFn,
    CssClassDefinition,
    CssTarget,
} from "./types";
import _ from "underscore";
import { CssCollection } from "./CssCollection";
import { camelize } from "./utils/camelize";
import { guardTarget, guardValue } from "./utils/typeGuards";

export class CssClassCollection {
    //@ts-ignore
    private _items: ClassCollectionTuple<string, CssClassDefinition> = {};

    add(target: CssTarget, cssClass: CssClassDefinition): void {
        guardTarget(target);

        const collection = this.getTargetCollection(target);

        if (!collection.containsKey(cssClass.id)) {
            collection.add(cssClass.id, cssClass);
        } else {
            console.warn(`CssClassCollection > add > ${target} ${cssClass.id} already exists`);
        }
    }

    getTargetCollection(target: CssTarget): ClassCollection {
        guardTarget(target);
        if (this._items[target]) {
            return this._items[target][1];
        } else {
            this._items[target] = {
                1: new CssCollection<string, CssClassDefinition>(),
            };

            return this._items[target][1];
        }
    }

    getClass(className: string, target: CssTarget): CssClassDefinition | null {
        guardTarget(target);
        guardValue(className);

        const camelizedName = camelize(className);
        const collection = this.getTargetCollection(target);

        if (collection.containsKey(camelizedName)) {
            collection.get(camelizedName);
        } else {
            console.warn(`CssClassCollection > getClass > ${className} was not found`);
            return null;
        }
    }

    update(target: CssTarget, cssClass: CssClassDefinition): void {
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
