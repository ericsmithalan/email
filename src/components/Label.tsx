import React, { FC, ReactNode } from "react";

import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Div, Span } from "../lib/primitives";
import { LabelModel } from "../models/LabelModel";

const styles = style({
    label: {}
});

type Props = { children: ReactNode } & LabelModel;

export const Label: FC<Props> = (props: Props) => {
    const { label } = useClassNames(styles);

    Label.defaultProps = {
        className: label
    };

    const mergedProps = useStyle2(styles, props, Label.defaultProps);

    const render = () => {
        if (props.lineBreak) {
            return <Div {...mergedProps}>{props.children}</Div>;
        }
        return <Span {...mergedProps}>{props.children}</Span>;
    };

    return render();
};
