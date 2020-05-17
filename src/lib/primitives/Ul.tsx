import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface UlElement extends React.HTMLProps<HTMLUListElement>, PrimitveElement {}

const styles = styleable({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const { defaultText } = useCommonCss();

    Ul.defaultProps = {
        className: styles.classNames.ascUl,
        commoncss: [defaultText],
    };

    const { mergedProps } = useStyle2<UlElement>(styles, props, Ul.defaultProps);
    return <ul {...(mergedProps as UlElement)} />;
};

export { Ul };
