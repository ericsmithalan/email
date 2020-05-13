import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "../../primitives";
import { Style, Css, useStyle, useCommonCss } from "../../css-js";
import { Layout } from "../types";
import styles from "./styles";

type Alignment = "center" | "left" | "right";
type Size = string | number;

export interface ContainerProps extends Layout<ContainerProps> {
    gutter?: number;
    gutterLeftContent?: ReactNode;
    gutterRightContent?: ReactNode;
    align?: Alignment;
    width?: Size;
    height?: Size;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    const { fullWidth, defaultText } = useCommonCss();

    const {
        container,
        containerGutterLeft,
        containerContent,
        containerGutterRight,
        containerGutterTop,
        containerGutterBottom,
    } = useStyle(styles, props, Container.defaultProps);

    const { gutter, ...rest } = props;

    const horizontalGutter = (className: string, content: ReactNode = undefined): JSX.Element => {
        if (props.gutter > 0) {
            return (
                <Tr>
                    <Td colSpan={3} align="center" className={className}>
                        {content && "&nbsp;"}
                    </Td>
                </Tr>
            );
        }
    };

    const verticalGutter = (className: string, content: ReactNode = undefined): JSX.Element => {
        if (props.gutter > 0) {
            return (
                <Td align="center" className={className}>
                    {content && "&nbsp;"}
                </Td>
            );
        }
    };

    return (
        <Table {...rest} commonCss={defaultText} className={container} align="center">
            {horizontalGutter(containerGutterTop)}
            <Tr>
                {verticalGutter(containerGutterLeft, containerGutterLeft)}
                <Td commonCss={defaultText} className={containerContent}>
                    {props.children}
                </Td>
                {verticalGutter(containerGutterRight, containerGutterRight)}
            </Tr>
            {horizontalGutter(containerGutterBottom)}
        </Table>
    );
};

Container.defaultProps = {
    align: "center",
    width: 800,
    gutter: 0,
};
export { Container };
