import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";

export interface IOlElement extends React.HTMLProps<HTMLOListElement>, CssStyleableComponent {}

const styles = css({
    ascOl: {},
});

const Ol: FC<IOlElement> = (props: IOlElement) => {
    const newProps = useCss(styles, Ol.defaultProps || {}, props);
    // @ts-ignore
    return <ol {...(newProps as IOlElement)} />;
};

Ol.defaultProps = {
    className: styles.classNames.ascOl,
};

export { Ol };
