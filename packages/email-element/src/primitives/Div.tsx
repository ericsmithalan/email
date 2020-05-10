import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { CssHelpers } from "@email/css";

export interface IDivElement extends React.HTMLProps<HTMLDivElement> {}

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
