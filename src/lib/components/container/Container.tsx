import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "../../primitives";
import { Style, Css, useStyle } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

type Alignment = "center" | "left" | "right";
type Size = string | number;

export interface ContainerProps extends Layout<ContainerProps> {
    gutter?: number;
    align?: Alignment;
    width?: Size;
    height?: Size;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    const {
        container,
        containerGutterLeft,
        containerContent,
        containerGutterRight,
        containerGutterTop,
        containerGutterBottom,
    } = useStyle(styles, props, Container.defaultProps);

    const { gutter, ...rest } = props;

    return (
        <Table {...rest} className={container} align="center">
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

Container.defaultProps = {
    align: "center",
    width: 800,
    gutter: 0,
};
export { Container };
