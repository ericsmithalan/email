import React, { FC } from "react";
import { css, withCss } from "@email/css/src";

export interface IOlElement extends React.HTMLProps<HTMLOListElement> {}

const styles = css({
    ascOl: {},
});

const OlElement: FC<IOlElement> = (props: IOlElement) => {
    // @ts-ignore
    return <ol {...(props as IOlElement)} />;
};

OlElement.defaultProps = {
    className: styles.classNames().ascOl,
};

const Ol = withCss(styles)(OlElement);

export { Ol };
