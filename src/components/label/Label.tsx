import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle } from "src/lib";

export interface LabelProps extends Layout<LabelProps> {}

const Label: FC<LabelProps> = (props: LabelProps) => {
    const { label } = useStyle(styles, props);

    return (
        <Span {...props} className={label}>
            {props.children}
        </Span>
    );
};

export { Label };
