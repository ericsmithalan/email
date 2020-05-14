import React, { FC } from "react";
import { Style } from "../css-js";
import { DepricatedTdAttributes, PrimitveElement } from "./types";
import { useCommonCss, useMergeStyles } from "../core";

export interface TdElement
    extends React.HTMLProps<HTMLTableCellElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = Style({
    ascTd: {},
});

const Td: FC<TdElement> = (props: TdElement) => {
    const { defaultText } = useCommonCss();

    Td.defaultProps = {
        className: styles.classes.ascTd,
        align: "left",
        mergeCss: [String(defaultText)],
        valign: "top",
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Td.defaultProps);

    return <td {...(rest as TdElement)} />;
};

export { Td };
