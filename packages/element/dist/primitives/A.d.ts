import React, { FC } from "react";
import { CssStyleableComponent } from "@email/css";
import { DepricatedLinkAttributes } from "../types";
export interface IAElement extends React.HTMLProps<HTMLAnchorElement>, DepricatedLinkAttributes, CssStyleableComponent {
}
declare const A: FC<IAElement>;
export { A };
//# sourceMappingURL=A.d.ts.map