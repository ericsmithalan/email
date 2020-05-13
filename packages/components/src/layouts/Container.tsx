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
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
    },
    containerGutterRight: {
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
    },
    containerContent: {
        fontSize: 200,
        minWidth: "auto",
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
