import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { PrimitveElement } from "./types";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = Style({
    ascDiv: {},
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { defaultText } = useCommonCss();

    Div.defaultProps = {
        className: styles.classes.ascDiv,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Div.defaultProps);

    return <div {...(rest as DivElement)} />;
};

export { Div };
