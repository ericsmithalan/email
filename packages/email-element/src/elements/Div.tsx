import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "../styles/common";
import { CssHelpers } from "@email/css";

export interface IDivElement extends React.HTMLProps<HTMLDivElement> {
    cssid: string;
}

const styles = css({
    ascDiv: {
        fontSize: 40,
        ":hover": {
            backgroundColor: "yellow",
        },
        "@phone": {
            backgroundColor: "red",
        },
        "@tablet": {
            backgroundColor: "blue",
        },
    },
});

const DivElement: FC<IDivElement> = (props: IDivElement) => {
    return <div {...(props as IDivElement)} />;
};

DivElement.defaultProps = {
    cssid: CssHelpers.uniqueId(),
    className: styles.classNames().ascDiv,
    width: 200,
};

const Div = withCss(styles)(DivElement);

export { Div };
