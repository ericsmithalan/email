import React, { FC } from "react";
import { css, useMergedProps } from "../css";

export interface ILilElement extends React.HTMLProps<HTMLLIElement> {}

const styles = css({
    ascLi: {},
});

const Li: FC<ILilElement> = (props: ILilElement) => {
    const newProps = useMergedProps(styles, props, Li.defaultProps);
    return <li {...(newProps as ILilElement)} />;
};

Li.defaultProps = {
    className: styles.classNames.ascLi,
};

export { Li };
