import { CallbackFn, ClassCollectionTuple, Collectable } from "./types";
import _ from "underscore";

export class CssGenericCollection<K extends string, T extends Collectable> {
    // @ts-ignore
    private _items: ClassCollectionTuple<K, T> = {};
    private _id = "";

    private _count: number = 0;

    public containsKey(key: K): boolean {
        return this.items.hasOwnProperty(key);
    }

    public count(): number {
        return this._count;
    }

    public add(key: K, value: T) {
        if (!this.items.hasOwnProperty(key)) {
            this._count++;
            this._items[value.id] = value;
        } else {
            console.warn(`CssCollection > Add > ${key}/${value} already added`);
        }
    }

    public getIndex(key: K): number {
        if (_.has(this.items, key)) {
            return Object.keys(this.items).indexOf(key);
        }

        return -1;
    }

    public findIn = (property: K, match: any): T => {
        const res = this._find(this.items, property, match);
        return res;
    };

    _find(values: {}, property: K, match: any): T {
        let result = null;

        if (_.isArray(values)) {
            const val = values as any[];

            val.forEach((item) => {
                result = this._find(item, property, match);
                if (result) {
                    return;
                }
            });
        } else {
            for (const key in values) {
                const val = values[key];

                if (_.isEqual(key, property)) {
                    if (_.isEqual(val, match)) {
                        //return parent
                        return (values[key] = { ...values } as T);
                    }
                }

                if (_.isObject(val) || _.isArray(val)) {
                    result = this._find(val, property, match);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    }

    public merge(...collection: CssGenericCollection<K, T>[]): CssGenericCollection<K, T> {
        return Object.assign({}, this.items, ...collection);
    }

    public forEach(callback: CallbackFn<string, any>): void {
        for (const itemKey in this.items) {
            if (this.items.hasOwnProperty(itemKey)) {
                const pair = this.items[itemKey];
                const ret = callback(itemKey as K, pair as T) as T;
                if (!ret) {
                    return;
                }
            }
        }
    }

    public remove(id: string): T {
        var val = this.items[id];
        delete this._items[id];
        this._count--;
        return val;
    }

    public get(id: string): T {
        return this._items[id];
    }

    public keys(): K[] {
        var keySet: K[] = [];

        for (const key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                keySet.push(key as K);
            }
        }

        return keySet;
    }

    public get items(): ClassCollectionTuple<K, T> {
        return this._items;
    }

    public values(): T[] {
        var values: T[] = [];

        for (const key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                values.push(this._items[key]);
            }
        }

        return values;
    }
}
