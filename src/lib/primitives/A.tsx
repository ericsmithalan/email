import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { DepricatedLinkAttributes, PrimitveElement } from "./types";

export interface AElement
    extends React.HTMLProps<HTMLAnchorElement>,
        PrimitveElement,
        DepricatedLinkAttributes {}

const styles = Style({
    ascA: {},
});

const A: FC<AElement> = (props: AElement) => {
    const { defaultText } = useCommonCss();

    A.defaultProps = {
        className: styles.classes.ascA,
        target: "_blank",
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, A.defaultProps);

    return <a {...(rest as AElement)} />;
};

export { A };
