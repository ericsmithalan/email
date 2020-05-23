import React from "react";

import { Primitive } from "./Primitive";

export interface PrimitiveBlockProps {}
export interface PrimitiveBlockState {}

export class PrimitiveBlock extends Primitive {
    renderBefore = () => {
        return <div></div>;
    };
    renderAfter = () => {
        return <div></div>;
    };

    renderElement = () => {
        return <div></div>;
    };
}
