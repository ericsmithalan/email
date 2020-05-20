import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { DepricatedLinkAttributes, PrimitveElement, Prop } from "../types";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = style({
    ascA: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight,
        textDecoration: "none"
    }
});

const A: FC<AElement> = (props: AElement) => {
    const { ascA } = useClassNames(styles);
    A.defaultProps = {
        className: ascA,
        target: "_blank"
    };

    const mergedProps = useStyle2<AElement>(styles, props, A.defaultProps);

    return <a {...(mergedProps as AElement)} />;
};

export { A };
