import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";

export interface DivElement extends React.HTMLProps<HTMLDivElement>, PrimitveElement {}

const styles = styleable({
    ascDiv: {},
});

const Div: FC<DivElement> = (props: DivElement) => {
    const { defaultText } = useClassNames("@common");

    Div.defaultProps = {
        className: styles.classNames.ascDiv,
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Div.defaultProps);

    return <div {...(rest as DivElement)} />;
};

export { Div };
