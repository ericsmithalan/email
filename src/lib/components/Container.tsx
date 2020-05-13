import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "../primitives";
import { Style, CssArgs, useStyled } from "../css-js";

type Layout<T> = {
    children: ReactNode;
};

interface ContainerProps extends Layout<ContainerProps> {
    gutter: number;
}

const styles = Style({
    containerGutterLeft: {
        backgroundColor: "red",
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        minWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minWidth: 0,
            maxWidth: 0,
        },
    },
    containerGutterRight: {
        backgroundColor: "red",
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        minWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minWidth: 0,
            maxWidth: 0,
        },
    },
    containerGutterTop: {
        backgroundColor: "red",
        maxHeight: (args: CssArgs<ContainerProps>) => args.props.gutter,
        minHeight: (args: CssArgs<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minHeight: 0,
            maxHeight: 0,
        },
    },
    containerGutterBottom: {
        backgroundColor: "red",
        maxHeight: (args: CssArgs<ContainerProps>) => args.props.gutter,
        minHeight: (args: CssArgs<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minHeight: 0,
            maxHeight: 0,
        },
    },
    containerContent: {
        fontSize: 200,
        minWidth: "auto",
        "@tablet": {
            fontSize: 13,
        },
        "@phone": {
            fontSize: 9,
        },
        ":hover": {
            backgroundColor: "blue",
        },
    },
});

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
