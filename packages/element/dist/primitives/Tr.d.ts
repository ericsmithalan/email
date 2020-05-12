import React, { FC } from "react";
import { CssStyleableComponent } from "@email/css";
import { DepricatedTdAttributes } from "../types";
export interface ITrElement extends React.HTMLProps<HTMLTableRowElement>, DepricatedTdAttributes, CssStyleableComponent {
}
declare const Tr: FC<ITrElement>;
export { Tr };
//# sourceMappingURL=Tr.d.ts.map