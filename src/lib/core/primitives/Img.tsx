import React, { FC } from "react";
import { styleable } from "../css-js/style";
import { DepricatedImageAttributes, PrimitveElement } from "../types/element.types";
import { useCommonCss, useStyledProps } from "..";

export interface ImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        PrimitveElement {}

const styles = styleable({
    ascImg: {},
});

const Img: FC<ImgElement> = (props: ImgElement) => {
    const { defaultText } = useCommonCss();

    Img.defaultProps = {
        className: styles.classNames.ascImg,
        commoncss: [String(defaultText)],
        border: 0,
        alt: "",
        style: {
            width: "100%",
            height: "auto",
            display: "block",
        },
    };

    const { commoncss, ...rest } = useStyledProps(styles, props, Img.defaultProps);
    // @ts-ignore
    return <img {...(rest as ImgElement)} />;
};

export { Img };
