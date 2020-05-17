import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useCommonCss } from "src/lib";
import { Label } from "../label/Label";

export interface SignatureProps extends Layout<SignatureProps> {
    name: string;
}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    const { signature, bold } = useStyle(styles, props);
    const { caps } = useCommonCss();

    return (
        <Table {...props} className={signature}>
            <Tr>
                <Td>
                    <Label commoncss={[caps, bold]}>{props.name}</Label>
                </Td>
            </Tr>
        </Table>
    );
};

export { Signature };
