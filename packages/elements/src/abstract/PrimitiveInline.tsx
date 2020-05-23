import React from "react";

import { Primitive } from "./Primitive";

export interface PrimitiveInlineProps {}
export interface PrimitiveInlinetate {}

export class PrimitiveInline extends Primitive {
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
