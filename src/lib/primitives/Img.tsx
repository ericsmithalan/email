import React, { FC } from "react";
import { Style, useMergeStyles } from "../css-js";
import { DepricatedImageAttributes, PrimitveElement } from "./types";

export interface ImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        PrimitveElement {}

const styles = Style({
    ascImg: {},
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    const { css, ...rest } = useMergeStyles(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(rest as ImgElement)} />;
};

Img.defaultProps = {
    className: styles.classes.ascImg,
};

export { Img };
