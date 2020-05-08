import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "../styles/common";

export interface IDivElement extends React.HTMLProps<HTMLDivElement> {}

const styles = css({
    ascDiv: {
        ...commonFonts,
        fontSize: 15,
    },
});

const DivElement: FC<IDivElement> = (props: IDivElement) => {
    return <div {...(props as IDivElement)} />;
};

DivElement.defaultProps = {
    className: styles.classNames.ascDiv,
    width: 200,
};

const Div = withCss(styles)(DivElement);

export { Div };
