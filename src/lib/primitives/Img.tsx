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
    const { commonCss, ...rest } = useMergeStyles(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(rest as ImgElement)} />;
};
//<img src="https://cdn.website.com/path/to/image.png" width="600" height="" alt="alt_text" border="0" style="width: 100%; max-width: 600px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; display: block;">

Img.defaultProps = {
    className: styles.classes.ascImg,
};

export { Img };
