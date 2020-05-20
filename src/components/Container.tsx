import React, { FC, ReactNode } from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Table, Td, Tr } from "../lib/primitives";
import { Prop, Styleable } from "../lib/types";

export interface ContainerProps extends Styleable {
    rowGutter?: number;
    columnGutter?: number;
    gutterLeftContent?: ReactNode;
    gutterRightContent?: ReactNode;
    align?: "center" | "left" | "right";
    width?: string | number;
    height?: string | number;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    const {
        container,
        containerGutterLeft,
        containerContent,
        containerGutterRight,
        containerGutterTop,
        containerGutterBottom
    } = useClassNames(styles);

    const mergedProps = useStyle2<ContainerProps>(styles, props, {
        className: container
    });

    const { rowGutter, columnGutter, gutterLeftContent, gutterRightContent, ...rest } = mergedProps;

    return (
        <Table align="center" {...mergedProps}>
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
    content: ReactNode = undefined
): JSX.Element | null => {
    if ((props.rowGutter && props.rowGutter > 0) || content) {
        return (
            <Tr>
                <Td colSpan={3} align="center" className={className}>
                    {content}
                </Td>
            </Tr>
        );
    }
    return null;
};

const getColumnGutter = (
    props: ContainerProps,
    className: string,
    content: ReactNode = undefined
): JSX.Element | null => {
    if ((props.columnGutter && props.columnGutter > 0) || content) {
        return (
            <Td align="center" className={className}>
                {content}
            </Td>
        );
    }
    return null;
};

const styles = style({
    container: {
        width: 800,
        "@tablet": {
            width: "100%",
            clear: "both"
        },
        "@phone": {
            width: "100%",
            clear: "both"
        }
    },
    containerGutterLeft: {
        width: (p: Prop) => p.p.columnGutter,
        verticalAlign: "top",
        "@tablet": {
            width: (p: Prop) => p.p.columnGutter / 2
        },
        "@phone": {
            width: (p: Prop) => p.p.columnGutter / 4
        }
    },
    containerGutterRight: {
        verticalAlign: "top",
        width: (p: Prop) => p.p.columnGutter,
        "@tablet": {
            width: (p: Prop) => p.p.columnGutter / 2
        },
        "@phone": {
            width: (p: Prop) => p.p.columnGutter / 4
        }
    },
    containerGutterTop: {
        width: (p: Prop) => p.p.rowGutter,
        "@tablet": {
            width: (p: Prop) => p.p.rowGutter / 2
        },
        "@phone": {
            width: (p: Prop) => p.p.rowGutter / 4
        }
    },
    containerGutterBottom: {
        width: (p: Prop) => p.p.rowGutter,
        "@tablet": {
            width: (p: Prop) => p.p.rowGutter / 2
        },
        "@phone": {
            width: (p: Prop) => p.p.rowGutter / 4
        }
    },
    containerContent: {
        padding: 20
    }
});
export { Container };
