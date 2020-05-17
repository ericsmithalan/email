import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, Span } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useStyle2 } from "src/lib";

export interface LabelProps extends Layout<LabelProps> {
    lineBreak?: boolean;
}

const Label: FC<LabelProps> = (props: LabelProps) => {
    const { mergedProps, classNames } = useStyle2<LabelProps>(styles, props, Label.defaultProps);

    const { lineBreak, ...rest } = mergedProps;

    const getLabel = () => {
        if (props.lineBreak) {
            return (
                <Div {...rest} className={classNames.label}>
                    {props.children}
                </Div>
            );
        }

        return (
            <Span {...rest} className={classNames.label}>
                {props.children}
            </Span>
        );
    };

    return getLabel();
};

export { Label };
