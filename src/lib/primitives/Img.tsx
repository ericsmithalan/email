import React, { FC } from "react";
import { style } from "../css-js/style";
import { DepricatedImageAttributes, PrimitveElement } from "../types";
import { useCommonCss } from "../hooks/useCommonCss";
import { useStyle2 } from "../hooks/useStyle2";

export interface ImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        PrimitveElement {}

const styles = style({
    ascImg: {},
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    const { defaultText } = useCommonCss();

    Img.defaultProps = {
        className: styles.classNames.ascImg,
        commoncss: [defaultText],
        border: 0,
        alt: "",
        style: {
            width: "100%",
            height: "auto",
            display: "block",
        },
    };

    const { mergedProps } = useStyle2<ImgElement>(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(mergedProps as ImgElement)} />;
};

export { Img };
