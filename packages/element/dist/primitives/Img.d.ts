import React, { FC } from "react";
import { CssStyleableComponent } from "@email/css";
import { DepricatedImageAttributes } from "../types";
export interface IImgElement extends React.HTMLProps<HTMLImageElement>, DepricatedImageAttributes, CssStyleableComponent {
}
declare const Img: FC<IImgElement>;
export { Img };
//# sourceMappingURL=Img.d.ts.map