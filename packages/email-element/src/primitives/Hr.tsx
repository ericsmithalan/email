import React, { FC } from "react";
import { css, withCss } from "@email/css/src";

export interface IHrElement extends React.HTMLProps<HTMLHRElement> {}

const styles = css({
    ascHr: {},
});

const HrElement: FC<IHrElement> = (props: IHrElement) => {
    return <hr {...(props as IHrElement)} />;
};

HrElement.defaultProps = {
    className: styles.classNames().ascHr,
};

const Hr = withCss(styles)(HrElement);

export { Hr };
