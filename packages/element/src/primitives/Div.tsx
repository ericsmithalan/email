import React, { FC } from "react";
import { css, CssStyleableComponent, useCss, CssStyle } from "@email/css";

export interface IDivElement extends React.HTMLProps<HTMLDivElement>, CssStyleableComponent {}

const styles = css({
    ascDiv: {
        fontSize: 13,
    },
});

const Div: FC<IDivElement> = (props: IDivElement) => {
    const newProps = useCss(styles, Div.defaultProps || {}, props);
    return <div {...(newProps as IDivElement)} />;
};

Div.defaultProps = {
    className: styles.classNames.ascDiv,
};

// const Div = withCss(styles)(DivElement);

export { Div };
