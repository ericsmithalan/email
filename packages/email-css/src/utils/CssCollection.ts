import CSS from "csstype";
import { CssValue, CssAttribute } from "../types";
import { CssAttributesKind } from "../CssAttributes";
import { stringHashId } from "./stringHashId";
import _ from "underscore";

interface ICallback<K extends string, T> {
    (key: any, value: any): T;
}

type CssCollectionKeyValue<T> = { [key: string]: T };

export interface ICssCollection<K extends string, T> {
    add: (key: K, value: T) => void;
    containsKey: (key: K) => boolean;
    count: () => number;
    forEach: (callback: ICallback<string, T>) => void;
    findIn: (key: K, match: T) => T;
    get: (key: K) => T;
    keys: () => K[];
    remove: (key: K) => T;
    getIndex: (key: K) => number;
    values: () => T[];
    items: CssCollectionKeyValue<T>;
}

export class CssCollection<K extends string, T> implements ICssCollection<K, T> {
    private _items: CssCollectionKeyValue<T> = {};
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
            this._items[key] = value;
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

    public merge(...collection: CssCollection<K, T>[]): CssCollection<K, T> {
        return Object.assign({}, this.items, ...collection);
    }

    public forEach(callback: ICallback<string, any>): void {
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

    public remove(key: K): T {
        var val = this.items[key];
        delete this._items[key];
        this._count--;
        return val;
    }

    public get(key: K): T {
        return this._items[key];
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

    public get items(): CssCollectionKeyValue<T> {
        return this._items;
    }

    public values(): T[] {
        var values: T[] = [];

        for (const prop in this._items) {
            if (this._items.hasOwnProperty(prop)) {
                values.push(this._items[prop]);
            }
        }

        return values;
    }
}
