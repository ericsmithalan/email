import { Collectable, ClassCollectionValues, GenericCollectionValues } from "../types";
import _ from "underscore";

export class CssCollection<T extends Collectable> {
    constructor(public values: ClassCollectionValues<T> = {}) {}

    set(id: string, key: string, value: T) {
        const newValue = {};
        newValue[key] = value;
        this.values[id] = newValue;
    }

    get(id: string): GenericCollectionValues<T> {
        return this.values[id];
    }

    getItem(id: string, key: string): T {
        const collection = this.values[id];
        if (collection) {
            return collection[key];
        }
        return undefined;
    }

    has(id: string): boolean {
        if (this.values[id]) {
            return true;
        }
        return false;
    }

    hasItem(id: string, key: string): boolean {
        if (this.values[id] && this.values[id][key]) {
            return true;
        }
        return false;
    }

    merge(values: ClassCollectionValues<T>) {
        this.values = Object.assign({}, this.values, values);
    }

    count(): number {
        return Object.keys(this.values).length;
    }

    isEmpty(): boolean {
        if (Object.keys(this.values).length > 0) {
            return false;
        }
        return true;
    }

    clear() {
        this.values = {};
    }
}
