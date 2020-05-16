import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";

export interface OlElement extends React.HTMLProps<HTMLOListElement>, PrimitveElement {}

const styles = styleable({
    ascOl: {},
});

const Ol: FC<OlElement> = (props: OlElement) => {
    const { defaultText } = useClassNames("@common");

    Ol.defaultProps = {
        className: styles.classNames.ascOl,
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Ol.defaultProps);
    // @ts-ignore
    return <ol {...(rest as OlElement)} />;
};

export { Ol };
