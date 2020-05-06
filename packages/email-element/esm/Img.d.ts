import React from "react";
import { DepricatedImageAttributes } from "./types";
export interface IImgElement extends React.HTMLProps<HTMLImageElement>, DepricatedImageAttributes {
}
declare const Img: <T extends React.HTMLProps<HTMLImageElement>>(props: T) => JSX.Element;
export { Img };
//# sourceMappingURL=Img.d.ts.map