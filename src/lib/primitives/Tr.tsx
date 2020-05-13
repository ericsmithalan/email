import React, { FC } from "react";
import { Style, useMergedProps } from "../css-js";
import { DepricatedTdAttributes } from "./types";

export interface TrElement extends React.HTMLProps<HTMLTableRowElement>, DepricatedTdAttributes {}

const styles = Style({
    ascTr: {},
});

const Tr: FC<TrElement> = (props: TrElement) => {
    const newProps = useMergedProps(styles, props, Tr.defaultProps);
    return <tr {...(newProps as TrElement)} />;
};

Tr.defaultProps = {
    className: styles.classes.ascTr,
};

export { Tr };
