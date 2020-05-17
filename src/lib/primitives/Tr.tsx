import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { DepricatedTdAttributes, PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyledProps } from "../hooks/useStyledProps";
import { generateId } from "../utils/generateId";
import { useStyle2 } from "../hooks/useStyle2";

export interface TrElement
    extends React.HTMLProps<HTMLTableRowElement>,
        DepricatedTdAttributes,
        PrimitveElement {}

const styles = styleable({
    ascTr: {},
});

const Tr: FC<TrElement> = (props: TrElement) => {
    Tr.defaultProps = {
        uid: generateId(),
        className: styles.classNames.ascTr,
    };

    const { mergedProps } = useStyle2<TrElement>(styles, props, Tr.defaultProps);

    return <tr {...(mergedProps as TrElement)} />;
};

export { Tr };
