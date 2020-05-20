import React, { FC } from "react";

import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { style } from "../style";
import { PrimitveElement, Prop } from "../types";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = style({
    ascLi: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Li: FC<LilElement> = (props: LilElement) => {
    const { ascLi } = useClassNames(styles);
    Li.defaultProps = {
        className: ascLi
    };

    const mergedProps = useStyle2<LilElement>(styles, props, Li.defaultProps);
    return <li {...(mergedProps as LilElement)} />;
};

export { Li };
