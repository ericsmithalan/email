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
        const map = this._getMap(id);
        return map;
    }

    getItem(id: string, key: string): T {
        const map = this._getMap(id);
        return map.get(key);
    }

    merge(values: CollectionMap<T>) {
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
}
