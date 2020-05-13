import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "@email/elements";
import { css, CssArgs, useStyled } from "@email/css";

type Layout<T> = {
    children: ReactNode;
};

interface ContainerProps extends Layout<ContainerProps> {
    gutter: number | number[];
}

const styles = css({
    containerGutterLeft: {
        backgroundColor: "red",
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        minWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minWidth: 0,
            width: "auto",
        },
    },
    containerGutterRight: {
        backgroundColor: "red",
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        minWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
        "@tablet": {
            backgroundColor: "yellow",
            minWidth: 0,
            width: "auto",
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
    const { containerGutterLeft, containerContent, containerGutterRight } = useStyled(
        styles,
        props,
    );

    return (
        <Table>
            <Tr>
                {props.gutter && <Td className={containerGutterLeft}></Td>}
                <Td className={containerContent}>{props.children}</Td>
                {props.gutter && <Td className={containerGutterRight}></Td>}
            </Tr>
        </Table>
    );
};

export { Container };
