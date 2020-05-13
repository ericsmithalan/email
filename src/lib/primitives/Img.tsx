import React, { FC } from "react";
import { Style, useMergedProps } from "../css-js";
import { DepricatedImageAttributes } from "./types";

export interface ImgElement extends React.HTMLProps<HTMLImageElement>, DepricatedImageAttributes {}

const styles = Style({
    ascImg: {},
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    const newProps = useMergedProps(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(newProps as ImgElement)} />;
};

Img.defaultProps = {
    className: styles.classes.ascImg,
};

export { Img };
