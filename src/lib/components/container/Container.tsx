import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "../../primitives";
import { Style, Css, useStyled } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

export interface ContainerProps extends Layout<ContainerProps> {
    gutter: number;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    const {
        containerGutterLeft,
        containerContent,
        containerGutterRight,
        containerGutterTop,
        containerGutterBottom,
    } = useStyled(styles, props);

    return (
        <Table align="center">
            {props.gutter && (
                <Tr>
                    <Td colSpan={3} align="center" className={containerGutterTop}>
                        &nbsp;
                    </Td>
                </Tr>
            )}
            <Tr>
                {props.gutter && (
                    <Td align="center" className={containerGutterLeft}>
                        &nbsp;
                    </Td>
                )}
                <Td className={containerContent}>{props.children}</Td>
                {props.gutter && <Td className={containerGutterRight}>&nbsp;</Td>}
            </Tr>
            {props.gutter && (
                <Tr>
                    <Td colSpan={3} align="center" className={containerGutterBottom}>
                        &nbsp;
                    </Td>
                </Tr>
            )}
        </Table>
    );
};

export { Container };
