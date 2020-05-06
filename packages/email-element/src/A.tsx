import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { commonFonts } from "./styles";

export interface IAElement extends React.HTMLProps<HTMLAnchorElement> {}

const styles = css({
    ascA: {
        ...commonFonts,
        fontSize: 13,
    },
});

const AElement: FC<IAElement> = (props: IAElement) => {
    return <a {...(props as IAElement)} />;
};

AElement.defaultProps = {
    className: styles.classNames.ascA,
};

const A = withCss(styles)(AElement);

export { A };
