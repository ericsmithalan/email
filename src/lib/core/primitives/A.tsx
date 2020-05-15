import React, { FC } from "react";

import { DepricatedLinkAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";
import { styleable } from "../css-js/styleable";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = styleable({
    ascA: {},
});

const A: FC<AElement> = (props: AElement) => {
    const { defaultText } = useCommonCss();

    A.defaultProps = {
        className: styles.classNames.ascA,
        target: "_blank",
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, A.defaultProps);

    return <a {...(rest as AElement)} />;
};

export { A };
