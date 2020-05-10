import React, { FC } from "react";
import { css, withCss } from "@email/css/src";
import { DepricatedTdAttributes } from "../types";

export interface ITrElement extends React.HTMLProps<HTMLTableRowElement>, DepricatedTdAttributes {}

const styles = css({
    ascTr: {},
});

const TrElement: FC<ITrElement> = (props: ITrElement) => {
    return <tr {...(props as ITrElement)} />;
};

TrElement.defaultProps = {
    className: styles.classNames().ascTr,
};

const Tr = withCss(styles)(TrElement);

export { Tr };
