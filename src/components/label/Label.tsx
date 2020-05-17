import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useStyle2 } from "src/lib";

export interface LabelProps extends Layout<LabelProps> {}

const Label: FC<LabelProps> = (props: LabelProps) => {
    const { mergedProps, classNames } = useStyle2<LabelProps>(styles, props, Label.defaultProps);

    return (
        <Span {...mergedProps} className={classNames.label}>
            {props.children}
        </Span>
    );
};

export { Label };
