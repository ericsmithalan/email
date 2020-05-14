import React, { FC } from "react";
import { Style, useMergeStyles } from "../../css-js";
import { PrimitveElement } from "../../primitives/types";
import styles from "./styles";

export interface SpacerElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const Spacer: FC<SpacerElement> = (props: SpacerElement) => {
    const mergedProps = useMergeStyles(styles, props, Spacer.defaultProps);
    return <div {...(mergedProps as SpacerElement)} />;
};

Spacer.defaultProps = {
    className: styles.classes.ascSpacer,
};

export { Spacer };
