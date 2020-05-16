import React, { FC } from "react";
import { styleable } from "../css-js/styleable";
import { PrimitveElement } from "../types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyledProps } from "../hooks/useStyledProps";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = styleable({
    ascLi: {},
});

const Li: FC<LilElement> = (props: LilElement) => {
    const { defaultText } = useClassNames("@common");

    Li.defaultProps = {
        className: styles.classNames.ascLi,
        commoncss: [defaultText],
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Li.defaultProps);
    return <li {...(rest as LilElement)} />;
};

export { Li };
