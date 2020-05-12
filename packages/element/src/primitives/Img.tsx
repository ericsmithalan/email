import React, { FC } from "react";
import { css, useCss } from "@email/css";
import { DepricatedImageAttributes } from "../types";

export interface IImgElement extends React.HTMLProps<HTMLImageElement>, DepricatedImageAttributes {}

const styles = css({
    ascImg: {},
});

const Img: FC<IImgElement> = (props: IImgElement) => {
    const newProps = useCss(styles, props, Img.defaultProps || {});
    // @ts-ignore
    return <img {...(newProps as IImgElement)} />;
};

Img.defaultProps = {
    className: styles.classNames.ascImg,
};

export { Img };
