import React, { FC, ReactNode } from "react";
import { Table, Tr, Td } from "../../primitives";
import { useStyle, useCommonCss } from "../../css-js";
import { Layout, Alignment, Size } from "../types";
import styles from "./styles";

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

    return (
        <Table {...rest} commonCss={defaultText} className={container}>
            {getRowGutter(props, containerGutterTop)}
            <Tr>
                {getColumnGutter(props, containerGutterLeft, props.gutterLeftContent)}
                <Td commonCss={defaultText} className={containerContent}>
                    {props.children}
                </Td>
                {getColumnGutter(props, containerGutterRight, props.gutterRightContent)}
            </Tr>
            {getRowGutter(props, containerGutterBottom)}
        </Table>
    );
};

const getRowGutter = (
    props: ContainerProps,
    className: string,
    content: ReactNode = undefined,
): JSX.Element => {
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

const getColumnGutter = (
    props: ContainerProps,
    className: string,
    content: ReactNode = undefined,
): JSX.Element => {
    if (props.columnGutter > 0 || content) {
        return (
            <Td align="center" className={className}>
                {content}
            </Td>
        );
    }
};

export { Container };
