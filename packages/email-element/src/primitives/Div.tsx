import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";

export interface IDivElement extends React.HTMLProps<HTMLDivElement>, CssStyleableComponent {}

const styles = css({
    ascDiv: {
        fontSize: 13,
    },
});

const DivElement: FC<IDivElement> = (props: IDivElement) => {
    return <div {...(props as IDivElement)} />;
};

DivElement.defaultProps = {
    className: styles.classNames().ascDiv,
};

const Div = withCss(styles)(DivElement);

export { Div };
