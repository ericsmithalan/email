import React, { FC } from "react";
import { css, withCss, CssStyleableComponent } from "@email/css";

export interface IHrElement extends React.HTMLProps<HTMLHRElement>, CssStyleableComponent {}

const styles = css({
    ascHr: {},
});

const HrElement: FC<IHrElement> = (props: IHrElement) => {
    return <hr {...(props as IHrElement)} />;
};

HrElement.defaultProps = {
    className: styles.classNames.ascHr,
};

const Hr = withCss(styles)(HrElement);

export { Hr };
