import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../primitives";
import { Style, Css, useStyle, useCommonCss } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

export interface LabelProps extends Layout<LabelProps> {}

const Label: FC<LabelProps> = (props: LabelProps) => {
    const { defaultText } = useCommonCss();

    const { signature } = useStyle(styles, props);

    return <Span></Span>;
};

export { Label };
