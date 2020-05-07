import { CssAttributesKind } from "../enums/CssAttributesKind";
import { CssPseudoKind } from "../enums/CssPseudoKind";
import { CssTargetKind } from "../enums/CssTargetKind";
import { CssValidValueKind } from "../enums/CssValidValueKind";
import {
    CssDirtyStyles,
    CssClassDefinition,
    ClassCollectionType,
    PropertyCollectionType,
    CssPropertyDefinition,
    Collectable,
} from "../types";
import { KeyArrayCollection } from "../collections/KeyArrayCollection";
import { CssPropertyCollection } from "../collections/CssPropertyCollection";
import { GenericCollection } from "../collections/GenericCollection";

const isGuardOn = false;

export const guardAttributeName = (name: string, message: any = "") => {
    if (name && name in CssAttributesKind) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid AttributeName : ${name} | ${message}`);
        }
    }
};

export const guardCssClass = (obj: CssClassDefinition, message: any = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid CssClassDefinition : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardCssClassCollection = <T extends Collectable>(
    obj: KeyArrayCollection<T>,
    message: any = "",
) => {
    if (obj && typeof obj === "object" && obj.count() > 0) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid CssClassCollection : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardClassCollection = (obj: ClassCollectionType, message: any = "") => {
    if (obj && typeof obj === "object" && obj.size > 0) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid ClassCollection : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardGenericCollection = <T extends Collectable>(
    obj: GenericCollection<T>,
    message: any = "",
) => {
    if (obj && typeof obj === "object" && obj.size > 0) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid CssGenericCollection : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardPropertyDefinition = (obj: CssPropertyDefinition, message: any = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid CssPropertyDefinition : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardPropertyCollection = (obj: PropertyCollectionType, message: any = "") => {
    if (obj && typeof obj === "object" && obj.size > 0) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid PropertyCollection : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardCssPropertyCollection = (obj: CssPropertyCollection, message: any = "") => {
    if (obj && typeof obj === "object") {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid CssPropertyCollection : ${obj} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardHasKey = (obj: Object, key: string, message: any = "") => {
    if (obj && obj.hasOwnProperty(key)) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`key not in object: ${obj} ${key} | ${typeof obj} | ${message}`);
        }
    }
};

export const guardPseudo = (pseudo: string, message: any = "") => {
    if (pseudo && pseudo in CssPseudoKind) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid pseudo : ${pseudo} | ${message}`);
        }
    }
};

export const guardTarget = (target: string, message: any = "") => {
    if (target && target in CssTargetKind) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid target : ${target} | ${message}`);
        }
    }
};

export const guardClassName = (name: string, message: any = "") => {
    if (name in CssTargetKind || name in CssPseudoKind || (!name && name.length > 1)) {
        if (isGuardOn) {
            console.error(`invalid className : ${name} | ${message}`);
        }

        return;
    }
};

export const guardValue = (value: CssDirtyStyles, message: any = "") => {
    if (value && typeof value in CssValidValueKind) {
        return true;
    } else {
        if (isGuardOn) {
            console.error(`invalid value : ${value} | ${typeof value} | ${message}`);
        }
    }
};
