import { GenericCollectionValues } from "../types";
import _ from "underscore";

export class GenericCollection<T> {
    constructor(public values: GenericCollectionValues<T> = {}) {}

    set(key: string, value: T) {
        this.values[key] = value;
    }

    get(key: string): T {
        if (this.has(key)) {
            return this.values[key];
        } else {
            console.error(`key not found ${key}`);
        }
    }

    has(key: string): boolean {
        if (this.values[key]) {
            return true;
        }
        return false;
    }

    merge(values: GenericCollectionValues<T>) {
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
