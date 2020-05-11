import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";
import { DepricatedTableAttributes } from "../types";

export interface ITableElement
    extends React.HTMLProps<HTMLTableElement>,
        DepricatedTableAttributes,
        CssStyleableComponent {}

const styles = css({
    ascTable: {
        fontSize: 13,
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
