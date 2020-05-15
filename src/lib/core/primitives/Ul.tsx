import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface UlElement extends React.HTMLProps<HTMLUListElement>, PrimitveElement {}

const styles = styleable({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const { defaultText } = useCommonCss();

    Ul.defaultProps = {
        className: styles.classNames.ascUl,
        commoncss: [String(defaultText)],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Ul.defaultProps);
    return <ul {...(rest as UlElement)} />;
};

export { Ul };
