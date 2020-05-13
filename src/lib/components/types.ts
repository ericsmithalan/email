import { ReactNode } from "react";

export type Alignment = "center" | "left" | "right";
export type Size = string | number;

export type Layout<T> = {
    children?: ReactNode;
};
