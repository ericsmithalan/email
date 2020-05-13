import React, { FC } from "react";
import { Style, useMergeStyles, Css } from "../css-js";
import { DepricatedBodyAttributes } from "./types";

export interface BodyElement extends React.HTMLProps<HTMLBodyElement>, DepricatedBodyAttributes {}

const styles = Style({
    ascBody: {
        fontSize: (args: Css<any>) => args.theme.fonts.fontDefaultSize,
        width: "100%",
        height: "100%",
        backgroundColor: (args: Css<any>) => args.theme.colors.backgroundColor,
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

const Body: FC<BodyElement> = (props: BodyElement) => {
    const newProps = useMergeStyles(styles, props, Body.defaultProps);
    return <body {...(newProps as BodyElement)} />;
};

Body.defaultProps = {
    className: styles.classes.ascBody,
};

export { Body };
