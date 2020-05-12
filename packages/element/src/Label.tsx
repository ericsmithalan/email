import React, { FC } from "react";
import { Span } from "./primitives/Span";

type LabelProps = {
    text: string;
};

export const Label = ({ text }: LabelProps) => {
    return <Span>{text}</Span>;
};
