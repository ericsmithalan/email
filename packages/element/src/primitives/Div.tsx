import React, { FC } from "react";
import { css, useCss, CssStyle } from "@email/css";

export interface IDivElement extends React.HTMLProps<HTMLDivElement> {}

const styles = css({
    ascDiv: {
        fontSize: 13,
    },
});

const Div: FC<IDivElement> = (props: IDivElement) => {
    const newProps = useCss(styles, props, Div.defaultProps || {});
    return <div {...(newProps as IDivElement)} />;
};

Div.defaultProps = {
    className: styles.classNames.ascDiv,
};

export { Div };
