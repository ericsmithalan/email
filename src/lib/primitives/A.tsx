import React, { FC } from "react";

import { DepricatedLinkAttributes, PrimitveElement } from "../types";

import { style } from "../css-js/style";
import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = style({
    ascA: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
});

const A: FC<AElement> = (props: AElement) => {
    A.defaultProps = {
        className: styles.classNames.ascA,
        target: "_blank",
    };

    const { mergedProps, ...rest } = useStyle2<AElement>(styles, props, A.defaultProps);

    return <a {...(mergedProps as AElement)} />;
};

export { A };
