import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div } from "../../lib/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle, useCommonCss } from "src/lib";
import { Label } from "../label/Label";

export interface SignatureProps extends Layout<SignatureProps> {}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    const { signature, bold } = useStyle(styles, props);
    const { caps } = useCommonCss();

    return (
        <Table {...props} className={signature}>
            <Tr>
                <Td>
                    <Label commoncss={[caps, bold]}>Eric Smith</Label>
                    <Label>UX Designer</Label>
                </Td>
            </Tr>
            <Tr>
                <Td>Signature</Td>
            </Tr>
            <Tr>
                <Td>Signature</Td>
            </Tr>
            <Tr>
                <Td>Signature</Td>
            </Tr>
        </Table>
    );
};

export { Signature };
