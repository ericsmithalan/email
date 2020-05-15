import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { DepricatedTdAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = styleable({
    ascTr: {},
});

const Tr: FC<TrElement> = (props: TrElement) => {
    Tr.defaultProps = {
        className: styles.classNames.ascTr,
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Tr.defaultProps);

    return <tr {...(rest as TrElement)} />;
};

export { Tr };
