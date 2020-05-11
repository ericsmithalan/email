import React, { FC, ReactNode } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";
import { Table } from "../primitives/Table";
import { Tr } from "../primitives/Tr";
import { Td } from "../primitives/Td";
import { CssArgs } from "@email/css/src/types";

export interface ThreeColLayoutProps extends CssStyleableComponent {
    maxGutterWidth?: number | string;
    minGutterWidth?: number | string;
    minContentWidth?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    maxHeight?: number | string;
    minHeight?: number | string;
}

const styles = css({
    ascThreeCol: {
        maxWidth: (args: CssArgs<ThreeColLayoutProps>) => args.props.maxWidth,
        minWidth: (args: CssArgs<ThreeColLayoutProps>) => args.props.minWidth,
    },
    ascThreeColLeftGutter: {},
    ascThreeColCenter: {
        fontSize: 200,
    },
    ascThreeColRightGutter: {},
});

const ThreeColLayoutElement: FC<ThreeColLayoutProps> = (props: ThreeColLayoutProps) => {
    return (
        <Table className={styles.classNames().ascThreeCol}>
            <Tr>
                <Td className={styles.classNames().ascThreeColLeftGutter}></Td>
                <Td className={styles.classNames().ascThreeColCenter}>{props.children}</Td>
                <Td className={styles.classNames().ascThreeColRightGutter}></Td>
            </Tr>
        </Table>
    );
};

ThreeColLayoutElement.defaultProps = {
    maxGutterWidth: 200,
    minGutterWidth: 50,
    minContentWidth: 200,
    maxWidth: 600,
    minWidth: 300,
    maxHeight: "auto",
    minHeight: "auto",
};

const ThreeColLayout = withCss(styles)(ThreeColLayoutElement);

export { ThreeColLayout };
