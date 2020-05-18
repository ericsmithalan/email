import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useStyle2 } from "src/lib";
import { Label } from "../label/Label";
import { useCommonCss } from "src/lib/hooks/useCommonCss";

export interface SignatureProps extends Layout<SignatureProps> {
    name: string;
}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    Signature.defaultProps = {
        className: styles.classNames.signature,
    };

    const { classNames, mergedProps } = useStyle2<SignatureProps>(
        styles,
        props,
        Signature.defaultProps,
    );
    const { caps, bold } = useCommonCss();

    return (
        <Table {...mergedProps}>
            <Tr>
                <Td>
                    <Label commoncss={[caps, bold]}>{props.name}</Label>
                </Td>
            </Tr>
        </Table>
    );
};

export { Signature };
