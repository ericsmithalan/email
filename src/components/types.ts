import { ReactNode } from "react";
import { Styleable } from "../lib/types";

export type Alignment = "center" | "left" | "right";
export type Size = string | number;

export interface Layout<T> extends Styleable {
    children?: ReactNode;
}
