import {
    CssValue,
    CssPropertyDefinition,
    ClassCollectionTuple,
    ClassCollection,
    CallbackFn,
    CssClassDefinition,
    CssTarget,
} from "./types";
import _ from "underscore";
import { CssCollection } from "./CssCollection";
import { camelize } from "./utils/camelize";
import { decamelize } from "./utils/camelize";
import { CssPseudoKind } from "./CssPseudoKind";
import { CssAttributesKind } from "./CssAttributesKind";
import { CssPropertyCollection } from "./CssPropertyCollection";

export class CssClassCollection {
    private _items: ClassCollectionTuple<string, CssClassDefinition>[] = [];

    add(target: CssTarget, cssClass: CssClassDefinition): void {
        const collection = this.getTargetCollection(target);

        if (!collection.containsKey(cssClass.key)) {
            collection.add(cssClass.key, cssClass);
        } else {
            console.warn(`CssClassCollection > add > ${target} ${cssClass.key} already exists`);
        }
    }

    getTargetCollection(target: CssTarget): ClassCollection {
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

const getCssProperties = (): CssPropertyCollection => {
    const properties = new CssPropertyCollection();

    if (!this.isPseudo && this.target === "@global") {
        this.properties.forEach((key: string, value: CssValue) => {
            properties[key] = value;
        });
    }

    return properties;
};

//renderCss(this._props.className, this._props.key, this.properties);

const updateProperties = (values: CssPropertyCollection) => {
    values.forEach((key: string, value: CssValue) => {
        const attrKey = key;

        if (key in CssAttributesKind) {
            const property = {
                key: attrKey,
                className: this.className,
                name: attrKey,
                value: values[attrKey] as CssValue,
                css: "",
            };

            this._props.properties.add(attrKey, property);
        } else {
            console.error(`CssClassDefinition > updateProperties > ${key} is not a CssAttribute`);
        }
    });

    this._css = renderCss(this._props.className, this._props.key, this.properties);
};

const renderCss = (className: string, key: string, properties: CssPropertyCollection): string => {
    const css: string[] = [];

    const clsName = classString(key, className);

    properties.forEach((key: string, value: CssPropertyDefinition) => {
        css.push(value.css);
    });

    return classStringTemplate(clsName, css.join(""));
};

const classString = (key: string, className: string): string => {
    let name = key;

    if (key in CssPseudoKind) {
        if (className) {
            name = `${decamelize(className)}${decamelize(key)}`;
        }
    } else {
        name = `${decamelize(className)}`;
    }

    return name;
};

const classStringTemplate = (className: string, properties: string): string => {
    return `.${className}{${properties}}`;
};

//[Symbol.toStringTag]: string;
// clear(): void {}

//     delete(key1: CssTarget): boolean {}

//     forEach(
//         callbackfn: (
//             value: CssCollection<string, CssClass>,
//             key: CssTarget,
//             map: Map<CssTarget, CssCollection<string, CssClass>>,
//         ) => void,
//         thisArg?: any,
//     ): void {}

//     get(key: "@global" | "@tablet" | "@phone"): CssCollection<string, CssClass> {
//         throw new Error("Method not implemented.");
//     }

//     has(key: "@global" | "@tablet" | "@phone"): boolean {
//         throw new Error("Method not implemented.");
//     }

//     set(key: "@global" | "@tablet" | "@phone", value: CssCollection<string, CssClass>): this {
//         throw new Error("Method not implemented.");
//     }

//     size: number;

//     [Symbol.iterator](): IterableIterator<["@global" | "@tablet" | "@phone", CssCollection<string, CssClass>]> {
//         throw new Error("Method not implemented.");
//     }

//     entries(): IterableIterator<["@global" | "@tablet" | "@phone", CssCollection<string, CssClass>]> {
//         throw new Error("Method not implemented.");
//     }

//     keys(): IterableIterator<"@global" | "@tablet" | "@phone"> {
//         throw new Error("Method not implemented.");
//     }

//     values(): IterableIterator<CssCollection<string, CssClass>> {
//         throw new Error("Method not implemented.");
//     }
