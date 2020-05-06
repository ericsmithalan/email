export type DepricatedAlign = "center" | "left" | "right";

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
} & DepricatedElementAttributes;

export type DepricatedImageAttributes = {
    align?: DepricatedAlign;
    border?: number | string;
    hspace?: number | string;
    vspace?: number | string;
} & DepricatedElementAttributes;

export type DepricatedTdAttributes = {
    align?: DepricatedAlign;
    bgcolor?: string;
    nowrap?: string;
} & DepricatedElementAttributes;

export type DepricatedTrAttributes = {
    bgcolor?: string;
} & DepricatedElementAttributes;

export type DepricatedHrAttributes = {
    align?: string;
} & DepricatedElementAttributes;

export type DepricatedBodyAttributes = {
    background?: string;
    bgcolor?: string;
} & DepricatedElementAttributes;
