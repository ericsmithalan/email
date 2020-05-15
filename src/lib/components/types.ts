import { ReactNode } from "react";
import { Styleable } from "../core/types/css.types";

export type Alignment = "center" | "left" | "right";
export type Size = string | number;

export interface Layout<T> extends Styleable {
    children?: ReactNode;
}
