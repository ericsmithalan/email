import React, { FC } from "react";
import { Span } from "./primitives/Span";

export interface IText extends React.HTMLProps<HTMLDivElement> {
    children: string;
}

const Text: FC<IText> = (props: IText) => {
    return <Span>{props.children}</Span>;
};

export { Text };
