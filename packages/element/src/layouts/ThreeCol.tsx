import React, { FC, ReactNode } from "react";
import { css, CssStyleableComponent, useCss, CssArgs } from "@email/css";
import { Table } from "../primitives/Table";
import { Tr } from "../primitives/Tr";
import { Td } from "../primitives/Td";

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

const ThreeColLayout: FC<ThreeColLayoutProps> = (props: ThreeColLayoutProps) => {
    const newProps = useCss(styles, ThreeColLayout.defaultProps || {}, props);
    return (
        <Table {...newProps} className={styles.classNames.ascThreeCol}>
            <Tr>
                <Td className={styles.classNames.ascThreeColLeftGutter}></Td>
                <Td className={styles.classNames.ascThreeColCenter}>{props.children}</Td>
                <Td className={styles.classNames.ascThreeColRightGutter}></Td>
            </Tr>
        </Table>
    );
};

ThreeColLayout.defaultProps = {
    maxGutterWidth: 200,
    minGutterWidth: 50,
    minContentWidth: 200,
    maxWidth: 600,
    minWidth: 300,
    maxHeight: "auto",
    minHeight: "auto",
};

export { ThreeColLayout };
