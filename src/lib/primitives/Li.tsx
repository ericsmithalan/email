import React, { FC } from "react";
import { style } from "../css-js/style";
import { PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface LilElement extends React.HTMLProps<HTMLLIElement>, PrimitveElement {}

const styles = style({
    ascLi: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
    },
});

const Li: FC<LilElement> = (props: LilElement) => {
    Li.defaultProps = {
        className: styles.classNames.ascLi,
    };

    const { mergedProps } = useStyle2<LilElement>(styles, props, Li.defaultProps);
    return <li {...(mergedProps as LilElement)} />;
};

export { Li };
