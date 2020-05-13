import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "../../primitives";
import { Style, Css, useStyle, useCommonCss } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

export interface SignatureProps extends Layout<SignatureProps> {}

const Signature: FC<SignatureProps> = (props: SignatureProps) => {
    const { defaultText } = useCommonCss();

    const { signature } = useStyle(styles, props);

    return (
        <Table {...props} commonCss={defaultText} className={signature}>
            <Tr>
                <Td commonCss={defaultText}>{props.children}</Td>
            </Tr>
        </Table>
    );
};

export { Signature };
