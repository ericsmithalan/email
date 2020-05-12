import React, { FC } from "react";
import { css, CssStyleableComponent, useCss } from "@email/css";
import { DepricatedImageAttributes } from "../types";

export interface IImgElement
    extends React.HTMLProps<HTMLImageElement>,
        DepricatedImageAttributes,
        CssStyleableComponent {}

const styles = css({
    ascImg: {},
});

const Img: FC<IImgElement> = (props: IImgElement) => {
    const newProps = useCss(styles, Img.defaultProps || {}, props);
    // @ts-ignore
    return <img {...(newProps as IImgElement)} />;
};

Img.defaultProps = {
    className: styles.classNames.ascImg,
};

export { Img };
