import { CallbackFn, ClassCollectionTuple, Collectable } from "../types";
import _ from "underscore";

export class GenericCollection<T> extends Map<string, T> {
    public getIndex(key: string): number {
        if (this.entries.hasOwnProperty(key)) {
            return Object.keys(this.entries).indexOf(key);
        }

        return -1;
    }

    public findIn = (property: string, match: any): T => {
        const res = this._find(this.entries, property, match);
        return res;
    };

    private _find(values: {}, property: any, match: any): T {
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

    public merge(...collection: GenericCollection<T>[]): GenericCollection<T> {
        return Object.assign({}, this.entries, ...collection);
    }
}
