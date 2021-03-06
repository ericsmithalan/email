import { FC, ReactNode } from "react";

import { PrimitiveKind } from "../enums/PrimitiveKind";
import { Styleable } from "../types";

export type DepricatedAlign = "center" | "left" | "right";

export type Primitve = keyof typeof PrimitiveKind;

export interface PrimitveElement extends Styleable {}

export type PrimitveSelector = {
    [key in keyof Primitve]: ReactNode;
};

export type DepricatedElementAttributes = {
    width?: number | string;
    height?: number | string;
};

export type DepricatedTableAttributes = {
    align?: DepricatedAlign;
    bgcolor?: string | string;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    border?: number | string;
    background?: string;
};

export type DepricatedLinkAttributes = {
    border?: number | string;
};

export type DepricatedImageAttributes = {
    align?: DepricatedAlign;
    border?: number | string;
    hspace?: number | string;
    vspace?: number | string;
};

export type DepricatedTdAttributes = {
    align?: DepricatedAlign;
    bgcolor?: string;
    nowrap?: string;
    valign?: "top" | "middle" | "bottom" | "baseline";
    background?: string;
};

export type DepricatedTrAttributes = {
    bgcolor?: string;
};

export type DepricatedHrAttributes = {
    align?: string;
};

export type DepricatedBodyAttributes = {
    background?: string;
    bgcolor?: string;
};
