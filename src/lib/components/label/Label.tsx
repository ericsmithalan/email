import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle } from "src/lib/core";

export interface LabelProps extends Layout<LabelProps> {}

const Label: FC<LabelProps> = (props: LabelProps) => {
    const { label } = useStyle(styles, props);

    return <Span className={label}>{props.children}</Span>;
};

export { Label };
