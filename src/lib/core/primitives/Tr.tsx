import React, { FC } from "react";
import { style } from "../css-js";
import { DepricatedTdAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useMergeStyles } from "..";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = style({
    ascTr: {},
});

const Tr: FC<TrElement> = (props: TrElement) => {
    Tr.defaultProps = {
        className: styles.classes.ascTr,
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Tr.defaultProps);

    return <tr {...(rest as TrElement)} />;
};

export { Tr };
