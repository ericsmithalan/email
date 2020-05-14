import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { DepricatedTdAttributes, PrimitveElement } from "./types";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = Style({
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
