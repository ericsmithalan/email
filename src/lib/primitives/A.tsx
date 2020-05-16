import React, { FC } from "react";

import { DepricatedLinkAttributes, PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";
import { styleable } from "../css-js/styleable";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = styleable({
    ascA: {},
});

const A: FC<AElement> = (props: AElement) => {
    const { defaultText } = useClassNames("@common");

    A.defaultProps = {
        className: styles.classNames.ascA,
        target: "_blank",
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, A.defaultProps);

    return <a {...(rest as AElement)} />;
};

export { A };
