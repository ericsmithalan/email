import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div } from "../../core/primitives";
import { Layout } from "../types";
import styles from "./styles";
import { useStyle } from "src/lib/core";

export interface SignatureProps extends Layout<SignatureProps> {}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    const { signature } = useStyle(styles, props);

    return (
        <Table {...props} className={signature}>
            <Tr>
                <Td></Td>
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
