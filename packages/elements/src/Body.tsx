import React, { FC } from "react";
import { css, useMergedProps, CssArgs } from "@email/css";
import { DepricatedBodyAttributes } from "./types";

export interface IBodyElement extends React.HTMLProps<HTMLBodyElement>, DepricatedBodyAttributes {}

const styles = css({
    ascBody: {
        fontSize: (args: CssArgs<any>) => args.theme.fonts.fontDefaultSize,
        width: "100%",
        height: "100%",
        backgroundColor: (args: CssArgs<any>) => args.theme.colors.backgroundColor,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    },
});

const Body: FC<IBodyElement> = (props: IBodyElement) => {
    const newProps = useMergedProps(styles, props, Body.defaultProps);
    return <body {...(newProps as IBodyElement)} />;
};

Body.defaultProps = {
    className: styles.classNames.ascBody,
};

export { Body };
