import { MergeCss } from "./css.types";

export type DepricatedAlign = "center" | "left" | "right";

export interface PrimitveElement extends MergeCss {}

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
