import { CssAttributesKind } from "../CssAttributesKind";
import { CssPseudoKind } from "../CssPseudoKind";
import { CssTargetKind } from "../CssTargetKind";
import { CssValidValueKind } from "../CssValidValueKind";
import { CssDirtyStyles } from "../types";

export const guardAttributeName = (name: string) => {
    if (name && name in CssAttributesKind) {
        return true;
    } else {
        throw new Error(`invalid property name : ${name}`);
    }
};

export const guardHasKey = (obj: Object, key: string) => {
    if (obj && obj.hasOwnProperty(key)) {
        return true;
    } else {
        throw new Error(`key not in object: ${obj} ${key}`);
    }
};

export const guardPseudo = (pseudo: string) => {
    if (pseudo && pseudo in CssPseudoKind) {
        return true;
    } else {
        throw new Error(`invalid pseudo : ${pseudo}`);
    }
};

export const guardTarget = (target: string) => {
    if (target && target in CssTargetKind) {
        return true;
    } else {
        throw new Error(`invalid target : ${target}`);
    }
};

export const guardClassName = (name: string) => {
    if (name && name.length > 1) {
        return true;
    } else {
        throw new Error(`invalid target : ${name}`);
    }
};

export const guardValue = (value: CssDirtyStyles) => {
    if (value && typeof value in CssValidValueKind) {
        return true;
    } else {
        throw new Error(`invalid target : ${value}`);
    }
};
