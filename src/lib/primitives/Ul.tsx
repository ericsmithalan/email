import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";

export interface UlElement extends React.HTMLProps<HTMLUListElement>, PrimitveElement {}

const styles = styleable({
    ascUl: {},
});

const Ul: FC<UlElement> = (props: UlElement) => {
    const { defaultText } = useClassNames("@common");

    Ul.defaultProps = {
        className: styles.classNames.ascUl,
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Ul.defaultProps);
    return <ul {...(rest as UlElement)} />;
};

export { Ul };
