import React, { FC } from "react";
import { Style } from "../css-js";
import { PrimitveElement } from "./types";
import { useCommonCss, useMergeStyles } from "..";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = Style({
    ascLi: {},
});

const Li: FC<LilElement> = (props: LilElement) => {
    const { defaultText } = useCommonCss();

    Li.defaultProps = {
        className: styles.classes.ascLi,
        mergeCss: [String(defaultText)],
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Li.defaultProps);
    return <li {...(rest as LilElement)} />;
};

export { Li };
