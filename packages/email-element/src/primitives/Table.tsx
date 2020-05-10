import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { DepricatedTableAttributes } from "../types";
import { commonFonts } from "../styles/common";
import { CssHelpers } from "@email/css";

export interface ITableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes {}

const styles = css({
    ascTable: {
        ...commonFonts,
    },
});

const TableElement: FC<ITableElement> = (props: ITableElement) => {
    return (
        <table {...(props as ITableElement)}>
            <tbody>{props.children}</tbody>
        </table>
    );
};

TableElement.defaultProps = {
    className: styles.classNames().ascTable,
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%",
    border: 0,
};

const Table = withCss(styles)(TableElement);

export { Table };