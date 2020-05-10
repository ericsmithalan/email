import React, { FC } from "react";
import { css, withCss } from "@email/css";
import { DepricatedImageAttributes } from "../types";

export interface IImgElement extends React.HTMLProps<HTMLImageElement>, DepricatedImageAttributes {}

const styles = css({
    ascImg: {},
});

const ImgElement: FC<IImgElement> = (props: IImgElement) => {
    // @ts-ignore
    return <img {...(props as IImgElement)} />;
};

ImgElement.defaultProps = {
    className: styles.classNames().ascImg,
};

const Img = withCss(styles)(ImgElement);

export { Img };
