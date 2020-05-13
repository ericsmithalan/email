import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface SpacerElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = Style({
    ascSpacer: {
        fontSize: 0,
        lineHeight: 0,
    },
});

const Spacer: FC<SpacerElement> = (props: SpacerElement) => {
    const { commonCss, ...rest } = useMergeStyles(styles, props, Spacer.defaultProps);
    return <div {...(rest as SpacerElement)} />;
};

Spacer.defaultProps = {
    className: styles.classes.ascSpacer,
};

export { Spacer };
