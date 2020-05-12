import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "@email/element";
import { css, CssArgs } from "@email/css";

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
    containerContent: {},
});

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <Table>
            <Tr>
                {props.gutter && <Td className={styles.classNames.containerGutterLeft}></Td>}
                <Td className={styles.classNames.containerContent}>{props.children}</Td>
                {props.gutter && <Td className={styles.classNames.containerGutterRight}></Td>}
            </Tr>
        </Table>
    );
};

export { Container };
