import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "../../primitives";
import { Style, Css, useStyle, useCommonCss } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

type Alignment = "center" | "left" | "right";
type Size = string | number;

export interface ContainerProps extends Layout<ContainerProps> {
    rowGutter?: number;
    columnGutter?: number;
    gutterLeftContent?: ReactNode;
    gutterRightContent?: ReactNode;
    align?: Alignment;
    width?: Size;
    height?: Size;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    const { defaultText } = useCommonCss();

    const {
        container,
        containerGutterLeft,
        containerContent,
        containerGutterRight,
        containerGutterTop,
        containerGutterBottom,
    } = useStyle(styles, props, Container.defaultProps);

    const { rowGutter, columnGutter, gutterLeftContent, gutterRightContent, ...rest } = props;

    const getRowGutter = (className: string, content: ReactNode = undefined): JSX.Element => {
        if (props.rowGutter > 0 || content) {
            return (
                <Tr>
                    <Td colSpan={3} align="center" className={className}>
                        {content}
                    </Td>
                </Tr>
            );
        }
    };

    const getColumnGutter = (className: string, content: ReactNode = undefined): JSX.Element => {
        if (props.columnGutter > 0 || content) {
            return (
                <Td align="center" className={className}>
                    {content}
                </Td>
            );
        }
    };

    return (
        <Table {...rest} commonCss={defaultText} className={container}>
            {getRowGutter(containerGutterTop)}
            <Tr>
                {getColumnGutter(containerGutterLeft, props.gutterLeftContent)}
                <Td commonCss={defaultText} className={containerContent}>
                    {props.children}
                </Td>
                {getColumnGutter(containerGutterRight, props.gutterRightContent)}
            </Tr>
            {getRowGutter(containerGutterBottom)}
        </Table>
    );
};

Container.defaultProps = {
    align: "center",
    width: 800,
    rowGutter: 0,
};
export { Container };
