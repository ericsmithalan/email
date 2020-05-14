import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td, Div, A } from "../../primitives";
import { Style, Css, useStyle, useCommonCss } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

export interface ButtonProps extends Layout<ButtonProps> {
    href: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { buttonColumn, buttonLink } = useStyle(styles, props);

    return (
        <Table {...props}>
            <Tr>
                <Td className={buttonColumn}>
                    <A href={props.href} className={buttonLink}>
                        {props.children}
                    </A>
                </Td>
            </Tr>
        </Table>
    );
};

export { Button };
