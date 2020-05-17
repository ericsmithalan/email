import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useCommonCss, useStyle2 } from "src/lib";
import { Label } from "../label/Label";

export interface SignatureProps extends Layout<SignatureProps> {
    name: string;
}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    const { mergedProps, classNames } = useStyle2<SignatureProps>(
        styles,
        props,
        Signature.defaultProps,
    );
    const { caps, bold } = useCommonCss();

    return (
        <Table {...mergedProps} className={classNames.signature}>
            <Tr>
                <Td>
                    <Label commoncss={[caps, bold]}>{props.name}</Label>
                </Td>
            </Tr>
        </Table>
    );
};

export { Signature };
