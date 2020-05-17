import React, { FC } from "react";
import { style } from "../css-js/style";
import { DepricatedImageAttributes, PrimitveElement } from "../types";

import { useStyle2 } from "../hooks/useStyle2";
import { Prop } from "../css-js/types";

export interface ImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        PrimitveElement {}

const styles = style({
    ascImg: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight,
    },
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    Img.defaultProps = {
        className: styles.classNames.ascImg,

        border: 0,
        alt: "",
        style: {
            height: "auto",
            display: "block",
        },
    };

    const { mergedProps } = useStyle2<ImgElement>(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(mergedProps as ImgElement)} />;
};

export { Img };
