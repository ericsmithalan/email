import React, { FC } from "react";
import { CssStyleableComponent } from "@email/css";
import { DepricatedTdAttributes } from "../types";
export interface ITdElement extends React.HTMLProps<HTMLTableCellElement>, DepricatedTdAttributes, CssStyleableComponent {
}
declare const Td: FC<ITdElement>;
export { Td };
//# sourceMappingURL=Td.d.ts.map