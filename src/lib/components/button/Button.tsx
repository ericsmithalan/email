import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, A } from "../../primitives";
import { Layout } from "../types";
import styles from "./styles";

export interface ButtonProps extends Layout<ButtonProps> {
    href: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <Table {...props}>
            <Tr>
                <Td>
                    <A href={props.href}>{props.children}</A>
                </Td>
            </Tr>
        </Table>
    );
};

export { Button };
