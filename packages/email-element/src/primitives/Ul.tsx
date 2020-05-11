import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css/src";

export interface IUlElement extends React.HTMLProps<HTMLUListElement>, CssStyleableComponent {}

const styles = css({
    ascUl: {},
});

const UlElement: FC<IUlElement> = (props: IUlElement) => {
    return <ul {...(props as IUlElement)} />;
};

UlElement.defaultProps = {
    className: styles.classNames.ascUl,
};

const Ul = withCss(styles)(UlElement);

export { Ul };
