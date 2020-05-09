import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { CssHelpers } from "@email/css";

import { DepricatedTdAttributes } from "../types";

export interface ITrElement extends React.HTMLProps<HTMLTableRowElement>, DepricatedTdAttributes {
    cssid: string;
}

const styles = css({
    ascTr: {},
});

const TrElement: FC<ITrElement> = (props: ITrElement) => {
    return <tr {...(props as ITrElement)} />;
};

TrElement.defaultProps = {
    cssid: CssHelpers.uniqueId(),
    className: styles.classNames.ascTr,
};

const Tr = withCss(styles)(TrElement);

export { Tr };
