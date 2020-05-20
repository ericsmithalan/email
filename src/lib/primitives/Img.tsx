import React, { FC } from "react";

import { style } from "../css-js/style";
import { Prop } from "../css-js/types";
import { useClassNames } from "../hooks/useClassNames";
import { useStyle2 } from "../hooks/useStyle2";
import { DepricatedImageAttributes, PrimitveElement } from "../types";

export interface ImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        PrimitveElement {}

const styles = style({
    ascImg: {
        fontFamily: (p: Prop) => p.t.fonts.fontFamily,
        fontSize: (p: Prop) => p.t.fonts.fontDefaultSize,
        color: (p: Prop) => p.t.colors.darkFontColor,
        fontWeight: (p: Prop) => p.t.fonts.normalWeight
    }
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    const { ascImg } = useClassNames(styles);
    let source = props.src;
    Img.defaultProps = {
        className: ascImg,

        border: 0,
        alt: "",
        style: {
            height: "auto",
            display: "block"
        }
    };

    if (!props.src) {
        source = placeholder(props);
    }

    const mergedProps = useStyle2<ImgElement>(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(mergedProps as ImgElement)} src={source} />;
};

const placeholder = (props: ImgElement): string => {
    let width: string | number | undefined = 800;
    let height: string | number | undefined = 300;
    if (!props.width) {
        width = props.width;
    }

    if (!props.height) {
        height = props.height;
    }

    return `https://via.placeholder.com/${width}x${height}`;
};

export { Img };
