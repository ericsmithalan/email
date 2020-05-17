import React, { FC } from "react";

import { DepricatedLinkAttributes, PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { styleable } from "../css-js/styleable";
import { useStyle2 } from "../hooks/useStyle2";

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
        commoncss: [defaultText],
    };

    const { mergedProps, ...rest } = useStyle2<AElement>(styles, props, A.defaultProps);

    return <a {...(mergedProps as AElement)} />;
};

export { A };
