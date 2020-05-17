import React, { FC, ReactNode } from "react";
import { Table, Tr, Td } from "../../lib/primitives";
import { Layout, Alignment, Size } from "../types";
import styles from "./styles";
import { useStyle2 } from "src/lib";

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
    const { classNames, mergedProps } = useStyle2<ContainerProps>(
        styles,
        props,
        Container.defaultProps,
    );
    const {
        container,
        containerGutterLeft,
        containerContent,
        containerGutterRight,
        containerGutterTop,
        containerGutterBottom,
    } = classNames;

    const {
        commoncss,
        rowGutter,
        columnGutter,
        gutterLeftContent,
        gutterRightContent,
        ...rest
    } = mergedProps;

    return (
        <Table align="center" {...rest} className={container}>
            {getRowGutter(props, containerGutterTop)}
            <Tr>
                {getColumnGutter(props, containerGutterLeft, props.gutterLeftContent)}
                <Td className={containerContent}>{props.children}</Td>
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
