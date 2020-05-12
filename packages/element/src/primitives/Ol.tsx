import React, { FC } from "react";
import { css, useCss } from "@email/css";

export interface IOlElement extends React.HTMLProps<HTMLOListElement> {}

const styles = css({
    ascOl: {},
});

const Ol: FC<IOlElement> = (props: IOlElement) => {
    const newProps = useCss(styles, props, Ol.defaultProps || {});
    // @ts-ignore
    return <ol {...(newProps as IOlElement)} />;
};

Ol.defaultProps = {
    className: styles.classNames.ascOl,
};

export { Ol };
