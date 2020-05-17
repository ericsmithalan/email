import React, { FC } from "react";
import styles from "./styles";
import { useStyledProps, useStyle2 } from "src/lib";

export interface SpacerElement extends React.HTMLProps<HTMLDivElement> {}

const Spacer: FC<SpacerElement> = (props: SpacerElement) => {
    const { mergedProps } = useStyle2<SpacerElement>(styles, props, Spacer.defaultProps);
    return <div {...(mergedProps as SpacerElement)} />;
};

Spacer.defaultProps = {
    className: styles.classNames.ascSpacer,
};

export { Spacer };
