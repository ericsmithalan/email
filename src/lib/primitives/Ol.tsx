import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { PrimitveElement } from "./types";

export interface OlElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = Style({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    const { css, ...rest } = useMergeStyles(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(rest as OlElement)} />;
};

Ol.defaultProps = {
    className: styles.classes.ascOl,
};

export { Ol };
