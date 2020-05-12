import React, { FC } from "react";
import { CssStyleableComponent } from "@email/css";
import { DepricatedBodyAttributes } from "../types";
export interface IBodyElement extends React.HTMLProps<HTMLBodyElement>, DepricatedBodyAttributes, CssStyleableComponent {
}
declare const Body: FC<IBodyElement>;
export { Body };
//# sourceMappingURL=Body.d.ts.map