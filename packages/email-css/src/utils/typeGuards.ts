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
} from "../types";
import { CssClassCollection } from "../CssClassCollection";

export const guardAttributeName = (name: string, message: string = "") => {
    if (name && name in CssAttributesKind) {
        return true;
    } else {
        throw new Error(`invalid property name : ${name} | ${message}`);
    }
};

export const guardCssClass = (obj: CssClassDefinition, message: string = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        throw new Error(`invalid CssClassDefinition : ${obj} | ${message}`);
    }
};

export const guardCssClassCollection = (obj: CssClassCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        throw new Error(`invalid CssClassDefinition : ${obj} | ${message}`);
    }
};

export const guardClassCollection = (obj: ClassCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        throw new Error(`invalid CssClassDefinition : ${obj} | ${message}`);
    }
};

export const guardPropertyDefinition = (obj: CssPropertyDefinition, message: string = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        throw new Error(`invalid CssClassDefinition : ${obj} | ${message}`);
    }
};

export const guardPropertyCollection = (obj: PropertyCollection, message: string = "") => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        throw new Error(`invalid CssClassDefinition : ${obj} | ${message}`);
    }
};

export const guardHasKey = (obj: Object, key: string, message: string = "") => {
    if (obj && obj.hasOwnProperty(key)) {
        return true;
    } else {
        throw new Error(`key not in object: ${obj} ${key} | ${message}`);
    }
};

export const guardPseudo = (pseudo: string, message: string = "") => {
    if (pseudo && pseudo in CssPseudoKind) {
        return true;
    } else {
        throw new Error(`invalid pseudo : ${pseudo} | ${message}`);
    }
};

export const guardTarget = (target: string, message: string = "") => {
    if (target && target in CssTargetKind) {
        return true;
    } else {
        throw new Error(`invalid target : ${target} | ${message}`);
    }
};

export const guardClassName = (name: string, message: string = "") => {
    if (name && name.length > 1) {
        return true;
    } else {
        throw new Error(`invalid target : ${name} | ${message}`);
    }
};

export const guardValue = (value: CssDirtyStyles, message: string = "") => {
    if (value && typeof value in CssValidValueKind) {
        return true;
    } else {
        throw new Error(`invalid target : ${value} | ${message}`);
    }
};
