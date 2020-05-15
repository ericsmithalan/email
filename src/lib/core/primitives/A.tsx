import React, { FC } from "react";
import { style } from "../css-js";
import { DepricatedLinkAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = style({
    ascA: {},
});

const A: FC<AElement> = (props: AElement) => {
    const { defaultText } = useCommonCss();

    A.defaultProps = {
        className: styles.classes.ascA,
        target: "_blank",
        commoncss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useStyledProps(styles, props, A.defaultProps);

    return <a {...(rest as AElement)} />;
};

export { A };
