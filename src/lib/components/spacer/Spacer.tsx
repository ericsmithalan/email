import React, { FC } from "react";
import styles from "./styles";
import { useStyledProps } from "src/lib/core";

export interface SpacerElement extends React.HTMLProps<HTMLDivElement> {}

const Spacer: FC<SpacerElement> = (props: SpacerElement) => {
    const mergedProps = useStyledProps(styles, props, Spacer.defaultProps);
    return <div {...(mergedProps as SpacerElement)} />;
};

Spacer.defaultProps = {
    className: styles.classes.ascSpacer,
};

export { Spacer };
