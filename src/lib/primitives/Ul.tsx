import React, { FC } from "react";
import { Style, useMergeStyles, useCommonCss } from "../css-js";
import { PrimitveElement } from "./types";

export interface UlElement extends React.HTMLProps<HTMLUListElement>, PrimitveElement {}

const styles = Style({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const { defaultText } = useCommonCss();

    Ul.defaultProps = {
        className: styles.classes.ascUl,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Ul.defaultProps);
    return <ul {...(rest as UlElement)} />;
};

export { Ul };
