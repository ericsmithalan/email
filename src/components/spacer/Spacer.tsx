import React, { FC } from "react";
import styles from "./styles";
import { useStyledProps } from "src/lib";

export interface SpacerElement extends React.HTMLProps<HTMLDivElement> {}

const Spacer: FC<SpacerElement> = (props: SpacerElement) => {
    const mergedProps = useStyledProps(styles, props, Spacer.defaultProps);
    return <div {...(mergedProps as SpacerElement)} />;
};

Spacer.defaultProps = {
    className: styles.classNames.ascSpacer,
};

export { Spacer };
