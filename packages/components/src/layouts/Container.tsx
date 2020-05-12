import React, { FC, ReactNode, ComponentProps } from "react";
import { Table, Tr, Td } from "@email/element";
import { css, CssArgs, useCss } from "@email/css";

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
        maxWidth: (args: CssArgs<ContainerProps>) => args.props.gutter,
    },
});

const Container: FC<ContainerProps> = (props: ContainerProps) => {
    useCss(styles, props, {});

    const { gutter, children } = props;
    const { containerGutterLeft, containerContent, containerGutterRight } = styles.classNames;

    return (
        <Table>
            <Tr>
                {gutter && <Td className={containerGutterLeft}></Td>}
                <Td className={containerContent}>{children}</Td>
                {gutter && <Td className={containerGutterRight}></Td>}
            </Tr>
        </Table>
    );
};

export { Container };
