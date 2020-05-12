import React, { FC } from "react";
import { css, useCss } from "@email/css";
import { DepricatedTdAttributes } from "./types";

export interface ITrElement extends React.HTMLProps<HTMLTableRowElement>, DepricatedTdAttributes {}

const styles = css({
    ascTr: {},
});

const Tr: FC<ITrElement> = (props: ITrElement) => {
    const newProps = useCss(styles, props, Tr.defaultProps || {});
    return <tr {...(newProps as ITrElement)} />;
};

Tr.defaultProps = {
    className: styles.classNames.ascTr,
};

export { Tr };
