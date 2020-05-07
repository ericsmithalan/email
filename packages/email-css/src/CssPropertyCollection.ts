import {
    CssTarget,
    ClassCollectionTuple,
    CallbackFn,
    CssPropertyDefinition,
    PropertyCollection,
} from "./types";
import _ from "underscore";
import { CssCollection } from "./CssCollection";
import { camelize } from "./utils/camelize";
import { CssValue, CssUnit } from "./types";
import { decamelize } from "./utils/camelize";
import { CssValidValueKind } from "./CssValidValueKind";
import {
    guardClassName,
    guardAttributeName,
    guardPropertyCollection,
    guardValue,
    guardTarget,
    guardPropertyDefinition,
} from "./utils/typeGuards";

export class CssPropertyCollection {
    // @ts-ignore
    private _items: ClassCollectionTuple<string, PropertyCollection> = {};

    add(className: string, property: CssPropertyDefinition): void {
        guardClassName(className);
        guardAttributeName(property.key);
        guardValue(property.value);

        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(camelizedName);

        guardPropertyCollection(collection);

        if (!collection.containsKey(property.key)) {
            collection.add(property.key, property);
        } else {
            console.warn(
                `CssPropertyCollection > add > ${className} ${property.key} already exists`,
            );
        }
    }

    getPropertyCollection(className: string): PropertyCollection {
        if (this._items[className]) {
            return this._items[className][1];
        } else {
            this._items[className] = {
                1: new CssCollection<string, CssPropertyDefinition>(),
            };

            return this._items[className][1];
        }
    }

    getProperty(className: string): CssPropertyDefinition | null {
        guardClassName(className);

        const camelizedName = camelize(className);
        const collection = this.getPropertyCollection(className);
        guardPropertyCollection(collection);

        if (collection.containsKey(camelizedName)) {
            collection.get(camelizedName);
        } else {
            console.warn(`CssPropertyCollection > getClass > ${className} was not found`);
            return null;
        }
    }

    update(target: CssTarget, property: CssPropertyDefinition): void {
        guardTarget(target);
        guardPropertyDefinition(property);

        const collection = this.getPropertyCollection(target);
        guardPropertyCollection(collection);

        //todo: figure out how to place it
        if (collection.containsKey(property.key)) {
            const location = collection.getIndex(property.key);
            collection.remove(property.key);
            collection.add(property.key, property);
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
