import {
    CssTarget,
    ClassCollectionTuple,
    CallbackFn,
    CssPropertyDefinition,
    PropertyCollectionType,
} from "../types";
import _ from "underscore";
import { GenericCollection } from "./GenericCollection";
import { camelize } from "../utils/camelize";
import { CssValue, CssUnit } from "../types";
import { decamelize } from "../utils/camelize";
import { CssValidValueKind } from "../enums/CssValidValueKind";
import {
    guardClassName,
    guardAttributeName,
    guardPropertyCollection,
    guardValue,
    guardTarget,
    guardPropertyDefinition,
} from "../utils/guards";

export class CssPropertyCollection {
    private _ids = new GenericCollection<string>();
    // @ts-ignore
    private _items: ClassCollectionTuple<string, PropertyCollectionType> = {};
    private _count: number = 0;

    public count(): number {
        return this._count;
    }

    add(className: string, property: CssPropertyDefinition): void {
        guardClassName(className, "CssPropertyCollection > add");
        guardAttributeName(property.key, "CssPropertyCollection > add");
        guardValue(property.value, "CssPropertyCollection > add");

        this._ids.set(className, property.id);

        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(camelizedName);

        guardPropertyCollection(collection, "CssPropertyCollection > add");

        if (!collection.has(property.id)) {
            this._count++;
            collection.set(property.id, property);
        } else {
            console.warn(
                `CssPropertyCollection > add > ${className} ${property.id} already exists`,
            );
        }
    }

    getPropertyCollection(className: string): PropertyCollectionType {
        guardClassName(className);

        const id = this._ids.get(className);

        if (this._items[id]) {
            return this._items[id][1];
        } else {
            this._items[id] = {
                1: new GenericCollection<CssPropertyDefinition>(),
            };

            return this._items[id][1];
        }
    }

    getProperty(className: string): CssPropertyDefinition | null {
        guardClassName(className, "CssPropertyCollection > getProperty");

        const id = this._ids.get(className);

        const collection = this.getPropertyCollection(id);
        guardPropertyCollection(collection, "CssPropertyCollection > getProperty");

        if (collection.has(id)) {
            collection.get(id);
        } else {
            console.warn(`CssPropertyCollection > getClass > ${className} was not found`);
            return null;
        }
    }

    update(target: CssTarget, property: CssPropertyDefinition): void {
        guardTarget(target, "CssPropertyCollection > update");
        guardPropertyDefinition(property, "CssPropertyCollection > update");

        const collection = this.getPropertyCollection(target);
        guardPropertyCollection(collection, "CssPropertyCollection > update");

        //todo: figure out how to place it
        if (collection.has(property.key)) {
            const location = collection.getIndex(property.key);
            collection.delete(property.key);
            collection.set(property.key, property);
        } else {
            console.warn(`CssPropertyCollection > add > ${target} ${property.key} already exists`);
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

// return propertyStringTemplate(this.name, this.value, this._defaultUnit);
const propertyStringTemplate = (name: string, value: string, unit: CssUnit): string => {
    return `${decamelize(name)}:${ensureUnit(value as CssValue, unit)};`;
};

const ensureUnit = (value: CssValue, unit: string): string => {
    let newValue = value;

    if (value.toString() === "0") {
        return "0";
    }

    if (value && typeof value in CssValidValueKind) {
        if (typeof value === "number") {
            newValue = `${value}${unit}` as CssValue;
        }
        if (typeof value === "string") {
            if (value.split(",").length > 0) {
                const values = value.split(",");
                let val = "";

                values.forEach((item) => {
                    if (parseInt(item) || item === "0") {
                        val += `${item}${unit} `;
                    }
                });

                newValue = val.trim() as CssValue;
            } else if (parseInt(value)) {
                newValue = `${value}${unit}` as CssValue;
            }

            return value;
        }
    } else {
        throw new Error(`Invalid value ${value} ${unit}`);
    }

    return newValue;
};
