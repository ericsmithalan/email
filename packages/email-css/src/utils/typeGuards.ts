import { CssAttributesKind } from "../CssAttributesKind";
import { CssPseudoKind } from "../CssPseudoKind";
import { CssTargetKind } from "../CssTargetKind";
import { CssValidValueKind } from "../CssValidValueKind";
import {
    CssDirtyStyles,
    CssClassDefinition,
    ClassCollection,
    PropertyCollection,
    CssPropertyDefinition,
    GenericCollection,
    Collectable,
} from "../types";
import { CssClassCollection } from "../CssClassCollection";
import { CssPropertyCollection } from "../CssPropertyCollection";
import { CssGenericCollection } from "../CssGenericCollection";

export const guardAttributeName = (name: string, message: string = "") => {
    if (name && name in CssAttributesKind) {
        return true;
    } else {
        console.error(`invalid AttributeName : ${name} | ${message}`);
    }
};

export const guardCssClass = (obj: CssClassDefinition, message: string = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        console.error(`invalid CssClassDefinition : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardCssClassCollection = (obj: CssClassCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        console.error(`invalid CssClassCollection : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardClassCollection = (obj: ClassCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        console.error(`invalid ClassCollection : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardGenericCollection = <K extends string, T extends Collectable>(
    obj: CssGenericCollection<K, T>,
    message: string = "",
) => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        console.error(`invalid CssGenericCollection : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardPropertyDefinition = (obj: CssPropertyDefinition, message: string = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        console.error(`invalid CssPropertyDefinition : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardPropertyCollection = (obj: PropertyCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        console.error(`invalid PropertyCollection : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardCssPropertyCollection = (obj: CssPropertyCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        console.error(`invalid CssPropertyCollection : ${obj} | ${typeof obj} | ${message}`);
    }
};

export const guardHasKey = (obj: Object, key: string, message: string = "") => {
    if (obj && obj.hasOwnProperty(key)) {
        return true;
    } else {
        console.error(`key not in object: ${obj} ${key} | ${typeof obj} | ${message}`);
    }
};

export const guardPseudo = (pseudo: string, message: string = "") => {
    if (pseudo && pseudo in CssPseudoKind) {
        return true;
    } else {
        console.error(`invalid pseudo : ${pseudo} | ${message}`);
    }
};

export const guardTarget = (target: string, message: string = "") => {
    if (target && target in CssTargetKind) {
        return true;
    } else {
        console.error(`invalid target : ${target} | ${message}`);
    }
};

export const guardClassName = (name: string, message: string = "") => {
    if (name in CssTargetKind || name in CssPseudoKind || (!name && name.length > 1)) {
        console.error(`invalid className : ${name} | ${message}`);
        return;
    }
};

export const guardValue = (value: CssDirtyStyles, message: string = "") => {
    if (value && typeof value in CssValidValueKind) {
        return true;
    } else {
        console.error(`invalid value : ${value} | ${typeof value} | ${message}`);
    }
};
