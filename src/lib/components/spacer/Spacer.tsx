import React, { FC } from "react";
import styles from "./styles";
import { useMergeStyles } from "src/lib/core";

export interface SpacerElement extends React.HTMLProps<HTMLDivElement> {}

const Spacer: FC<SpacerElement> = (props: SpacerElement) => {
    const mergedProps = useMergeStyles(styles, props, Spacer.defaultProps);
    return <div {...(mergedProps as SpacerElement)} />;
};

Spacer.defaultProps = {
    className: styles.classes.ascSpacer,
};

export { Spacer };
