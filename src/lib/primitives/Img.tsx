import React, { FC } from "react";
import { Style } from "../css-js";
import { DepricatedImageAttributes, PrimitveElement } from "./types";
import { useCommonCss, useMergeStyles } from "../core";

export interface ImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        PrimitveElement {}

const styles = Style({
    ascImg: {},
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    const { defaultText } = useCommonCss();

    Img.defaultProps = {
        className: styles.classes.ascImg,
        mergeCss: [String(defaultText)],
        border: 0,
        alt: "",
        style: {
            width: "100%",
            height: "auto",
            display: "block",
        },
    };

    const { mergeCss, ...rest } = useMergeStyles(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(rest as ImgElement)} />;
};

export { Img };
