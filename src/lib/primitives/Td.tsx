import React, { FC } from "react";
import { css, useMergedProps } from "../css-js";
import { DepricatedTdAttributes } from "./types";

export interface TdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes {}

const styles = css({
    ascTd: {
        fontSize: 13,
    },
});

const Td: FC<TdElement> = (props: TdElement) => {
    const newProps = useMergedProps(styles, props, Td.defaultProps);
    return <td {...(newProps as TdElement)} />;
};

Td.defaultProps = {
    className: styles.classes.ascTd,
    align: "left",
};

export { Td };
