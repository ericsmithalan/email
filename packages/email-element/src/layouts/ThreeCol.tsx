import React, { FC } from "react";
import { css, withCss } from "@email/css/src";
import { DepricatedLinkAttributes } from "../types";
import { Table } from "../primitives/Table";
import { Tr } from "../primitives/Tr";
import { Td } from "../primitives/Td";

export interface IThreeColLayout {}

const styles = css({
    ascThreeCol: {
        fontSize: 13,
    },
});

const ThreeColLayoutElement: FC<IThreeColLayout> = (props: IThreeColLayout) => {
    return (
        <Table>
            <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
        </Table>
    );
};

ThreeColLayoutElement.defaultProps = {
    className: styles.classNames().ascThreeCol,
};

const ThreeColLayout = withCss(styles)(ThreeColLayoutElement);

export { ThreeColLayout };
