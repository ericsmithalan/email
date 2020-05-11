import React, { FC, ReactNode } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";
import { Table } from "../primitives/Table";
import { Tr } from "../primitives/Tr";
import { Td } from "../primitives/Td";

export interface ThreeColLayoutProps extends CssStyleableComponent {
    children: {
        leftCol: ReactNode;
        centerCol: ReactNode;
        rightCol: ReactNode;
    };
}

const styles = css({
    ascThreeCol: {
        fontSize: 13,
    },
    ascThreeColLeft: {
        fontSize: 13,
    },
    ascThreeColCenter: {
        fontSize: 13,
    },
    ascThreeColRight: {
        fontSize: 13,
    },
});

const ThreeColLayoutElement: FC<ThreeColLayoutProps> = (props: ThreeColLayoutProps) => {
    const { leftCol, centerCol, rightCol } = props.children;
    return (
        <Table className={styles.classNames().ascThreeCol}>
            <Tr>
                <Td className={styles.classNames().ascThreeColLeft}>{leftCol}</Td>
                <Td className={styles.classNames().ascThreeColCenter}>{centerCol}</Td>
                <Td className={styles.classNames().ascThreeColRight}>{rightCol}</Td>
            </Tr>
        </Table>
    );
};

const ThreeColLayout = withCss(styles)(ThreeColLayoutElement);

export { ThreeColLayout };
