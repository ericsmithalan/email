import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";
import { DepricatedTdAttributes } from "../types";

export interface ITrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        CssStyleableComponent {}

const styles = css({
    ascTr: {},
});

const Tr: FC<ITrElement> = (props: ITrElement) => {
    const newProps = useCss(styles, Tr.defaultProps || {}, props);
    return <tr {...(newProps as ITrElement)} />;
};

Tr.defaultProps = {
    className: styles.classNames.ascTr,
};

export { Tr };
